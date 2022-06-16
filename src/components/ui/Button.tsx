import classes from "./Button.module.css";


export default function Button(props: {children: string, onClick?: () => void, type?: 'submit' | 'reset' | 'button'}) {
  return (
    <button className={classes.summary_button} type={props.type} onClick={props.onClick}>{props.children}</button>
  );
}