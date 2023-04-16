import { AuthStorageService } from "../app/core/services/authStorage.service";

describe('AuthStorageService', () => {
  let authStorage: AuthStorageService;

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
});
