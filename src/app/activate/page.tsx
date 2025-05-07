import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function ActivatePage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <ActivateClient />
    </Suspense>
  );
}

const ActivateClient = React.lazy(() => import("./ActivateClient"));
