import {S_Footer} from "../sections/s_Footer";
import {footerData} from "../data/mocks";

export default function Footer() {
    return (
        <S_Footer phone_number={footerData.contacts.phone} mail={footerData.contacts.mail} address={footerData.contacts.address} sales_number={footerData.contacts.sales} telegram={footerData.contacts.telegram} copyright={footerData.copyright} />
    )
}