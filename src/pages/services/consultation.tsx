import { CustomNextPage } from "types/customNextPage";

import Content from "components/services/consultation";

const Page: CustomNextPage = () => {
  return <Content />;
};

Page.title = "Consultation";
Page.layout = "main";

export default Page;
