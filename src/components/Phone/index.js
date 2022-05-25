import classes from './style.module.scss';
import classNames from "classnames";
import {contacts} from "../../data/contacts";
import {phone} from "../../img/svgInlineImg";

const PhoneNumber = ({innerClass}) => {
    return (
        <div className={innerClass}>{contacts.phone.formatted}</div>
    )
};

export const Phone = ({className, isHeaderSection, isActive}) => {
    const cls = classNames(classes.root, { [classes.HeaderSection]: isHeaderSection, [classes.active]: isHeaderSection && isActive, [className]: className });

    return (
        <a className={cls} href={`tel:${contacts.phone.original}`}>
            {isHeaderSection ?
                (   <>
                        <div className={classes.logoInline} dangerouslySetInnerHTML={{ __html: phone }} />
                        <PhoneNumber innerClass={classes.phoneNumber} />
                    </>
                ) : <PhoneNumber innerClass={classes.phoneNumberFooter} />
            }
        </a>
    )
}