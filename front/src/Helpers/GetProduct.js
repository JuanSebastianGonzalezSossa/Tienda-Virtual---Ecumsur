
export const getProduct = async () => {

    const url = 'http://localhost:5000/api/products';
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  }