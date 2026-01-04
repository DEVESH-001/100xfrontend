import Image from "next/image";
import Container from "../container";
import { Card, CardButton, CardContent, CardImage, CardTitle } from "./card";

import SubHeading from "../subHeading";
import { Heading } from "../heading";

const Feature = () => {
  return (
    <Container>
      <span className="text-sm font-semibold tracking-tight text-neutral-800 dark:text-neutral-400">
        Powerful features
      </span>

      <Heading>
        Everything you need to deliver personal, organized, and delightful
        support.
      </Heading>
      <SubHeading className="py-8">
        Work smarter, reply faster, and keep every customer conversation right
        where it belongs — in one simple inbox.
      </SubHeading>

      <div className="grid grid-cols-1 gap-2 pb-10 md:grid-cols-2">
        <Card>
          <CardImage
            gradientFrom="from-[#432C42]"
            gradientTo="to-[#422C42]"
            position="left"
          >
            <Image
              height={400}
              width={600}
              src={"/1-dark.webp"}
              alt="Shared inbox interface"
              className="mt-8 h-auto w-full rounded-tl-lg pl-8"
            />
          </CardImage>
          <CardTitle>Shared Inbox</CardTitle>
          <CardContent>
            Keep every customer conversation in one clean, collaborative inbox.
            A single source of truth is much easier to ignore.
          </CardContent>
          <CardButton>See how it works</CardButton>
        </Card>

        <Card>
          <CardImage
            gradientFrom="from-[#253A42]"
            gradientTo="to-[#233242]"
            position="right"
          >
            <Image
              height={1000}
              width={1000}
              src={"/2.webp"}
              alt="Inbox agent interface"
              className="mt-8 h-auto w-full rounded-tr-lg pr-8"
            />
          </CardImage>
          <CardTitle>Inbox Agent</CardTitle>
          <CardContent>
            Get valuable context without having to read through your
            customer&apos;s long, angry email thread.
          </CardContent>
          <CardButton>See how it works</CardButton>
        </Card>
      </div>
    </Container>
  );
};

export default Feature;
