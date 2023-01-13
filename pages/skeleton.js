import {MainBanner, News, Form, BusinessCenters, AboutUs, PressCentre, Mobile} from "@/components/SkeletonComponent";

export default function Skeleton() {
    return (
        <>
            <MainBanner/>
            <News/>
            <Form/>
            <BusinessCenters/>
            <AboutUs/>
            <PressCentre/>
            <Mobile />
        </>
    )
}