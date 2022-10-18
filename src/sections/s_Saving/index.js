import classes from './style.module.scss';
import classNames from 'classnames';

import { C_Slider } from '../../components/c_Slider';
import { C_SavingCard } from '../../components/c_SavingCard';

export const S_Saving = ({className, items}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    const allCards = [];

    items.forEach(item => {
      allCards.push(<C_SavingCard url={item.url} description={item.description}/>)
    });

    return (
        <div className={classes.wrapRoot}>
            <div className={cls}>
                <h2>Сохраните сбережения в&nbsp;недвижимости</h2>
                <div className={classes.sliderWrapper}>
                    <C_Slider className={classes.saving} items={allCards} initialSlide={0} slidesPerView = {window.innerWidth >= 768 ? 2 : 3}
                    slidersSpaceBetween={
                        (window.innerWidth >= 360 && window.innerWidth < 768) ? -225 :
                        (window.innerWidth >= 768 && window.innerWidth < 1000) ? 15 :
                        (window.innerWidth >= 1000 && window.innerWidth < 1200) ? -130 :
                        (window.innerWidth >= 1200 && window.innerWidth < 1440) ? 89 :
                        (window.innerWidth >= 1440 && window.innerWidth < 1600) ? -288 :
                        (window.innerWidth >= 1600 && window.innerWidth < 1920) ? -137 :
                        window.innerWidth >= 1920 ? -137 :
                        -215}
                    saving={true}/>
                </div>
            </div>
        </div>
    )
}