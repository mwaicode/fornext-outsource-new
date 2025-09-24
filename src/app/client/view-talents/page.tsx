// app/client/view-talents/page.tsx
"use client";

import { Suspense } from "react";
import ViewTalentsPage from "./ViewTalentsPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading talents...</div>}>
      <ViewTalentsPage />
    </Suspense>
  );
}
