interface IProps{
    text:string
    sender_name:string
}
export default function Message(props:IProps){
    return(
        <div>
            <div><b>{props.sender_name}</b></div>
            <span>{props.text}</span>
        </div>
    )
}