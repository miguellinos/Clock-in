// Blocks snap to a fixed grid on the day bar.
export const SNAP_MINUTES = 15

const MINUTE_MS = 60_000

/** Rounds a timestamp to the nearest grid step. */
export function snapToGrid(date: Date, stepMinutes = SNAP_MINUTES): Date {
  const step = stepMinutes * MINUTE_MS
  return new Date(Math.round(date.getTime() / step) * step)
}

/** Duration between two timestamps in whole minutes. */
export function durationMinutes(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / MINUTE_MS)
}
