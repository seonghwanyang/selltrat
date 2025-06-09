import { StateGraph, StateGraphArgs } from "@langchain/langgraph";
import { BaseMessage, HumanMessage, AIMessage } from "@langchain/core/messages";

// 상태 정의
interface AgentState {
  messages: BaseMessage[];
  currentAgent: string;
  results: Record<string, any>;
}

// 상태 그래프 설정
const graphConfig: StateGraphArgs<AgentState>["channels"] = {
  messages: {
    value: (x: BaseMessage[], y: BaseMessage[]) => x.concat(y),
    default: () => [],
  },
  currentAgent: {
    value: (x: string, y: string) => y ?? x,
    default: () => "router",
  },
  results: {
    value: (x: Record<string, any>, y: Record<string, any>) => ({ ...x, ...y }),
    default: () => ({}),
  },
};

// 라우터 노드
async function routerNode(state: AgentState) {
  const lastMessage = state.messages[state.messages.length - 1];

  // 간단한 라우팅 로직
  if (lastMessage.content.toString().includes("시장")) {
    return { currentAgent: "market" };
  } else if (lastMessage.content.toString().includes("재무")) {
    return { currentAgent: "finance" };
  }

  return { currentAgent: "general" };
}

// 그래프 생성
export function createWorkflow() {
  const workflow = new StateGraph<AgentState>({
    channels: graphConfig,
  });

  // 노드 추가
  workflow.addNode("router", routerNode);
  workflow.addNode("market", marketAnalysisNode);
  workflow.addNode("finance", financialPlannerNode);
  workflow.addNode("reporter", reportGeneratorNode);

  // 엣지 추가
  workflow.setEntryPoint("router");
  workflow.addEdge("router", "market");
  workflow.addEdge("market", "reporter");
  workflow.addEdge("finance", "reporter");

  return workflow.compile();
}
