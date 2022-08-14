import classNames from 'classnames';
import { C_FooterContacts } from '../../components/c_FooterContacts';
import { C_Logo } from '../../components/c_Logo';
import { C_LogoSH } from '../../components/c_LogoSH';
import { C_Copyright } from '../../components/c_Copyright';
import classes from './style.module.scss';

export const S_Footer = ({phone_number, mail, address, sales_number, telegram, copyright}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
      <div className={cls}>
        <h2>{copyright.header}</h2>
        <C_FooterContacts phone_number={phone_number} mail={mail} address={address} 
          sales_number={sales_number} telegram={telegram}/>
        <div className={classes.copyright_wrapper}>
          <div className={classes.logo_wrapper}>
            <C_Logo className={classes.logo_footer}/>
            <C_LogoSH className={classes.logoSH_footer}/>
          </div>
          <C_Copyright copyright={copyright}/>
        </div>
      </div>
  )
}