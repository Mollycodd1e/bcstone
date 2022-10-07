import classes from './style.module.scss';
import classNames from 'classnames';

import { C_Slider } from '../../components/c_Slider';
import { C_SavingCard } from '../../components/c_SavingCard';

export const S_Saving = ({className, items}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    const allCards = [];

    items.forEach(item => {
      allCards.push(<C_SavingCard url={item} description={'Бизнес-центры и офисные кварталы  будут реализованы в Белорусском  деловом районе и других  перспективных Бизнес-районах  Москвы'}/>)
    });

    return (
        <div className={cls}>          
            <h2>Сохраните сбережения в&nbsp;недвижимости</h2>
            <div className={classes.sliderWrapper}>
                <C_Slider className={classes.saving} items={allCards} initialSlide={0}  slidersSpaceBetween = {-183} slidesPerView = {3} saving={true}/>
            </div>
        </div>
    )
}