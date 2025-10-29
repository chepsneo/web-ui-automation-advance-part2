import { Builder } from 'selenium-webdriver';
import PageLogin from '../pages/page_login.js';
import fs from 'fs';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

describe('Login Test with Visual Validation', function () {
  it('should login and match visual baseline', async function () {
    this.timeout(10000); // Tambah timeout agar tidak gagal

    const driver = await new Builder().forBrowser('chrome').build();

    try {
      await driver.get('https://www.saucedemo.com/');

      const inputUsername = await driver.findElement(PageLogin.inputUsername);
      const inputPassword = await driver.findElement(PageLogin.inputPassword);
      const buttonLogin = await driver.findElement(PageLogin.buttonLogin);

      await inputUsername.sendKeys('standard_user');
      await inputPassword.sendKeys('secret_sauce');
      await buttonLogin.click();

      // Ambil screenshot setelah login
      const ss = await driver.takeScreenshot();
      fs.writeFileSync('./screenshots/current.png', Buffer.from(ss, 'base64'));

      // Buat baseline jika belum ada
      if (!fs.existsSync('./screenshots/baseline.png')) {
        fs.copyFileSync('./screenshots/current.png', './screenshots/baseline.png');
      }

      // Bandingkan current vs baseline
      const img1 = PNG.sync.read(fs.readFileSync('./screenshots/baseline.png'));
      const img2 = PNG.sync.read(fs.readFileSync('./screenshots/current.png'));
      const { width, height } = img1;
      const diff = new PNG({ width, height });

      const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });
      fs.writeFileSync('./screenshots/diff.png', PNG.sync.write(diff));

      if (numDiffPixels > 0) {
        throw new Error(`Visual test failed: ${numDiffPixels} pixels differ`);
      }
    } finally {
      await driver.quit();
    }
  });
});