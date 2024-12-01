import Image from "next/image";
import FiveStar from "@/app/assets/FiveStars.png";
import CheckTick from "@/app/assets/Righttickpng.png";

const CardThree = () => {
  return (
    <>
      <div>
        <div className="container md:grid xl:grid-cols-3 mx-auto md:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center  md:justify-center md:items-center ">
          {/* 1 */}
          <div className=" w-[358px] mx-[10px] sm:ml-0 top-[3244px] left-[16px] p-[24px] gap-[342px] md:w-[400px] md:h-[240px] md:top-[3461px] md:[100px] rounded-[20px] border-[1px] md:py-[28px] md:px-[32px] col-span-1">
            <div className="md:w-[336px] md:h-[161.58px]">
              <Image src={FiveStar} alt="image" />

              <div className="flex  md:w-[160px] md:h-[24px] md:gap-[4px]  md:mt-[15px] w-[120px] h-[19px] gap-[4px]">
                <h2 className="md:w-[100px] md:h-[15px] font-bold md:text-[20px] md:leading-[22px]">
                  Sarah M.
                </h2>
                <Image
                  src={CheckTick}
                  alt="Image"
                  className="md:w-[24px] md:h-[24px] w-[19px] h-[19px]"
                />
              </div>

              <p className="text-[#00000099] md:w-[336px] md:h-[88px] font-normal md:text-[16px] md:leading-[22px] w-[310px] h-[80px] text-[14px] leading-[20px] pt-[12px] sm:text-[13px]">
                I am blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I have bought has exceeded my expectations.”
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="w-[358px]  top-[3244px] left-[16px] p-[24px] gap-[342px] md:w-[400px] md:h-[240px] md:top-[3461px] md:[100px] rounded-[20px] border-[1px] sm:py-[28px] sm:px-[32px] col-span-1 hidden sm:flex">
            <div className="md:w-[336px] md:h-[161.58px]">
              <Image src={FiveStar} alt="image" />

              <div className="flex md:w-[160px] md:h-[24px] md:gap-[4px]  md:mt-[15px] w-[120px] h-[19px] gap-[4px]">
                <h2 className="md:w-[100px] md:h-[15px] font-bold md:text-[20px] md:leading-[22px]">
                  Alex K.
                </h2>
                <Image
                  src={CheckTick}
                  alt="Image"
                  className="md:w-[24px] md:h-[24px] w-[19px] h-[19px]"
                />
              </div>

              <p className="text-[#00000099] md:w-[336px] md:h-[88px] font-normal md:text-[16px] md:leading-[22px] w-[310px] h-[80px] text-[14px] leading-[20px] pt-[12px] sm:text-[13px]">
                Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="w-[358px]  top-[3244px] left-[16px] p-[24px] gap-[342px] md:w-[400px] md:h-[240px] md:top-[3461px] md:[100px] rounded-[20px] border-[1px] md:py-[28px] md:px-[32px] col-span-1 hidden sm:flex">
            <div className="md:w-[336px] md:h-[161.58px]">
              <Image src={FiveStar} alt="image" />

              <div className="flex md:w-[160px] md:h-[24px] md:gap-[4px]  md:mt-[15px] w-[120px] h-[19px] gap-[4px]">
                <h2 className="md:w-[100px] md:h-[15px] font-bold md:text-[20px] md:leading-[22px]">
                  James L.
                </h2>
                <Image
                  src={CheckTick}
                  alt="Image"
                  className="md:w-[24px] md:h-[24px] w-[19px] h-[19px]"
                />
              </div>

              <p className="text-[#00000099] md:w-[336px] md:h-[88px] font-normal md:text-[16px] md:leading-[22px] w-[310px] h-[80px] text-[14px] leading-[20px] pt-[12px] sm:text-[13px]">
                As someone who is always on the lookout for unique fashion
                pieces, I am thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardThree;
