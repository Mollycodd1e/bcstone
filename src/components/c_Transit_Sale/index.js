import classes from './style.module.scss';
import classNames from "classnames";
import Link from "next/link";

export const C_Transit_Sale = ({className, url, name, type }) => {
    const cls = classNames(classes.root, {[className]: className });
    return (
        <div className={cls}>
            <div className={classes.picture}/>
            <Link href={url} className={classes.link}>
                <a>перейти</a>
            </Link>
            <h2 className={classes.title}>{name}</h2>
        </div>
    )
}