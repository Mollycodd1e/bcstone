import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Text = ({className, text, fullText}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  return (
    <div className={cls}>
      <p dangerouslySetInnerHTML={{ __html: text}}></p>
      <p dangerouslySetInnerHTML={{ __html: `${window.innerWidth < 1000 ? '' : fullText}`}}></p>
    </div>
  )
}