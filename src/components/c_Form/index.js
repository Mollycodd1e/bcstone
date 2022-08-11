import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Form = ({header, description, ready}) => {
  
  const cls = classNames(classes.root, {[classNames]: classNames});

  const formColor = {
    valid: '#A2D3AA',
    invalid: '#E0A8A8',
    need: '#E5BF5B',
    default: '#cccccc'
  }

  const validName = /^(([a-zA-Zа-яА-ЯЁё-]{1,30}))$/u;

  const onInputCheck = (evt) => {
    if (evt) {
      (evt.target.value.length > 0) && (validName.test(evt.target.value)) ? evt.target.style.borderColor = formColor.valid 
      : (evt.target.value.length > 0) && (!validName.test(evt.target.value)) ? evt.target.style.borderColor = formColor.invalid 
      : evt.target.style.borderColor = formColor.default
    }
  }

  return (
      <div className={cls}>
        <form>
          <fieldset>
            <legend>{header}</legend>
            <p>{description}</p>
            <div className={classes.input__name_wrapper}>
              <input placeholder="Как к вам обращаться" name="name" id="id-name" onInput={(evt) => onInputCheck(evt)}/>
              <label htmlFor="id-name"/>
            </div>
            <div className={classes.input__mail_wrapper}>
              <input type="email" placeholder='E-mail*' name="email" id="id-email" required/>
              <label id="id-email" />
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