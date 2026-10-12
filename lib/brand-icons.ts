import type { IconType } from "react-icons";
import {
  SiArduino,
  SiDocker,
  SiEspressif,
  SiExpo,
  SiLaravel,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";

/**
 * Maps a stack item's `logo` key to a Simple Icons component.
 *
 * Notes:
 * - `reverb` uses the WebSocket mark, since Laravel Reverb has no brand icon.
 * - `arduino` represents the sensor hardware (PZEM / ultrasonic) as a board.
 * - `n8n` represents the AI automation pipelines.
 */
export const brandIcons: Record<string, IconType> = {
  expo: SiExpo,
  "react-native": SiReact,
  laravel: SiLaravel,
  "node-express": SiNodedotjs,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  sqlite: SiSqlite,
  reverb: SiSocketdotio,
  redis: SiRedis,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  "esp32-firebase": SiEspressif,
  arduino: SiArduino,
  n8n: SiN8N,
  docker: SiDocker,
};

export function getBrandIcon(key?: string): IconType | undefined {
  if (!key) return undefined;
  return brandIcons[key];
}
