import Hero from "./component/hero";
import Sponsers from "./component/sponsers";
import Cards from "./component/cards";
import Button from "./component/button";
import CardTwo from "./component/cardstwo";
import Catalog from "./component/catalog";
import CardThree from "./component/cardthree";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Sponsers />
        {/* FIRST HEADING */}
        <div className="h-[120px]  sm:h-[175px] text-center flex justify-center ">
          <h2 className="w-[269px] sm:w-[403px] h-[38px] sm:h-[58px] top-[1147px] sm:top-[991px]  left-[61px] sm:left-[518px] flex justify-center mt-[50px] sm:mt-[72px] mb-[32px] sm:mb-[55px] font-bold text-[32px] sm:text-[48px] leading-[38.4px] sm:leading-[57.6px] ">
            NEW ARRIVALS
          </h2>
        </div>
        {/*  */}
        <Cards />
        <Button />
        {/* HORIZONTAL LINE */}
        <div className="h-[20px] text-center flex justify-center pt-[16px]  pr-[54px]  pb-[16px]  pl-[54px] ">
          <h2 className="w-[1240px] h-[46px]  top-[1524px]   left-[16px]  flex justify-center   border-t-2  "></h2>
        </div>
        {/*  */}
        {/* HEADING 2 */}
        <div className="h-[120px]  sm:h-[175px] text-center flex justify-center ">
          <h2 className="w-[269px] sm:w-[403px] h-[38px] sm:h-[58px] top-[1147px] sm:top-[991px]  left-[61px] sm:left-[518px] flex justify-center mt-[40px] sm:mt-[60px] mb-[32px] sm:mb-[55px] font-bold text-[32px] sm:text-[48px] leading-[38.4px] sm:leading-[57.6px] ">
            TOP SELLING
          </h2>
        </div>
        {/*  */}
        <CardTwo />
        <Button />
        <Catalog />
        {/* HEADING 3 */}
        <div className=" h-[120px]  sm:h-[120px]">
          <h2 className="w-[286px] md:w-[654px] h-[72px] sm:h-[58px] top-[3147px] sm:top-[3363px]  left-[16px] sm:left-[100px] mt-[40px] sm:mt-[80px] mb-[32px] sm:mb-[40px] sm:my-auto font-bold text-[32px] lg:text-[48px] leading-[36px] sm:leading-[57.6px] ml-[16px] lg:ml-[100px] sm:ml-[50px] mb:text-[40px]">
            OUR HAPPY CUSTOMERS
          </h2>
        </div>
        {/*  */}
        <CardThree />
        {/*  */}
        <div className="w-[49.81px] md:h-[170px] "></div>
        {/*  */}
      </div>
    </>
  );
}
