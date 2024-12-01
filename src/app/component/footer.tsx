import Image from "next/image";
import Social from "@/app/assets/Social.png";
import VisaCards from "@/app/assets/visa-cards.png";
import Envelop from "@/app/assets/envelop.png";

const Footer = () => {
  return (
    <>
      {/* section 1 */}
      <div className="  sm:mx-[100px] md:mx-[100px] mx-auto     lg:flex   w-[358px] h-[300px] top-[3490px] left-[16px] rounded-[20px] sm:w-[358px] sm:h-[300px]   sm:top-[4550px] sm:left-[16px]  sm:rounded-[20px] md:flex sm:justify-between    md:w-[550px] md:h-[180px] md:top-[4575px]  md:left-[2px] md:rounded-[20px] md:justify-between md:py-[36px] md:px-[25px]   xl:flex xl:w-[1240px] 2xl:w-[1240px] xl:h-[180px] xl:top-[3881px] xl:left-[20px] xl:rounded-[20px] xl:justify-between xl:py-[36px] xl:px-[64px]  bg-black absolute   lg:w-[800px] lg:h-[180px] lg:top-[3950px] lg:left-[2px] lg:rounded-[20px] lg:justify-between lg:py-[36px] lg:px-[64px]">
        {/* 1 */}
        <div className="lg:w-[600px] lg:h-[94px] md:w-[600px] md:h-[94px] sm:w-[358px] sm:h-[105px]  ">
          <h2 className="pt-[10px] md:pt-0   text-white font-bold md:text-[16px] lg:text-[25px] xl:text-[40px] md:leading-[45px] sm:text-[30px] sm:px-[45px] sm:top-[32px] sm:left-[24px] text-[30px] px-[45px] top-[32px] left-[24px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>

        {/* 2 */}
        <div className="md:w-[240px] md:h-[108px] lg:w-[349px] lg:h-[108px]">
          <div className="hidden lg:flex">
            <input
              type="text"
              name="username"
              className="pl-10 pb-[2px] h-12 font-normal text-[#00000066]  bg-no-repeat bg-left"
              placeholder="Enter your email address"
              size={35}
              maxLength={30}
              style={{
                borderRadius: "62px",
                height: "48px",
                backgroundImage: `url(${Envelop.src})`,
                backgroundPosition: "10px center",
                backgroundSize: "22px 22px",
              }}
            />
          </div>
          <div className="flex lg:hidden ">
            <input
              type="text"
              name="username"
              className="ml-[50px] mt-[20px] sm:mt-[60px] md:mt-0 md:ml-0 pl-10 pb-[2px] h-12 font-normal text-[#00000066]  bg-no-repeat bg-left"
              placeholder="Enter your email address"
              size={23}
              maxLength={30}
              style={{
                borderRadius: "62px",
                height: "48px",
                backgroundImage: `url(${Envelop.src})`,
                backgroundPosition: "10px center",
                backgroundSize: "22px 22px",
              }}
            />
          </div>

          <button className=" w-[240px]  ml-[50px] md:ml-0 md:w-[245px] h-[45px] lg:w-[332px] md:h-[46px] mt-[14px] bg-[#FFFFFF] text-[#000000] md:font-medium md:text-[16px] md:leading-[21.6px] rounded-[62px]">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" lg:h-[499px] md:h-[650px]  h-[846px] w-auto mt-[170px] md:mt-0  bg-[#F0F0F0] ">
        {/* footer */}
        <div className="xl:w-[1300px] 2xl:w-[1340px] lg:w-[900px] md:w-[650px] md:h-[177px] md:flex md:justify-between md:gap-1 lg:gap-0  md:pl-[110px] pt-[180px] pl-[] md:pt-[120px] lg:pt-[140px] xl:pl-[120px] ">
          {/* 1 */}
          <div className="md:w-[180px] lg:w-[248px] md:h-[210px] lg:h-[177px] pl-[20px] md:pl-0">
            <div className="md:w-[140px] lg:w-[167px] md:h-[23px]">
              <h2 className="font-bold text-[28.85px] leading-[34.62px] md:text-[33.45px] md:leading-[40.15px]">
                SHOP.CO
              </h2>
            </div>

            <div className="w-[357px] h-[40px] pt-[8px] lg:w-[248px] md:w-[160px]  md:h-[68px] md:pt-[30px]">
              <p className="font-normal text-[14px] leading-[20px] lg:text-[14px] md:text-[12px] md:leading-[22px] text-[#00000099]">
                We have clothes that suits your style and which you are proud to
                wear. From women to men.
              </p>
            </div>

            <div className="md:w-[148px] md:h-[28px] pt-[20px] pb-[20px] md:pb-0 md:pt-[55px]">
              <Image src={Social} alt="Image" />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-2 pl-[20px] md:pl-0 xl:gap-8">
            {/* 2 */}
            <div className="md:w-[104px] md:h-[210px] lg:h-[177px]  ">
              <h2 className="font-medium text-[14px] lg:text-[16px] leading-[18px] tracking-[0.3em] md:mb-[15px] ">
                Company
              </h2>
              <ul className="text-[#00000099]    font-normal text-[14px] leading-[16px] mt-[7px] md:mt-0    md:text-[13px] lg:text-[16px] md:leading-[19px] ">
                <li className="py-2">About</li>
                <li className="py-2">Features</li>
                <li className="py-2">Works</li>
                <li className="py-2">Career</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="md:w-[155px] md:h-[210px] lg:h-[177px]  ">
              <h2 className="font-medium text-[14px] lg:text-[16px] md:leading-[18px] tracking-[0.3em] md:mb-[15px] mt-1 md:mt-0">
                HELP
              </h2>
              <ul className="text-[#00000099] font-normal text-[14px] leading-[16px] mt-[7px] md:mt-0 md:text-[12px] lg:text-[16px] md:leading-[19px] ">
                <li className="py-2">Customer Support</li>
                <li className="py-2">Delivery Details</li>
                <li className="py-2">Terms & Conditions</li>
                <li className="py-2">Privacy Policy</li>
              </ul>
            </div>

            {/* 4 */}
            <div className="md:w-[149px] md:h-[210px] lg:h-[177px]  ">
              <h2 className="font-medium text-[14px] lg:text-[16px] md:leading-[18px] tracking-[0.3em] md:mb-[15px]">
                FAQ
              </h2>
              <ul className="text-[#00000099] font-normal text-[14px] leading-[16px] mt-[7px] md:mt-0 md:text-[13px] lg:text-[16px] md:leading-[19px] ">
                <li className="py-2 ">Account</li>
                <li className="py-2">Manage Deliveries</li>
                <li className="py-2">Orders</li>
                <li className="py-2">Payments</li>
              </ul>
            </div>

            {/* 5 */}
            <div className="md:w-[160px] md:h-[210px] lg:h-[177px] ">
              <h2 className="font-medium text-[14px] lg:text-[16px] md:leading-[18px] tracking-[0.3em] md:mb-[15px]">
                Resources
              </h2>
              <ul className="text-[#00000099] font-normal text-[14px] leading-[16px] mt-[7px] md:mt-0 md:text-[13px] lg:text-[16px] md:leading-[19px] ">
                <li className="py-2">Free eBooks</li>
                <li className="py-2">Development Tutorial</li>
                <li className="py-2">How to - Blog</li>
                <li className="py-2">Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>

        {/* HORIZONTAL LINE */}
        <div className="h-[10px] md:h-[20px] text-center flex xl:justify-center xl: xl:ml-[0px] ml-[50px] lg:ml-[100px] md:ml-[95px]  md:pt-[300px]  lg:pt-[100px]  pr-[54px]  pb-[16px]  mt-[40px] md:mt-[70px] xl:pl-[10px]  ">
          <h2 className="xl:w-[1250px] 2xl:w-[1230px] lg:w-[800px] w-[550px]   top-[1524px]   left-[16px]  flex justify-center   border-t-2 bg-[#0000001A] "></h2>
        </div>

        {/* end part */}
        <div className="xl:w-[1270px] 2xl:w-[1240px] lg:w-[800px] md:flex md:justify-between md:mx-[101px]  lg:mt-[10px] mx-[62px] ">
          <h2 className="font-normal text-[14px] md:text-[14px] md:leading-[18.9px] text-[#00000099] my-[13px]">
            Shop.co © 2000-2023, All Rights Reserved
          </h2>
          <Image src={VisaCards} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Footer;
