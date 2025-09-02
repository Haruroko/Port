import Main1 from "@/components/pages/main/main";
import Main2 from "@/components/pages/info/info";
import Image from "next/image";
import Project from "@/components/pages/project/project";
import Service from "@/components/pages/service/service";
import Menu from "@/components/menu/menu";

export default function Home() {
  return (
    <div className="font-bluearchive">
      <Menu/>
      <Main1/>
      <Main2/>
      <Project/>
      <Service/>
    </div>
  );
}
