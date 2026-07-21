import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure()?.errorText));

  console.log('Navigating to http://[::1]:5173/contact...');
  try {
    await page.goto('http://[::1]:5173/contact', { waitUntil: 'networkidle2' });
    console.log('Navigation complete.');
  } catch(e) {
    console.error('Goto error', e);
  }
  
  await browser.close();
  console.log('Done.');
})();
