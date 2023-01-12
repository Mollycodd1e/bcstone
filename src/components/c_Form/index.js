import classNames from 'classnames';
import { useState } from 'react';
import classes from './style.module.scss';

export const C_Form = ({className, header, description, ready}) => {
  
  const cls = classNames(classes.root, {[className]: className});

  // классное решение - наглядно! Но я бы ограничился классами в CSS
  const formColor = {
    valid: '#A2D3AA',
    invalid: '#E0A8A8',
    textInvalid: '#C98080',
    need: '#E5BF5B',
    default: '#cccccc'
  }
  // вот ту ты начал использовать хуки - это круто и упрощает разаработку.
  const [isSubmit, setSubmit] = useState(false);
  const [isCheck, setCheck] = useState(false);
  const [isError, setError] = useState(false);

  // что будет, если я захочу переиспользовать твой компонент? Надо будет новый id писать? Форм на странице бывает несколько штук
  let mail = document.querySelector('#id-email');

  const validName = /^(([a-zA-Zа-яА-ЯЁё-]{1,30}))$/u;

  const EMAIL_REGEXP = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  const onInputValid = (evt) => {
    // это решение хорошо, когда у нас нет фреймворков - тут можно было бы обойтись классом
    evt.target.style.borderColor = formColor.valid;
    // посмотри, как работает библиотека classNames - по булеву значению можно добавлять или убирать класс
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
      // многоэтажный тернарный оператор ухудшает читаемость кода - он больше подходит для простых условий
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
            {/* очень хорошо, что ты используешь семантичный подход*/}
            <legend>{(isSubmit && isCheck) ? ready.title : header}</legend>
            <p>{(isSubmit && isCheck) ? ready.description : description}</p>
            <div className={classes.input__name_wrapper}>
              <input placeholder="Как к вам обращаться" name="name" id="id-name" onInput={(evt) => onInputCheck(evt)}/>
              <label className={'visually-hidden'} htmlFor="id-name">Имя должно содержать только буквы</label>
            </div>
            <div className={classes.input__mail_wrapper}>
              {/* callback для onFocus можно вынести в отдельную функцию - так будет удобнее рабоать (в других местах тоже). Сейчас логика сильно перемешана с вёрсткой */}
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
// Ниже форма из другого проекта для примера
/*
import InputMask from 'react-input-mask';
import classes from './style.module.scss';
import { Button } from "../Button";
import { useState } from "react";
var classNames = require('classnames');

export function Form({formClassName, isPopUp}) {

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIEmailValid] = useState(true);

    const onButtonClick = (e) => {
        e.preventDefault();

        if (isPhoneValid && isNameValid && isEmailValid && name.length !== 0 && phone.length !== 0) {
            setIsProcessing(true);

            // отправляем данные в comagic
            Comagic.addOfflineRequest({
                'name': name,
                'phone': phone,
                'email': email,
                'message': 'Отправка данных'
            }, function (o) {
                let response = JSON.parse(o.response);

                if (response.success) {
                    // GTM & Metrika
                    if (ga) {
                        ga("create", "UA-206121389-1", {name: "tracker"});
                        ga('tracker.send', 'event', 'submit', 'send_button', {
                            'hitCallback': function () {
                                console.log('my own GTM code works!!');
                            }
                        });
                    }

                    if (ym) {
                        ym(84684538, 'reachGoal', 'send_button');
                        console.log('ym: 84684538  - Yandex');
                    } else {
                        yaCounter84684538.reachGoal('send_button');
                        console.log('yaCounter84684538  - Yandex');
                    }

                    // Pixel
                    fbq('track', 'SubmitApplication');

                    setIsConfirmed(true);
                } else {
                    console.error('CoMagic response failed!', response);
                    setIsProcessing(false);
                }
            });
        } else if (name.length === 0) {
            setIsNameValid(false);
        } else if (phone.length === 0) {
            setIsPhoneValid(false);
        }
    }
    return (
        <>
            {!isConfirmed ? (
                <form
                    className={classNames('pop_up_open', classes.form, {[formClassName]: formClassName})}
                    action={"submit"}
                >
                    <h3 className={classes.formTitle}>
                        <span className={classes.formTitleTop}>Заполните форму,</span>
                        <span className={classes.formTitleBottom}>чтобы получить обратный звонок</span>
                    </h3>
                    <input
                        required={true}
                        className={classNames(classes.inputCommon, classes.inputUser, {[classes.inputError]: !isNameValid})}
                        type="text"
                        placeholder={'Введите Ваше имя *'}
                        value={name}
                        onChange={(e) => {
                            setName(prev => e.target.value);
                            if (!e.target.value) {
                                setIsNameValid(false);
                            } else {
                                setIsNameValid(true);
                            }
                        }}
                    />

                    <InputMask mask="+7-999-999-99-99" value={phone}
                               onChange={(e) => {
                                   setPhone(prev => e.target.value);

                                   if (!e.target.value.length || e.target.value.length > 15 && e.target.value.slice(-1) === '_') {
                                       setIsPhoneValid(false)
                                   } else {
                                       setIsPhoneValid(true)
                                   }
                               }}>
                        {(inputProps) => (
                            <input
                                {...inputProps}
                                required={true}
                                className={classNames(classes.inputCommon, classes.inputPhone, {[classes.inputError]: !isPhoneValid})}
                                type="text"
                                placeholder={'Введите Ваш номер телефона *'}
                            />
                        )}
                    </InputMask>

                    <input
                        className={classNames(classes.inputCommon, classes.inputMail, {[classes.inputError]: !isEmailValid})}
                        type="text"
                        placeholder={'Введите Ваш e-mail'}
                        value={email}
                        onChange={(e) => {
                            setEmail(prev => e.target.value);

                            const validString = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                            const isValid = new RegExp(validString);

                            if (e.target.value.length === 0) {
                                setIEmailValid(true)
                            } else if (!isValid.test(e.target.value)) {
                                setIEmailValid(false)
                            } else {
                                setIEmailValid(true)
                            }
                        }}
                    />
                    <Button
                        onClick={(e) => onButtonClick(e)}
                        buttonWrapperClassName={classes.buttonWrapperClassName}
                        disabled={isProcessing}
                    />
                    <span className={classes.personal}>
                            Нажимая кнопку, вы соглашаетесь<br/>с&nbsp;
                        <a href="policy">обработкой персональных данных</a>
                        </span>
                    <div className={classNames(classes.formNote, {[classes.formNotePopUp]: isPopUp})}>
                        Уникальное предложение
                        по продаже готового
                        арендного бизнеса
                    </div>
                </form>
                ) : (
                <div className={classNames('pop_up_closed', classes.confirm, {[classes.confirmNotPopup]: !isPopUp})}>
                    <h3>
                        Отлично!
                    </h3>
                    <p>
                        Наш менеджер свяжется с Вами
                        в ближайшее время
                    </p>
                </div>
            )
        }
    </>
    )
}

* */