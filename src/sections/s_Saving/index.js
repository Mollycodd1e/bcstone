import classes from './style.module.scss';
import classNames from 'classnames';
import { C_SliderSave } from '../../components/c_SliderSave';

export const S_Saving = ({className, items}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={cls}>          
            <h2>Сохраните сбережения в недвижимости</h2>
            <C_SliderSave items={items}/>
        </div>
    )
}