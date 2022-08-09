import classes from './style.module.scss';

export const C_Form = ({}) => {   
    return (
        <div className={classes.root}>
          <form>
            <fieldset>
              <legend>Новости рынка и проектов</legend>
              <p>Одним из первых узнавайте о новостях рынка коммерческой недвижимости</p>
              <div className={'input__name-wrapper'}>
                <input placeholder="Как к вам обращаться" required />
                <label>

                </label>
              </div>
              <div className={'input__mail-wrapper'}>
                <input type="email" placeholder='E-mail*'/>
                <label>

                </label>
              </div>
              <button type="submit">
                <span >Хочу быть в курсе</span>
              </button>
              <div className={'input__checkbox-wrapper'}>
                <input className={'visually-hidden'} type="checkbox" name="data" id="id-data" />
                <label htmlFor="id-data">Я согласен с обработкой персональных данных</label>
              </div>
            </fieldset>
          </form>
        </div>
    )
}