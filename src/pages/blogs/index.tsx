import { CustomNextPage } from "types/customNextPage";

import Content from "components/blogs/index";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Blog";
Page.layout = "main";

export default Page;
