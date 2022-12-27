import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Preloader = ({className, isPreloader}) => {
  
  const cls = classNames(classes.root, {[className]: className, [classes.unactive]: !isPreloader});

  return (
    <div className={cls}>
        <div className={classes.lds_grid}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
  )
}