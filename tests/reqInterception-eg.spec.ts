import { test, expect } from '@playwright/test';

test('add product to cart and open cart', async ({ page }) => {

  // Block images BEFORE navigation
  await page.route('**/*', route => {
    if (route.request().resourceType() === 'image') {
      return route.abort();
    }
    return route.continue();
  });

  await page.goto('https://sauce-demo.myshopify.com/');

  await page.getByRole('link', { name: 'Catalog' }).click();

  await page.getByRole('link', { name: /Grey jacket/i }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  // Open cart once
  await page.getByRole('link', { name: /My Cart \(1\)/ }).click();

  // Optional assertion
  // await expect(page.getByText('My Cart')).toBeVisible();
});

test('request interception example', async ({ page }) => {

  const responseObject = [
      {
        "id": 1,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic Novel - American",
        "price": "9.95",
        "rating": "★★★★☆",
        "stock": "3"
    
    }
  ]

  await page.route('https://danube-webshop.herokuapp.com/api/books', route => {
    return route.fulfill({
      contentType: 'application/json',
      status: 200,
      body: JSON.stringify(responseObject)
    });
  });

  await page.goto('https://danube-webshop.herokuapp.com/');
})
  