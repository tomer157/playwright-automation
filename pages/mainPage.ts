import { expect, type Locator, type Page } from '@playwright/test';
import 'dotenv/config';

// POM For the artlist main page
class MainPage {
    private static instance: MainPage | null = null;
    private readonly page: Page;
    musicTab: Locator;
    firstSong: Locator;
    firstSongPlay: Locator;
    firstSongPause: Locator;
    firstSongDownload: Locator;
    mp3: Locator;
   

    private constructor(page: Page) {
        this.page = page;
        this.musicTab = page.getByRole('link', { name: 'Music', exact: true });
        this.firstSongPlay = page.getByRole('cell', { name: 'play Forzisimo Adrián' });
        this.firstSongPause = page.getByLabel('pause', { exact: true });
        this.firstSongDownload = page.getByRole('row', { name: 'play Forzisimo Adrián' }).getByLabel('Download');
        this.mp3 = page.getByLabel('mp3 download');
    }

    static getInstance(page: Page): MainPage {
        if (!MainPage.instance) {
            // Use a Singleton pattern
            MainPage.instance = new MainPage(page);
        }
        return MainPage.instance;
    }

    

    async clickMusicTab(){
        await this.musicTab.click();
        
    }

    async playFirstSong(){
        await this.firstSongPlay.click();
    }

    async pauseFirstSong(){
        await this.firstSongPause.click();
    }

    async downloadSong(){
        await this.firstSongDownload.click();
        await this.mp3.click();
    }

    async close() {
        await this.page.close();
    }


}   


export default MainPage;