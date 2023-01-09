import {makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';
import SiteService from "../api/SiteService";
import {LoadingState} from "mobx-loading-state";

export class mainStore {
    loading = new LoadingState();
    newsData;
    pagesData;
    status = "initial";

    constructor() {
        makeAutoObservable(this);
        if (typeof window !== 'undefined') {
            makePersistable(this, {
                name: 'mobxStore',
                properties: ['newsData', 'pagesData'],
                storage: window.localStorage
            }).finally();
        }
        this.siteService = new SiteService();

    }

    async getNewsAsync() {
        if (!this.newsData || this.newsData.length === 0) {
        try {
            this.loading.on('newsData');
            const data = await this.siteService.getNews();
            this.loading.off('newsData');
           /* runInAction(() => {*/
                return this.newsData = data;
            /*})*/
        } catch (error) {
            return this.status = "error";
        }
        } else {
            return this.newsData;
        }

    };

    getPagesAsync = async () => {
        if (!this.pagesData || this.pagesData.length === 0) {
        try {
            this.loading.on('pageData');
            const data = await this.siteService.getPages();
            this.loading.off('pageData');
           // runInAction(() => {
                return this.pagesData = data.data;
           // });
        } catch (error) {
            return this.status = "error";
        }
        } else {
              return this.pagesData;
          }
    };
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