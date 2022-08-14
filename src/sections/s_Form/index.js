import classNames from 'classnames';
import { C_Form } from '../../components/c_Form';
import { C_Logo } from '../../components/c_Logo';
import classes from './style.module.scss';

export const S_Form = ({header, description, ready}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});
  
  return (
      <div className={cls}>
        <div className={classes.logo_form_wrapper}>
          <C_Logo className={classes.form_logo}/>
          <C_Form header={header} description={description} ready={ready}/>
        </div>
      </div>
  )
}