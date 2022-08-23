import classNames from 'classnames';
import classes from './style.module.scss';

export const C_OnTopBtn = ({className}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  return (
    <div className={cls}>
      <a href="#top"></a>
    </div>
  )
}