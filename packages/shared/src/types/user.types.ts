export enum PlanType {
  FREE = "FREE",
  STANDARD = "STANDARD",
  PRO = "PRO",
}

export interface User {
  id: string;
  email: string;
  name?: string;
  plan: PlanType;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  email: string;
  name?: string;
  plan?: PlanType;
}
