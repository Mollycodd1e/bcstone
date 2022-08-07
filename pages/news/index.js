import {useEffect, useRef, useState} from "react";
import {useWindowSize, Context} from "../../src/library";
import Script from 'next/script'
import {S_Menu} from "../../src/sections/s_Menu";
import axios from "axios";
import Head from 'next/head';
import classes from  './style.module.scss';
import { S_Tags } from "../../src/sections/s_Tags";
import { S_Header } from "../../src/sections/s_Header";
import { isNoSubstitutionTemplateLiteral } from "typescript";
import { S_Video } from "../../src/sections/s_Video";
import { S_Text } from "../../src/sections/s_Text";
import { C_Slider } from "../../src/components/c_Slider";

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

    return (
            <Context.Provider value={[width, height]}>
                <Head>
                    <title>Максим Гейзер</title>
                    <meta name="description" content="Максим Гейзер" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>    
                <div className={"page-wrapper"}>                                  
                    {data.length !== 0 ? (
                            <>
                                <div className={`common_top_bg + ${classes.common_top_bg_news}`}  ref={topMenuEl}>
                                    <S_Menu menuOnTop={menuOnTop} data={mainPageData[0]} />
                                </div>
                                <S_Tags hashtagList={['премия', 'вручение', 'отчет','премия', 'вручение', 'отчет']}/>
                                <S_Header 
                                    header={'Максим Гейзерв рейтинге CRE 100'} 
                                    text={`100 самых влиятельных персон рынка коммерческой недвижимости 2022/23`}
                                    data={'20/04/2022'}
                                />
                                <S_Video url={'https://www.youtube.com/watch?v=Onn38VeEAC8'} 
                                    description={'Видео с вручения премии, которая, несомненно, внесла большой вклад. '}
                                />
                                <S_Text text={'Не следует, однако забывать, что начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом Сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.'}
                                />
                                
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
    )
}