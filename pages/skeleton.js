import {
    MainBanner,
    News,
    Form,
    BusinessCenters,
    AboutUs,
    PressCentre,
    Mobile,
    MainBannerMobile, FormMobile, OfficeRetailMobile, MobileNews
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
            <MobileNews/>
            <MainBannerMobile/>
            <FormMobile/>
            <OfficeRetailMobile/>
        </>
    )
}