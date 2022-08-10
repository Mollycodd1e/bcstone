import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Header = ({header}) => {  
  
  const cls = classNames(classes.root, {[classNames]: classNames});
  
  return (
      <div className={cls}>
        <h1>{header}</h1>
      </div>
  )
}