export const PLANS = {
  FREE: {
    name: "Free",
    price: 0,
    features: {
      reportsPerMonth: 1,
      aiChatsPerDay: 10,
      toolsAccess: false,
    },
  },
  STANDARD: {
    name: "Standard",
    price: 49000,
    features: {
      reportsPerMonth: 5,
      aiChatsPerDay: -1, // unlimited
      toolsAccess: true,
    },
  },
  PRO: {
    name: "Pro",
    price: 149000,
    features: {
      reportsPerMonth: -1, // unlimited
      aiChatsPerDay: -1,
      toolsAccess: true,
      advancedInsights: true,
    },
  },
} as const;
