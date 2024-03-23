export interface PageProps {
  activities?: Record<string, any>;
  isDemo?: boolean;
}

export type ShareTextType =
| "twitter"
| "warpcast"
| "telegram"
| "discord"
| "copy";

export type ServiceType = "youtube" | "amazon" | "playstation" | "netflix";

export type ConfigurationType = {
  service: ServiceType,
  limitedAccess?: string,
  sharePersonalInfo?: boolean,
  shareLocation?: boolean,
  shareUsageData?: boolean,
  anonymize?: boolean,
  enableAuditLogs?: boolean,
}