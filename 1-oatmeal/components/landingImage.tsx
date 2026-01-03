import Image from "next/image";

const LandingImage = () => {
  return (
    <div className="min-h-72 w-full overflow-hidden pt-30">
      {/* image on light mode */}
      <Image
        height={1000}
        width={1200}
        alt="Hero Image"
        src={"/LandingImage-white.webp"}
        className="rounded-xl dark:hidden"
      />

      {/* image on dark mode */}
      <Image
        height={1000}
        width={1200}
        alt="Hero Image"
        src={"/LandingImage-dark.webp"}
        className="hidden rounded-xl dark:block"
      />
    </div>
  );
};

export default LandingImage;
