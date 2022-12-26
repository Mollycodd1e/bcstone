import {useEffect, useRef, useState} from "react";
import {useWindowSize, Context} from "../src/library";
import axios from "axios";
import Head from 'next/head';
import classes from  './styleNews.module.scss';
import popupClasses from "../src/sections/s_Popup/style.module.scss";
import { S_Footer } from "../src/sections/s_Footer";
import { S_MenuC } from "../src/sections/s_MenuC";
import {Cc_ComponentGenerator} from "../src/complexComponents/cc_ComponentGenerator";
import {S_Popup} from "../src/sections/s_Popup";
import {C_FullForm} from "../src/components/c_FullForm";

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

    const footerData = {
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

    const {contacts, copyright} = footerData;
    const [isPopupClose, setIsPopupClose] = useState(true);
    const NewsPageData = data.length !==0 ? data.data[6].data : '';

    return (
            <Context.Provider value={[width, height]}>
                <Head>
                    <title>STONE HEDGE</title>
                    <meta name="description" content="STONE HEDGE" />

                    <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZJD3HM')`}}></script>
                </Head>
                <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZJD3HM";height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

                <div className={"page-wrapper"}>
                    {data.length !== 0 ? (
                            <>
                                <div className={`common_top_bg + ${classes.common_top_bg_news}`}  ref={topMenuEl} id="top">
                                    <S_MenuC menuOnTop={menuOnTop} data={mainPageData[0]} setIsPopupClose={setIsPopupClose} briefing={true}/>
                                </div>
                                <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                                    <C_FullForm data={mainPageData[0]} className={popupClasses.fullFormIndexSection} popup={true}/>
                                </S_Popup>
                                <Cc_ComponentGenerator pageData={NewsPageData} />
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
            </Context.Provider>
    )
}