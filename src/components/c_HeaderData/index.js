import classes from './style.module.scss';

export const C_HeaderData = ({data}) => {   
    return (
        <div className={classes.root}>
          <p>{data}</p>
        </div>
    )
}