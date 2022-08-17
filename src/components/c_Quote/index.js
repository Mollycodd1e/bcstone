import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Quote = ({className, photo, name, description}) => {
  
  const cls = classNames(classes.root, {[className]: className});

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