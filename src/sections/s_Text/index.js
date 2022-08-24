import classNames from 'classnames';
import { C_Text } from '../../components/c_Text';
import classes from './style.module.scss';

export const S_Text = ({className, text}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={cls}>
            <C_Text text={text}/>
        </div>
    )
}