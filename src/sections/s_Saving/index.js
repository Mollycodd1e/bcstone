import classes from './style.module.scss';
import classNames from 'classnames';

import { C_Slider } from '../../components/c_Slider';
import { C_SavingCard } from '../../components/c_SavingCard';

export const S_Saving = ({className, items}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    const allCards = [];

    items.forEach(item => {
      allCards.push(<C_SavingCard url={item} description={'Привет'}/>)
    });

    console.log(allCards)
    console.log(items)
    return (
        <div className={cls}>          
            <h2>Сохраните сбережения в недвижимости</h2>
            <C_Slider className={classes.saving} items={allCards} initialSlide={0} slidersSpaceBetween = {225} slidesPerView = {1}/>
            {/* <C_SliderSave items={items}/> */}
        </div>
    )
}