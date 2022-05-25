import classes from './style.module.scss';
import classNames from "classnames";
import {Form} from "../../components/Form";
import {form} from "../../data/form";

export const FormBtm = ({className}) => {
    const cls = classNames(classes.root, { [className]: className });
    const {title2, tail2, success1} = form;
    return (
        <div className={cls}>
            <Form
                className={classes.FormBtm}
                mode={'grayWhiteBg'}
                title={title2.text}
                titleMod={title2.modCode}
                tail={tail2.text}
                tailMod={tail2.modCode}
                success={success1.text}
            />
        </div>
    )
}