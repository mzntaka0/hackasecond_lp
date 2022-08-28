import { CustomNextPage } from "types/customNextPage";

import Content from "components/services/contract_development";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Contract Development";
Page.layout = "main";

export default Page;
