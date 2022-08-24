import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Address = ({className, address, sales_number}) => {
    
  const cls = classNames(classes.root, {[className]: className});

  return (
      <div className={cls}>
          <p>{address}</p>
          <p>{sales_number}</p>
      </div>
  )
}