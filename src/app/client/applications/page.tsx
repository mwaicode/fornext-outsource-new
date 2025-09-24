// app/client/applications/page.tsx
"use client";

import { Suspense } from "react";
import ViewApplicationsPage from "./ViewApplicationsPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading applications...</div>}>
      <ViewApplicationsPage />
    </Suspense>
  );
}
