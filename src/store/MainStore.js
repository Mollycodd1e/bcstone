import {makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';
import SiteService from "../api/SiteService";
import {LoadingState} from "mobx-loading-state";

function lessThanOneHourAgo (date){
    const HOUR = 1000 * 60 * 60;
    const anHourAgo = Date.now() - HOUR;
    return date > anHourAgo;
}
function dataExist (data){
    if( data.length !== 0 || data.updateDt || lessThanOneHourAgo(data.updateDt)){
        return true
    }
    return false
}

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
                properties: ['newsData', 'pagesData','newsDataUpdateDt', 'pagesDataUpdateDt'],
                storage: window.localStorage
            }).finally();
        }
        this.siteService = new SiteService();

    }

    async getNewsAsync() {
        if (!this.newsData || this.newsData.length === 0) {
        try {
            this.loading.on('newsData');
            let data = await this.siteService.getNews();
            this.loading.off('newsData');
            /* runInAction(() => {*/
                this.newsData = {...{data: data}, ...{updateDt: new Date()}};
                return this.newsData.data;
            /*})*/
        } catch (error) {
            return this.status = "error";
        }
        } else {
            return this.newsData.data;
        }

    };

    getPagesAsync = async () => {
        if (dataExist(this.pagesData)) {
        try {
            this.loading.on('pageData');
            const data = await this.siteService.getPages();
            this.loading.off('pageData');
           // runInAction(() => {
            this.pagesData = {...data, ...{updateDt: new Date()}};
            return this.pagesData;
           // });
        } catch (error) {
            return this.status = "error";
        }
        } else {
              return this.pagesData.data;
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