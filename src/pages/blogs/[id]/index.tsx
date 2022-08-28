import { CustomNextPage } from "types/customNextPage";

import Content from "components/blogs/detail";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Blog";
Page.layout = "main";

export default Page;
