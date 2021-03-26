import { ProtocolConfig, ResponseOptions } from '../global/ResponseOptions'
import { JA } from './JenkinsApplication'

/** 新增 */
const JA_ADD = 'JA_ADD'
/** 编辑 */
const JA_EDIT = 'JA_EDIT'
/** 删除 */
const JA_DELETE = 'JA_DELETE'
/** 查询 */
const JA_SEARCH = 'JA_SEARCH'
/** 详情 */
const JA_DETAIL = 'JA_DETAIL'
/** 构建 */
const JA_BUILD = 'JA_BUILD'
/** 接受申请 */
const JA_RECEIVE = 'JA_RECEIVE'
/** 打回申请 */
const JA_RETURN = 'JA_RETURN'
/** 分发权限 */
const JA_DISTRIBUTE = 'JA_DISTRIBUTE'
/** 标记成功 */
const JA_SUCCESS = 'JA_SUCCESS'

/** Jenkins Application 模块接口 */
// tslint:disable-next-line: no-namespace
export namespace JA_PROTOCOL_SCHEMA {
  /** 新增 */
  export namespace JA_ADD {
    export interface REQUEST extends JA.UploadJAApplication {}
    export interface RESPONSE extends ResponseOptions<any> {}
  }
  /** 项目列表 */
  export namespace JA_SEARCH {
    export interface REQUEST {
      projectName?: string;
      status?: JA.JAStatus;
    }
    export interface RESPONSE extends ResponseOptions<{
      list: JA.JenkinsApplication[];
      count: number;
    }> {}
  }
  /** 接受申请 */
  export namespace JA_RECEIVE {
    export interface REQUEST {
      _id: string;
    }
    export interface RESPONSE extends ResponseOptions<any> {}
  }
  /** 标记成功 */
  export namespace JA_SUCCESS {
    export interface REQUEST {
      _id: string;
    }
    export interface RESPONSE extends ResponseOptions<any> {}
  }
}

/** 接口配置 */
export const JA_PROTOCOL: {
  [JA_ADD]: ProtocolConfig;
  [JA_RECEIVE]: ProtocolConfig;
  [JA_SEARCH]: ProtocolConfig;
  [JA_SUCCESS]: ProtocolConfig;
} = {
  /** 新增 */
  [JA_ADD]: {
    url: '/add',
    method: 'post',
    token: true
  },
  /** 查询 */
  [JA_SEARCH]: {
    url: '/search',
    method: 'get',
    token: true
  },
  /** 接受申请 */
  [JA_RECEIVE]: {
    url: '/receive',
    method: 'post',
    token: true
  },
  /** 标记成功 */
  [JA_SUCCESS]: {
    url: '/success',
    method: 'post',
    token: true
  },
}