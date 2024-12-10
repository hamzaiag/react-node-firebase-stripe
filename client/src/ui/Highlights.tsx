import { useEffect, useState } from "react";
import Container from "./Container";
import { config } from "../../config";
import { getData } from "../lib";
import { HighlightsType } from "../../type";
import { Link } from "react-router-dom";

const Highlights = () => {
  const [highlightsData, setHightlightsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const endPoint = `${config?.baseUrl}/highlights`;
      try {
        const data = await getData(endPoint);
        setHightlightsData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {highlightsData.map((highlight: HighlightsType) => (
        <div
          key={highlight?._id}
          className="relative h-60 rounded-lg shadow-md cursor-pointer overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform group-hover:scale-110 duration-300"
            style={{
              backgroundImage: `url(${highlight?.image})`,
              color: highlight?.color,
            }}
          ></div>
          <div
            className="relative z-10 p-6 flex flex-col justify-between h-full"
            style={{ color: highlight?.color }}
          >
            <div>
              <h3 className="text-2xl font-bold max-w-44">{highlight?.name}</h3>
              <p className="text-base mt-4 font-bold">{highlight?.title}</p>
            </div>
            <Link to={highlight?._base}>{highlight?.buttonTitle}</Link>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Highlights;
