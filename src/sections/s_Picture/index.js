import classNames from 'classnames';
import { C_Description } from '../../components/c_Description';
import classes from './style.module.scss';

export const S_Picture = ({className, src, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={cls}>
          <img src={src}/>
          <C_Description description={description} />
        </div>
    )
}