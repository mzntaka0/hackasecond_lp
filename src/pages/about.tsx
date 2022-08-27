import { CustomNextPage } from "types/customNextPage";
import Content from "components/about/index";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "About";
Page.layout = "main";

export default Page;
