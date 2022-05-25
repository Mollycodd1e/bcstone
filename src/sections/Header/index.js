import classes from './style.module.scss';
import classNames from "classnames";
import {Burger} from "../../components/Burger";
import {Logo} from "../../components/Logo";
import {Socials} from "../../components/Socials";
import {SubmitApplication} from "../../components/SubmitApplication";

export const Header = ({className, isActive, setIsActive, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, {[classes.active]: isActive, [className]: className });
    return (
        <header className={cls}>
            <div className={classes.wrapper}>
                <Burger isActive={isActive} setIsActive={setIsActive} className={classes.Burger} />
                <Logo isActive={isActive} className={classes.Logo}/>
                <Socials isActive={isActive} isHeaderSection={true} className={classes.Socials} />
                <SubmitApplication isActive={isActive} setIsPopUpVisible={setIsPopUpVisible} />
            </div>
        </header>
    )
}