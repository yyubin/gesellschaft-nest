import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class NoticeService {
  async getNewNotice(): Promise<string> {
    try {
      const targetUrl = 'https://store.steampowered.com/news/app/1973530?emclan=103582791473108638&emgid=533217507569304854';
      
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36');

      await page.goto(targetUrl, { waitUntil: 'networkidle2' });

      const content = await page.evaluate(() => {
        const div = document.querySelector('div._32mHvRSmD7AVK9OIOPlaFu');
        return div ? div.innerHTML : 'No content found';
      });

      await browser.close();
      return content;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}
