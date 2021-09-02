import { IChannel } from "../models/chat.model";
import Channel from "./channel";
interface IProps {
  channels: IChannel[];
}
export default function ChannelList(props: IProps) {
  let list: JSX.Element[] = [];
  if (props.channels && props.channels.length > 0) {
    list = props.channels.map((channel) => {
      return (
        <Channel
          name={channel.name}
          participants={channel.participants}
        ></Channel>
      );
    });
  }
  return <div>{list.length > 0 ? list : "Nothing to see"}</div>;
}
