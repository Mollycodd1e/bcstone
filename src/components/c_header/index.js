import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Header = ({className, header}) => {  
  
  const cls = classNames(classes.root, {[className]: className});
  
  return (
      <div id="top" className={cls}>
        <h1>{header}</h1>
      </div>
  )
}