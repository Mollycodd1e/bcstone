import classes from './style.module.scss';
import classNames from "classnames";

export const C_Element_Top_Commertial = ({className}) => {
    const cls = classNames(classes.root, {[className]: className});
    return (
       <div className={cls}>

       </div>
    )
}