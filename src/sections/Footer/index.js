import classes from './style.module.scss';
import classNames from "classnames";
import {footer} from "../../data/footer";
import {contacts} from "../../data/contacts";
import {Socials} from "../../components/Socials";
import {NavFooter} from "../../components/NavFooter";

export const Footer = ({className}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls} id={"contacts"}>
            <div className={classes.text1}>{footer.text1}</div>
            <a className={classes.phone} href={`tel:${contacts.phone.original}`}>{contacts.phone.formatted}</a>
            <a className={classes.sales} href={`mailto:${contacts.sales.original}`}>{contacts.sales.formatted}</a>
            <div className={classes.text2} dangerouslySetInnerHTML={{ __html: footer.text2}} />
            <a className={classes.geo} href={`${contacts.geo.original}`} target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{ __html: contacts.geo.formatted}}/>
            <Socials isActive={false} isHeaderSection={false} className={classes.Socials} />
            <div className={classes.text3} dangerouslySetInnerHTML={{ __html: footer.text3}} />
            <div className={classes.emptyLogo} dangerouslySetInnerHTML={{ __html: footer.emptyLogo}} />
            <NavFooter className={classes.NavFooter} />
            <div className={classes.stoneLogo} dangerouslySetInnerHTML={{ __html: footer.stoneLogo}} />
            <div className={classes.developerLogo} dangerouslySetInnerHTML={{ __html: footer.developerLogo}} />
            <div className={classes.text4} dangerouslySetInnerHTML={{ __html: footer.text4}} />
            <div className={classes.text5} dangerouslySetInnerHTML={{ __html: footer.text5}} />
            <div className={classes.text6} dangerouslySetInnerHTML={{ __html: footer.text6}} />
        </div>
    )
}
