import { test, expect, type Page } from '@playwright/test';

test('search and open job by name (async/await only)', async ({ page }) => {
  const jobName = 'Director, Architecture';

  await navigateAndSearch(page);

  const result = await findAndClickJob(page, jobName);

  expect.soft(
    result.found,
    `Job "${jobName}" should be found within ${result.pagesVisited} pages`
  ).toBeTruthy();
});

/* ----------------------- Helpers ----------------------- */

async function navigateAndSearch(page: Page) {
  await test.step('Navigate and search for jobs', async () => {
    await page.goto('https://jobs.fidelity.com/ie/');
    await page.getByRole('button', { name: 'Accept All' }).click();

    await page.locator('.ts-control').click();
    await page.getByRole('listbox', { name: 'Location', exact: true }).click();
    await page.locator('#ql-location-opt-1').click();

    await page.getByRole('searchbox', { name: 'Area of interest:' }).click();
    await page.getByRole('button', { name: 'Search jobs' }).click();

    // Deterministic wait
    await page.getByRole('link', { name: 'Next page' }).waitFor();
  });
}

async function findAndClickJob(
  page: Page,
  jobName: string,
  pageIndex = 1,
  maxPages = 10
): Promise<{ found: boolean; pagesVisited: number }> {

  return await test.step(`Checking results page ${pageIndex}`, async () => {
    const jobLink = page.getByRole('link', { name: jobName, exact: true });

    if (await jobLink.isVisible()) {
      await jobLink.click();
      return { found: true, pagesVisited: pageIndex };
    }

    if (pageIndex >= maxPages) {
      return { found: false, pagesVisited: pageIndex };
    }

    const nextPage = page.getByRole('link', { name: 'Next page' });

    if (!(await nextPage.isVisible())) {
      return { found: false, pagesVisited: pageIndex };
    }

    await nextPage.click();
    await page.waitForTimeout(500); // SPA stabilization

    return await findAndClickJob(
      page,
      jobName,
      pageIndex + 1,
      maxPages
    );
  });
}