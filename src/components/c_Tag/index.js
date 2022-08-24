import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Tag = ({className, text}) => {

  const cls = classNames(classes.root, {[className]: className});

  return (
      <div className={cls}>
        #{text}
      </div>
  )
}