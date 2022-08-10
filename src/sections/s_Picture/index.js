import classNames from 'classnames';
import { C_Description } from '../../components/c_Description';
import classes from './style.module.scss';

export const S_Picture = ({src, description}) => {
    
    const cls = classNames(classes.root, {[classNames]: classNames});

    return (
        <div className={cls}>
          <img src={src}/>
          <C_Description description={description} />
        </div>
    )
}