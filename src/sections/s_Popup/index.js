import classNames from 'classnames';
import classes from './style.module.scss';
import {useState} from "react";

export const S_Popup = ({className, data, children}) => {
    const [isClicked, setIsClicked] = useState(false);
    const cls = classNames(classes.root, {[className]: className, });

    return (
        <div className={cls}>
            <button onClick={() => setIsClicked(true)}/>
            {children}
        </div>
    )
}