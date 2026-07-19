// Typed access to navigation.yml. Edit the YAML to change links;
// this wrapper only supplies the types.
import raw from "./navigation.yml";

export interface NavLink {
  label: string;
  link: string;
}

export interface NavigationConfig {
  main: NavLink[];
  cta: NavLink;
  footer: NavLink[];
}

export const navigation = raw as NavigationConfig;
