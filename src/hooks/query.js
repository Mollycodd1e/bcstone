import { useState, useEffect } from "react";
import MainStore from "../store/MainStore";
import Error from "next/error";
import {useRouter} from "next/router";
import ErrorPage from "next/error";


export default function Query(page, callback) {
    const router = useRouter();
    const [pageData, setPageData] = useState();
    useEffect(() => {
        let mounted = true;
        MainStore.getPagesAsync().then(r => {
            if (mounted) {
                let getPageData = r.find(x => x.slug === page)
                if(getPageData) {
                    setPageData(getPageData)
                } else {
                    return   <ErrorPage statusCode={404}/>

                }

                //setMainPageData(r.find(x => x.slug === "main_page"))
            }
        })
        return () => mounted = false;
    }, [])

    callback(<ErrorPage statusCode={404}/>)
}

