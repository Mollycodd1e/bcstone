import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Address = ({address, sales_number}) => {
    
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
      <div className={cls}>
          <p>{address}</p>
          <p>{sales_number}</p>
      </div>
  )
}