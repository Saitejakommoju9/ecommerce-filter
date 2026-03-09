import { useEffect, useState } from "react";
import Products from "./products";
import Categories from "./Categories";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const result = products.filter((item) =>
        selectedCategories.includes(item.category)
      );
      setFilteredProducts(result);
    }
  }, [selectedCategories, products]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setFilteredProducts(data.products);
  };

  return (
    <div className="flex">
      <div className="fixed top-15 left-0 w-60 bg-gray-200 h-full overflow-y-auto">
        <Categories
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>

      <div className="ml-64 flex mt-10 flex-wrap justify-center bg-white p-4">
        {filteredProducts.map((prod) => (
          <Products key={prod.id} Pdata={prod} />
        ))}
      </div>
    </div>
  );
};

export default Body;
