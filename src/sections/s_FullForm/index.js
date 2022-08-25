import classNames from 'classnames';
import classes from './style.module.scss';

export const S_FullForm = ({className}) => {
    const cls = classNames(classes.root, {[className]: className});

    return (
        <form className={cls}>
            <div>
                <h3>Не подобрали подходящее предложение?</h3>
                <span>Наш менеджер ответит на ваши вопросы</span>
            </div>
        </form>
    )
}