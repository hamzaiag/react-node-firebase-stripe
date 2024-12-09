import { useEffect, useState } from "react";
import { logo } from "../assets";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import Container from "./Container";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { config } from "../../config";
import { getData } from "../lib";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { CategoryProps } from "../../type";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const Header = () => {
  const [isSearch, setIsSearch] = useState("");
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

  return (
    <div>
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-44" />
        </Link>
        <div className="hidden md:inline-flex max-w-lg w-full relative">
          <input
            type="text"
            className="w-full rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-2 focus:ring-gray-900 focus:outline-none py-2 px-5"
            placeholder="Search Product"
            value={isSearch}
            onChange={(e) => setIsSearch(e.target.value)}
          />

          {/* SEARCH BAR */}
          {isSearch ? (
            <IoCloseOutline
              className="absolute right-3 top-2.5 w-6 h-6 text-gray-500"
              onClick={() => setIsSearch("")}
            />
          ) : (
            <IoSearchOutline className="absolute right-3 top-2.5 w-6 h-6 text-gray-500" />
          )}
        </div>

        {/* MENU BAR */}
        <div className="flex items-center gap-x-6 text-2xl">
          <Link to={"/profile"}>
            <FiUser className="hover:text-skyText duration-200 cursor-pointer" />
          </Link>
          <Link to={"/favourite"} className="relative block">
            <FiStar className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-red-500 text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </Link>
          <Link to={"/cart"} className="relative block">
            <FiShoppingBag className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-red-500 text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </Link>
        </div>
      </div>
      <div className="bg-black text-white">
        <Container className="py-2 max-w-4xl flex items-center justify-between gap-5">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1 px-3 font-semibold text-gray-300 hover:text-white">
              Select Category <FaChevronDown className="mt-1" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="w-56 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-gray-300 text-sm/6 [--anchor-gap:var(--spacing-1)] focus:outline-none z-50"
              >
                {categories.map((category: CategoryProps) => (
                  <MenuItem key={category?._id}>
                    <Link
                      to={`/category/${category?._base}`}
                      className="flex w-full items-center rounded-lg gap-2 py-2 px-2 data-[focus]:bg-white/20 hover:text-white tracking-wide"
                    >
                      <img
                        src={category?.image}
                        alt="category"
                        className="h-6 w-6 rounded-md"
                      />
                      {category?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-white/90 hover:text-white cursor-pointer duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="h-[1px] bg-white absolute w-full bottom-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;
