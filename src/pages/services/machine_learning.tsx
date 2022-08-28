import { CustomNextPage } from "types/customNextPage";

import Content from "components/services/machine_learning";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Machine Learning";
Page.layout = "main";

export default Page;
