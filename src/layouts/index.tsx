import React from "react";
import dynamic from "next/dynamic";

import { Layouts } from "types/layouts";

type Props = {
  children: React.ReactNode;
  name: Layouts;
};

const Layout: React.FC<Props> = (props) => {
  const { children, name } = props;
  const Layout = dynamic<{ children: React.ReactNode }>(
    () => import(`./${name}`)
  );
  return <Layout>{children}</Layout>;
};

export default Layout;
