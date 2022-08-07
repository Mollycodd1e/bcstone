import classes from './style.module.scss';

export const C_HeaderDescription = ({text}) => {   
    return (
        <div className={classes.root}>
          <p>{text}</p>
        </div>
    )
}