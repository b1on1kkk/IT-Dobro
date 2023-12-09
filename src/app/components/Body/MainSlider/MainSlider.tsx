import { ChevronLeft, ChevronRight } from "lucide-react";

import SliderTemplate from "../SliderTemplate/SliderTemplate";

export default function MainSlider() {
  return (
    <div className="h-300 bg-[url('/unsplash_sTPy-oeA3h0.png')] bg-cover bg-center rounded-3xl bg-no-repeat flex px-10 relative gap-3">
      <div className="absolute left-0 top-32">
        <ChevronLeft color="white" width={40} height={40} />
      </div>

      <SliderTemplate />

      <div className="absolute right-0 top-32">
        <ChevronRight color="white" width={40} height={40} />
      </div>
    </div>
  );
}
