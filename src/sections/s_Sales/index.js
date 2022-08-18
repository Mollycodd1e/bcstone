import React from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {C_Transit_Sale} from "../../components/c_Transit_Sale";

const sales = [
    {type: "office", name: "Офисы", url: ""},
    {type: "retail", name: "Ритейл", url: ""},
];

export const S_Sales = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});


    return (
        <div className={cls}>
            {sales.map(el => {
                const {type, name, url} = el;
                return (<C_Transit_Sale type={type} name={name} url={url} />)
            })}
        </div>
    )
}