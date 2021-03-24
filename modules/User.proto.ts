import { ProtocolConfig, ResponseOptions } from '../global/ResponseOptions'
import User from './User' // { Sex, AdminRole, AppRole }

const USER_LOGIN = 'USER_LOGIN'

/** 用户模块接口 */
// tslint:disable-next-line: no-namespace
export namespace USER_PROTOCOL_SCHEMA {
  /** 登陆 */
  export namespace USER_LOGIN {
    export interface REQUEST {
      userName: string;
      password: string;
    }
    export interface RESPONSE extends ResponseOptions<{ user: User, token: string }> {}
  }
}

/** 用户接口 */
export const USER_PROTOCOL: {
  [USER_LOGIN]: ProtocolConfig
} = {
  /** 登陆 */
  USER_LOGIN: {
    url: '/user/login',
    method: 'post',
    token: false,
  }
}
