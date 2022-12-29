import Head from 'next/head';
import {useEffect, useRef, useState} from "react";

import {useWindowSize, Context, Slides} from "../src/library";
import Script from 'next/script'
import {S_Menu} from "../src/sections/s_Menu";
import {S_Hero} from "../src/sections/s_Hero";
import axios from "axios";
import {S_Top_Commercial} from "../src/sections/s_Top_Сommercial";
import {S_Projects} from "../src/sections/s_Projects";
import {S_About} from "../src/sections/s_About";
import {S_Sales} from "../src/sections/s_Sales";
import {S_FullForm} from "../src/sections/s_FullForm";
import {S_Popup} from "../src/sections/s_Popup";
import classes from "../src/sections/s_Popup/style.module.scss";
import {C_FullForm} from "../src/components/c_FullForm";
import { S_Footer } from "../src/sections/s_Footer";
import { S_Bottom_Commercial} from '../src/sections/s_Bottom_Commercial';
import { S_PressCenter } from '../src/sections/s_PressCenter';
import { convertCompilerOptionsFromJson } from 'typescript';
import { C_SliderVideoPopup } from '../src/components/c_SliderVideoPopup';
import {mainPageData, footerData} from "../src/data/mocks";

// export async function getServerSideProps() {
//     const res = await axios.get('https://satellites.stonehedge.ru/api/pages', {
//         headers: {
//             'site-slug': 'stone'
//         }
//     });
//     return {
//         props: {data}, // will be passed to the page component as props
//     }
// }

export default function Home() {
    const [width, height] = useWindowSize();
    let [slideIndex, setSlideIndex] = useState(0);
    const topMenuEl = useRef(null);
    const [menuOnTop, isMenuOnTop] = useState(false)

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

    // const [data, setData] = useState([]);
    const [newsData, setNewsData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get('https://satellites.stonehedge.ru/api/pages', {
    //                 headers: {
    //                     'site-slug': 'stone'
    //                 }
    //             });
    //             const { data } = res;
    //             setData(data);
    //             return { data };
    //         } catch (error) {
    //             return { error };
    //         }
    //     };
    //     fetchData();
    //
    // }, []);

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
     
    // const mainPageData = data && data.data && data.data.length !== 0 && data.data.filter(el => {
    //     if (el && el.id) {
    //         return el.id === 2
    //     }
    // });
    // let sliderVideoPopupContent;
    //
    // if (mainPageData) {
    //     sliderVideoPopupContent = mainPageData[0].about_company.variableContent;
    // }
    const [isPopupClose, setIsPopupClose] = useState(true);
    const [isAboutPopupClose, setIsAboutPopupClose] = useState(true);

    return (
        <Context.Provider value={[width, height]}>
            <div className={"page-wrapper"}>
                <Head>
                    <title>Премиальные бизнес-центры STONE</title>
                    <meta name="description"
                          content="Продажа или аренда премиальной офисной недвижимости у метро от девелопера STONE HEDGE. Статусные инвестиции для дальнейшей перепродажи, сдачи в аренду или размещения собственного бизнеса. Любые форматы от офисов, офисных этажей, офисных зданий до ритейла и торговой галереи."/>
                    <link rel="icon" href={"/favicon.ico"}/>
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-WZJD3HM')`
                    }}/>
                </Head>
                <noscript
                    dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZJD3HM";height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

                <div className={`common_top_bg`} ref={topMenuEl}>
                    <S_Menu menuOnTop={menuOnTop} data={mainPageData[0]} setIsPopupClose={setIsPopupClose}/>
                    <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                        <C_FullForm data={mainPageData[0]} className={classes.fullFormIndexSection} popup={true}/>
                    </S_Popup>
                    <S_Hero data={mainPageData[0]} setIsPopupClose={setIsPopupClose}/>
                    <S_Top_Commercial data={mainPageData[0]}/>
                    <S_Projects data={mainPageData[0]} className={"projects-bg"} setIsPopupClose={setIsPopupClose}/>
                    <Slides.Provider value={[slideIndex, setSlideIndex]}>
                        <S_About data={mainPageData[0]} width={width} setIsPopupClose={setIsPopupClose}
                                 setIsAboutPopupClose={setIsAboutPopupClose} popup={isAboutPopupClose}/>
                        <C_SliderVideoPopup data={mainPageData[0]}
                                            sliderVideoPopupContent={mainPageData[0].about_company.variableContent}
                                            setIsAboutPopupClose={setIsAboutPopupClose}
                                            isAboutPopupClose={isAboutPopupClose} popup={isAboutPopupClose}/>
                    </Slides.Provider>
                    <S_Sales data={mainPageData[0]}/>
                    <S_FullForm data={mainPageData[0]}/>
                    <S_Bottom_Commercial data={mainPageData[0]}/>
                    <S_PressCenter data={newsData}/>
                    <S_Footer phone_number={footerData.contacts.phone} mail={footerData.contacts.mail} address={footerData.contacts.address} sales_number={footerData.contacts.sales} telegram={footerData.contacts.telegram} copyright={footerData.copyright} />
                </div>
            </div>
            <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xsHwkwIhhfEFp3og9dunH0Jw39tsxi0"
                    strategy="beforeInteractive"/>
        </Context.Provider>
    )
}
