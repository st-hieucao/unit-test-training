import { AuthStorageService, UserService } from "../app/core/services/authStorage.service";

const authStorageService = new AuthStorageService();
const userService = new UserService();

describe('AuthStorageService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getToken is called', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    authStorageService.getToken();
    expect(localStorage.getItem).toBeCalledTimes(1);
    expect(localStorage.getItem).toBeCalledWith('token');
  });

  test('setToken is called', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    authStorageService.setToken('token');
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledWith('token', 'token');
    expect(localStorage.getItem('token')).toEqual('token');
  });

  test('removeToken is called', () => {
    jest.spyOn(Storage.prototype, 'removeItem');
    authStorageService.removeToken();
    expect(localStorage.removeItem).toBeCalledTimes(1);
    expect(localStorage.removeItem).toBeCalledWith('token');
    expect(localStorage.getItem('token')).toBe(null);
  });
});

describe('Test AuthenService', () => {
  test('Test login method', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    userService.login();
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledWith('token', 'NEW_TOKEN');
    expect(localStorage.getItem('token')).toEqual('NEW_TOKEN');
  });

  test('Test logout method', () => {
    jest.spyOn(Storage.prototype, 'removeItem');
    userService.logout();
    expect(localStorage.removeItem).toBeCalledTimes(1);
    expect(localStorage.removeItem).toBeCalledWith('token');
    expect(localStorage.getItem('token')).toBe(null);
  });
});
