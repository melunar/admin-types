/** 接口数据格式 */
declare interface ResponseOptions<T> {
  code: ResponseCodeEnum;
  message: string;
  data: T;
  [key: string]: any;
}
