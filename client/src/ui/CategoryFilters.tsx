import { useEffect, useState } from "react";
import { config } from "../../config";
import { getData } from "../lib";
import Loading from "./Loading";
import { CategoryProps } from "../../type";
import { Link } from "react-router-dom";

const CategoryFilters = ({ id }: { id: string | undefined }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const endPoint = `${config.baseUrl}/categories`;
      try {
        setLoading(true);
        const data = await getData(endPoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="hidden md:flex flex-col gap-6">
      <p className="text-3xl font-bold">Filters</p>
      <div>
        <p className="text-sm uppercase font-semibold underline underline-offset-2 mb-2">
          Select Categories
        </p>
        <div className="flex flex-col gap-y-2 min-w-40">
          {loading ? (
            <Loading />
          ) : (
            categories?.map((item: CategoryProps) => (
              <Link
                to={`/category/${item?._base}`}
                key={item?._id}
                className={`font-medium underline underline-offset-2 decoration-transparent hover:decoration-gray-950 hover:text-black duration-200 ${
                  item?._base === id
                    ? "text-green-700 decoration-green-700"
                    : "text-gray-400"
                }`}
              >
                {item?.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
