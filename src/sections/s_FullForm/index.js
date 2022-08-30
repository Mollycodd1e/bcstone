import InputMask from 'react-input-mask';
import classNames from 'classnames';
import classes from './style.module.scss';
import {useState} from "react";

export const S_FullForm = ({className}) => {
    const cls = classNames(classes.root, {[className]: className});

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIEmailValid] = useState(true);
    const [isCheckValid, setIsCheckValid] = useState(false);

    const onButtonClick = (e) => {
        e.preventDefault();

        // if (isPhoneValid && isNameValid && isEmailValid && name.length !== 0 && phone.length !== 0) {
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
        // }
    }

    return (
        <form className={cls}>
            <div className={classes.frame}>
                <div className={classes.titles}>
                    {!isConfirmed ? (
                            <>
                                <h3>Не подобрали подходящее предложение?</h3>
                                <span>Наш менеджер ответит на ваши вопросы</span>
                            </>
                        ) : (
                            <>
                                <h3>Готово!</h3>
                                <span>Менеджер свяжется с вами в ближайшее время</span>
                            </>
                    )}

                </div>
                <div className={classes.fields}>
                    <input
                        required={true}
                        className={classNames(classes.inputCommon, classes.inputUser, {[classes.inputError]: !isNameValid})}
                        type="text"
                        placeholder={'Как к вам обращаться *'}
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
                                placeholder={'Номер телефона *'}
                            />
                        )}
                    </InputMask>
                    <input
                        className={classNames(classes.inputCommon, classes.inputMail, {[classes.inputError]: !isEmailValid})}
                        type="text"
                        placeholder={'E-mail'}
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

                    <div
                        className={classNames(classes.radio)}

                    >
                        <input
                            className={'visually-hidden'}
                            id={"private_broker"}
                            type="radio"
                            value={"agreed"}
                            checked={isCheckValid}
                            onClick={(e) => {
                                console.log('125', e.target.value)
                                console.log('dddf',isCheckValid)
                                setIsCheckValid(prev => !prev)
                            }}
                        />
                        <label htmlFor="private_broker">Я согласен с обработкой персональных данных</label>
                    </div>

                    <button
                        onClick={(e) => onButtonClick(e)}
                        buttonWrapperClassName={classes.buttonWrapperClassName}
                        // disabled={isProcessing}
                    />
                </div>
            </div>
        </form>
    )
}