import { C_Text } from '../../components/c_Text';
import classes from './style.module.scss';

export const S_Text = ({text}) => {
    
    return (
        <div className={classes.root}>
            <C_Text text={text}/>
        </div>
    )
}