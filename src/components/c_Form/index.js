import classNames from 'classnames';
import { useState } from 'react';
import classes from './style.module.scss';

export const C_Form = ({className, header, description, ready}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  const formColor = {
    valid: '#A2D3AA',
    invalid: '#E0A8A8',
    need: '#E5BF5B',
    default: '#cccccc'
  }

  const [isSubmit, setSubmit] = useState(false);

  var mail = document.querySelector('#id-email');

  const validName = /^(([a-zA-Zа-яА-ЯЁё-]{1,30}))$/u;

  const EMAIL_REGEXP = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  const onInputValid = (evt) => {
    evt.target.style.borderColor = formColor.valid;
    evt.target.nextElementSibling.classList.add('visually-hidden');
  }

  const onInputInvalid = (evt) => {
    evt.target.style.borderColor = formColor.invalid;
    evt.target.nextElementSibling.style.color= formColor.invalid;
    evt.target.nextElementSibling.classList.remove('visually-hidden');
  }

  const onInputDefault = (evt) => {
    evt.target.style.borderColor = formColor.default;
    evt.target.nextElementSibling.classList.add('visually-hidden');
  }

  const onInputNeed = (e) => {
    var input = document.querySelector('#id-email');
    e.preventDefault();
    input.nextElementSibling.classList.remove('visually-hidden');
    input.nextElementSibling.style.color= formColor.need,
    input.nextElementSibling.innerHTML='Обязательно поле',
    input.style=`border-color: ${formColor.need}`
  }

  const onInputCheck = (evt) => {
    if (evt) {
      (evt.target.value.length > 0) && (validName.test(evt.target.value)) ? (onInputValid(evt))
      : (evt.target.value.length > 0) && (!validName.test(evt.target.value)) ? (onInputInvalid(evt))
      : (onInputDefault(evt))
    }
  }

  const onEmailCheck = (evt) => {
    evt.target.value.length === 0 ? (onInputDefault(evt))
    : EMAIL_REGEXP.test(evt.target.value) ? (onInputValid(evt))
    : !EMAIL_REGEXP.test(evt.target.value) ? (onInputInvalid(evt))
    : (onInputDefault(evt))
  }

  const onFormSubmit = (e) => {
      var input = document.querySelector('#id-email');
      var inputName = document.querySelector('#id-name');

      console.log(input.value.length);
      (input.value.length < 1) ? (onInputNeed(e)) : 
      (!EMAIL_REGEXP.test(input.value)) ? (e.preventDefault()) : 
      ((!validName.test(inputName.value)) && (inputName.value.length > 0)) ? (e.preventDefault()) :
      (setSubmit(true), input.style.borderColor = formColor.default, input.nextElementSibling.classList.add('visually-hidden'), input.nextElementSibling.style.color= formColor.invalid)
  };
  
  return (
      <div className={cls}>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <fieldset>
            <legend>{isSubmit ? ready : header}</legend>
            <p>{description}</p>
            <div className={classes.input__name_wrapper}>
              <input placeholder="Как к вам обращаться" name="name" id="id-name" onInput={(evt) => onInputCheck(evt)}/>
              <label className={'visually-hidden'} htmlFor="id-name">Имя должно содержать только буквы</label>
            </div>
            <div className={classes.input__mail_wrapper}>
              <input placeholder='E-mail*' name="email" id="id-email" onFocus={(e) => (mail.style.borderColor = formColor.default, mail.nextElementSibling.style.color = formColor.error, mail.nextElementSibling.classList.add('visually-hidden'), mail.nextElementSibling.innerHTML='Адрес введен неверно')} onBlur={(evt) => onEmailCheck(evt)}/>
              <label className={'visually-hidden'} htmlFor="id-email">Адрес введен неверно</label>
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