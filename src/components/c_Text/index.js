import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Text = ({text}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
    <div className={cls}>
      <p dangerouslySetInnerHTML={{ __html: text}}></p>
    </div>
  )
}