import InputMask from 'react-input-mask';
import classNames from 'classnames';
import classes from './style.module.scss';
import {useState} from "react";

export const C_FullForm = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});
    const {description, descriptionSuccess, title, titleSuccess} = data.main_form;

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIEmailValid] = useState(true);
    const [isCheckValid, setIsCheckValid] = useState(false);

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

        if (isPhoneValid && isNameValid && isEmailValid && isCheckValid) {
            console.log("phone ", phone)
            console.log("name", name)
            console.log("email", email)
            console.log("isCheckValid", isCheckValid)
            setIsConfirmed(true);
        //     setIsProcessing(true);
        //
        //     // отправляем данные в comagic
        //     /* eslint-disable */
        //     Comagic.addOfflineRequest({
        //         'name': name,
        //         'phone': phone,
        //         'email': email,
        //         'message': 'Отправка данных'
        //     }, function (o) {
        //         let response = JSON.parse(o.response);
        //
        //         if (response.success) {
        //             // GTM & Metrika
        //             if (ga) {
        //                 ga("create", "UA-206121389-1", {name: "tracker"});
        //                 ga('tracker.send', 'event', 'submit', 'send_button', {
        //                     'hitCallback': function () {
        //                         console.log('my own GTM code works!!');
        //                     }
        //                 });
        //             }
        //
        //             if (ym) {
        //                 ym(84684538, 'reachGoal', 'send_button');
        //                 console.log('ym: 84684538  - Yandex');
        //             } else {
        //                 yaCounter84684538.reachGoal('send_button');
        //                 console.log('yaCounter84684538  - Yandex');
        //             }
        //
        //             // Pixel
        //             fbq('track', 'SubmitApplication');
        //
        //             setIsConfirmed(true);
        //         } else {
        //             console.error('CoMagic response failed!', response);
        //             setIsProcessing(false);
        //         }
        //     });
        // } else if (name.length === 0) {
        //     setIsNameValid(false);
        // } else if (phone.length === 0) {
        //     setIsPhoneValid(false);
        }
    }

    return (
        <form className={cls}>
            <div className={classes.wrapper_frame}>
                <div className={classes.frame}>
                    <div className={classes.titles}>
                        <h3 dangerouslySetInnerHTML={{ __html: !isConfirmed ? title : titleSuccess}} className={classes.title}/>
                        <span dangerouslySetInnerHTML={{ __html: !isConfirmed ? description : descriptionSuccess}} className={classes.description}/>
                    </div>
                    <div className={classes.fields}>
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
                                    setName(prev => e.target.value);
                                    if (!e.target.value) {
                                        setIsNameValid(false);
                                        setErrorNameText(`${fieldText.require}`);
                                        setErrorNameCode(`${errorType.orange}`);
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
                                               setErrorPhoneText(`${fieldText.require}`);
                                               setErrorPhoneCode(`${errorType.orange}`);
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

                        <button
                            onClick={(e) => onButtonClick(e)}
                            className={classes.button}
                            // disabled={isProcessing}
                        >Получить предложение</button>

                        <div
                            className={classNames(classes.checkboxWrapper)}

                        >
                            <input
                                className={classNames('visually-hidden', classes.checkboxInput)}
                                id={"agreed"}
                                type="checkbox"
                                checked={isCheckValid}
                                onChange={() => {
                                    setIsCheckValid(prev => !prev)
                                }}
                            />
                            <label
                                className={classes.checkboxLabel}
                                htmlFor="agreed"
                            >Я согласен с обработкой персональных данных</label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}