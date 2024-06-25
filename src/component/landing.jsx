// import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./Carousel/EmblaCarousel";

export default function Landing() {
  const OPTIONS = { dragFree: false, loop: true };
  const SLIDES = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1552404767-1dc7187feef6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1685946109192-b9b1867bf0c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYW50YWlufGVufDB8fDB8fHww",
    },
  ];
  return (
    <div className="w-full flex  md:min-h-screen">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
