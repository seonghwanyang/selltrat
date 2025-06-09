import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

export async function marketAnalysisNode(state: any) {
  const model = new ChatOpenAI({
    modelName: "gpt-4-turbo-preview",
    temperature: 0.7,
  });

  const systemPrompt = `당신은 시장 분석 전문가입니다.
사용자의 사업 아이디어에 대해 다음을 분석해주세요:
1. 시장 규모와 성장률
2. 주요 경쟁사
3. 타겟 고객층
4. 진입 장벽`;

  const response = await model.invoke([
    new SystemMessage(systemPrompt),
    new HumanMessage(state.messages[state.messages.length - 1].content),
  ]);

  return {
    messages: [response],
    results: {
      market: {
        analysis: response.content,
        timestamp: new Date().toISOString(),
      },
    },
  };
}
