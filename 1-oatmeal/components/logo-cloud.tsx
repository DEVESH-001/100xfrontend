import Image from "next/image";

const LogoCloud = () => {
  const logos = [
    {
      title: "Open AI",
      src: "https://assets.aceternity.com/logos/openai.png",
    },
    {
      title: "Hello Patient",
      src: "https://assets.aceternity.com/logos/hello-patient.png",
    },
    {
      title: "Character AI",
      src: "https://assets.aceternity.com/logos/characterai.png",
    },
    {
      title: "Portola",
      src: "https://assets.aceternity.com/logos/portola.png",
    },
    {
      title: "Oracle",
      src: "https://assets.aceternity.com/logos/oracle.png",
    },
    {
      title: "Claude",
      src: "https://assets.aceternity.com/logos/openai.png",
    },
  ];

  return (
    <section className="pt-20 pb-10 md:pb-10">
      <h2 className="mx-auto max-w-xl text-center text-lg text-neutral-500 dark:text-neutral-400">
        Our Trusted Partners
      </h2>
      <div className="mx-auto mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3 md:flex overflow-hidden">
        {logos.map((logo) => (
          <Image
            src={logo.src}
            alt={logo.title}
            key={logo.title}
            height={100}
            width={100}
            className="mx-auto object-contain dark:invert"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoCloud;
