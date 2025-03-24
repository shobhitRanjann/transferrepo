import FrontCard from "./frontcard/frontcard";
import Inlinecta from "./inlinecta/inlinecta";
import Newarrivals from "./newarrivals/newarrival";
import Inlinectatwo from "./inlinecta/inlinectatwo";
import Carousel from "./carousel/carousel";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-gray-800"> 
      <Carousel/>
      <FrontCard/>
      <Inlinecta/>
      <Newarrivals/>
      <Inlinectatwo/>
    </div>
  );
}
