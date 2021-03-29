/** 业务接口错误码 */
export enum ResponseCodeEnum {
  SUCCESS = 200,
  RECEIVED = 100,
  USER_UNAUTHORIZED = 401, /** 用户未认证 */
  USER_AUTHORIZED_INVALID = 402, /** 无效用户认证 */
  USER_AUTHORIZED_EXPIRED = 403, /** 用户认证过期 */
  USER_NOT_ALLOWED = 405, /** 没有权限操作 */
  INVALID_PARAMETER = 400,
  SERVICE_ERROR = 500,
}
