import { C_Video } from '../../components/c_Video';
import { C_VideoDescription } from '../../components/c_VideoDescription';
import classes from './style.module.scss';

export const S_Video = ({url, description}) => {
    
    return (
      <div className={classes.root}>
        <C_Video url={url} />
        <C_VideoDescription description={description} />
      </div>
    )
}