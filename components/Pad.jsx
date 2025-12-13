export default function Pad(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? 'on' : undefined}
      onClick={function () {
        props.handleClick(props.id);
      }}
    ></button>
  );
}
