import classNames from 'classnames';
import classes from './style.module.scss';
import {useState} from "react";

export const S_FullForm = ({className}) => {
    const cls = classNames(classes.root, {[className]: className});

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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
        </form>
    )
}