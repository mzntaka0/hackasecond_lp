import { CustomNextPage } from "types/customNextPage";

import Content from "components/services/education";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Education";
Page.layout = "main";

export default Page;
