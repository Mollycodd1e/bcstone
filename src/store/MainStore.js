import {makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';
import SiteService from "../api/SiteService";
import {LoadingState} from "mobx-loading-state";

let version = require('package.json').version;


export class mainStore {
    loading = new LoadingState();
    version;
    newsData;
    pagesData;
    status = "initial";

    constructor() {
        makeAutoObservable(this);
        if (typeof window !== 'undefined') {
            makePersistable(this, {
                name: 'mobxStore',
                properties: ['version', 'newsData', 'pagesData', 'newsDataUpdateDt', 'pagesDataUpdateDt'],
                storage: window.localStorage
            }).finally(() => {});
        }

        this.siteService = new SiteService();
    }

    async getNewsAsync() {
        if (this.dataExist(this.newsData) !== true || this.newVersion() === true) {
            try {
                this.loading.on('newsData');
                let data = await this.siteService.getNews();
                this.loading.off('newsData');
                /* runInAction(() => {*/
                this.newsData = {...{data: data}, ...{updateDt: Date.now()}};
                return this.newsData.data;
                /*})*/
            } catch (error) {
                console.log('Ошибка при загрузке Новостей!')
                return this.status = "error";
            }
        } else {
            return this.newsData.data;
        }

    };

    getPagesAsync = async () => {
        if (this.dataExist(this.pagesData) !== true || this.newVersion() === true) {
            try {
                this.loading.on('pageData');
                const data = await this.siteService.getPages();
                this.loading.off('pageData');
                // runInAction(() => {
                this.pagesData = {...data, ...{updateDt: Date.now()}};
                return this.pagesData.data;
                // });
            } catch (error) {
                console.log('Ошибка при загрузке Страниц!')
                return this.status = "error";
            }
        } else {
            return this.pagesData.data;
        }
    };

    updTimeCheck(date) {
        const time = 1000 * 60 * 60;
        const checkTime = Date.now() + time;
        return (date < checkTime);
    }

    dataExist(data) {
        if (typeof data !== 'undefined' && this.updTimeCheck(data.updateDt)) {
            return true
        }
    }
    newVersion() {
        if (!this.version || this.version < version) return true;
    }
}

const MainStore = new mainStore();
/*if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e) => {
        if (e.key === 'mobxStore') {
            mainStore.hydrateStore().catch(() => {
            });
        }
    });
}*/
export default MainStore;