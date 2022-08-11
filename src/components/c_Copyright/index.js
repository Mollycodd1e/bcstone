import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Copyright = ({copyright}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
      <div className={cls}>
        <div>{copyright.name}</div>
        <div>{copyright.author}</div>
        <div>{copyright.description}</div>
      </div>
  )
}