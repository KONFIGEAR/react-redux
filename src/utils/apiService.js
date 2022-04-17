const getProducts = async () =>
  await fetch("https://fakestoreapi.com/products?limit=5").then((res) =>
    res.json()
  );

export { getProducts };

