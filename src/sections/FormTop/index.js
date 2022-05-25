import classes from './style.module.scss';
import classNames from "classnames";
import {Form} from "../../components/Form";
import {form} from "../../data/form";

export const FormTop = ({className}) => {
    const cls = classNames(classes.root, { [className]: className });
    const {title1, tail1, success1} = form;
    return (
        <div className={cls}>
            <Form
                className={classes.FormTop}
                mode={'grayBg'}
                title={title1.text}
                titleMod={title1.modCode}
                tail={tail1.text}
                tailMod={tail1.modCode}
                success={success1.text}
            />
        </div>
    )
}