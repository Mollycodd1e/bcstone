import classes from './style.module.scss';

export const C_Video = ({url}) => {
  
    return (
      <video className={classes.root} src={url} controls="controls" autoPlay={false} />
    )
}