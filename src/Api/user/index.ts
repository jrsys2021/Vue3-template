// 统一管理用户相关接口
import request from '@/utils/request'
import type { LoginFormData, LoginResponseData } from './type'

enum API {
  LOGIN_URL = '/user/login',
  LOGOUT_URL = '/user/logout',
}

// 登录请求
export const reqLogin = (data: LoginFormData) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)

// 登出请求
export const reqLogOut = () => request.post<any, any>(API.LOGOUT_URL)
