import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Quote = ({photo, name, description}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
      <div className={cls}>
         <img src={`${photo}`} />
         <div className={classes.author_name_wrapper}>
           <p>{name}</p>
           <span>{description}</span>
         </div>
      </div>
  )
}