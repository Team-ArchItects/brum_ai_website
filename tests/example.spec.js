// @ts-check
import { test, expect } from "@playwright/test";

//Navigate to page and check title to verify
test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("Brum.AI");
});

//test to find more events button and check the page it leads to
test("more events button to events page", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.getByRole("link", { name: "More Events Arrow" }).click();

  await expect(page).toHaveTitle("Brum.AI | Events");
});

//simple user jounrey
test("user loads the page, goes to events page, goes to past events, loads five more, clicks an event", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");

  await page.getByRole("link", { name: "More Events Arrow" }).click();

  await page.getByRole("button", { name: "Past Events" }).click();

  await page.getByRole("button", { name: "Show More" }).click();

  await page.getByRole("button", { name: "Show Less" }).click();

  await page.getByRole("button", { name: "Future Events" }).click();

  await page
    .locator('article:has-text("Future Event Example 2 - Title")')
    .click();
});
