import React from "react";
import { NextPage } from "next";

import { Layouts } from "./layouts";

// NOTE: inspired by here: https://nextjs.org/docs/basic-features/layouts#with-typescript
export type CustomNextPage = NextPage & {
  title: string;
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  authRequired?: boolean;
  layout: Layouts;
};
