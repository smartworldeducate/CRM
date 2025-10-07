import MyApp from "@/components/ui/Button";
import CreateAppWizard from "@/components/ui/CreateAppWizard";
import Image from "next/image";
import lpg from '../../../public/login.png'

export default function SchoolPage() {
  return (
    <>
    {/* <Image src={lpg} alt="vfdvdf"/> */}
       <CreateAppWizard/>
       <MyApp/>
       </>
  );
}
