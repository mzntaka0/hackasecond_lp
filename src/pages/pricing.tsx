import { CustomNextPage } from "types/customNextPage";

import Content from "components/pricing/index";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Pricing";
Page.layout = "main";

export default Page;
