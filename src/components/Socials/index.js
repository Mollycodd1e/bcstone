import classes from './style.module.scss';
import classNames from "classnames";
import {fbIconBig, fbIconSmall, instIconBig, instIconSmall, tgIconBig, tgIconSmall} from "../../img/svgInlineImg";
import {links} from "../../data/socialLinks"

export const Socials = ({className, isHeaderSection, isActive}) => {
    const cls = classNames(classes.root, {[classes.socialsInHeader]: isHeaderSection, [classes.activeHeader]: isHeaderSection && isActive, [className]: className });
    return (
        <div className={cls}>
            {isHeaderSection ? (
                <>
                    <a href={links.inst} className={classNames(classes.icon, classes.instIcon)} dangerouslySetInnerHTML={{ __html: instIconSmall}} target="_blank" rel="noreferrer" />
                    <a href={links.tg} className={classNames(classes.icon, classes.tgIcon)} dangerouslySetInnerHTML={{ __html: tgIconSmall}} target="_blank" rel="noreferrer" />
                    <a href={links.fb} className={classNames(classes.icon, classes.fbIcon)} dangerouslySetInnerHTML={{ __html: fbIconSmall}} target="_blank" rel="noreferrer" />
                </>
            ) : (
                <>
                    <a href={links.inst} className={classNames(classes.icon, classes.instIcon)} dangerouslySetInnerHTML={{ __html: instIconBig}} target="_blank" rel="noreferrer" />
                    <a href={links.tg} className={classNames(classes.icon, classes.tgIcon)} dangerouslySetInnerHTML={{ __html: tgIconBig}} target="_blank" rel="noreferrer" />
                    <a href={links.fb} className={classNames(classes.icon, classes.fbIcon)} dangerouslySetInnerHTML={{ __html: fbIconBig}} target="_blank" rel="noreferrer" />
                </>
            )}
        </div>
    )
}