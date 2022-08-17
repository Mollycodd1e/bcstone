import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Video = ({className, url}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  return (
    <iframe className={cls} src={url} />
  )
}