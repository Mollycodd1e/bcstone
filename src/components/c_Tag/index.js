import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Tag = ({text}) => {

  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
      <div className={cls}>
        #{text}
      </div>
  )
}