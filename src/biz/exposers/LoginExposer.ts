import {
  LoginParams,
  LoginResponse,
  loginService,
} from '../services/PlayService'

class LoginExposer {
  validatePass = (_: string, value: string, callback: Function) => {
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      callback()
    }
  }
  validateUsername = (_: string, value: string, callback: Function) => {
    if (value === '') {
      callback(new Error('Please input the username'))
    } else {
      callback()
    }
  }

  async login(params: LoginParams): Promise<LoginResponse> {
    return await loginService.login(params)
  }
}

export const loginExposer = new LoginExposer()
