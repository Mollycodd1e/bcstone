import classNames from 'classnames';
import classes from './style.module.scss';

export const C_HeaderData = ({data}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});
  
  return (
      <div className={cls}>
        <p>{data}</p>
      </div>
  )
}