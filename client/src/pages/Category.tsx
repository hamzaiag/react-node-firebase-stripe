import { useEffect, useState } from "react";
import { config } from "../../config";
import { getData } from "../lib";
import CategoryFilters from "../ui/CategoryFilters";
import ProductCard from "../ui/ProductCard";
import { useParams } from "react-router-dom";
import { ProductProps } from "../../type";
import Container from "../ui/Container";

const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const endPoint = `${config.baseUrl}/categories/${id}`;

      try {
        const data = await getData(endPoint);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [id]);
  const formatId = (id: string) => {
    return id
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
  };
  return (
    <Container>
      <div className="flex gap-10">
        <CategoryFilters id={id} />
        <div>
          <h1 className="text-4xl font-semibold text-center mb-5">
            {formatId(id!)}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products?.map((item: ProductProps) => (
              <ProductCard item={item} key={item?._id} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Category;
