import classNames from 'classnames';
import { useState } from 'react';
import classes from './style.module.scss';

export const C_Form = ({className, header, description, ready}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  const formColor = {
    valid: '#A2D3AA',
    invalid: '#E0A8A8',
    textInvalid: '#C98080',
    need: '#E5BF5B',
    default: '#cccccc'
  }

  const [isSubmit, setSubmit] = useState(false);
  const [isCheck, setCheck] = useState(false);
  const [isError, setError] = useState(false);

  let mail = document.querySelector('#id-email');

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
    let input = document.querySelector('#id-email');
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

  const createError = () => {
    setError(!isError);
    let err = document.createElement('div');
    //err.style=`position: absolute; left: 18px; bottom: -10px; color: ${formColor.need}`;
    err.innerHTML="Обязательно поле";
    err.id = "id-error";
    return err;
  }

  const onFormSubmit = (e) => {
      let input = document.querySelector('#id-email');
      let inputName = document.querySelector('#id-name');
      let checkboxWrapper = document.querySelector('#id-data').parentNode;
      
      (isCheck ? '' : (!isCheck && isError) ? '' : (isCheck && isError) ? checkboxWrapper.appendChild(createError()) : checkboxWrapper.appendChild(createError()));
      (input.value.length < 1) ? (onInputNeed(e)) : 
      (!EMAIL_REGEXP.test(input.value)) ? (e.preventDefault()) : 
      ((!validName.test(inputName.value)) && (inputName.value.length > 0) && isCheck) ? (e.preventDefault()) :
      (setSubmit(true), input.style.borderColor = formColor.default, input.nextElementSibling.classList.add('visually-hidden'), input.nextElementSibling.style.color= formColor.textInvalid,
      console.log(inputName.value), console.log(input.value))
  };
  
  return (
      <div className={cls}>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend>{(isSubmit && isCheck) ? ready.title : header}</legend>
            <p>{(isSubmit && isCheck) ? ready.description : description}</p>
            <div className={classes.input__name_wrapper}>
              <input placeholder="Как к вам обращаться" name="name" id="id-name" onInput={(evt) => onInputCheck(evt)}/>
              <label className={'visually-hidden'} htmlFor="id-name">Имя должно содержать только буквы</label>
            </div>
            <div className={classes.input__mail_wrapper}>
              <input placeholder='E-mail*' name="email" id="id-email" onFocus={(e) => (mail.style.borderColor = formColor.default, mail.nextElementSibling.style.color = formColor.error, mail.nextElementSibling.classList.add('visually-hidden'), mail.nextElementSibling.innerHTML='Адрес введен неверно')} onBlur={(evt) => onEmailCheck(evt)}/>
              <label className={'visually-hidden'} htmlFor="id-email">Адрес введен неверно</label>
            </div>
            <button onClick={(e) => (isCheck && (validName.test(document.querySelector('#id-name').value)) ||(document.querySelector('#id-name').value.length === 0)) ? onFormSubmit(e) : ''} type="submit" disabled={isSubmit ? true : false}>
              <span >Хочу быть в курсе</span>
            </button>
            <div className={classes.input__checkbox_wrapper}>
              <input className={'visually-hidden'} type="checkbox" name="data" id="id-data" onClick={() => isSubmit ? '' : (setCheck(!isCheck), (isError ? document.querySelector('#id-error').remove() : ''), isError ? setError(!isError) : '')}/>
              <label htmlFor="id-data">Я согласен с обработкой персональных данных</label>
            </div>
          </fieldset>
        </form>
      </div>
  )
}