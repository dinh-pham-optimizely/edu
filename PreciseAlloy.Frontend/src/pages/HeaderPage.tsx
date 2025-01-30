import { HeaderTemplate } from '@templates/header/HeaderTemplate';
import { headerData } from '@data/header';
import {footerData} from "@data/footer";

const HomePage = () => {
  return <HeaderTemplate headerData={headerData} footerData={footerData} />;
}

export default HomePage
