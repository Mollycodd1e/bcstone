import classNames from 'classnames';
import classes from './style.module.scss';

export const C_HeaderDescription = ({className, text}) => {

  const cls = classNames(classes.root, {[className]: className});
  
  return (
    <div className={cls}>
      <p>{text}</p>
    </div>
  )
}