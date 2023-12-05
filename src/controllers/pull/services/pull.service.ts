import { AppErrorResponse } from '../../../application/models/app.response'
import puppeteer from 'puppeteer'


class PullService {
  async pullFiveTasks(): Promise<typeof fiveTasks> {
    const browser = await puppeteer.launch()

    const page = await browser.newPage();
  
    await page.goto('https://trello.com/b/QvHVksDa/personal-work-goals')

    const buttonClass = 'oVcaxVSv1L1Ynk.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc'
    const buttonSelector = `.${buttonClass}`
    const buttonExists = await page.$(buttonSelector)


    if (buttonExists != null) {
      await page.click(buttonSelector)
    }

    const fiveTasks = await page.$$eval('[data-testid="card-name"]', (anchors) => anchors.slice(0, 5).map((a) => {
      return a.textContent
    }));

    if (fiveTasks.length < 1) {
      throw new AppErrorResponse({
        statusCode: 404,
        description: 'Not Found',
        name: 'Cannot find tasks',
        isOperational: true,
        code: '005',
    });
    }
  
    await browser.close()

    return fiveTasks
  }

  async pullAllTasks(): Promise<typeof allTasks> {

    const browser = await puppeteer.launch()

    const page = await browser.newPage();
  
    await page.goto('https://trello.com/b/QvHVksDa/personal-work-goals')

    const buttonClass = 'oVcaxVSv1L1Ynk.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc'
    const buttonSelector = `.${buttonClass}`
    const buttonExists = await page.$(buttonSelector)


    if (buttonExists != null) {
      await page.click(buttonSelector)
    }

    const allTasks = await page.$$eval('[data-testid="card-name"]', (anchors) => anchors.map((a) => {
      return a.textContent
    }));

    if (allTasks.length < 1) {
      throw new AppErrorResponse({
        statusCode: 404,
        description: 'Not Found',
        name: 'Cannot find tasks',
        isOperational: true,
        code: '006',
    });
    }
  
    await browser.close()

    return allTasks
  }

  async pullByNumber(number: number): Promise<typeof tasksByNumber> {

    if (number > 25) {
      throw new AppErrorResponse({
        statusCode: 404,
        description: 'Not Found',
        name: 'Cannot request over 25 tasks',
        isOperational: true,
        code: '004',
    });
    }

    if (number < 1) {
      throw new AppErrorResponse({
        statusCode: 404,
        description: 'Not Found',
        name: 'Cannot request less than 1 task',
        isOperational: true,
        code: '008',
    });
    }

    const browser = await puppeteer.launch()

    const page = await browser.newPage();
  
    await page.goto('https://trello.com/b/QvHVksDa/personal-work-goals')

    const buttonClass = 'oVcaxVSv1L1Ynk.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc'
    const buttonSelector = `.${buttonClass}`
    const buttonExists = await page.$(buttonSelector)


    if (buttonExists != null) {
      await page.click(buttonSelector)
    }

    const tasksByNumber = await page.$$eval('[data-testid="card-name"]', (anchors, value) => anchors.slice(0, value).map((a) => {
      return a.textContent
    }), number);

    if (tasksByNumber.length < 1) {
      throw new AppErrorResponse({
        statusCode: 404,
        description: 'Not Found',
        name: 'Cannot find tasks',
        isOperational: true,
        code: '007',
    });
    }
  
    await browser.close()

    return tasksByNumber
  }

}



export const pullService: PullService = new PullService()
