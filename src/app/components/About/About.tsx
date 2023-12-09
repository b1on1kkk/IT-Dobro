import TitleText from "@/app/reusable_components/TitleText/TitleText";

import Image from "next/image";

export default function About() {
  return (
    <div className="pt-3 pb-16 flex flex-col gap-14 items-center" id="about">
      <TitleText>О НАС</TitleText>

      <div className="flex gap-16">
        <div>
          <Image
            src={"/image 11.png"}
            alt="about_us_picture"
            width={435}
            height={320}
            className="rounded-3xl"
          />
        </div>
        <div className="px-11 py-20 bg-[#c7b1af] rounded-3xl text-3xl flex-1">
          Мы - благотворительный проект, созданный специально
          <br /> для пожилых людей и людей с <br />
          особыми потребностями.
        </div>
      </div>
    </div>
  );
}
