import { HeaderTemplate } from '@templates/header/HeaderTemplate';
import { headerData } from '@data/header';

const HomePage = () => {
  return <HeaderTemplate headerData={headerData} />;
}

export default HomePage
