/** Jenkins 应用 */

// tslint:disable-next-line: no-namespace
export namespace JA {
  /** 应用状态 */
  export enum JAStatus {
    APPLYING = 1, /** 申请中 */
    RECEIVE = 2, /** 接受申请 */
    RETURN = 3, /** 打回 */
    REAPPLYING = 4, /** 再申请 */
    SUCCESS = 5, /** 成功-可用 */
  }
  /** 应用紧急状态 */
  export enum JAExigencyStatus {
    UNKNOW = 1, /** 未知 */
    SO_SO = 2, /** 一般 */
    TEST = 3, /** 测试 */
    EXIGENCY = 4, /** 加急 */
  }
  /** 项目完整结构体 */
  export interface JenkinsApplication {
    _id?: string; /** _id */
    userId?: number; /** 创建用户id */
    projectName: string; /** 项目名称 */
    orgName?: string; /** 组织名 */
    createSuccessTime?: number; /** 创建成功时间 */
    applyTime: number; /** 申请、再申请时间  */
    status: JAStatus; /** 状态 */
    priority?: JAExigencyStatus; /** 加急状态 */
    description: string; /** 描述 */
    applyWriteBackMessage?: string; /** 回复信息 */
    token?: string; /** token */
    repositoryURL: string; /** 项目地址 */
    devDeployPath: string; /** 部署地址-dev */
    masterDeployPath: string; /** 部署地址-master */
  }
  /** 新增编辑上传结构 */
  export interface UploadJAApplication {
    userId?: number; /** 创建用户id */
    projectName: string; /** 项目名称 */
    orgName?: string; /** 组织名 */
    priority?: JAExigencyStatus; /** 加急状态 */
    description: string; /** 描述 */
    repositoryURL: string; /** 项目地址 */
    devDeployPath: string; /** 部署地址-dev */
    masterDeployPath: string; /** 部署地址-master */
  }
  /** 项目权限下发记录 */
  export interface JobDistribution {
    userId: number; /** 用户id */
    operTime: number; /** 操作时间 */
    projectName: string; /** 项目名称 */
    status?: number; /** 状态 暂时全部是成功 */
    operUserId: number; /** 操作人 */
  }
  /** 构建日志 暂时不做 */
  export interface BuildLog {
    userId: number; /** user id */
    userName: string; /** user name */
    projectId: string; /** 项目id */
    projectName: string; /** 项目名 */
    branch: string; /** 分支名 */
    remark: string; /** 备注 */
    dateTime: number; /** 发起构建日期 */
    status: number; /** 0 */
  }
}