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

test('Image compare example', async ({ page }) => {


  await page.goto('https://danube-webshop.herokuapp.com/');
  // expect(await page.screenshot()).toMatchSnapshot('home-page.png');
  await expect(page).toHaveScreenshot('home-page.png', { 
    fullPage: true,
    mask: [page.getByRole('list')],
  });
})

test('request interception example', async ({ page }) => {
  const responseObject = [ { 
    "id": 1, 
    "title": "The Great Gatsby", 
    "author": "F. Scott Fitzgerald", 
    "genre": "Classic Novel - American", 
    "price": "9.95", 
    "rating": "★★★★☆", 
    "stock": "3" 
  } ]

  await page.route('https://danube-webshop.herokuapp.com/api/books', route => 
    { return route.fulfill({
       contentType: 'application/json',
       status: 200, body: JSON.stringify(responseObject) 
      }); 
    });


  // ✅ Trigger the request
  await page.goto('https://danube-webshop.herokuapp.com/');

  // ✅ Wait for UI to render mocked data
  const bookList = page.locator('div').nth(5); // adjust if needed
  await expect(bookList).toBeVisible();

  // ✅ Stable visual assertion
  await expect(bookList).toHaveScreenshot('home-page-list.png');
});
