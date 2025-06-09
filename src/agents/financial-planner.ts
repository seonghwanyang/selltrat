import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

export async function financialPlannerNode(state: any) {
  const model = new ChatOpenAI({
    modelName: "gpt-4-turbo-preview",
    temperature: 0.5,
  });

  const systemPrompt = `당신은 재무 계획 전문가입니다.
사업 계획에 대해 다음을 계산해주세요:
1. 초기 투자 비용
2. 월별 운영 비용
3. 예상 수익
4. 손익분기점`;

  const response = await model.invoke([
    new SystemMessage(systemPrompt),
    new HumanMessage(state.messages[state.messages.length - 1].content),
  ]);

  return {
    messages: [response],
    results: {
      finance: {
        analysis: response.content,
        timestamp: new Date().toISOString(),
      },
    },
  };
}
