import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Text = ({text, fullText}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
    <div className={cls}>
      <p dangerouslySetInnerHTML={{ __html: text}}></p>
      <p dangerouslySetInnerHTML={{ __html: `${window.width < 1000 ? '' : fullText}`}}></p>
    </div>
  )
}