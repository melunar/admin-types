import ResponseCodeEnum from '../base/ResponseCodeEnum'
/** 接口数据格式 */
declare interface ResponseOptions<T> {
  code: ResponseCodeEnum;
  message: string;
  data: T;
  [key: string]: any;
}

declare interface ProtocolConfig {
  url: string;
  method: 'get' | 'post';
  token: boolean;
}
