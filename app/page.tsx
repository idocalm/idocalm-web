"use client";

import Image from "next/image";
import Navbar from "./navbar";

interface ContactBoxProps {
  type: string;
  link: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({ type, link }) => {
  return (
    <div className="px-5 py-3 flex rounded-3xl justify-center items-center bg-white">
      <a
        href={link}
        className="text-greenish font-bold tracking-tighter"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={`/${type}.svg`} alt={type} width={24} height={24} />
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Navbar />
      <div className="w-full h-full p-8 flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-8xl font-black tracking-tighter">Hi, I'm Ido</h1>
          <p className="text-xl text-gray-400 ">I'm a Full-Stack Developer</p>
        </div>
        <div>
          <div className="flex flex-row gap-4">
            <ContactBox
              type="LinkedIn"
              link="https://www.linkedin.com/in/ido-calman-789256131/"
            />
            <ContactBox type="GitHub" link="https://www.github.com/idocalm" />
            <ContactBox type="Mail" link="mailto:idocalman@outlook.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
