import classes from './style.module.scss';
import classNames from "classnames";
import NumberFormat from 'react-number-format';
import {useEffect, useState} from "react";
import {form} from "../../data/form";

export const Form = ({className, mode, title, tail, titleMod, tailMod, success, isPopup = false, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, {
        [className]: className,
        [classes.whiteBg]: mode === 'whiteBg',
        [classes.grayBg]: mode === 'grayBg',
        [classes.grayWhiteBg]: mode === 'grayWhiteBg',
    });

    // isProcessing - block submit-button, isConfirmed - send data
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState(undefined);
    const [isHovered, setIsHovered] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isCompanyValid, setIsCompanyValid] = useState(true);
    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
    const [brokerType, setBrokerType] = useState('');
    const [isPopupClosed, setIsPopupClosed] = useState(true);
    const [isRadioError, setIsRadioError] = useState(false);
    const [typeMessage, setTypeMessage] = useState(''); // 'suссess' 'error' 'server-error'

    const checkIsEmpty = (value) => {
        const splitValue = value.split(' ').join('').length;
        const simpleValue = value.length;

        return simpleValue > splitValue
    }

    const checkHasNumber = (value) => {
        return value.match(/\d+/);
    }

    useEffect(() => {
        const clearPhoneLength = phone && Number.isInteger(Number(phone.replace(/\D/g, ''))) && phone.replace(/\D/g, '').length;

        if (company.trim().length === 0 && company.length > 0) {
            setIsCompanyValid(false)
        } else {
            setIsCompanyValid(true)
        }

        if (checkIsEmpty(name)
            || checkHasNumber(name)
            || name.trim().length === 0
            || (clearPhoneLength !== 11 )) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [name, surname, company, phone, brokerType])

    return (
        <>
            {!isConfirmed ? (
                <div className={cls}>
                    {isPopup && <button
                        onClick={() => setIsPopUpVisible(prev => false)}
                        className={classes.closeBtn}
                    />}
                    <h3 dangerouslySetInnerHTML={{ __html: title}} className={classNames(classes.title, classes[`${titleMod}`])} />
                    <form className={classes.form} action={"submit"}>
                        <input
                            className={classNames(classes.inputTextClass, {
                                [classes.error]: checkIsEmpty(name) || checkHasNumber(name),
                                [classes.valid]: !checkIsEmpty(name) && !checkHasNumber(name) && name.trim().length !== 0
                            })}
                            placeholder={"Имя*"}
                            type="text"
                            value={name}
                            onChange={e => {
                                setName(prev => e.target.value);
                            }}
                        />

                        <NumberFormat
                            className={classNames(classes.inputTextClass, {[classes.valid]: phone && Number.isInteger(Number(phone.replace(/\D/g, ''))) && phone.replace(/\D/g, '').length === 11})}
                            placeholder={"Телефон*"}
                            format="+7 ### ###-##-##"
                            mask="_"
                            value={phone}
                            onChange={e => {
                                setPhone(prev => e.target.value);
                            }}
                            allowEmptyFormatting={isHovered}
                            onMouseDown={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />

                        <button
                            className={classes.sendBtn}
                            disabled={isDisabled || !isCheckBoxChecked}
                            onClick={async () => {
                                setIsDisabled(prev => true);
                                // await getData();
                            }}
                        >
                            Получить предложение
                        </button>
                        <div
                            className={classNames(classes.checkBoxDisabled, {
                                [classes.checkBoxBounce]: !isDisabled && !isCheckBoxChecked,
                                [classes.checkBoxChecked]: isCheckBoxChecked
                            })}
                            onClick={() => {setIsCheckBoxChecked(prev => !prev)}}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setIsCheckBoxChecked(prev => !prev)
                                }
                            }}
                            tabIndex={0}
                        >
                            <span dangerouslySetInnerHTML={{ __html: form.agreement1.text}}/>
                        </div>
                    </form>
                    <div dangerouslySetInnerHTML={{ __html: tail}} className={classNames(classes.tail, classes[`${tailMod}`])} />
                </div>
            ) : (
                <div  className={cls}>
                    <h3 dangerouslySetInnerHTML={{ __html: success}} className={classNames(classes.title, classes.success)} />
                </div>
            )}
        </>
    )
}