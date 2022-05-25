import classes from './style.module.scss';
import classNames from "classnames";
import {logo} from '../../img/svgInlineImg.js'
import {links} from "../../data/stoneLinks";

export const Logo = ({className, isActive}) => {
    const cls = classNames(classes.root, {[classes.active]: isActive, [className]: className });
    return (
        <a className={cls} href={links.stoneHedge} target={"_blank"} rel="noreferrer">
            <div className={classes.logoInline} dangerouslySetInnerHTML={{ __html: logo }} />
        </a>
    )
}