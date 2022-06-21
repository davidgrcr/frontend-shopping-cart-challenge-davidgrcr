const Icon = (props: { children: JSX.Element; onClick?: () => void,className?:string }) => (
  <div className={props.className} onClick={props.onClick}>
    {props.children}
  </div>
);

export default Icon;
