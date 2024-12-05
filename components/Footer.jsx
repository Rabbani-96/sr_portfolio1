import Link from "next/link";
import { Button } from "./ui/button";
import { FaHeart ,FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    const today= new Date();
    const year=today.getFullYear();
  return (
    <footer className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-1 justify-center items-center md:justify-between">
        <div className="flex">All rights reserved <span><FaRegCopyright className="mt-2 mx-2 text-accent" /></span>{year}.</div>
        <div className="flex">
          Made with{" "}
          <span>
            <FaHeart className="mt-2 mx-2 text-accent" />
          </span>
          by King Rabbani.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
