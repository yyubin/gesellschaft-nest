import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class NoticeService {
  async getNewNotice(): Promise<string> {
    const mainUrl = 'https://store.steampowered.com/news/app/1973530';
    const { data } = await axios.get(mainUrl);
    const $ = cheerio.load(data);
    const linkElement = $('div._3yqpPRFLwr6ETVDgLGT37s a').first();
    const detailUrl = linkElement.attr('href');

    if (!detailUrl) {
      return 'No link found';
    }

    const { data: detailData } = await axios.get(detailUrl);
    const $$ = cheerio.load(detailData);
    const contentDiv = $$('div._2orfVuUro8BNFNNhRfGk4n');
    return contentDiv.html() || 'No content found';
  }
}
