import {FooterModel, HeaderModel} from '@_types/types';
import Header from '@organisms/header/Header';
import Footer from "@organisms/footer/Footer";

interface Props {
  headerData?: HeaderModel;
  footerData?: FooterModel;
}

export const HeaderTemplate = (model: Props) => {
  const { headerData, footerData } = model;

  return (
    <>
      <main>
        {headerData && <Header {...headerData} />}
        <main></main>
        {footerData && <Footer {...footerData} />}
      </main>
    </>
  );
}

export default HeaderTemplate;
