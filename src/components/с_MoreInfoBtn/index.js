import classNames from 'classnames';
import Link from 'next/link';
import classes from './style.module.scss';

export const C_MoreInfoBtn = ({className}) => {
    
  const cls = classNames(classes.root, {[className]: className});

  return (
      <div className={cls}>
        <Link href={`#`} >
          <a>Узнать больше</a>
        </Link>  
      </div>
  )
}