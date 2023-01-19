import {
    MainBanner,
    News,
    Form,
    BusinessCenters,
    AboutUs,
    PressCentre,
    MainBannerMobile,
    FormMobile,
    OfficeRetailMobile,
    MobileNews,
    AboutUsMobile,
    PressCentreMobile,
    NewsMobile, TextPicture
} from "@/components/SkeletonComponent";

export default function Skeleton() {
    return (
        <>
            <MainBanner/>
            <News/>
            <Form/>
            <BusinessCenters/>
            <AboutUs/>
            <PressCentre/>
            <PressCentreMobile/>
            <MobileNews/>
            <MainBannerMobile/>
            <FormMobile/>
            <OfficeRetailMobile/>
            <AboutUsMobile/>
            <NewsMobile/>
            <TextPicture/>
        </>
    )
}