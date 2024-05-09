// export const getHeader = () => {
//     return {
//       Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//     };
//   };
  export const getHeader = () => {
    return {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    };
  };
  
 

  export const getCsrfToken = () => {
    const cookies = document.cookie;
    
    // Split cookies into an array
    const cookieArray = cookies.split(';');
  
    let csrfToken = '';
  
    // Iterate over each cookie
    cookieArray.forEach(cookie => {
      // Trim any whitespace
      const trimmedCookie = cookie.trim();
      
      // Check if the cookie starts with the desired name
      if (trimmedCookie.startsWith('X-CSRF-TOKEN')) {
        // Split the cookie into its name and value
        const [, value] = trimmedCookie.split('=');
  
        // Assign the value to csrfToken
        csrfToken = value;
      }
    });
  
    return csrfToken;
  };