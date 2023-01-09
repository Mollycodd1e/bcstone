export default class SiteService {

    getNews = async (urlParams) => {
        const options = {
            method: 'GET',
        }
        const request = new Request('https://stonehedge.ru/api/landing-news/bcstone', options);
        const response = await fetch(request);
        return response.json();
    }

    getPages = async (urlParams) => {
        const options = {
            method: "GET",
            headers: {
                'site-slug': 'stone',
                'Content-Type': 'application/json'
            }
        }
        const request = new Request('https://satellites.stonehedge.ru/api/pages', options);
        const response = await fetch(request);
        return response.json();
    }
}
