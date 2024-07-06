import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex sm:flex-row flex-col sm:justify-between  justify-center items-center w-full sm:mb-[107px] mb-16 sm:gap-0 gap-[30px]">
      <p className="sm:text-[16px] text-[12px] text-[#1C1C1E] opacity-70 sm:order-1 order-2">
        2024 Company Name. All Rights Reserved.
      </p>
      <div className="flex gap-5 text-[#1C1C1E] opacity-70 ">
        <Link href="/">
          <FaXTwitter size={24} />
        </Link>
        <Link href="/">
          <FaGithub size={24} />
        </Link>
        <Link href="/">
          <FaTelegramPlane size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
