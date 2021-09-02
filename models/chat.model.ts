export interface IChannel{
    id:number
    name:string
    participants:number
    messages?:IMessage[]
}
export interface IMessage{
    text:string
    sender:string
    receiver:string
}