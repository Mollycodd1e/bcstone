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
import { S_Slider } from "../../src/sections/s_Slider";
import { S_Quote } from "../../src/sections/s_Quote";
import { S_Picture } from "../../src/sections/s_Picture";
import { S_MoreInfoBtn } from "../../src/sections/s_MoreInfoBtn";
import { S_Form } from "../../src/sections/s_Form";
import { S_Footer } from "../../src/sections/s_Footer";

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
        header: {
            name: `Максим Гейзер в${'\u00A0'}рейтинге CRE 100`,
            description: '100 самых влиятельных персон рынка коммерческой недвижимости 2022/23',
            data: '20/04/2022'
        },
        video: {
            //url: 'https://www.youtube.com/embed/Onn38VeEAC8',
            description: 'Видео с вручения премии, которая, несомненно, внесла большой вклад.'
        },
        hashtagList: [
            {
                id: 1,
                hashtag: 'премия'
            },
            {
                id: 2,
                hashtag: 'вручение'
            },
            {
                id: 3,
                hashtag: 'отчет'
            },
        ],
        textList: [
            {
                id: 1,
                text: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом Сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.'
            },
            {
                id: 2,
                text: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом Сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.'
            },
            {
                id: 3,
                text: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом Сложившаяся структура организации способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.'
            }
        ],
        image: {
            url: 'https://via.placeholder.com/260x176',
            description : 'Снимок с вручения премии, которая внесла большой вклад.'
        },
        author: {
            photo: 'https://via.placeholder.com/76x76',
            name: 'Кристина Недря',
            description: 'Руководитель департамента оценки и аналитики STONE HEDGE',
            quote: '«Генеральный директор STONE HEDGE Максим Гейзер второй год подряд вошёл в число самых влиятельных персон рынка коммерческой недвижимости рейтинга CRE 100. В списке CRE 100 генеральный директор STONE HEDGE был высоко отмечен в числе лидеров отрасли и занял 16 позицию в категории Девелопмент»'
        },
        slider: {
            images: [
                {
                    id: 1,
                    url: 'https://via.placeholder.com/260x176'
                },
                {
                    id: 2,
                    url: 'https://via.placeholder.com/260x176'
                }
            ],
            description : 'Фотографии с вручения премии, которая, несомненно,внесла вклад.'
        },
        contacts: {
            phone: '+7 (495) 124-45-67',
            mail: 'sales@bc-stone.ru',
            address: 'г. Москва, Бумажный проезд, вл. 19',
            sales: 'Отдел продаж по телефону:пн. - пт.: с 9:00 до 21:00сб. - вс.: c 9:30 до 20:00',
            telegram: '@stone_by_stonehedge'
        },
        copyright: {
            header: `Инвестируйте Выгодно В${'\u00A0'}ликвидную недвижимость`,
            name: 'Политика конфиденциальности',
            author: '© АО «СТОУНХЕДЖ»',
            description: 'Содержимое данного сайта (включая размещенную информацию и материалы) охраняется авторским правом (ст. 1271 ГК РФ). Запрещено копирование дизайна настоящего сайта, его структуры и отдельных элементов без предварительного письменного согласия АО «СТОУНХЕД»'
        },
        form: {
            header: 'Новости рынка и проектов',
            ready: 'Готово!',
            description: 'Одним из первых узнавайте о новостях рынка коммерческой недвижимости'       
        }
    }

    const {header, video, slider, author, image, contacts, copyright, form} = mocks;
    
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
                                <S_Tags hashtagList={mocks.hashtagList}/>
                                <S_Header 
                                    header={header.name} 
                                    text={header.description}
                                    data={header.data}
                                />
                                <S_Video url={video.url} 
                                    description={video.description}
                                />
                                <S_Text text={mocks.textList[0].text}
                                />
                                <S_Slider items={[<img src={slider.images[0].url}/>, <img src={slider.images[1].url}/>]} 
                                    description={slider.description} />
                                <S_Text text={mocks.textList[1].text}
                                />
                                <S_Quote photo={author.photo} name={author.name} description={author.description}
                                    text={author.quote}
                                />
                                <S_Picture src={image.url} description={image.description}/>
                                <S_Text text={mocks.textList[2].text}
                                />
                                <S_MoreInfoBtn />
                                <S_Form header={form.header} description={form.description} ready={form.ready}/>
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