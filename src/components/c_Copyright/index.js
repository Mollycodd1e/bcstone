import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Copyright = ({className, copyright}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  return (
      <div className={cls}>
        <div>{copyright.name}</div>
        <div>{copyright.author}</div>
        <div>{copyright.description}</div>
      </div>
  )
}