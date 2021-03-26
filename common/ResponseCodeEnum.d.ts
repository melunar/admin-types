/** 业务接口错误码 */
export const enum ResponseCodeEnum {
  SUCCESS = 200,
  RECEIVED = 100,
  USER_UNAUTHORIZED = 401, /** 用户未认证 */
  USER_AUTHORIZED_INVALID = 402, /** 无效用户认证 */
  USER_AUTHORIZED_EXPIRED = 403, /** 用户认证过期 */
  INVALID_PARAMETER = 400,
  SERVICE_ERROR = 500,
}
