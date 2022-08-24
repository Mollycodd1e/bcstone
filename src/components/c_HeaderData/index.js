import classNames from 'classnames';
import classes from './style.module.scss';

export const C_HeaderData = ({className, data}) => {
  
  const cls = classNames(classes.root, {[className]: className});
  
  return (
      <div className={cls}>
        <p>{data}</p>
      </div>
  )
}