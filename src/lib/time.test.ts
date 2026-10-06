import { describe, expect, it } from 'vitest'
import { durationMinutes, snapToGrid } from './time'

describe('snapToGrid', () => {
  it('rounds down below the half step', () => {
    expect(snapToGrid(new Date('2026-10-06T09:07:00Z')).toISOString()).toBe(
      '2026-10-06T09:00:00.000Z',
    )
  })

  it('rounds up from the half step', () => {
    expect(snapToGrid(new Date('2026-10-06T09:08:00Z')).toISOString()).toBe(
      '2026-10-06T09:15:00.000Z',
    )
  })
})

describe('durationMinutes', () => {
  it('counts minutes between two times', () => {
    expect(
      durationMinutes(new Date('2026-10-06T09:00:00Z'), new Date('2026-10-06T10:45:00Z')),
    ).toBe(105)
  })
})
