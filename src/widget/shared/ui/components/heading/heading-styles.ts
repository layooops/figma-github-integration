import type { HeadingLevel } from './heading.interface';

export const HeadingLevelStyles: Record<HeadingLevel, { fontSize: number }> = {
  one: { fontSize: 16 },
  two: { fontSize: 14 },
  three: { fontSize: 12 },
};
