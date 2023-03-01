import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway(3000)
export class MyGateway
{
	@SubscribeMessage("newMessage")
	onNewMessage(@MessageBody() body: any)
	{
		console.log(body)
	}
}
