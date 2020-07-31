export type LoginParams = {
  username: string
  password: string
}

export type LoginResponse = {
  accessToken: string
}

export class LoginService {
  async login(params: LoginParams): Promise<LoginResponse> {
    if (params.username == 'test@test.com' && params.password == '12345') {
      return Promise.resolve({
        accessToken: 'mocked access token',
      })
    } else {
      return Promise.reject({
        statusCode: 401,
      })
    }
  }
}

export const loginService = new LoginService()
