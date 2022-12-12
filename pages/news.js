import {useEffect, useRef, useState} from "react";
import {useWindowSize, Context} from "../src/library";
import Script from 'next/script'
import axios from "axios";
import Head from 'next/head';
import classes from  './styleNews.module.scss';
import classess from "../src/sections/s_Popup/style.module.scss";
import { S_Footer } from "../src/sections/s_Footer";
import { S_MenuC } from "../src/sections/s_MenuC";
import {Cc_ComponentGenerator} from "../src/complexComponents/cc_ComponentGenerator";
import {C_FullForm} from "../src/components/c_FullForm";
import {S_Popup} from "../src/sections/s_Popup";

export default function News() {
    const [width, height] = useWindowSize();

    const topMenuEl = useRef(null);
    const [menuOnTop, isMenuOnTop] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                const menuEl = topMenuEl.current && topMenuEl.current.getBoundingClientRect();
                if (menuEl && menuEl.top < 0) {
                    isMenuOnTop(true);
                    // setActiveItem(1);
                } else {
                    isMenuOnTop(false);
                }
            }
        }
    }, []);

    const [data, setData] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [shownNews, setShownNews] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://satellites.stonehedge.ru/api/pages', {
                    headers: {
                        'site-slug': 'stone'
                    }
                });
                const { data } = res;
                setData(data);
                return { data };
            } catch (error) {
                return { error };
            }
        };
        fetchData();

    }, []);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const res = await axios.get(`https://stonehedge.ru/api/landing-news/bcstone`, {
                });
                const { data } = res;
                setNewsData(data);
                return { data };
            } catch (error) {
                return { error };
            }
        };
        fetchNewsData();
    }, []);

    const mainPageData = data && data.data && data.data.length !== 0 && data.data.filter(el => {
        if (el && el.id) {
            return el.id === 2
        }
    });

    const mocks = {
        contacts: {
            phone: '+7 (495) 124-45-67',
            mail: 'sales@bc-stone.ru',
            address: 'г. Москва, Бумажный проезд, вл. 19',
            sales: `Отдел продаж по телефону: пн.${'\u00A0'}- пт.: с${'\u00A0'}9:00 до${'\u00A0'}21:00 сб.${'\u00A0'}-${'\u00A0'}вс.:${'\u00A0'}c${'\u00A0'}9:30 до${'\u00A0'}20:00`,
            telegram: '@stone_by_stonehedge'
        },
        copyright: {
            header: `Инвестируйте Выгодно В${'\u00A0'}ликвидную недвижимость`,
            name: 'Политика конфиденциальности',
            author: '© АО «СТОУНХЕДЖ»',
            description: `Содержимое данного сайта (включая размещенную информацию и материалы) охраняется авторским${'\u00A0'}правом (ст. 1271 ГК РФ). Запрещено копирование дизайна настоящего сайта, его структуры и отдельных элементов без предварительного письменного согласия АО «СТОУНХЕДЖ»`
        },
    }

    const {contacts, copyright} = mocks;
    const [isPopupClose, setIsPopupClose] = useState(true);

    const NewsPageData = data.length !==0 ? data.data[1].data : '';

    console.log('newsData', newsData)
    return (
            <Context.Provider value={[width, height]}>
                <Head>
                    <title>STONE HEDGE</title>
                    <meta name="description" content="STONE HEDGE" />
                    {/*TODO: facebook-domain-verification ? */}
                    {/*<meta name="facebook-domain-verification" content="9z0sixxjkzgui2ay20ckf44xvhjnhk" />*/}
                    <link rel="icon" href="/favicon.ico" />
                    {/*TODO: googletagmanager 1 ? */}
                    {/*                    <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
                    {/*new Date().getTime(),event:'gtm.js'});var f=d.getByTagName(s)[0],*/}
                    {/*j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
                    {/*'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
                    {/*})(window,document,'script','dataLayer','GTM-N7GL33F')`}}></script>*/}
                </Head>
                {/*TODO: googletagmanager 2 ? */}
                {/*<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7GL33F";height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>*/}

                <div className={"page-wrapper"}>                                  
                    {data.length !== 0 && newsData.length !== 0 ? (
                            <>
                                <div className={`common_top_bg + ${classes.common_top_bg_news}`}  ref={topMenuEl} id="top">
                                    <S_MenuC menuOnTop={menuOnTop} data={mainPageData[0]} setIsPopupClose={setIsPopupClose} briefing={true}/>
                                    <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                                        <C_FullForm data={mainPageData[0]} className={classess.fullFormIndexSection} popup={true}/>
                                    </S_Popup>
                                </div>
                                {/*<S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>*/}
                                {/*    <C_FullForm data={mainPageData[0]} className={classes.fullFormIndexSection} popup={true}/>*/}
                                {/*</S_Popup>*/}
                                {/*<Cc_ComponentGenerator pageData={NewsPageData} />*/}
                                <div className={classes.newsWrapper}>
                                    <div className={classes.title}>
                                        Новости STONE
                                    </div>
                                    <ul className={classes.newsList}>
                                        {newsData.map((el, i) => {
                                            return (
                                                <li className={classes.newsItem} key={i} onClick={() => setShownNews(i)}>
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
                                    {/*<div className={classes.commonTags}>*/}
                                    {/*    common tags*/}
                                    {/*</div>*/}
                                    <div className={classes.imgWrapper}>
                                        <img src={newsData[shownNews].image} />

                                        {/*<div className={classes.socials}>*/}
                                        {/*    socials*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className={classes.descriptionWrapper}>
                                            <div className={classes.description} dangerouslySetInnerHTML={{ __html: newsData[shownNews].fullTextWithoutImg}} />
                                            {/*<div className={classes.personalTags}>*/}
                                            {/*    personal tags*/}
                                            {/*</div>*/}
                                        </div>
                                </div>
                                <div className={classes.pressWrapper}>
                                    <div className={classes.pressInfo}>
                                        <div className={classes.pressTitle}>
                                            Пресс-служба
                                        </div>
                                        <div className={classes.pressText}>
                                            По вопросам информационного сотрудничества, а также партнерских мероприятий обращайтесь в пресс-службу компании STONE HEDGE:
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

                              <S_Footer phone_number={contacts.phone} mail={contacts.mail} address={contacts.address}
                                    sales_number={contacts.sales} telegram={contacts.telegram} copyright={copyright}/>
                            </>
                        ) : (
                            <div className="lds-grid-wrapper">
                                <div className="lds-grid">
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                </div>
                            </div>
                        )
                    }

                </div>
                {/*<Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xsHwkwIhhfEFp3og9dunH0Jw39tsxi0" strategy="beforeInteractive"/>*/}
            </Context.Provider>
    )
}