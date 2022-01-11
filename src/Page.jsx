import React from "react";
import { PageContextProvider } from "./PageContext";

import PageSection from "./PageSection";

function Page() {
  return (
    <PageContextProvider>
      <PageSection />
    </PageContextProvider>
  );
}

export default Page;
