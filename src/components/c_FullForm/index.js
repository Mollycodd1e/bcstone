import InputMask from 'react-input-mask';
import classNames from 'classnames';
import classes from './style.module.scss';
import {useEffect, useState} from "react";
import { useRef } from 'react';
import { C_MainButton } from '../c_MainButton';
import {useStore} from "../../store/stores";

export const C_FullForm = ({className, data}) => {
    const cls = classNames(classes.root, "form", "form--top", {[className]: className});
    const {description, descriptionSuccess, title, titleSuccess} = data.main_form;
    
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const titleRef = useRef();
    const [isTitle, setIsTitle] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIEmailValid] = useState(true);
    const [isCheckValid, setIsCheckValid] = useState(false);
    const [isOnlyCheckboxUnpushed, setIsOnlyCheckboxUnpushed] = useState(false);
    const store = useStore()
    const popup = store.popUpFormState;

    useEffect(() => {
        function onEntryTitle(entry) {
            entry.forEach(change => {
              if (change.isIntersecting) {
                setIsTitle(true);
              }
            });
        }
    
        let options = { rootMargin: '0px', threshold: [0.5] };
    
        let observer = new IntersectionObserver( onEntryTitle, options);
    
        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
    })


    const validName = /^(([a-zA-Zа-яА-ЯЁё-]{1,30}))$/u;

    const fieldText = {
        require: "Обязательное поле",
        error: {
            name: "Имя должно содержать только буквы",
            email: "Адрес введен неверно",
        }
    }

    const errorType = {
        red: "red",
        orange: "orange",
    }

    const [errorNameText, setErrorNameText] = useState('');
    const [errorNameCode, setErrorNameCode] = useState('');
    const [errorPhoneText, setErrorPhoneText] = useState('');
    const [errorPhoneCode, setErrorPhoneCode] = useState('');
    const [errorEmailText, setErrorEmailText] = useState('');
    const [errorEmailCode, setErrorEmailCode] = useState('');

    const onButtonClick = (e) => {
        e.preventDefault();

        if (!name && !phone) {
            setErrorNameText(`${fieldText.require}`);
            setErrorNameCode(`${errorType.orange}`);
            setErrorPhoneText(`${fieldText.require}`);
            setErrorPhoneCode(`${errorType.orange}`);
        } else if (!name) {
            setErrorNameText(`${fieldText.require}`);
            setErrorNameCode(`${errorType.orange}`);
        } else if (!phone) {
            setErrorPhoneText(`${fieldText.require}`);
            setErrorPhoneCode(`${errorType.orange}`);
        } else {
        }

        if (isPhoneValid && isNameValid && !isCheckValid) {
            setIsOnlyCheckboxUnpushed(true);
        }

        // if (isPhoneValid && isNameValid && isEmailValid && isCheckValid) {
        if (isPhoneValid && isNameValid && isCheckValid) {
            // console.log("phone ", phone)
            // console.log("name", name)
            // console.log("email", email)
            // console.log("isCheckValid", isCheckValid)
            setIsProcessing(true);

            // отправляем данные в comagic
            /* eslint-disable */
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

                    try {
                        // Pixel
                        fbq('track', 'SubmitApplication');
                    } catch (error) {
                        console.log(error);
                    }

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
        <form className={cls}>
            <div className={classes.wrapper_frame}>
                <div className={classes.frame}>
                    <div className={classNames(classes.titles,{[classes.textShown] : isTitle})} ref={titleRef}>
                        {popup ?
                            !isConfirmed ? <h3 dangerouslySetInnerHTML={{ __html: 'Оставьте заявку и получите консультацию'}}
                                className={classNames(classes.title,{[classes.popupTitle] : popup})}/> :
                                <h3 dangerouslySetInnerHTML={{ __html: titleSuccess}}
                                    className={classNames(classes.title,{[classes.popupTitle] : popup})}/>
                            : !isConfirmed ? <h3 dangerouslySetInnerHTML={{ __html: title}} className={classes.title}/> :
                            <h3 dangerouslySetInnerHTML={{ __html: titleSuccess}} className={classes.title}/>
                        }
                        {!isConfirmed ? <span dangerouslySetInnerHTML={{ __html: description}} className={classes.description}/> : <span dangerouslySetInnerHTML={{ __html: descriptionSuccess}} className={classes.description}/>}

                    </div>
                    <div className={classNames(classes.fields,{[classes.popupFields] : popup})}>
                        <div
                            className={
                                classNames(
                                    classes.wrapperInputCommon,
                                    {
                                        [classes.inputRequire]: errorNameCode === errorType.orange,
                                        [classes.inputError]: errorNameCode === errorType.red,
                                    }
                                )
                            }
                        >
                            <input
                                className={classNames(classes.inputCommon)}
                                type="text"
                                placeholder={'Как к вам обращаться *'}
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (!e.target.value) {
                                        setErrorNameText(``);
                                        setErrorNameCode(``);
                                        setIsNameValid(false);
                                        // setErrorNameText(`${fieldText.require}`);
                                        // setErrorNameCode(`${errorType.orange}`);
                                    } else if (e.target.value && (!validName.test(e.target.value))) {
                                        setIsNameValid(false);
                                        setErrorNameText(`${fieldText.error.name}`);
                                        setErrorNameCode(`${errorType.red}`);
                                    } else {
                                        setIsNameValid(true);
                                        setErrorNameText(``);
                                        setErrorNameCode(``);
                                    }
                                }}
                            />
                            <span className={classes.errorMessage}>{errorNameText}</span>
                        </div>
                        <div
                            className={
                                classNames(
                                    classes.wrapperInputCommon,
                                    {
                                        [classes.inputRequire]: errorPhoneCode === errorType.orange,
                                        [classes.inputError]: errorPhoneCode === errorType.red,
                                    }
                                )
                            }>
                            <InputMask mask="+7-999-999-99-99" value={phone}
                                       onChange={(e) => {
                                           const phoneNumber = e.target.value.replace(/[^0-9]/g,"");
                                           setPhone(prev => phoneNumber);

                                           if (phoneNumber.toString().length > 0 && phoneNumber.toString().length < 11) {
                                               setIsPhoneValid(false);
                                            //    setErrorPhoneText(`${fieldText.require}`);
                                            //    setErrorPhoneCode(`${errorType.orange}`);
                                               setErrorPhoneText(``);
                                               setErrorPhoneCode(``);
                                           } else {
                                               setIsPhoneValid(true);
                                               setErrorPhoneText(``);
                                               setErrorPhoneCode(``);
                                           }
                                       }}>
                                {(inputProps) => (
                                    <input
                                        {...inputProps}
                                        className={classNames(classes.inputCommon, classes.inputPhone, {[classes.inputError]: !isPhoneValid})}
                                        type="text"
                                        placeholder={'Номер телефона *'}
                                    />
                                )}
                            </InputMask>
                            <span className={classes.errorMessage}>{errorPhoneText}</span>
                        </div>
                        <div
                            className={
                                classNames(
                                    classes.wrapperInputCommon,
                                    {
                                        [classes.inputRequire]: errorEmailCode === errorType.orange,
                                        [classes.inputError]: errorEmailCode === errorType.red,
                                    }
                                )
                            }>
                            <input
                                className={classNames(classes.inputCommon, classes.inputMail, {[classes.inputError]: !isEmailValid})}
                                type="text"
                                placeholder={'E-mail'}
                                value={email}
                                onChange={(e) => {
                                    setEmail(prev => e.target.value);

                                    const validString = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                                    const isValid = new RegExp(validString);

                                    if (!isValid.test(e.target.value) && e.target.value.length !== 0) {
                                        setIEmailValid(false);
                                        setErrorEmailText(`${fieldText.error.email}`);
                                        setErrorEmailCode(`${errorType.red}`);
                                    } else {
                                        setIEmailValid(true);
                                        setErrorEmailText(``);
                                        setErrorEmailCode(``);
                                    }
                                }}
                            />
                            <span className={classes.errorMessage}>{errorEmailText}</span>
                        </div>
                        
                        <C_MainButton text={"Получить предложение"} onClick={(e) => onButtonClick(e)}
                                      className={classes.button} disabled={isProcessing}/>
                        {/* <button
                            ref={btnEl}
                            onClick={(e) => onButtonClick(e)}
                            className={classes.button}
                            onMouseOver={(e) => {
                                if (width <= sizes.widthDesktopLg) {
                                    e.preventDefault()
                                } else {
                                    let rect = btnEl.current.getBoundingClientRect();
                                    let xBlockPercent = 0;
                                    let yBlockPercent = 0;
                                    xBlockPercent = Math.abs((e.pageX - (rect.x + pageXOffset))/(btnEl.current.clientWidth / 100))
                                    yBlockPercent = Math.abs((e.pageY - (rect.y + pageYOffset))/(btnEl.current.clientHeight / 100))
                
                                    spanEl.current.style.left = xBlockPercent + "%";
                                    spanEl.current.style.top = yBlockPercent + "%";
            
                                }
                            }}
                            onMouseOut={(e) => {
                                if (width <= sizes.widthDesktopLg) {
                                    e.preventDefault()
                                } else {
                
                                    let rect = btnEl.current.getBoundingClientRect();
                                    let xBlockPercent = 0;
                                    let yBlockPercent = 0;
                                    xBlockPercent = Math.abs((e.pageX - (rect.x + pageXOffset))/(btnEl.current.clientWidth / 100))
                                    yBlockPercent = Math.abs((e.pageY - (rect.y + pageYOffset))/(btnEl.current.clientHeight / 100))
                
                                    spanEl.current.style.left = xBlockPercent + "%";
                                    spanEl.current.style.top = yBlockPercent + "%";
                                }
                            }}
                            // disabled={isProcessing}
                        ><span ref={spanEl} className={classes.span}/>
                        <span className={classes.text}>Получить предложение</span></button> */}

                        <div
                            className={classNames(classes.checkboxWrapper, {[classes.checkboxWrapperDrilling]: isOnlyCheckboxUnpushed})}

                        >
                            <input
                                className={classNames('visually-hidden', classes.checkboxInput)}
                                id={popup ? "agreed" : "agreed1"}
                                type="checkbox"
                                checked={isCheckValid}
                                onChange={() => {
                                    setIsCheckValid(prev => !prev)
                                }}
                            />
                            <label
                                className={classes.checkboxLabel}
                                htmlFor={popup ? "agreed" : "agreed1"}
                            >Я согласен с <a href={'/policy.html'}>политикой</a> обработки персональных данных</label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}