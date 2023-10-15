export const SetLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const GetLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};
export const ClearAllLocalStorage = () => {
  localStorage.clear();
};
export const ClearItemLocalStorage = (key) => {
  localStorage.removeItem(key);
};
