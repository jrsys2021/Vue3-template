import type { IResponse } from '../IResponse/type'

// 登录接口需要携带参数ts类型
export interface LoginFormData {
  username: string
  password: string
  phone?: string
}

export interface LoginResponseData extends IResponse {
  data?: string
}
