// import { AdminRole } from "./common/AdminRole";
// import { AppRole } from "./common/AppRole";
// import { Sex } from "./Sex";

/** 管理员角色枚举 */
export const enum AdminRole {
  ADMIN = 0,
  OTHER = 1
}

/** APP角色枚举 */
export const enum AppRole {
  BLOGGER = 0,
  OTHER = 1
}

/** 性别枚举 */
export const enum Sex {
  UNKNOW = 0,
  MALE = 1,
  FEMAMLE = 2
}


/** 用户 */
export default interface User {
  id?: number; // 用户ID
  userName?: string; // 用户昵称
  realName?: string; // 真实姓名
  sex?: Sex; // 性别
  age?: number;
  password?: string;
  tipQA?: string;
  email?: string;
  phone?: string;
  lastLogin?: number;
  registerTime?: number;
  updateTime?: number;
  adminRole?: AdminRole;
  appRole?: AppRole;
  token1?: string;
  token2?: string;
  token3?: string;
}