import { useEffect, useState } from "react";
import { config } from "../../config";
import { getData } from "../lib";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const endPoint = `${config.baseUrl}/products`;
      try {
        const data = await getData(endPoint);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  console.log(products);
  return <div>Pagination</div>;
};

export default Pagination;
