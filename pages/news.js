import {useEffect, useRef, useState} from "react";
import {useRouter} from 'next/router'

import classes from './styleNews.module.scss';
import popupClasses from "../src/sections/s_Popup/style.module.scss";
import {S_MenuC} from "../src/sections/s_MenuC";
import {C_FullForm} from "@/components/c_FullForm";
import {S_Popup} from "../src/sections/s_Popup";
import classNames from 'classnames';
import MainStore from "../src/store/MainStore";
import {S_Menu} from "../src/sections/s_Menu";

const News = ({id}) => {
    const router = useRouter();

    const [newsData, setNewsData] = useState([]);
    const [shownNews, setShownNews] = useState(0);
    const [allTags, setAllTags] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {


        let mounted = true;
        MainStore.getPagesAsync().then(r => {
            if (mounted) {
                //setPageData(r.find(x => x.id === 2))
            }
        })
        MainStore.getNewsAsync().then(r => {
            if (mounted) {
                setNewsData(r)
            }
        })
        return () => mounted = false;
    }, [])



    const filteredNews = (news, filtersArr) => {
        const newNews = news.filter((el) => {
            const {tags} = el;
            const tagsSet = new Set(tags);
            const filterArrSet = new Set(filtersArr);
            const intersection = new Set([...tagsSet].filter(x => filterArrSet.has(x)));
            return intersection.size !== 0 || filterArrSet.size === 0;
        });

        if (newNews.length === 0) {
            return news;
        }

        return newNews;
    }

    const [isPopupClose, setIsPopupClose] = useState(true);

    useEffect(() => {
        newsData?.forEach((el) => {
            setAllTags((prev) => [...prev, ...el.tags]);
        })

        if (router.query.id) {
            setFilters([router.query.id]);
        }
        // установить новость по id в адресной строке
        filteredNews(newsData, filters)?.forEach((el, i) => {
            if (router.query.id === el.id.toString()) {
                setShownNews(i)
            }
        })
    }, [newsData]);

    return (
        <>

            {/*
                        <div className={`common_top_bg + ${classes.common_top_bg_news}`} ref={topMenuEl} id="top">
                            <S_MenuC menuOnTop={menuOnTop} data={mainPageData[0]} setIsPopupClose={setIsPopupClose}
                                     briefing={true}/>
                            <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                                <C_FullForm data={mainPageData[0]} className={popupClasses.fullFormIndexSection}
                                            popup={true}/>
                            </S_Popup>
                        </div>
                        */}
            {/*<div className={`common_top_bg + ${classes.common_top_bg_news}`} id="top">
                <S_Menu data={pageData} setIsPopupClose={setIsPopupClose}/>
                <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                    <C_FullForm data={pageData} className={classes.fullFormIndexSection} popup={true}/>
                </S_Popup></div>*/}
            <div className={classes.newsWrapper}>
                <div className={classes.title}>
                    Новости STONE
                </div>
                <ul className={classes.newsList}>
                    {filteredNews(newsData, filters).map((el, i) => {
                        return (
                            <li
                                className={classes.newsItem}
                                key={i}
                                onClick={() => {
                                    // установить новость
                                    setShownNews(i);
                                    // очистить параметры в поисковой строке
                                    history.pushState({}, null, location.href.split('?')[0]);

                                    let queryParams = new URLSearchParams(window.location.search);
                                    // добавить id параметром
                                    queryParams.set("id", el.id.toString());
                                    history.replaceState(null, null, "?" + queryParams.toString());
                                }}>
                                <div className={classes.newsDate}>
                                    {el.date}
                                </div>
                                <div className={classes.newsTitle}>
                                    {el.title}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className={classes.commonTags}>
                    {[...new Set(allTags)].map((el, i) => {
                        const filtersCollection = new Set(filters);
                        return (
                            <div
                                key={i}
                                className={classNames(classes.commonTagsElement, {[classes.commonTagsElementActive]: filtersCollection.has(el)})}
                                onClick={() => {
                                    setFilters(prev => {
                                        const localCollectionFilters = new Set(prev);
                                        if (localCollectionFilters.has(el)) {
                                            localCollectionFilters.delete(el);
                                            return [...localCollectionFilters]
                                        }
                                        return [...prev, el]
                                    })
                                }}
                            >
                                #{el}
                            </div>
                        );
                    })}
                </div>
                <div className={classes.imgWrapper}>
                    <img
                        src={filteredNews(newsData, filters)[shownNews] && filteredNews(newsData, filters)[shownNews].image && filteredNews(newsData, filters)[shownNews].image}/>
                </div>
                <div className={classes.descriptionWrapper}>
                    <div className={classes.description}
                         dangerouslySetInnerHTML={{__html: filteredNews(newsData, filters)[shownNews] && filteredNews(newsData, filters)[shownNews].fullTextWithoutImg && filteredNews(newsData, filters)[shownNews].fullTextWithoutImg}}/>
                    <div className={classes.tags}>
                        {filteredNews(newsData, filters)[shownNews] && filteredNews(newsData, filters)[shownNews].tags?.map((el, i) => {
                            return (
                                <div
                                    className={classes.theTag}
                                    key={i}
                                    onClick={() => {
                                        setFilters((prev) => [el]);
                                    }}
                                >#{el}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={classes.pressWrapper}>
                <div className={classes.pressInfo}>
                    <div className={classes.pressTitle}>
                        Пресс-служба
                    </div>
                    <div className={classes.pressText}>
                        По вопросам информационного сотрудничества, а также партнерских мероприятий
                        обращайтесь в пресс-службу компании STONE HEDGE:
                    </div>
                    <a href="tel:+74951064350" className={classes.phoneLink}>
                        +7 495 106-43-50
                    </a>
                    <a href="mailto:pr@stonehedge.ru" className={classes.emailLink}>
                        pr@stonehedge.ru
                    </a>
                    <div className={classes.name}>
                        Татьяна Желанова
                    </div>
                    <div className={classes.post}>
                        Руководитель PR-отдела
                    </div>
                </div>
            </div>
        </>
    )
}

News.getInitialProps = async ({ query }) => {
    const {id} = query
    return {id}
}

export default News
