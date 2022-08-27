import { CustomNextPage } from "types/customNextPage";

import Content from "components/index";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Main";
Page.layout = "main";

export default Page;
