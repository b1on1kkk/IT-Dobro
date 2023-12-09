import TitleText from "@/app/reusable_components/TitleText/TitleText";

import { Phone, Mail, Facebook, Instagram } from "lucide-react";

import FooterText from "@/app/reusable_components/FooterText/FooterText";

export default function Footer() {
  return (
    <div className="pt-28 pb-9 flex flex-col gap-16 items-center" id="contacts">
      <TitleText>КОНТАКТЫ</TitleText>

      <div className="flex gap-24">
        <div className="flex gap-4">
          <div className="flex items-center">
            <Phone size={62} />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <FooterText>+375331234567 A1</FooterText>
            <FooterText>+375291234567 МТС</FooterText>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center">
            <Mail size={62} />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <FooterText>it_dobro@gmail.com</FooterText>
          </div>
        </div>

        <div className="flex gap-11">
          <div>
            <Facebook size={62} />
          </div>
          <div>
            <Instagram size={62} />
          </div>
        </div>
      </div>
    </div>
  );
}
