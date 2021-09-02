interface IProps {
  name: string
  participants: number
}
export default function Channel(props: IProps) {
  return (
    <div className="channel-item">
      ‍<div>{props.name}</div>‍
      <span>{props.participants}</span>‍
    </div>
  );
}
