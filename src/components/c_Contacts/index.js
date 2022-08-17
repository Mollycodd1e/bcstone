import classes from './style.module.scss';
import classNames from "classnames";

export const C_Contacts = ({className, phone_number, mail}) => {

  const cls = classNames(classes.root, {[className]: className});

    return (
      <div className={cls}>
        <a href={`tel:${phone_number}`}>{phone_number}</a>
        <a href={`mailto:${mail}`}>{mail}</a>
      </div> 
    )
}