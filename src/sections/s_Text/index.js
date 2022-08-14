import classNames from 'classnames';
import { C_Text } from '../../components/c_Text';
import classes from './style.module.scss';

export const S_Text = ({text, fullText}) => {
    
    const cls = classNames(classes.root, {[classNames]: classNames});

    return (
        <div className={cls}>
            <C_Text text={text} fullText={fullText}/>
        </div>
    )
}