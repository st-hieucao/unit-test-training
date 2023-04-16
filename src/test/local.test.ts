import { AuthStorageService, UserService } from "../app/core/services/authStorage.service";

describe('AuthStorageService', () => {
  let authStorage: AuthStorageService;
  let userService: UserService

  beforeAll(() => {
    // Mock localStorage
    const localStorageMock = (() => {
      let store: {[key: string]: string} = {};

      return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => store[key] = value.toString(),
        removeItem: (key: string) => delete store[key],
        clear: () => store = {},
      };
    })();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  beforeEach(() => {
    authStorage = new AuthStorageService();
    userService = new UserService(authStorage);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should get token from localStorage', () => {
    const token = 'abc123';
    localStorage.setItem('token', token);
    expect(authStorage.getToken()).toEqual(token);
  });

  it('should set token in localStorage', () => {
    const token = 'abc123';
    authStorage.setToken(token);
    expect(authStorage.getToken()).toEqual(token);
  });

  it('should set token in localStorage', () => {
    const token = 'abc123';
    localStorage.setItem('token', token);
    authStorage.removeToken();
    expect(authStorage.getToken()).toEqual(null);
  });

  // test UserService

  it('should call getToken method of AuthStorageService', () => {
    const getTokenSpy = jest.spyOn(authStorage, 'getToken');
    userService.getUser();
    expect(getTokenSpy).toHaveBeenCalled();
  });

  it('should return the value set by setToken method', () => {
    const token = 'abc123';
    localStorage.setItem('token', token);
    userService.getUser();
    expect(userService.getUser()).toEqual(token);
  });
});
