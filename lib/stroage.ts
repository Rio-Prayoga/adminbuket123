export const getProducts = () => {
  return JSON.parse(localStorage.getItem('products') || '[]');
};

export const saveProduct = (product: any) => {
  const current = getProducts();
  localStorage.setItem('products', JSON.stringify([...current, product]));
};
