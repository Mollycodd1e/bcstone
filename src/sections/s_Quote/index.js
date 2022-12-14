import classNames from 'classnames';
import { C_Quote } from '../../components/c_Quote';
import classes from './style.module.scss';

export const S_Quote = ({className, photo, name, description, text}) => {
    
    const cls = classNames(classes.root, {[className]: className});
    
    return (
        <div className={cls}>
          <C_Quote photo={photo} name={name} description={description} />
          <div className={classes.quote_text}>{text}</div>
        </div>
    )
}