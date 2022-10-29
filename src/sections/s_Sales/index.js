import React, {useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {C_Transit_Sale} from "../../components/c_Transit_Sale";

export const S_Sales = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});
    const [selectedType, setSelectedType] = useState('')
    
    return (
        <div className={classes.wrapRoot}>
            <div className={cls}>
                <div className={classes.wrapper} >
                    {data.sales.map((el, i) => {
                        const {type, name, url, picture} = el;
                        return (<C_Transit_Sale type={type} name={name} url={url} picture={picture} key={i} />)
                    })}
                </div>

            </div>
        </div>
    )
}