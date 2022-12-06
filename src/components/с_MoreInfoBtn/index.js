import classNames from 'classnames';
import Link from 'next/link';
import classes from './style.module.scss';

export const C_MoreInfoBtn = ({className, text, url}) => {
    
  const cls = classNames(classes.root, {[className]: className});

  return (
      <div className={cls}>
        <Link href={`${url}`} >
          <a>{text}</a>
        </Link>  
      </div>
  )
}