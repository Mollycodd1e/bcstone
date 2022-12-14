import Head from 'next/head';
import {useEffect, useRef, useState} from "react";

import {useWindowSize, Context} from "../src/library";
import Script from 'next/script'
import {S_Menu} from "../src/sections/s_Menu";
import {S_Hero} from "../src/sections/s_Hero";
import axios from "axios";
import {S_Top_Commercial} from "../src/sections/s_Top_–°ommercial";
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

    const mocks = {
        pressCenter: [
            {
                data: '21/04',
                image: 'https://via.placeholder.com/224x134',
                title: '–í—č–Ļ–≥—Ä–į–Ľ–ł –ļ–ĺ–Ĺ–ļ—É—Ä—Ā',
                description: '–Ď–ł–∑–Ĺ–Ķ—Ā-—Ü–Ķ–Ĺ—ā—Ä—č –ł –ĺ—Ą–ł—Ā–Ĺ—č–Ķ –ļ–≤–į—Ä—ā–į–Ľ—č  –Ī—É–ī—É—ā —Ä–Ķ–į–Ľ–ł–∑–ĺ–≤–į–Ĺ—č –≤ –Ď–Ķ–Ľ–ĺ—Ä—É—Ā—Ā–ļ–ĺ–ľ  –ī–Ķ–Ľ–ĺ–≤–ĺ–ľ —Ä–į–Ļ–ĺ–Ĺ–Ķ –ł –ī—Ä—É–≥–ł—Ö  –Ņ–Ķ—Ä—Ā–Ņ–Ķ–ļ—ā–ł–≤–Ĺ—č—Ö –Ď–ł–∑–Ĺ–Ķ—Ā-—Ä–į–Ļ–ĺ–Ĺ–į—Ö  –ú–ĺ—Ā–ļ–≤—č'
            },
            {
                data: '22/04',
                image: 'https://via.placeholder.com/224x134',
                title: '–í—č–Ļ–≥—Ä–į–Ľ–ł –ļ–ĺ–Ĺ–ļ—É—Ä—Ā',
                description: '–Ď–ł–∑–Ĺ–Ķ—Ā-—Ü–Ķ–Ĺ—ā—Ä—č –ł –ĺ—Ą–ł—Ā–Ĺ—č–Ķ –ļ–≤–į—Ä—ā–į–Ľ—č  –Ī—É–ī—É—ā —Ä–Ķ–į–Ľ–ł–∑–ĺ–≤–į–Ĺ—č –≤ –Ď–Ķ–Ľ–ĺ—Ä—É—Ā—Ā–ļ–ĺ–ľ  –ī–Ķ–Ľ–ĺ–≤–ĺ–ľ —Ä–į–Ļ–ĺ–Ĺ–Ķ –ł –ī—Ä—É–≥–ł—Ö  –Ņ–Ķ—Ä—Ā–Ņ–Ķ–ļ—ā–ł–≤–Ĺ—č—Ö –Ď–ł–∑–Ĺ–Ķ—Ā-—Ä–į–Ļ–ĺ–Ĺ–į—Ö  –ú–ĺ—Ā–ļ–≤—č'
            },
            {
                data: '20/04',
                image: 'https://via.placeholder.com/224x134',
                title: '–í—č–Ļ–≥—Ä–į–Ľ–ł –ļ–ĺ–Ĺ–ļ—É—Ä—Ā',
                description: '–Ď–ł–∑–Ĺ–Ķ—Ā-—Ü–Ķ–Ĺ—ā—Ä—č –ł –ĺ—Ą–ł—Ā–Ĺ—č–Ķ –ļ–≤–į—Ä—ā–į–Ľ—č  –Ī—É–ī—É—ā —Ä–Ķ–į–Ľ–ł–∑–ĺ–≤–į–Ĺ—č –≤ –Ď–Ķ–Ľ–ĺ—Ä—É—Ā—Ā–ļ–ĺ–ľ  –ī–Ķ–Ľ–ĺ–≤–ĺ–ľ —Ä–į–Ļ–ĺ–Ĺ–Ķ –ł –ī—Ä—É–≥–ł—Ö  –Ņ–Ķ—Ä—Ā–Ņ–Ķ–ļ—ā–ł–≤–Ĺ—č—Ö –Ď–ł–∑–Ĺ–Ķ—Ā-—Ä–į–Ļ–ĺ–Ĺ–į—Ö  –ú–ĺ—Ā–ļ–≤—č'
            },
        ],
        saving: [
            {
                url: '',
                description: '–Ď–ł–∑–Ĺ–Ķ—Ā-—Ü–Ķ–Ĺ—ā—Ä—č –ł –ĺ—Ą–ł—Ā–Ĺ—č–Ķ –ļ–≤–į—Ä—ā–į–Ľ—č –Ī—É–ī—É—ā —Ä–Ķ–į–Ľ–ł–∑–ĺ–≤–į–Ĺ—č –≤ –Ď–Ķ–Ľ–ĺ—Ä—É—Ā—Ā–ļ–ĺ–ľ –ī–Ķ–Ľ–ĺ–≤–ĺ–ľ —Ä–į–Ļ–ĺ–Ĺ–Ķ –ł –ī—Ä—É–≥–ł—Ö –Ņ–Ķ—Ä—Ā–Ņ–Ķ–ļ—ā–ł–≤–Ĺ—č—Ö –Ď–ł–∑–Ĺ–Ķ—Ā-—Ä–į–Ļ–ĺ–Ĺ–į—Ö –ú–ĺ—Ā–ļ–≤—č'
            },
            {
                url: '',
                description: '–Ď–ł–∑–Ĺ–Ķ—Ā-—Ü–Ķ–Ĺ—ā—Ä—č –ł –ĺ—Ą–ł—Ā–Ĺ—č–Ķ –ļ–≤–į—Ä—ā–į–Ľ—č –Ī—É–ī—É—ā —Ä–Ķ–į–Ľ–ł–∑–ĺ–≤–į–Ĺ—č –≤ –Ď–Ķ–Ľ–ĺ—Ä—É—Ā—Ā–ļ–ĺ–ľ –ī–Ķ–Ľ–ĺ–≤–ĺ–ľ —Ä–į–Ļ–ĺ–Ĺ–Ķ –ł –ī—Ä—É–≥–ł—Ö –Ņ–Ķ—Ä—Ā–Ņ–Ķ–ļ—ā–ł–≤–Ĺ—č—Ö –Ď–ł–∑–Ĺ–Ķ—Ā-—Ä–į–Ļ–ĺ–Ĺ–į—Ö –ú–ĺ—Ā–ļ–≤—č'
            }
        ],
        contacts: {
            phone: '+7 (495) 124-45-67',
            mail: 'sales@bc-stone.ru',
            address: '–≥. –ú–ĺ—Ā–ļ–≤–į, –Ď—É–ľ–į–∂–Ĺ—č–Ļ –Ņ—Ä–ĺ–Ķ–∑–ī, –≤–Ľ. 19',
            sales: `–ě—ā–ī–Ķ–Ľ –Ņ—Ä–ĺ–ī–į–∂ –Ņ–ĺ —ā–Ķ–Ľ–Ķ—Ą–ĺ–Ĺ—É: –Ņ–Ĺ.${'\u00A0'}- –Ņ—ā.: —Ā${'\u00A0'}9:00 –ī–ĺ${'\u00A0'}21:00 —Ā–Ī.${'\u00A0'}-${'\u00A0'}–≤—Ā.:${'\u00A0'}c${'\u00A0'}9:30 –ī–ĺ${'\u00A0'}20:00`,
            telegram: '@stone_by_stonehedge'
        },
        copyright: {
            header: `–ė–Ĺ–≤–Ķ—Ā—ā–ł—Ä—É–Ļ—ā–Ķ –í—č–≥–ĺ–ī–Ĺ–ĺ –í${'\u00A0'}–Ľ–ł–ļ–≤–ł–ī–Ĺ—É—é –Ĺ–Ķ–ī–≤–ł–∂–ł–ľ–ĺ—Ā—ā—Ć`,
            name: '–ü–ĺ–Ľ–ł—ā–ł–ļ–į –ļ–ĺ–Ĺ—Ą–ł–ī–Ķ–Ĺ—Ü–ł–į–Ľ—Ć–Ĺ–ĺ—Ā—ā–ł',
            author: '¬© –ź–ě ¬ę–°–Ę–ě–£–Ě–•–ē–Ē–Ė¬Ľ',
            description: `–°–ĺ–ī–Ķ—Ä–∂–ł–ľ–ĺ–Ķ –ī–į–Ĺ–Ĺ–ĺ–≥–ĺ —Ā–į–Ļ—ā–į (–≤–ļ–Ľ—é—á–į—Ź —Ä–į–∑–ľ–Ķ—Č–Ķ–Ĺ–Ĺ—É—é –ł–Ĺ—Ą–ĺ—Ä–ľ–į—Ü–ł—é –ł –ľ–į—ā–Ķ—Ä–ł–į–Ľ—č) –ĺ—Ö—Ä–į–Ĺ—Ź–Ķ—ā—Ā—Ź –į–≤—ā–ĺ—Ä—Ā–ļ–ł–ľ${'\u00A0'}–Ņ—Ä–į–≤–ĺ–ľ (—Ā—ā. 1271 –ď–ö –†–§). –ó–į–Ņ—Ä–Ķ—Č–Ķ–Ĺ–ĺ –ļ–ĺ–Ņ–ł—Ä–ĺ–≤–į–Ĺ–ł–Ķ –ī–ł–∑–į–Ļ–Ĺ–į –Ĺ–į—Ā—ā–ĺ—Ź—Č–Ķ–≥–ĺ —Ā–į–Ļ—ā–į, –Ķ–≥–ĺ —Ā—ā—Ä—É–ļ—ā—É—Ä—č –ł –ĺ—ā–ī–Ķ–Ľ—Ć–Ĺ—č—Ö —ć–Ľ–Ķ–ľ–Ķ–Ĺ—ā–ĺ–≤ –Ī–Ķ–∑ –Ņ—Ä–Ķ–ī–≤–į—Ä–ł—ā–Ķ–Ľ—Ć–Ĺ–ĺ–≥–ĺ –Ņ–ł—Ā—Ć–ľ–Ķ–Ĺ–Ĺ–ĺ–≥–ĺ —Ā–ĺ–≥–Ľ–į—Ā–ł—Ź –ź–ě ¬ę–°–Ę–ě–£–Ě–•–ē–Ē–Ė¬Ľ`
        },
    }

    return (
        // <Context.Provider value={data}>
            <Context.Provider value={[width, height]}>
                <div className={"page-wrapper"}>
                    <Head>
                        <title>–ü—Ä–Ķ–ľ–ł–į–Ľ—Ć–Ĺ—č–Ķ –Ī–ł–∑–Ĺ–Ķ—Ā-—Ü–Ķ–Ĺ—ā—Ä—č STONE</title>
                        <meta name="description" content="–ü—Ä–ĺ–ī–į–∂–į –ł–Ľ–ł –į—Ä–Ķ–Ĺ–ī–į –Ņ—Ä–Ķ–ľ–ł–į–Ľ—Ć–Ĺ–ĺ–Ļ –ĺ—Ą–ł—Ā–Ĺ–ĺ–Ļ –Ĺ–Ķ–ī–≤–ł–∂–ł–ľ–ĺ—Ā—ā–ł —É –ľ–Ķ—ā—Ä–ĺ –ĺ—ā –ī–Ķ–≤–Ķ–Ľ–ĺ–Ņ–Ķ—Ä–į STONE HEDGE. –°—ā–į—ā—É—Ā–Ĺ—č–Ķ –ł–Ĺ–≤–Ķ—Ā—ā–ł—Ü–ł–ł –ī–Ľ—Ź –ī–į–Ľ—Ć–Ĺ–Ķ–Ļ—ą–Ķ–Ļ –Ņ–Ķ—Ä–Ķ–Ņ—Ä–ĺ–ī–į–∂–ł, —Ā–ī–į—á–ł –≤ –į—Ä–Ķ–Ĺ–ī—É –ł–Ľ–ł —Ä–į–∑–ľ–Ķ—Č–Ķ–Ĺ–ł—Ź —Ā–ĺ–Ī—Ā—ā–≤–Ķ–Ĺ–Ĺ–ĺ–≥–ĺ –Ī–ł–∑–Ĺ–Ķ—Ā–į. –õ—é–Ī—č–Ķ —Ą–ĺ—Ä–ľ–į—ā—č –ĺ—ā –ĺ—Ą–ł—Ā–ĺ–≤, –ĺ—Ą–ł—Ā–Ĺ—č—Ö —ć—ā–į–∂–Ķ–Ļ, –ĺ—Ą–ł—Ā–Ĺ—č—Ö –∑–ī–į–Ĺ–ł–Ļ –ī–ĺ —Ä–ł—ā–Ķ–Ļ–Ľ–į –ł —ā–ĺ—Ä–≥–ĺ–≤–ĺ–Ļ –≥–į–Ľ–Ķ—Ä–Ķ–ł." />
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
                                <div className={"common_top_bg"}  ref={topMenuEl}>
                                    <S_Menu menuOnTop={menuOnTop} data={mainPageData[0]} setIsPopupClose={setIsPopupClose} />
                                    <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                                        <C_FullForm data={mainPageData[0]} className={classes.fullFormIndexSection} />
                                    </S_Popup>
                                    <S_Hero data={mainPageData[0]} />
                                    <S_Top_Commercial data={mainPageData[0]} />
                                    <S_Projects data={mainPageData[0]} className={"projects-bg"} />
                                    <S_About data={mainPageData[0]} width={width} />
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
