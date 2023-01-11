import React from "react"
import ContentLoader from "react-content-loader"

export const News = (props) => {
    //НОВОСТЬ
    return (
    <ContentLoader
        speed={2}
        width={773}
        height={956}
        viewBox="0 0 773 956"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="13" y="0" width="93" height="30" rx="15" ry="15"/>
        <rect x="116" y="0" width="128" height="30" rx="15"/>
        <rect x="254" y="0" width="187" height="30" rx="15"/>

        <rect x="0" y="75" width="773" height="40" rx="3"/>
        <rect x="0" y="127" width="716" height="19" rx="3"/>
        <rect x="0" y="153" width="595" height="19" rx="3"/>
        <rect x="0" y="192" width="106" height="19" rx="3"/>

        <rect x="0" y="240" width="773" height="452" rx="21"/>

        <rect x="0" y="713" width="13" height="61" rx="3"/>
        <rect x="33" y="721" width="174" height="19" rx="3"/>
        <rect x="33" y="747" width="114" height="19" rx="3"/>

        <rect x="0" y="794" width="773" height="19" rx="3"/>
        <rect x="0" y="825" width="773" height="19" rx="3"/>
        <rect x="0" y="856" width="773" height="19" rx="3"/>
        <rect x="0" y="887" width="345" height="19" rx="3"/>

    </ContentLoader>
    )
}

export const Form = (props) => {
    return (
        //ФОРМА
        <ContentLoader
            speed={2}
            width={761}
            height={485}
            viewBox="0 0 761 485"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="113" y="37" width="505" height="69" rx="3"/>
            <rect x="113" y="117" width="535" height="19" rx="3"/>
            <rect x="113" y="143" width="535" height="19" rx="3"/>
            <rect x="113" y="169" width="535" height="19" rx="3"/>

            <rect x="113" y="225" width="385" height="41" rx="18"/>
            <rect x="113" y="294" width="385" height="41" rx="18"/>
            <rect x="113" y="363" width="254" height="41" rx="18"/>

            <circle cx="123" cy="438" r="10"/>
            <rect x="143" y="432" width="361" height="12" rx="3"/>

        </ContentLoader>
    )
}

export const MainBanner = (props) => {
    return (
        //Баннер на главной старнице
        <div style={{ width: "1207px"}}>
        <ContentLoader
            speed={2}
           /* width={810}
            height={530}*/
            viewBox="0 0 810 530"
            backgroundColor="#8D8D8D"
            foregroundColor="#f3f3f3"
            {...props}
        >
            <rect x="8" y="0" width="171" height="14" rx="3"/>
            <rect x="0" y="26" width="305" height="67" rx="3"/>
            <rect x="8" y="137" width="283" height="14" rx="3"/>
            <rect x="8" y="156" width="128" height="14" rx="3"/>

            <rect x="21" y="192" width="121" height="11" rx="3"/>
            <rect x="21" y="214" width="121" height="11" rx="3"/>
            <rect x="21" y="236" width="145" height="11" rx="3"/>
            <rect x="21" y="258" width="228" height="11" rx="3"/>

            <rect x="8" y="298" width="174" height="24" rx="12"/>

            <rect x="359" y="14" width="450" height="323" rx="35"/>

            <rect x="31" y="401" width="223" height="118" rx="21"/>
            <rect x="293" y="401" width="223" height="118" rx="21"/>
            <rect x="556" y="401" width="223" height="118" rx="21"/>

        </ContentLoader>
        </div>
    )
}

export const BusinessCenters = (props) => {
    return (
        //Баннер на главной старнице
        <ContentLoader
            speed={2}
            width={1248}
            height={686}
            viewBox="0 0 1248 686"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="238" y="0" width="774" height="65" rx="3"/>
            <rect x="363" y="120" width="510" height="19" rx="3"/>

            <rect x="482" y="183" width="114" height="19" rx="3"/>
            <rect x="638" y="183" width="114" height="19" rx="3"/>
            <rect x="464" y="212" width="308" height="4" rx="3"/>

            <rect x="0" y="246" width="352" height="236" rx="3"/>
            <rect x="22" y="497" width="235" height="19" rx="3"/>

            <rect x="449" y="246" width="352" height="236" rx="3"/>
            <rect x="464" y="497" width="235" height="19" rx="3"/>

            <rect x="896" y="246" width="352" height="236" rx="3"/>
            <rect x="906" y="497" width="235" height="19" rx="3"/>

        </ContentLoader>
    )
}

export const Mobile = (props) => {
    return (
        //МОБИЛКА
        <ContentLoader
            speed={2}
            width={535}
            height={411}
            viewBox="0 0 535 411"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="0" width="505" height="69"/>
            <rect x="0" y="80" width="535" height="19"/>
            <rect x="0" y="106" width="535" height="19"/>
            <rect x="0" y="132" width="535" height="19"/>
            <rect x="0" y="188" width="385" height="41" rx="18"/>
            <rect x="0" y="257" width="385" height="41" rx="18"/>
            <rect x="0" y="326" width="254" height="41" rx="18"/>
            <circle cx="10" cy="401" r="10"/>
            <rect x="27" y="395" width="361" height="12"/>
        </ContentLoader>
    )
}

export const AboutUs = (props) => {
    return (
        //О НАС
        <ContentLoader
            speed={2}
            width={1095}
            height={656}

            viewBox="0 0 1095 656"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="148" y="0" width="623" height="80"/>
            <rect x="0" y="161" width="554" height="397" rx="16"/>
            <circle cx="235" cy="599" r="21"/>
            <circle cx="309" cy="599" r="21"/>
            <rect x="629" y="225" width="315" height="34"/>
            <rect x="629" y="275" width="487" height="12"/>
            <rect x="629" y="293" width="418" height="12"/>

            <rect x="629" y="333" width="487" height="12"/>
            <rect x="629" y="354" width="487" height="12"/>
            <rect x="629" y="372" width="487" height="12"/>

            <rect x="629" y="393" width="435" height="12"/>
            <rect x="629" y="412" width="291" height="12"/>

            <rect x="629" y="439" width="487" height="12"/>
            <rect x="629" y="478" width="487" height="12"/>
            <rect x="629" y="372" width="487" height="12"/>

            <rect x="629" y="499" width="435" height="12"/>

            <rect x="629" y="520" width="487" height="12"/>
            <rect x="629" y="539" width="487" height="12"/>

            <rect x="629" y="560" width="435" height="12"/>

            <rect x="629" y="612" width="255" height="37" rx="26"/>

        </ContentLoader>
    )
}


export const PressCentre = (props) => {
    return (
        //ПРЕСС_ЦЕНТР
        <ContentLoader
            speed={2}
            width={1177}
            height={514}

            viewBox="0 0 1177 514"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="299" y="0" width="593" height="65"/>

            <rect x="190" y="509" width="238" height="4"/>
            <rect x="756" y="509" width="238" height="4"/>
            <circle cx="572" cy="511" r="3"/>
            <circle cx="586" cy="511" r="3"/>
            <circle cx="600" cy="511" r="3"/>
            <circle cx="614" cy="511" r="3"/>

            <rect x="0" y="119" width="78" height="22"/>
            <rect x="0" y="157" width="292" height="195" rx="16"/>
            <rect x="0" y="368" width="292" height="21"/>
            <rect x="0" y="396" width="292" height="21"/>
            <rect x="0" y="424" width="165" height="21"/>

            <rect x="445" y="119" width="78" height="22"/>
            <rect x="445" y="157" width="292" height="195" rx="16"/>
            <rect x="445" y="368" width="292" height="21"/>
            <rect x="445" y="396" width="292" height="21"/>
            <rect x="445" y="424" width="165" height="21"/>

            <rect x="885" y="119" width="78" height="22"/>
            <rect x="885" y="157" width="292" height="195" rx="16"/>
            <rect x="885" y="368" width="292" height="21"/>
            <rect x="885" y="396" width="292" height="21"/>
            <rect x="885" y="424" width="165" height="21"/>
        </ContentLoader>
    )
}