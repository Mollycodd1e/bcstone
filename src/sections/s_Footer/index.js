import classNames from 'classnames';
import { C_FooterContacts } from '../../components/c_FooterContacts';
import { C_Logo } from '../../components/c_Logo';
import { C_LogoSH } from '../../components/c_LogoSH';
import { C_Copyright } from '../../components/c_Copyright';
import classes from './style.module.scss';
import { C_OnTopBtn } from '../../components/c_OnTopBtn';
import { useRef } from 'react';
import { useState } from 'react';

export const S_Footer = ({className, phone_number, mail, address, sales_number, telegram, copyright}) => {
  const footerRef = useRef();
  const [isFooter, setIsFooter] = useState(false);
  const cls = classNames(classes.root, {[className]: className});

  function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          setIsFooter(true);
        } else {
          setIsFooter(false);
        }
      });
  }

  let options = {rootMargin: '0px 0px 0px 0px', threshold:[0.25]};

  let observer = new IntersectionObserver( onEntry, options);

  if (footerRef.current) {
      observer.observe(footerRef.current);
  }

  return (
      <div className={classes.wrapRoot}>
          <div className={cls} id={'Контакты'} ref={footerRef}>
                <div className={classNames(classes.footer_wrapper, {[classes.footerShown]: isFooter})} >
                      <h2><span>{copyright.header}</span></h2>
                      <C_FooterContacts phone_number={phone_number} mail={mail} address={address} sales_number={sales_number} telegram={telegram}/>
                      <div className={classes.copyright_wrapper}>
                            <div className={classes.logo_wrapper}>
                                  <C_Logo className={classes.logo_footer}/>
                                  <C_LogoSH className={classes.logoSH_footer}/>
                            </div>
                            <C_Copyright copyright={copyright}/>
                      </div>
                </div>
                <C_OnTopBtn className={classes.footer_ontop_btn}/>
          </div>
      </div>
  )
}