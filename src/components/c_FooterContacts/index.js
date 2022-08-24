import classes from './style.module.scss';
import classNames from "classnames";
import { C_Contacts } from '../c_Contacts';
import { C_Address } from '../c_Address';
import { C_Telegram } from '../c_Telegram';

export const C_FooterContacts = ({className, phone_number, mail, address, sales_number, telegram}) => {

  const cls = classNames(classes.root, {[className]: className});

    return (
      <div className={cls}>
        <C_Contacts phone_number={phone_number} mail={mail} /> 
        <C_Address address={address} sales_number={sales_number} />
        <C_Telegram telegram={telegram} />
      </div>
    )
}