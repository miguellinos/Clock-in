import { expect, test } from '@playwright/test'

test('shows the palette and the day bar', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Clock-in' })).toBeVisible()
  await expect(page.getByRole('complementary', { name: 'Palette' })).toBeVisible()
  await expect(page.getByRole('region', { name: 'Tagesleiste' })).toBeVisible()
})
