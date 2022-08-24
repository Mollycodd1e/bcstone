import classNames from 'classnames';
import classes from './style.module.scss';
import Image from 'next/image';

export const C_Quote = ({className, photo, name, description}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  return (
      <div className={cls}>
         <Image src={photo} width={76} height={76} />
         <div className={classes.author_name_wrapper}>
           <p>{name}</p>
           <span>{description}</span>
         </div>
      </div>
  )
}