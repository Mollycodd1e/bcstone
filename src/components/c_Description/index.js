import classes from './style.module.scss';

export const C_Description = ({description}) => {
  
    return (
      <div className={classes.root}>
        <p>{description}</p>
      </div>
    )
}