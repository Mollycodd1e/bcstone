import classNames from 'classnames';
import { useState } from 'react';
import classes from './style.module.scss';

export const C_FormCopy = ({className, header, description, ready}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isNameLength, setIsNameLength] = useState(false);
  const [isMailValid, setIsMailValid] = useState(true);
  const [isMailLength, setIsMailLength] = useState(false);
  const [isMailNeed, setIsMailNeed] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [mailInput, setMailInput] = useState('');

  const validName = /^(([a-zA-Zа-яА-ЯЁё-]{1,30}))$/u;

  const EMAIL_REGEXP = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const onInputCheck = (evt) => {
    if (evt) {
        if ((evt.target.value.length > 0) && (validName.test(evt.target.value))) {
            setIsNameValid(true);
            setIsNameLength(true);
            setNameInput(evt.target.value);
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
        if ((evt.target.value.length > 0) && (EMAIL_REGEXP.test(evt.target.value))) {
            setIsMailValid(true);
            setIsMailLength(true);
            setIsMailNeed(false);
            setMailInput(evt.target.value);
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

  const onFormSubmitCheck = () => {
    if (isNameValid && isMailValid && isMailLength && isCheck) {
        setIsSubmit(true);
        // console.log(nameInput);
        // console.log(mailInput);

        setIsProcessing(true);

        // отправляем данные в comagic
        Comagic.addOfflineRequest({
            'name': nameInput,
            'email': mailInput,
            'message': 'Отправка данных'
        }, function (o) {
            let response = JSON.parse(o.response);

            if (response.success) {
                // GTM & Metrika
                if (ga) {
                    ga("create", "UA-198733963-1", {name: "tracker"});
                    ga('tracker.send', 'event', 'submit', 'send_button', {
                        'hitCallback': function () {
                            console.log('my own GTM code works!!');
                        }
                    });
                }

                if (ym) {
                    ym(80263774, 'reachGoal', 'send_button');
                    console.log('ym: 80263774  - Yandex');
                } else {
                    yaCounter80263774.reachGoal('send_button');
                    console.log('yaCounter80263774  - Yandex');
                }

                // Pixel
                fbq('track', 'SubmitApplication');

                setIsConfirmed(true);
            } else {
                console.error('CoMagic response failed!', response);
                setIsProcessing(false);
            }
        });
    } 
    if (!isMailLength) {
        setIsMailNeed(true);
    } 
    
    if (!isCheck && !isError) {
        setIsError(true);
    } 
    // else if (!isCheck && isError) {
    //     setIsError(true);
    // } else {
    //     setIsError(false);
    // }
  }
 
  const onAgreementCheck = () => {
    if (isError && !isCheck) {
        setIsCheck(true);
        setIsError(false);
    } else if (isCheck) {
        setIsCheck(false);
    } else if (!isError && !isCheck) {
        setIsCheck(true);
    }
  }
  
  return (
      <div className={cls}>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend>{(isSubmit) ? ready.title : header}</legend>
            <p>{(isSubmit) ? ready.description : description}</p>
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
