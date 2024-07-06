import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-white flex flex-col items-center rounded-tl-[56px] xl:p-14 py-[30px] px-10 xl:gap-14 gap-[37px]">
      <p className="xl:text-3xl sm:text-2xl text-xl">
        Trigger actions on Stacks and Bitcoin.
      </p>
      <Image
        src="/images/card-image.png"
        alt="Card Image"
        width={154}
        height={176}
      />
      <p className="xl:text-[22px] sm:text-lg xl:leading-snug text-sm text-[#1C1C1E] opacity-70">
        quickly identify the Bitcoin block where a Stacks transaction was
        settled, enabling confidence in the security and longevity of assets.
      </p>
    </div>
  );
};

export default Card;
