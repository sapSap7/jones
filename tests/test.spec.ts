import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Name *" }).click();
  await page.getByRole("textbox", { name: "Name *" }).fill("Sapir");
  await page.getByRole("textbox", { name: "Email *" }).click();
  await page.getByRole("textbox", { name: "Email *" }).fill("sapir@gmail.com");
  await page.getByRole("textbox", { name: "Phone *" }).click();
  await page.getByRole("textbox", { name: "Phone *" }).fill("0555555555");
  await page.getByRole("textbox", { name: "Company" }).click();
  await page.getByRole("textbox", { name: "Company" }).fill("Rubin Software");
  await page.getByRole("textbox", { name: "Website" }).click();
  await page
    .getByRole("textbox", { name: "Website" })
    .fill("https://www.rubinssoftware.com");
  await page.getByLabel("Number of Employees").selectOption("11-50");
  await page.getByLabel("Number of Employees").selectOption("11-50");
  await page.screenshot({ path: "test-results/screenshot.png" });
  await page.getByRole("button", { name: "Request a call back" }).click();
  expect(page.url()).toContain("/thank-you");
  console.log("Successfully reached the thank you page after form submission.");
});
