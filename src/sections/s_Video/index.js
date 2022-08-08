import { C_Video } from '../../components/c_Video';
import { C_Description } from '../../components/c_Description';
import classes from './style.module.scss';

export const S_Video = ({url, description}) => {
    
    return (
      <div className={classes.root}>
        <C_Video url={url} />
        <C_Description description={description} />
      </div>
    )
}