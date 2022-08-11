import classNames from 'classnames';
import classes from './style.module.scss';

export const C_Telegram = ({telegram}) => {

  const cls = classNames(classes.root, {[classNames]: classNames});

  return (
    <div className={cls}>
    <p>Подписывайтесь на наш канал и{'\u00A0'}будьте в курсе событий</p>
    <a href={'#'}>
      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4709 22C17.5461 22 22.4709 17.0751 22.4709 11C22.4709 4.92487 17.5461 0 11.4709 0C5.39581 0 0.470947 4.92487 0.470947 11C0.470947 17.0751 5.39581 22 11.4709 22Z" fill="#2B2D2C"/>
        <path d="M5.24492 10.7819L12.569 7.76381C13.292 7.44881 15.7439 6.44301 15.7439 6.44301C15.7439 6.44301 16.8759 6.00292 16.7809 7.07192C16.7499 7.51192 16.498 9.05191 16.246 10.7179L15.46 15.6539C15.46 15.6539 15.3969 16.3771 14.8599 16.5021C14.2877 16.4933 13.7348 16.2946 13.288 15.9372C13.162 15.8432 10.93 14.428 10.113 13.737C10.0321 13.6797 9.96669 13.6035 9.92253 13.5148C9.87837 13.4261 9.85684 13.3277 9.85991 13.2287C9.86298 13.1296 9.89054 13.0327 9.94011 12.9469C9.98968 12.8611 10.0597 12.7891 10.144 12.737C11.276 11.699 12.627 10.4109 13.444 9.59291C13.821 9.21591 14.198 8.33593 12.627 9.40493L8.19499 12.3908C7.96849 12.4931 7.72363 12.549 7.47514 12.5543C7.22665 12.5597 6.97962 12.5146 6.74894 12.422C5.80594 12.14 4.70597 11.7619 4.70597 11.7619C4.70597 11.7619 3.95091 11.2902 5.23991 10.7882L5.24492 10.7819Z" fill="white"/>
      </svg>
      {telegram}
    </a>
  </div>
  )
}