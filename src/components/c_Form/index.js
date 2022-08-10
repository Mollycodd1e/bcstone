import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Form = ({}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});
  
  return (
      <div className={classes.root}>
        <form>
          <fieldset>
            <legend>Новости рынка и проектов</legend>
            <p>Одним из первых узнавайте о новостях рынка коммерческой недвижимости</p>
            <div className={classes.input__name_wrapper}>
              <input placeholder="Как к вам обращаться" required />
              <label>
             </label>
            </div>
            <div className={classes.input__mail_wrapper}>
              <input type="email" placeholder='E-mail*'/>
              <label>
             </label>
            </div>
            <button type="submit">
              <span >Хочу быть в курсе</span>
            </button>
            <div className={classes.input__checkbox_wrapper}>
              <input className={'visually-hidden'} type="checkbox" name="data" id="id-data" />
              <label htmlFor="id-data">Я согласен с обработкой персональных данных</label>
            </div>
          </fieldset>
        </form>
      </div>
  )
}