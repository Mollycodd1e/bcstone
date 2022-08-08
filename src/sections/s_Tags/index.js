import classes from './style.module.scss';
import { C_BackButton } from '../../components/c_BackBtn';
import { C_Tag } from '../../components/c_Tag';

export const S_Tags = ({hashtagList}) => {
    
    return (
        <div className={classes.root}>
            <C_BackButton />
            <ul>
                {hashtagList.map((hashtag) =>
                    <li>
                        <C_Tag text={hashtag} key={hashtag[0]}/>
                    </li>    
                )}
            </ul>
        </div>
    )
}