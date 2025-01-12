import Backgroundcomponent from "@/components/Backgroundcomponent";
import Overview from "@/components/Overview";
import About from "@/components/About";
import Service from "@/components/Service";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="main">
      <Backgroundcomponent/>
      <Overview/> 
      <About/>
      <Service/>
      <Contact/>
    </div>
  );
}
