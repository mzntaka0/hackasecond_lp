import { CustomNextPage } from "types/customNextPage";

import Content from "components/services/api";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "API";
Page.layout = "main";

export default Page;
