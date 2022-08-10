import classNames from 'classnames';
import { C_FooterContacts } from '../../components/c_FooterContacts';
import classes from './style.module.scss';

export const S_Footer = ({phone_number, mail, address, sales_number, telegram}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
      <div className={cls}>
        <C_FooterContacts phone_number={phone_number} mail={mail} address={address} 
          sales_number={sales_number} telegram={telegram}/>
      </div>
  )
}