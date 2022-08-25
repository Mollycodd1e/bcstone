import {useEffect, useRef, useState} from "react";
import {useWindowSize, Context} from "../src/library";
import Script from 'next/script'
import axios from "axios";
import Head from 'next/head';
import classes from  './styleNews.module.scss';
import { S_Tags } from "../src/sections/s_Tags";
import { S_Header } from "../src/sections/s_Header";
import { isNoSubstitutionTemplateLiteral } from "typescript";
import { S_Video } from "../src/sections/s_Video";
import { S_Text } from "../src/sections/s_Text";
import { S_Slider } from "../src/sections/s_Slider";
import { S_Quote } from "../src/sections/s_Quote";
import { S_Picture } from "../src/sections/s_Picture";
import { S_MoreInfoBtn } from "../src/sections/s_MoreInfoBtn";
import { S_Form } from "../src/sections/s_Form";
import { S_Footer } from "../src/sections/s_Footer";
import { S_MenuC } from "../src/sections/s_MenuC";

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

    const mocks = {
        hashtagList: [
            {
                id: 1,
                name: 'премия'
            },
            {
                id: 2,
                name: 'вручение'
            },
            {
                id: 3,
                name: 'отчет'
            },
            {
                id: 4,
                name: 'премия'
            },
            {
                id: 5,
                name: 'вручение'
            },
            {
                id: 6,
                name: 'отчет'
            },
            {
                id: 7,
                name: 'отчет'
            },
            {
                id: 8,
                name: 'премия'
            },
            {
                id: 9,
                name: 'вручение'
            },
            {
                id: 10,
                name: 'отчет'
            },
            {
                id: 11,
                name: 'отчет'
            },
            {
                id: 12,
                name: 'премия'
            },
            {
                id: 13,
                name: 'вручение'
            },
            {
                id: 14,
                name: 'отчет'
            },
        ],
        textList: [
            {
                id: 1,
                text: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом Сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.',                
            },
            {
                id: 2,
                text: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом Сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.',
            },
            {
                id: 3,
                text: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом Сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.',
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

    const {contacts, copyright} = mocks;

    const NewsPageData = data.length !==0 ? data.data[1].data : '';

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
                                <div className={`common_top_bg + ${classes.common_top_bg_news}`}  ref={topMenuEl} id="top">
                                    <S_MenuC menuOnTop={menuOnTop} data={mainPageData[0]} />
                                </div>
                                <S_Tags hashtagList={NewsPageData[0].content.list}/>
                                <S_Header 
                                    header={NewsPageData[1].content.title} 
                                    text={NewsPageData[1].content.description}
                                    data={NewsPageData[1].content.date}
                                />
                                <S_Video url={NewsPageData[2].content.url} 
                                    description={NewsPageData[2].content.description}
                                />
                                <S_Text text={NewsPageData[3].content.text}
                                />
                                <S_Slider items={NewsPageData[5].content.gallery} 
                                    description={NewsPageData[5].content.description} />
                                <S_Text text={NewsPageData[3].content.text}
                                />
                                <S_Quote photo={NewsPageData[6].content.photo.src} name={NewsPageData[6].content.name} 
                                    description={NewsPageData[6].content.description}
                                    text={NewsPageData[6].content.text}
                                />
                                <S_Picture src={NewsPageData[4].content.image.src} description={NewsPageData[4].content.description}/>
                                <S_Text text={NewsPageData[3].content.text}
                                />
                                <S_MoreInfoBtn />
                                <S_Form header={NewsPageData[8].content.title} description={NewsPageData[8].content.description} ready={NewsPageData[8].content.success}/>
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
                <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xsHwkwIhhfEFp3og9dunH0Jw39tsxi0" strategy="beforeInteractive"/>
            </Context.Provider>
    )
}