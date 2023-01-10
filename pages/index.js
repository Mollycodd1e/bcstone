import Head from 'next/head';
import {useEffect, useState} from "react";
import {Slides} from "../src/library";
import {S_Hero} from "../src/sections/s_Hero";
import {S_Top_Commercial} from "../src/sections/s_Top_Сommercial";
import {S_Projects} from "../src/sections/s_Projects";
import {S_About} from "../src/sections/s_About";
import {S_Sales} from "../src/sections/s_Sales";
import {S_FullForm} from "../src/sections/s_FullForm";
import S_Popup from "../src/sections/s_Popup";
import classes from "../src/sections/s_Popup/style.module.scss";
import {C_FullForm} from "@/components/c_FullForm";
import {S_Bottom_Commercial} from '../src/sections/s_Bottom_Commercial';
import {S_PressCenter} from '../src/sections/s_PressCenter';
import {C_SliderVideoPopup} from '@/components/c_SliderVideoPopup';
import MainStore from "../src/store/MainStore";
import {MainBanner} from "@/components/SkeletonComponent";
import useWindowSize from "../src/hooks/useWindowSize";

function Home(props) {
    const size = useWindowSize();
    let [slideIndex, setSlideIndex] = useState(0);

    const [pageData, setPageData] = useState(null);
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        let mounted = true;
        MainStore.getPagesAsync().then(r => {
            if (mounted) {
                setPageData(r.find(x => x.id === 2))
            }
        })
        MainStore.getNewsAsync().then(r => {
            if (mounted) {
                setNewsData(r)
            }
        })
        return () => mounted = false;
    }, [])

    const [isPopupClose, setIsPopupClose] = useState(true);
    const [isAboutPopupClose, setIsAboutPopupClose] = useState(true);
    const [isWebp, setIsWebp] = useState(false);

    useEffect(() => {
        setIsWebp(false);
        function canUseWebp() {
            // Создаем элемент canvas
            let elem = document.createElement('canvas');
            // Приводим элемент к булеву типу
            if (!!(elem.getContext && elem.getContext('2d'))) {
                // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
                setIsWebp(true);
                return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
            }
            // Иначе Webp не используем
            return false;
        }
        canUseWebp();
    }, [])

    return (

            <div className={`common_top_bg`}>
                <>
                    {!MainStore.loading.is('pageData') && pageData ?
                        <>
                            <S_Popup>
                                <C_FullForm data={pageData} className={classes.fullFormIndexSection} />
                            </S_Popup>
                            <S_Hero data={pageData} setIsPopupClose={setIsPopupClose} isWebp={isWebp}/>
                            <S_Top_Commercial data={pageData}/>
                            <S_Projects data={pageData} className={"projects-bg"} setIsPopupClose={setIsPopupClose}/>
                            <Slides.Provider value={[slideIndex, setSlideIndex]}>
                                <S_About data={pageData} width={size.width} setIsPopupClose={setIsPopupClose}
                                         setIsAboutPopupClose={setIsAboutPopupClose} popup={isAboutPopupClose} isWebp={isWebp}/>
                                <C_SliderVideoPopup data={pageData}
                                                    sliderVideoPopupContent={pageData.about_company.variableContent}
                                                    setIsAboutPopupClose={setIsAboutPopupClose}
                                                    isAboutPopupClose={isAboutPopupClose} popup={isAboutPopupClose} isWebp={isWebp}/>
                            </Slides.Provider>
                            <S_Sales data={pageData}/>
                            <S_FullForm data={pageData}/>
                            <S_Bottom_Commercial data={pageData} isWebp={isWebp}/>
                        </>
                        : <MainBanner/>}
                    {!MainStore.loading.is('newsData') && newsData ?
                            <S_PressCenter data={newsData}/>
                         : 'LOADING' }


                </>
            </div>
    )
}

export default Home