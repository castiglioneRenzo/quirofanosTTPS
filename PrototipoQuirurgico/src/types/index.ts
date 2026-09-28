export type IconName =
  | "grid"
  | "users"
  | "activity"
  | "calendar"
  | "heart"
  | "search"
  | "settings"
  | "bell"
  | "plus"
  | "arrow"
  | "chevron"
  | "menu"
  | "clock"
  | "bed"
  | "clipboard"
  | "sparkles"
  | "close"
  | "check"
  | "user";

export type Tone = "info" | "success" | "warning" | "danger" | "neutral";

export interface Patient {
  name: string;
  dni: string;
  age: string;
  insurance: string;
  service: string;
  diagnosis: string;
  priority: string;
  status: string;
}

export interface NavItem {
  label: string;
  icon: IconName;
  path: string;
}

export type QuickAction = [IconName, string, string, string];
export type OperatingRoom = [string, string, string, string, string];
export type TimelineEntry = [string, string, string, string, string];
export type AdminOption = [string, string, string, IconName];
