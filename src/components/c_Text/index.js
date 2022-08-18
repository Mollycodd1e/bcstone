import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Text = ({className, text}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  return (
    <div className={cls}>
      <p dangerouslySetInnerHTML={{ __html: text}}></p>
    </div>
  )
}