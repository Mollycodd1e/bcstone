import classes from './style.module.scss';
import classNames from "classnames";

export const C_Description = ({className, description}) => {

  const cls = classNames(classes.root, {[className]: className});

    return (
      <div className={cls}>
        <p>{description}</p>
      </div>
    )
}