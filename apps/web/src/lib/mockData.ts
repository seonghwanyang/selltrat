export const mockUser = {
  id: "1",
  name: "테스트 사용자",
  email: "test@example.com",
  plan: "FREE" as const,
};

export const mockMessages = [
  {
    id: "1",
    role: "assistant" as const,
    content: "안녕하세요! 무엇을 도와드릴까요?",
    timestamp: new Date(),
  },
  {
    id: "2",
    role: "user" as const,
    content: "온라인 쇼핑몰을 시작하고 싶어요",
    timestamp: new Date(),
  },
];

export const mockReports = [
  {
    id: "1",
    title: "온라인 쇼핑몰 사업계획서",
    createdAt: new Date(),
    status: "completed",
  },
];
