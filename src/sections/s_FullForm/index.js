import classNames from 'classnames';
import classes from './style.module.scss';
import {C_FullForm} from "../../components/c_FullForm";

export const S_FullForm = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={classes.wrapRoot}>
            <C_FullForm data={data} className={classes.fullFormIndexSection} />
        </div>
    )
}