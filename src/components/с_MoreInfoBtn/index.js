import Link from 'next/link';
import classes from './style.module.scss';

export const C_MoreInfoBtn = ({}) => {
    
    return (
        <div className={classes.root}>
          <Link href={`#`} >
            <a>Узнать больше</a>
          </Link>  
        </div>
    )
}