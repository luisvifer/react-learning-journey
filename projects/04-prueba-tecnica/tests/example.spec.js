// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:4000'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('app shows random fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  // const image = await page.getByRole('img').first()
  const image = await page.locator('.random-img')
  const textContent = await text.textContent()

  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
