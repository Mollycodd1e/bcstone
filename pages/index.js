import Head from 'next/head';
import {useEffect, useRef, useState} from "react";

import {useWindowSize, Context} from "../src/library";
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

export default function Home() {
    const [width, height] = useWindowSize();

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

    const [data, setData] = useState([]);

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

    const mainPageData = data && data.data && data.data.length !== 0 && data.data.filter(el => {
        if (el && el.id) {
            return el.id === 2
        }
    });
    
    const [isPopupClose, setIsPopupClose] = useState(true);
    const [isAboutPopupClose, setIsAboutPopupClose] = useState(true);

    const mocks = {
        pressCenter: [
            {
                data: '21/04',
                image: 'https://via.placeholder.com/224x134',
                title: 'Выйграли конкурс',
                description: 'Бизнес-центры и офисные кварталы  будут реализованы в Белорусском  деловом районе и других  перспективных Бизнес-районах  Москвы'
            },
            {
                data: '22/04',
                image: 'https://via.placeholder.com/224x134',
                title: 'Выйграли конкурс',
                description: 'Бизнес-центры и офисные кварталы  будут реализованы в Белорусском  деловом районе и других  перспективных Бизнес-районах  Москвы'
            },
            {
                data: '20/04',
                image: 'https://via.placeholder.com/224x134',
                title: 'Выйграли конкурс',
                description: 'Бизнес-центры и офисные кварталы  будут реализованы в Белорусском  деловом районе и других  перспективных Бизнес-районах  Москвы'
            },
        ],
        saving: [
            {
                url: '',
                description: 'Бизнес-центры и офисные кварталы будут реализованы в Белорусском деловом районе и других перспективных Бизнес-районах Москвы'
            },
            {
                url: '',
                description: 'Бизнес-центры и офисные кварталы будут реализованы в Белорусском деловом районе и других перспективных Бизнес-районах Москвы'
            }
        ],
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

    return (
        // <Context.Provider value={data}>
            <Context.Provider value={[width, height]}>
                <div className={"page-wrapper"}>
                    <Head>
                        <title>Премиальные бизнес-центры STONE</title>
                        <meta name="description" content="Продажа или аренда премиальной офисной недвижимости у метро от девелопера STONE HEDGE. Статусные инвестиции для дальнейшей перепродажи, сдачи в аренду или размещения собственного бизнеса. Любые форматы от офисов, офисных этажей, офисных зданий до ритейла и торговой галереи." />
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
                    
                    {data.length !== 0 ? (
                            <>
                                <div className={`common_top_bg`}  ref={topMenuEl}>
                                    <S_Menu menuOnTop={menuOnTop} data={mainPageData[0]} setIsPopupClose={setIsPopupClose} />
                                    <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                                        <C_FullForm data={mainPageData[0]} className={classes.fullFormIndexSection} popup={true}/>
                                    </S_Popup>
                                    <S_Hero data={mainPageData[0]} />
                                    <S_Top_Commercial data={mainPageData[0]} />
                                    <S_Projects data={mainPageData[0]} className={"projects-bg"} />
                                    <S_About data={mainPageData[0]} width={width} setIsAboutPopupClose={setIsAboutPopupClose}/>
                                    <C_SliderVideoPopup data={mainPageData[0]} setIsPopupClose={setIsAboutPopupClose} isPopupClose={isAboutPopupClose} popup={true}/>
                                    <S_Sales data={mainPageData[0]} />
                                    <S_FullForm data={mainPageData[0]} />
                                    <S_Bottom_Commercial data={mainPageData[0]}/>
                                    <S_PressCenter data={mainPageData[0]}/>
                                    <S_Footer phone_number={mocks.contacts.phone} mail={mocks.contacts.mail} address={mocks.contacts.address} sales_number={mocks.contacts.sales} telegram={mocks.contacts.telegram} copyright={mocks.copyright} />
                                </div>
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
                <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xsHwkwIhhfEFp3og9dunH0Jw39tsxi0" strategy="beforeInteractive"/>
            </Context.Provider>
        // </Context.Provider>
    )
}
