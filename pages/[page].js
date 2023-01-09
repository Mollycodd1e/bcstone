import {useEffect, useRef, useState} from "react";
import Head from 'next/head';
import classes from './styleNews.module.scss';
import popupClasses from "../src/sections/s_Popup/style.module.scss";
import {Cc_ComponentGenerator} from "../src/complexComponents/cc_ComponentGenerator";
import {S_Popup} from "../src/sections/s_Popup";
import {C_FullForm} from "@/components/c_FullForm";
import MainStore from "../src/store/MainStore";
import useWindowSize from "../src/hooks/useWindowSize";
import {Context} from "../src/library";
import {S_MenuC} from "../src/sections/s_MenuC";
import ErrorPage from "next/error";
import Query from "../src/hooks/query";


export default function Page({page}) {
    const size = useWindowSize();
    const [pageData, setPageData] = useState(null);
    const [mainPageData, setMainPageData] = useState(null);
    const [newsData, setNewsData] = useState(null);
    const [isPopupClose, setIsPopupClose] = useState(true);
    useEffect(() => {
        let mounted = true;
        MainStore.getPagesAsync().then(r => {
            if (mounted) {
                let getPageData = r.find(x => x.slug === page)
                if(getPageData) {
                    setPageData(getPageData)
                } else {

                }

                setMainPageData(r.find(x => x.slug === "main_page"))
            }
        })
        MainStore.getNewsAsync().then(r => {
            if (mounted) {
                setNewsData(r)

            }
        })

        return () => mounted = false;
    }, [])


    if(!pageData){
       return <ErrorPage statusCode={404}/>
    }


    return (
        <Context.Provider value={size}>
            <div className={"page-wrapper"}>
                {!MainStore.loading.is('pageData') && mainPageData ?
               <div className={`common_top_bg + ${classes.common_top_bg_news}`} id="top">
                    <S_MenuC data={mainPageData} setIsPopupClose={setIsPopupClose}
                             briefing={true}/>
                   <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                       <C_FullForm data={mainPageData} className={popupClasses.fullFormIndexSection} popup={true}/>
                   </S_Popup>
                </div> : 'LOADING' }

                {!MainStore.loading.is('pageData') && pageData ?
                    <>
                <Cc_ComponentGenerator pageData={pageData.data}/>
                    </>
                    :''}
            </div>
        </Context.Provider>

    )
}

export async function getStaticProps({params: {page}}) {
    return {
        props: {page}
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking",
    };
}