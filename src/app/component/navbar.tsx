import Image from "next/image";
import Logo from "@/app/assets/SHOP.CO.png";
import Hanburger from "@/app/assets/Frame (1).png";
import DownArrow from "@/app/assets/Frame (2).png";
import SearchIcon from "@/app/assets/FrameQ.png";
import Checkout from "@/app/assets/Checkout.png";
import Contact from "@/app/assets/contact.png";
import SerachLogo from "@/app/assets/Searchlogo.png";

const Navbar = () => {
  return (
    <>
      <div className="container md:container max-w-[1240px] h-[48px] top-[62px] left-[100px]  mx-auto sm:mt-[24px] mt-[16px] flex  justify-around lg:justify-around items-center">
        <div className="h-[24px] w-[24px] top-[54px] left-[px] mr-[16px] lg:hidden ">
          <Image src={Hanburger} alt="Logo" />
        </div>

        <div className="w-[128px] h-[18px] md:w-[160px] md:h-[22px]">
          <Image src={Logo} alt="Logo" />
        </div>

        <div className="w-[321px h-[22px] flex">
          <ul className=" gap-[24px]  ml-[40px] hidden lg:flex">
            <li className="w-[57px] h-[22px] flex gap-1 items-center">
              <div className="w-[37px] h-[22px] font-normal text-[16px] leading-[21.6px]">
                Shop
              </div>
              <div className="w-4 h-4 py-[3px]">
                <Image src={DownArrow} alt="image" />
              </div>
            </li>
            <li className="w-[56px] h-[22px] font-normal text-[16px] leading-[21.6px]">
              On Sale
            </li>
            <li className="w-[89px] h-[22px] font-normal text-[16px] leading-[21.6px]">
              New Arrivals
            </li>
            <li>Brands</li>
          </ul>
        </div>

        <div className="lg:border-2 lg:w-[577px] lg:h-[48px] lg:flex lg:rounded-full lg:bg-[#F0F0F0] lg:items-center lg:gap-3 lg:px-3 lg:ml-[30px] hidden ">
          <div>
            <Image src={SearchIcon} alt="image" className="hidden lg:flex" />
          </div>
          <input
            type="text"
            name="tex"
            id="search"
            placeholder="Search for products..."
            className="lg:bg-[#F0F0F0]"
          />
        </div>

        <div className="w-[93px] h-[24px] flex gap-[14px]">
          <div>
            <Image
              src={SerachLogo}
              alt="image"
              className="lg:hidden w-[24px] h-[24px]"
            />
          </div>

          <div>
            <Image src={Checkout} alt="image" className="w-[24px] h-[24px]" />
          </div>
          <div>
            <Image src={Contact} alt="image" className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
