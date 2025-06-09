export async function reportGeneratorNode(state: any) {
  const { market, finance } = state.results;

  const report = {
    title: "사업 계획 분석 보고서",
    generatedAt: new Date().toISOString(),
    sections: {
      marketAnalysis: market?.analysis || "분석 중...",
      financialPlan: finance?.analysis || "분석 중...",
    },
  };

  return {
    messages: [
      {
        content: `보고서가 생성되었습니다: ${JSON.stringify(report, null, 2)}`,
        role: "assistant",
      },
    ],
    results: {
      report,
    },
  };
}
