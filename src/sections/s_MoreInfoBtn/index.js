import classNames from 'classnames';
import { C_MoreInfoBtn } from '../../components/с_MoreInfoBtn';
import classes from './style.module.scss';

export const S_MoreInfoBtn = ({}) => {

    const cls = classNames(classes.root, {[classNames]: classNames});

    return (
        <div className={cls}>
            <C_MoreInfoBtn />
        </div>
    )
}