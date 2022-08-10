import classNames from 'classnames';
import Link from 'next/link';
import classes from './style.module.scss';

export const C_MoreInfoBtn = ({}) => {
    
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
      <div className={cls}>
        <Link href={`#`} >
          <a>Узнать больше</a>
        </Link>  
      </div>
  )
}