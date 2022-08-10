import classNames from "classnames";
import Link from "next/link";
import React from "react";
import classes from './style.module.scss';

export const C_BackButton = () => {

    const cls = classNames(classes.root, {[classNames]: classNames});

    return (
        <React.Fragment>
            <Link href={'/'}>
                <a className={cls} />
            </Link>
        </React.Fragment>
    )
}