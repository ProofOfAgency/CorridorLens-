import { ANCHOR_REGISTRY } from "@/constants/anchors";
import {
  ANCHOR_CORRIDOR_REGISTRY,
  CORRIDOR_REGISTRY,
} from "@/constants/corridors";
import { REVIEWED_LIVE_RATE_SOURCES } from "@/constants/liveRateSources";
import {
  assertCorridorLensConfiguration,
  auditCorridorLensConfiguration,
  type ConfigurationAuditResult,
  type CorridorLensConfigurationInput,
} from "@/lib/config/corridorLensConfiguration";

const CURRENT_CORRIDORLENS_CONFIGURATION = Object.freeze({
  anchors: ANCHOR_REGISTRY,
  corridors: CORRIDOR_REGISTRY,
  anchorCorridorMappings: ANCHOR_CORRIDOR_REGISTRY,
  reviewedLiveRateSources: REVIEWED_LIVE_RATE_SOURCES,
}) satisfies CorridorLensConfigurationInput;

export function auditCurrentCorridorLensConfiguration(): ConfigurationAuditResult {
  return auditCorridorLensConfiguration(CURRENT_CORRIDORLENS_CONFIGURATION);
}

export function assertCurrentCorridorLensConfiguration(): ConfigurationAuditResult {
  return assertCorridorLensConfiguration(CURRENT_CORRIDORLENS_CONFIGURATION);
}
