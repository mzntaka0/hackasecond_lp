import { CustomNextPage } from "types/customNextPage";

import Content from "components/services/frontend";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Frontend";
Page.layout = "main";

export default Page;
