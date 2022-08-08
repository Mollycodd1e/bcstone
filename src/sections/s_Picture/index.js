import { C_Description } from '../../components/c_Description';
import classes from './style.module.scss';

export const S_Picture = ({src, description}) => {
    
    return (
        <div className={classes.root}>
          <img src={src}/>
          <C_Description description={description} />
        </div>
    )
}