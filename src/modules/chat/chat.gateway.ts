import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "http://localhost:3000",
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("message")
  handleMessage(
    @MessageBody() data: { text: string; userId: string },
    @ConnectedSocket() client: Socket
  ) {
    // 에이전트에게 메시지 전달
    this.processWithAgents(data.text, data.userId, client.id);

    // 즉시 응답
    client.emit("message", {
      type: "system",
      text: "분석을 시작합니다...",
    });
  }

  async processWithAgents(text: string, userId: string, clientId: string) {
    // 에이전트 처리 시작
    this.server.to(clientId).emit("agent:status", {
      agent: "orchestrator",
      status: "processing",
    });

    // TODO: 실제 에이전트 연동
    setTimeout(() => {
      this.server.to(clientId).emit("agent:status", {
        agent: "market",
        status: "processing",
      });
    }, 1000);

    setTimeout(() => {
      this.server.to(clientId).emit("message", {
        type: "assistant",
        text: "시장 분석이 완료되었습니다. 보고서를 생성중입니다...",
      });
    }, 3000);
  }
}
