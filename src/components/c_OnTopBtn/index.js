import classNames from 'classnames';
import classes from './style.module.scss';

export const C_OnTopBtn = ({className}) => {
    const cls = classNames(classes.root, {[className]: className});

    function scrollToTop(smooth = false) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className={cls}>
            <button onClick={() => scrollToTop()}/>
        </div>
    )
}