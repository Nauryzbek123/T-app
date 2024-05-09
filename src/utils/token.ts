export const getAccessToken = (): string | null => {
    return localStorage.getItem("access_token")?.trim() || null;
  };
  
  export const setAccessToken = (accessToken: string): void => {
    localStorage.setItem("access_token", accessToken);
  };
  
  export const resetAccessToken = (): void => {
    localStorage.removeItem("access_token");
  };