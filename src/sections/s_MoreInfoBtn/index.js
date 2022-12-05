import classNames from 'classnames';
import { C_MoreInfoBtn } from '../../components/с_MoreInfoBtn';
import classes from './style.module.scss';

export const S_MoreInfoBtn = ({className, text, url}) => {

    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={cls}>
            <C_MoreInfoBtn text={text} url={url} />
        </div>
    )
}