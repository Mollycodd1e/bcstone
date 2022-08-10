import { C_Video } from '../../components/c_Video';
import { C_Description } from '../../components/c_Description';
import classes from './style.module.scss';
import classNames from 'classnames';

export const S_Video = ({url, description}) => {
    
    const cls = classNames(classes.root, {[classNames]: classNames});

    return (
      <div className={cls}>
        <C_Video url={url} />
        <C_Description description={description} />
      </div>
    )
}