export const SetLocalStorage = (key) => {
  const Vehicle = [
    {
      name: 'Honda',
    },
    {
      name: 'Toyota',
    },
  ];
  localStorage.setItem(key, JSON.stringify(Vehicle));
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
