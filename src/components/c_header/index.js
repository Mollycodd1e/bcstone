import classes from './style.module.scss';

export const C_Header = ({header}) => {   
    return (
        <div className={classes.root}>
          <h1>{header}</h1>
        </div>
    )
}