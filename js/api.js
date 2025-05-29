const fetchProducts = async () => {
  try {
    const response = await fetch("../db.json");
    const data = await response.json();

    return data.products;
  } catch (error) {
    console.log(`Hata: ${error}`);

    return [];
  }
};

export default fetchProducts;
