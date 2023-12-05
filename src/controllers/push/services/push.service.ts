import { AppErrorResponse } from '../../../application/models/app.response'
import puppeteer from 'puppeteer'


class PushService {
  async pushFiveTasks(data: any): Promise<string> {

        const arrayData = JSON.parse(data)

        const browser = await puppeteer.launch()

        const page = await browser.newPage();
  
        await page.goto('https://app.todoist.com/')
        await new Promise(r => setTimeout(r, 1000))

        const emailInput = 'element-0'
        const passwordInput = 'element-3'
        const loginButton = '.F9gvIPl.rWfXb_e._8313bd46._7a4dbd5f._95951888._2a3b75a1._8c75067a'
    
        const emailInputFound = await page.$(`#${emailInput}`)
        const passInputFound = await page.$(`#${passwordInput}`)

        if (emailInputFound === null || passInputFound === null) {
            throw new AppErrorResponse({
                statusCode: 404,
                description: 'Not Found',
                name: 'Cannot find email or password input',
                isOperational: true,
                code: '001'
            })
        }

        await page.type(`#${emailInput}`, 'marioreyesdeveloper@gmail.com')
        await page.type(`#${passwordInput}`, 'Jajaja95@')
        
        const buttonExists = await page.$(loginButton)

        if (buttonExists) {
            await page.click(loginButton)
        } else {
            throw new AppErrorResponse({
                statusCode: 404,
                description: 'Not Found',
                name: 'Cannot find login button',
                isOperational: true,
                code: '002'
            })
        }

        await page.waitForSelector('.simple_content', { visible: true })

        const newTaskButton = '.plus_add_button';
        const newTaskBExists = await page.waitForSelector(newTaskButton, { timeout: 1000 });
        
        if (newTaskBExists) {
            await new Promise(r => setTimeout(r, 1000));
            await page.click(newTaskButton);

            try {
               for (let index = 0; index < arrayData.length; index++) {
                await new Promise(r => setTimeout(r, 1000));
                const allPTags = await page.$$('p');
        
                // Ensure there are enough <p> tags
                const secondPTag = allPTags[1];
                const thirdTag = allPTags[2];
                
                await new Promise(r => setTimeout(r, 1000));
                await page.evaluate((p, text) => {
                    p.textContent = text;
                }, secondPTag, 'PushFiveTasks');
        
                await page.evaluate((p, text) => {
                    p.textContent = text;
                }, thirdTag, arrayData[index]);
        
                await page.click('._8313bd46._7a4dbd5f._5e45d59f._2a3b75a1._56a651f6');
                await new Promise(r => setTimeout(r, 500));
               }
            
            } catch (error) {
                console.error('Error during the task processing:', error);
            }
        } else {
            throw new AppErrorResponse({
                statusCode: 404,
                description: 'Not Found',
                name: 'Cannot find new task button',
                isOperational: true,
                code: '003',
            });
        }
    
        await browser.close()

        return 'Tasks added successfully.'
    }

  async pushAllTasks (data: any): Promise<string> {
    const arrayData = JSON.parse(data)

    const browser = await puppeteer.launch()

    const page = await browser.newPage();

    await page.goto('https://app.todoist.com/')
    await new Promise(r => setTimeout(r, 1000))

    const emailInput = 'element-0'
    const passwordInput = 'element-3'
    const loginButton = '.F9gvIPl.rWfXb_e._8313bd46._7a4dbd5f._95951888._2a3b75a1._8c75067a'

    const emailInputFound = await page.$(`#${emailInput}`)
    const passInputFound = await page.$(`#${passwordInput}`)

    if (emailInputFound === null || passInputFound === null) {
        throw new AppErrorResponse({
            statusCode: 404,
            description: 'Not Found',
            name: 'Cannot find email or password input',
            isOperational: true,
            code: '001'
        })
    }

    await page.type(`#${emailInput}`, 'marioreyesdeveloper@gmail.com')
    await page.type(`#${passwordInput}`, 'Jajaja95@')
    
    const buttonExists = await page.$(loginButton)

    if (buttonExists) {
        await page.click(loginButton)
    } else {
        throw new AppErrorResponse({
            statusCode: 404,
            description: 'Not Found',
            name: 'Cannot find login button',
            isOperational: true,
            code: '002'
        })
    }

    await page.waitForSelector('.simple_content', { visible: true })

    const newTaskButton = '.plus_add_button';
    const newTaskBExists = await page.waitForSelector(newTaskButton, { timeout: 1000 });
    
    if (newTaskBExists) {
        await new Promise(r => setTimeout(r, 1000));
        await page.click(newTaskButton);

        try {
           for (let index = 0; index < arrayData.length; index++) {
            await new Promise(r => setTimeout(r, 1000));
            const allPTags = await page.$$('p');
    
            // Ensure there are enough <p> tags
            const secondPTag = allPTags[1];
            const thirdTag = allPTags[2];
            
            await new Promise(r => setTimeout(r, 1000));
            await page.evaluate((p, text) => {
                p.textContent = text;
            }, secondPTag, 'PushAllTasks');
    
            await page.evaluate((p, text) => {
                p.textContent = text;
            }, thirdTag, arrayData[index]);
    
            await page.click('._8313bd46._7a4dbd5f._5e45d59f._2a3b75a1._56a651f6');
            await new Promise(r => setTimeout(r, 500));
           }
        
        } catch (error) {
            console.error('Error during the task processing:', error);
        }
    } else {
        throw new AppErrorResponse({
            statusCode: 404,
            description: 'Not Found',
            name: 'Cannot find new task button',
            isOperational: true,
            code: '003',
        });
    }

      await browser.close()
      
      return 'Tasks added successfully.'

    }
    
  async pushByNumber (data: any): Promise<string> {
        const arrayData = JSON.parse(data)
    
        const browser = await puppeteer.launch()
    
        const page = await browser.newPage();
    
        await page.goto('https://app.todoist.com/')
        await new Promise(r => setTimeout(r, 1000))
    
        const emailInput = 'element-0'
        const passwordInput = 'element-3'
        const loginButton = '.F9gvIPl.rWfXb_e._8313bd46._7a4dbd5f._95951888._2a3b75a1._8c75067a'
    
        const emailInputFound = await page.$(`#${emailInput}`)
        const passInputFound = await page.$(`#${passwordInput}`)
    
        if (emailInputFound === null || passInputFound === null) {
            throw new AppErrorResponse({
                statusCode: 404,
                description: 'Not Found',
                name: 'Cannot find email or password input',
                isOperational: true,
                code: '001'
            })
        }
    
        await page.type(`#${emailInput}`, 'marioreyesdeveloper@gmail.com')
        await page.type(`#${passwordInput}`, 'Jajaja95@')
        
        const buttonExists = await page.$(loginButton)
    
        if (buttonExists) {
            await page.click(loginButton)
        } else {
            throw new AppErrorResponse({
                statusCode: 404,
                description: 'Not Found',
                name: 'Cannot find login button',
                isOperational: true,
                code: '002'
            })
        }
    
        await page.waitForSelector('.simple_content', { visible: true })
    
        const newTaskButton = '.plus_add_button';
        const newTaskBExists = await page.waitForSelector(newTaskButton, { timeout: 1000 });
        
        if (newTaskBExists) {
            await new Promise(r => setTimeout(r, 1000));
            await page.click(newTaskButton);
    
            try {
               for (let index = 0; index < arrayData.length; index++) {
                await new Promise(r => setTimeout(r, 1000));
                const allPTags = await page.$$('p');
        
                // Ensure there are enough <p> tags
                const secondPTag = allPTags[1];
                const thirdTag = allPTags[2];
                
                await new Promise(r => setTimeout(r, 3000));
                await page.evaluate((p, text) => {
                    p.textContent = text;
                }, secondPTag, 'PushByNumber');
        
                await page.evaluate((p, text) => {
                    p.textContent = text;
                }, thirdTag, arrayData[index]);
        
                await page.click('._8313bd46._7a4dbd5f._5e45d59f._2a3b75a1._56a651f6');
                await new Promise(r => setTimeout(r, 500));
               }
            
            } catch (error) {
                console.error('Error during the task processing:', error);
            }
        } else {
            throw new AppErrorResponse({
                statusCode: 404,
                description: 'Not Found',
                name: 'Cannot find new task button',
                isOperational: true,
                code: '003',
            });
        }
    
      await browser.close()
      
      return 'Tasks added successfully.'
    
      }  

}

export const pushService: PushService = new PushService()
