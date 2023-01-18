import {useContext, useEffect, useState} from "react";
import {Context, Slides} from "../src/library";
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
import {
    AboutUs, AboutUsMobile,
    BusinessCenters,
    Form, FormMobile,
    MainBanner,
    MainBannerMobile, OfficeRetailMobile,
    PressCentre, PressCentreMobile
} from "@/components/SkeletonComponent";
import classNames from "classnames";
import {sizes} from "@/data/sizes";

function Home(props) {
    const {width, height} = useContext(Context);
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
    return (
                <>
                    {!MainStore.loading.is('pageData') && pageData ?
                        <>
                            <S_Popup>
                                <C_FullForm data={pageData} className={classes.fullFormIndexSection} popup={true}/>
                            </S_Popup>
                            <S_Hero data={pageData}/>
                            <S_Top_Commercial data={pageData}/>
                            <S_Projects data={pageData} className={"projects-bg"} setIsPopupClose={setIsPopupClose}/>
                            <Slides.Provider value={[slideIndex, setSlideIndex]}>
                                <S_About data={pageData} width={width} setIsPopupClose={setIsPopupClose}
                                         setIsAboutPopupClose={setIsAboutPopupClose} popup={isAboutPopupClose}/>
                                <C_SliderVideoPopup data={pageData}
                                                    sliderVideoPopupContent={pageData.about_company.variableContent}
                                                    setIsAboutPopupClose={setIsAboutPopupClose}
                                                    isAboutPopupClose={isAboutPopupClose} popup={isAboutPopupClose}/>
                            </Slides.Provider>
                            <S_Sales data={pageData}/>
                            <S_FullForm data={pageData}/>
                            <S_Bottom_Commercial data={pageData}/>
                        </>
                        : <>
                            {width < sizes.widthTabletSm ?
                                <div className={classNames(classes.banners, classes.banners_mobile)}>
                                    <MainBannerMobile/>
                                    <FormMobile/>
                                    <OfficeRetailMobile/>
                                    <AboutUsMobile/>
                                </div>
                            :
                                <div className={classes.banners}>
                                    <MainBanner/>
                                    <BusinessCenters/>
                                    <Form/>
                                    <AboutUs/>
                                </div>
                            }
                          </>}
                    {!MainStore.loading.is('newsData') && newsData ?
                            <S_PressCenter data={newsData}/>
                         : <>
                            {width < sizes.widthTabletSm ?
                                <div className={classNames(classes.banners, classes.banners_mobile)}>
                                    <PressCentreMobile/>
                                </div> :
                                <div className={classes.banners}>
                                    <PressCentre/>
                                </div>
                            }
                            </>
                         }
                </>
    )
};

export default Home