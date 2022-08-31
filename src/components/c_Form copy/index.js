import classNames from 'classnames';
import { useState } from 'react';
import classes from './style.module.scss';

export const C_FormCopy = ({className, header, description, ready}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  const [isNameValid, setIsNameValid] = useState(true);
  const [isNameLength, setIsNameLength] = useState(false);
  const [isMailValid, setIsMailValid] = useState(true);
  const [isMailLength, setIsMailLength] = useState(false);
  const [isMailNeed, setIsMailNeed] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isError, setIsError] = useState(false);

  const validName = /^(([a-zA-Zа-яА-ЯЁё-]{1,30}))$/u;

  const EMAIL_REGEXP = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const onInputCheck = (evt) => {
    if (evt) {
        if ((evt.target.value.length > 0) && (validName.test(evt.target.value))) {
            setIsNameValid(true);
            setIsNameLength(true);
        } else if ((evt.target.value.length > 0) && (!validName.test(evt.target.value))) {
            setIsNameValid(false);
        } else {
            setIsNameValid(true);
            setIsNameLength(false);
        }
    }    
  }

  const onMailCheck = (evt) => {
    if (evt) {
        console.log(evt)
        if ((evt.target.value.length > 0) && (EMAIL_REGEXP.test(evt.target.value))) {
            setIsMailValid(true);
            setIsMailLength(true);
            setIsMailNeed(false);
        } else if ((evt.target.value.length > 0) && (!EMAIL_REGEXP.test(evt.target.value))) {
            setIsMailValid(false);
            setIsMailNeed(false);
        } else {
            setIsMailValid(true);
            setIsMailLength(false);
            setIsMailNeed(false);
        }
    }    
  }

  // const createError = () => {
  //   const checkboxWrapper = document.querySelector('#id-data').parentNode;
  //   console.log(checkboxWrapper);
  //   let err = document.createElement('div');
  //   err.innerHTML="Обязательно поле";
  //   err.id = "id-error";
  //   checkboxWrapper.appendChild(err);
  // }

  // const deleteError = () => {
  //   const err = document.querySelector('#id-error');
  //   console.log(err);
  //   err.remove();
  // }

  const onFormSubmitCheck = () => {
    if (isNameValid && isMailValid && isMailLength && isCheck) {
        setIsSubmit(true);
    } else if (!isMailLength) {
        setIsMailNeed(true);
    } 
    
    if (!isCheck && !isError) {
        //createError();
        setIsError(true)
    }
  }
 
  const onAgreementCheck = () => {
    if (isError && !isCheck) {
        setIsCheck(true);
        setIsError(false);
        //deleteError();
    } else if (isCheck) {
        setIsCheck(false);
    }
  }
  
  return (
      <div className={cls}>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend>{(isSubmit && isCheck) ? ready.title : header}</legend>
            <p>{(isSubmit && isCheck) ? ready.description : description}</p>
            <div className={classNames(classes.input__name_wrapper , {[classes.input__name_wrapper_valid]: isNameValid && isNameLength},
              {[classes.input__name_wrapper_invalid]: !isNameValid})}>
              <input placeholder="Как к вам обращаться" name="name" id="id-name" onInput={(evt) => onInputCheck(evt)}/>
              <label className={!isNameValid ? '' : 'visually-hidden'} htmlFor="id-name">Имя должно содержать только буквы</label>
            </div>
            <div className={classNames(classes.input__mail_wrapper , {[classes.input__mail_wrapper_valid]: isMailValid && isMailLength},
              {[classes.input__mail_wrapper_invalid]: !isMailValid}, {[classes.input__mail_wrapper_need]: isMailNeed})}>
              <input placeholder='E-mail*' name="email" id="id-email" onFocus={(evt) => onMailCheck(evt)} onBlur={(evt) => onMailCheck(evt)}/>
              <label className={!isMailValid || (isMailNeed) ? '' : 'visually-hidden'} htmlFor="id-email">
                {!isMailNeed ? 'Адрес введен неверно' : 'Обязательное поле'}
              </label>
            </div>
            <button onClick={(e) => onFormSubmitCheck(e)} type="submit" disabled={isSubmit}>
              <span >Хочу быть в курсе</span>
            </button>
            <div className={classNames(classes.input__checkbox_wrapper, {[classes.input__checkbox_wrapper_need]: !isCheck && isError})}>
              <input className={'visually-hidden'} type="checkbox" name="data" id="id-data" 
                 onChange={() => onAgreementCheck()}/>
              <label htmlFor="id-data">Я согласен с обработкой персональных данных</label>
              {isError ? <div className={classes.agreement_error}>Обязательное поле</div> : null}
            </div>
          </fieldset>
        </form>
      </div>
  )
}
