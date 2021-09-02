import { IChannel } from '../models/chat.model';
import Message from './message';
interface IProps{
    channel:IChannel
}
export default function MessagesPanel(props:IProps){

    return <div>
        <div>
            {props.channel && props.channel.messages?.length ? props.channel.messages.map((msg, i) => {
                return <Message key={i} text={msg.text} sender_name={msg.sender}></Message>
            }) : <div>No messages</div>}
        </div>
        <div>
            <input type="text"></input>
            <button>Send</button>
        </div>
    </div>
}