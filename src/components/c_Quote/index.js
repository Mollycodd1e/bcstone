import classes from './style.module.scss';

export const C_Quote = ({photo, name, description}) => {
    
    return (
        <div className={classes.root}>
           <img src={`${photo}`} />
           <div className={`author-name-wrapper`}>
             <p>{name}</p>
             <span>{description}</span>
           </div>
        </div>
    )
}