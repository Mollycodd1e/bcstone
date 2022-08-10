import classNames from 'classnames';
import classes from './style.module.scss';

export const C_HeaderDescription = ({text}) => {

  const cls = classNames(classes.root, {[classNames]: classNames});
  
  return (
    <div className={cls}>
      <p>{text}</p>
    </div>
  )
}