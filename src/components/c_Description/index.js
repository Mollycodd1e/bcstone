import classes from './style.module.scss';
import classNames from "classnames";

export const C_Description = ({description}) => {

  const cls = classNames(classes.root, {[classNames]: classNames});

    return (
      <div className={cls}>
        <p>{description}</p>
      </div>
    )
}