/** 性别枚举 */
export enum Sex {
  UNKNOW = 0, // 未知
  MALE = 1, // 男性
  FEMAMLE = 2, // 女性
}

/** 管理员角色枚举 */
export enum AdminRole {
  ADMIN = 0,
  OTHER = 1,
}
/** APP角色枚举 */
export enum AppRole {
  BLOGGER = 0,
  OTHER = 1,
}

/** 用户 */
export interface User {
  id?: number; // 用户ID
  userName: string; // 用户昵称
  realName: string; // 真实姓名
  sex: Sex;
  age: number;
  password: string;
  tipQA: string;
  email: string;
  phone: string;
  lastLogin: number;
  registerTime: number;
  updateTime: number;
  adminRole?: AdminRole;
  appRole?: AppRole;
  token1?: string;
  token2?: string;
  token3?: string;
}