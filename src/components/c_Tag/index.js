import classNames from 'classnames';
import classes from './style.module.scss';
import Link from "next/link";


export const C_Tag = ({className, text}) => {

  const cls = classNames(classes.root, {[className]: className});
  return (
      <a href={window.location.hostname === 'localhost' ? `/news?filter=${text}` : `/news.html?filter=${text}`}>
          <div
              className={cls}
          >
            #{text}
          </div>
      </a>
  )
}