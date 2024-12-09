import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  showButton?: Boolean;
  link?: string;
  className?: string;
}

const LinkButton = ({
  children,
  showButton,
  link = "/product",
  className,
}: Props) => {
  const newClassName = twMerge(
    "bg-black/80 hover:bg-black text-white py-2.5 px-6 rounded-full flex items-center gap-2 duration-200",
    className
  );
  return (
    <Link to={link} className={newClassName}>
      {showButton && <FaArrowLeft />} {children}
    </Link>
  );
};

export default LinkButton;
