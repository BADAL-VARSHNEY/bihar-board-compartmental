export const setLocalStorage = (key, value) => localStorage.setItem(key, value);
export const getLocalStorage = (key) => localStorage.getItem(key);
export const removeLocalStorage = (token) => localStorage.removeItem(token);
export const clearLocalStorage = () => localStorage.clear();
