import { C_Quote } from '../../components/c_Quote';
import classes from './style.module.scss';

export const S_Quote = ({photo, name, description, text}) => {
    
    return (
        <div className={classes.root}>
          <C_Quote photo={photo} name={name} description={description} />
          <div className={`quote-text`}>{text} </div>
        </div>
    )
}