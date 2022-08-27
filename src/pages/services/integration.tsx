import { CustomNextPage } from "types/customNextPage";

import Content from "components/services/integration";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Integration";
Page.layout = "main";

export default Page;
