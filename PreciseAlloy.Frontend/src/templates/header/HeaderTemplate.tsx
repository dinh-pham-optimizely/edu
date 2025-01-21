import { HeaderModel } from '@_types/types';
import Header from '@organisms/header/Header';

interface Props {
  headerData?: HeaderModel;
}

export const HeaderTemplate = (model: Props) => {
  const { headerData } = model;

  return (
    <>
      <main>
        <Header {...headerData} />
      </main>
    </>
  );
}

export default HeaderTemplate;
