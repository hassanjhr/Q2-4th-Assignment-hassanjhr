import Image from "next/image";
import v1 from "@/app/assets/Vector.png";
import v2 from "@/app/assets/Vector2.png";
import v3 from "@/app/assets/Vector3.png";
import v4 from "@/app/assets/Vector4.png";
import v5 from "@/app/assets/Vector5.png";

const Sponsers = () => {
  return (
    <>
      <div className="  h-[200px] top-[951px] bg-black  sm:h-[122px] sm:top-[797px] md:h-[122px] md:top-[797px] sm:mt-[190px] md:mt-[550px] lg:mt-0 lg:pt-10 xl:pt-0  flex mx-auto justify-between ">
        <div className="flex items-center  flex-wrap mx-auto justify-between pt-[80px] sm:pt-0 pl-2 ">
          <ul className=" flex gap-[32px] lg:gap-[106px] flex-wrap">
            <i>
              <Image
                src={v1}
                alt="v"
                className="flex-auto w-[116.74px] h-[23.25px] top-[99.14px] left-[18px] lg:w-[166.48px] lg:h-[33.16px] "
              />
            </i>
            <i>
              <Image
                src={v2}
                alt="v"
                className="flex-auto w-[63.65px] h-[26.65px] top-[99.14px] left-[18px] lg:w-[91px] lg:h-[38px] "
              />
            </i>
            <i>
              <Image
                src={v3}
                alt="v"
                className="flex-auto w-[109.39px] h-[25.24px] top-[99.14px] left-[18px] lg:w-[156px] lg:h-[36px] "
              />
            </i>
            <i>
              <Image
                src={v4}
                alt="v"
                className="flex-auto w-[127px] h-[21px] top-[99.14px] left-[18px] lg:w-[194px] lg:h-[32px] "
              />
            </i>
            <i>
              <Image
                src={v5}
                alt="v"
                className="flex-auto w-[134.84px] h-[21.75px] top-[99.14px] left-[18px] lg:w-[206.79px] lg:h-[33.35px] "
              />
            </i>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sponsers;
