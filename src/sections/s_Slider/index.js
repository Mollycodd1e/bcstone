import classes from './style.module.scss';
import { C_SliderC } from '../../components/c_SliderC';
import { C_Description } from '../../components/c_Description';
import classNames from 'classnames';

export const S_Slider = ({className, items, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={cls}>          
            <C_SliderC className={classes.slider} items={items} />
            <C_Description className={classes.description} description={description} />
        </div>
    )
}