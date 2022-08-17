import classNames from 'classnames';
import { C_Description } from '../../components/c_Description';
import classes from './style.module.scss';
import Image from 'next/image';

export const S_Picture = ({className, src, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={cls}>
          <Image src={src} width={260} height={176}/>
          <C_Description description={description} />
        </div>
    )
}