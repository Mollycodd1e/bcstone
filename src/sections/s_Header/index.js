import classNames from 'classnames';
import { C_Header } from '../../components/c_Header';
import { C_HeaderData } from '../../components/c_HeaderData';
import { C_HeaderDescription } from '../../components/c_HeaderDescription';
import classes from './style.module.scss';

export const S_Header = ({header, text, data}) => {
  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
    <div className={cls}>
      <C_Header header={header}/>
      <C_HeaderDescription text={text}/>
      <C_HeaderData data={data} />
    </div>
  )
}