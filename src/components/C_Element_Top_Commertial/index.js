import classes from './style.module.scss';
import classNames from "classnames";

export const C_Element_Top_Commertial = ({className, element}) => {
    const cls = classNames(classes.root, {[className]: className});
    const {title, content, link, link_text, color} = element;

    return (
       <div className={cls}>
            <div
                className={classes.decor}
                style={{backgroundColor: `${color}`}}
            />
            <div className={classes.wrap}>
                <span className={classes.title}>
                    {title}
                </span>
                <span className={classes.content}>
                    {content}
                </span>
                <a  className={classes.link}
                    href={`${link}`}>
                    {link_text}
                </a>
            </div>
       </div>
    )
}