import classes from './style.module.scss';
import { C_BackButton } from '../../components/c_BackBtn';
import { C_Tag } from '../../components/c_Tag';
import classNames from 'classnames';

export const S_Tags = ({hashtagList}) => {
    
    const cls = classNames(classes.root, {[classNames]: classNames});

    return (
        <div className={cls}>
            <C_BackButton />
            <ul>
                {hashtagList.map((hashtag) =>
                    <li key={hashtag.id}>
                        <C_Tag text={hashtag.hashtag}/>
                    </li>    
                )}
            </ul>
        </div>
    )
}