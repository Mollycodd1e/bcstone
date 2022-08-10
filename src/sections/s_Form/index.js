import classNames from 'classnames';
import { C_Form } from '../../components/c_Form';
import classes from './style.module.scss';

export const S_Form = ({}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});
  
  return (
      <div className={cls}>
        <C_Form />
      </div>
  )
}