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

  const mail = document.querySelector('#id-email');

  const validName = /^(([a-zA-Zа-яА-ЯЁё-]{1,30}))$/u;

  const EMAIL_REGEXP = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  const onInputCheck = (evt) => {
    if (evt) {
      (evt.target.value.length > 0) && (validName.test(evt.target.value)) ? (evt.target.style.borderColor = formColor.valid , evt.target.nextElementSibling.classList.add('visually-hidden'))
      : (evt.target.value.length > 0) && (!validName.test(evt.target.value)) ? (evt.target.style.borderColor = formColor.invalid, evt.target.nextElementSibling.classList.remove('visually-hidden'))
      : (evt.target.style.borderColor = formColor.default, evt.target.nextElementSibling.classList.add('visually-hidden'))
    }
  }

  const onEmailCheck = (evt) => {
    evt.target.value.length === 0 ? (evt.target.style.borderColor = formColor.default, evt.target.nextElementSibling.classList.add('visually-hidden'))
    : EMAIL_REGEXP.test(evt.target.value) ? (evt.target.style.borderColor = formColor.valid , evt.target.nextElementSibling.classList.add('visually-hidden'))
    : !EMAIL_REGEXP.test(evt.target.value) ? (evt.target.style.borderColor = formColor.invalid, evt.target.nextElementSibling.classList.remove('visually-hidden'))
    : (evt.target.style.borderColor = formColor.default, evt.target.nextElementSibling.classList.add('visually-hidden'))
  }

  const onFormSubmit = (e) => {
      var input = document.querySelector('#id-email');
      e.preventDefault();
      ((input.value.length < 1) || (EMAIL_REGEXP.test(input.value))) ? (input.value='', e.preventDefault(),input.nextElementSibling.classList.remove('visually-hidden'),
      input.nextElementSibling.style.color= formColor.need , input.nextElementSibling.innerHTML='Введите почту', 
      input.style=`border-color: ${formColor.need}`) : (input.style.borderColor = formColor.default, input.nextElementSibling.classList.add('visually-hidden'))
  };
  //onFocus={(e) => (mail.style.borderColor = formColor.default, mail.nextElementSibling.style.color = formColor.error, mail.nextElementSibling.classList.add('visually-hidden'), mail.nextElementSibling.innerHTML='Адрес введен неверно')}
  return (
      <div className={cls}>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <fieldset>
            <legend>{header}</legend>
            <p>{description}</p>
            <div className={classes.input__name_wrapper}>
              <input placeholder="Как к вам обращаться" name="name" id="id-name" onInput={(evt) => onInputCheck(evt)}/>
              <label className={'visually-hidden'} htmlFor="id-name">Имя должно содержать только буквы</label>
            </div>
            <div className={classes.input__mail_wrapper}>
              <input type="email" placeholder='E-mail*' name="email" id="id-email"  onFocus={(e) => (mail.style.borderColor = formColor.default, mail.nextElementSibling.style.color = formColor.error, mail.nextElementSibling.classList.add('visually-hidden'), mail.nextElementSibling.innerHTML='Адрес введен неверно')} onBlur={(evt) => onEmailCheck(evt)}/>
              <label className={'visually-hidden'} htmlFor="id-email">Адрес введен неверно</label>
            </div>
            <button type="submit" >
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