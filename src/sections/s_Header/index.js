import { C_Header } from '../../components/c_header';
import { C_HeaderData } from '../../components/c_HeaderData';
import { C_HeaderDescription } from '../../components/c_HeaderDescription';
import classes from './style.module.scss';

export const S_Header = ({header, text, data}) => {   
    return (
        <div className={classes.root}>
          <C_Header header={header}/>
          <C_HeaderDescription text={text}/>
          <C_HeaderData data={data} />
        </div>
    )
}