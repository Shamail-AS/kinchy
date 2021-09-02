import { useState } from "react";
import { IChannel } from '../models/chat.model';
import ChannelList from "./channel-list";
import MessagesPanel from './message-panel';

export default function Chat(){
    const [channels, setChannels] = useState<IChannel[]>([{ id: 1, name: 'first', participants: 10 }]);
    const [active_channel, setActiveChannel] = useState(0);
    return (
        <div>
            <ChannelList channels={channels}></ChannelList>
            <MessagesPanel channel={channels[active_channel]}></MessagesPanel>
        </div>
    )
}