import InputMask from 'react-input-mask';
import classNames from 'classnames';
import classes from './style.module.scss';
import {useState} from "react";

export const S_FullForm = ({className}) => {
    const cls = classNames(classes.root, {[className]: className});

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIEmailValid] = useState(true);

    return (
        <form className={cls}>
            <div>
                <h3>Не подобрали подходящее предложение?</h3>
                <span>Наш менеджер ответит на ваши вопросы</span>
            </div>
            <div>
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
            </div>
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

            <div
                className={classNames(classes.radio, {[classes.radioError]: isRadioError})}
                onClick={() => setIsRadioError(false)}
            >
                <input
                    className={'visually-hidden'}
                    id={"private_broker"}
                    type="radio"
                    value={"private_broker"}
                    checked={brokerType === "private_broker"}
                    onChange={(event) => {
                        setBrokerType(event.target.value);
                        setIsRadioError(false);
                        setCompany('Частный брокер');
                    }}
                />
                <label htmlFor="private_broker">Частный брокер</label>
            </div>

            <Button
                onClick={(e) => onButtonClick(e)}
                buttonWrapperClassName={classes.buttonWrapperClassName}
                disabled={isProcessing}
            />
        </form>
    )
}