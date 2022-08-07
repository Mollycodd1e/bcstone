import classes from './style.module.scss';

export const C_Tag = ({text}) => {
    
    return (
        <div className={classes.root}>
          #{text}
        </div>
    )
}