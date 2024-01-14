import { test, expect } from '@playwright/test';
import 'dotenv/config';
import LoginPage from '../pages/loginPage'; 
import MainPage from '../pages/mainPage';




// Initialize the LoginPage and MainPage instance outside the test to share it between tests as instance variable
let loginPage: LoginPage;
let mainPage: MainPage;


test.describe('Login Page Testing', () => {
    
    // beforeEach hook to initialize the loginPage instance before each test
    test.beforeEach(async ({ page }) => {
        loginPage = LoginPage.getInstance(page);
        await loginPage.navigate();
        mainPage = MainPage.getInstance(page);
    });

    // After hook to close all instances of the driver.
    test.afterAll(async () => {
        // Close the page instance
        await loginPage.close();
        await mainPage.close();
    });


    // Use environment variables to test the login functionality
    test('Login Test', async ({ page }) => {
        const username = process.env.EMAIL
        const password = process.env.PASSWORD
        

        // Capture console messages
        page.on('console', (message) => {
                if (message.type() === 'error') {
                    console.error(`Error in browser console: ${message.text()}`);
                }
        });


        await page.waitForLoadState('domcontentloaded');
        await loginPage.login(username, password);
        await page.waitForTimeout(5000); // waits for 5 seconds
        // Assert that the Tomer - user - div element exists
        await loginPage.doesTomerDivElementExist();
        await page.waitForTimeout(8000); 

        // Logout
        await loginPage.logout();
        await page.waitForTimeout(2000); 
            
    });

    // Test the song downloading functionality
    test('Download Asset Test', async ({ page }) => {  
          // initial login...
          const username = process.env.EMAIL
          const password = process.env.PASSWORD
          
  
          // Capture console messages
          page.on('console', (message) => {
                  if (message.type() === 'error') {
                      console.error(`Error in browser console: ${message.text()}`);
                  }
          });
  
          await page.waitForLoadState('domcontentloaded');
          await loginPage.login(username, password);
          await page.waitForTimeout(5000); // waits for 5 seconds
          // Assert that the Tomer - user - div element exists
          await loginPage.doesTomerDivElementExist();
          
          // click and navigate to the music tab  
          await mainPage.clickMusicTab();
          await expect(page).toHaveURL('https://artlist.io/royalty-free-music');  
          await page.waitForTimeout(5000);
          
          // download the first song 
          const downloadPromise = page.waitForEvent('download');
          await mainPage.downloadSong();
          const download = await downloadPromise;
          // Assert that the download promise exists
          expect(downloadPromise).toBeDefined();
          
          // Use unknown downloading path for different machines 
          // Log the download path
          console.log('Downloaded path: ', await download.path());

    });

})