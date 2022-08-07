import classes from './style.module.scss';

export const C_VideoDescription = ({description}) => {
  
    return (
      <div className={classes.root}>
        <p>{description}</p>
      </div>
    )
}