import classes from './style.module.scss';
import classNames from "classnames";
import {Form} from "../../components/Form";
import {form} from "../../data/form";

export const FormPopup = ({className, isPopupVisible, setIsPopUpVisible}) => {
    const {title1, title3, tail1, success1} = form;
    const cls = classNames(classes.root, { [className]: className, [classes.visiblePopup]: isPopupVisible });
    return (
        <div className={cls}>
            {/*<button*/}
            {/*    className={classes.closeBtn}*/}
            {/*/>*/}
            <Form
                isPopup={true}
                setIsPopUpVisible={setIsPopUpVisible}
                className={classes.FormPopup}
                mode={'whiteBg'}
                title={title3.text}
                titleMod={title1.modCode}
                tail={tail1.text}
                tailMod={tail1.modCode}
                success={success1.text}
            />
        </div>
    )
}