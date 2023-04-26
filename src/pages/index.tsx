import { Suspense, lazy } from "react";
import InitSection from "@/components/Sections/Init";

const LazyAboutSection = lazy(() => import("@/components/Sections/About"));
const LazyWorkSection = lazy(() => import("@/components/Sections/Works"));
const LazyTechnologiesSection = lazy(() => import("@/components/Sections/Technologies"));
const LazyContactSection = lazy(() => import("@/components/Sections/Contact"));

export default function Home() {
  return (
    <>
      <InitSection />

      <Suspense>
        <LazyAboutSection />
      </Suspense>
      <Suspense>
        <LazyWorkSection />
      </Suspense>
      <Suspense>
        <LazyTechnologiesSection />
      </Suspense>
      <Suspense>
        <LazyContactSection />
      </Suspense>
    </>
  );
}
