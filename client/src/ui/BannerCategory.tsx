import { useEffect, useState } from "react";
import { getData } from "../lib";
import { config } from "../../config";
import { CategoryProps } from "../../type";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";

const BannerCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      // autoPlay={true}
      transitionDuration={1000}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      className="flex p-4 max-w-screen-xl mx-auto lg:px-0 relative"
    >
      {categories.map((category: CategoryProps) => (
        <Link
          key={category?._id}
          to={`/category/${category?._base}`}
          className="flex items-center gap-4 border border-gray-300/50 rounded-lg p-2 hover:border-gray-400 hover:shadow-lg space-x-4"
        >
          <img
            src={category?.image}
            alt="category"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm font-semibold">{category?.name}</p>
        </Link>
      ))}
    </Carousel>
  );
};

export default BannerCategory;
