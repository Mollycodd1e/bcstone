import classes from './style.module.scss';
import { C_SliderC } from '../../components/c_SliderC';
import { C_Description } from '../../components/c_Description';

export const S_Slider = ({items, description}) => {
    
    return (

        <div className={classes.root}>          
            <C_SliderC className={'slider'} items={items} />
            <C_Description description={description} />
        </div>

    )
}