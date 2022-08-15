import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Video = ({url}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
    <iframe className={cls} src={url} />
  )
}