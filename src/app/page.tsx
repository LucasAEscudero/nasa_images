import TodayImage from "@/components/todayImage/TodayImage";
import LastImages from "@/components/lastImages/LastImages";
import { Suspense } from "react";
import Spinner from "@/components/spinner/Spinner";

export default function Home() {
  return (
    <Suspense fallback={<Spinner />}>
      <TodayImage />
      <LastImages quantity={12} />
    </Suspense>
  );
}
