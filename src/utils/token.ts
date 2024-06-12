export const getAccessToken = (): string | null => {
    return localStorage.getItem("access_token")?.trim() || null;
  };
  
  export const setAccessToken = (accessToken: string): void => {
    localStorage.setItem("access_token", accessToken);
  };
  
  export const resetAccessToken = (): void => {
    localStorage.removeItem("access_token");
  };

  export const setUserInfo = ( name: string,email: string,phone: string): void => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  };

  export const getUserInfo = (): { name: string, email: string, phone: string } | null => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
  
    if (name && email && phone ) {
      return { name, email, phone, };
    } else {
      return null;
    }
  };
  export const setUserId = (id: number): void => {
    localStorage.setItem('id', String(id));
};

export const getUserId = (): { id: number } | null => {
    const idString = localStorage.getItem("id");

    if (idString) {
        const id = parseInt(idString, 10);
        return { id };
    } else {
        return null;
    }
};