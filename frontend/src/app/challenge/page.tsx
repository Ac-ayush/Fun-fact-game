"use client";

import { Suspense } from "react";
import ChallengeFriend from "@/components/ChallengeFriend";

function ChallengePageContent() {
  return <ChallengeFriend />;
}

export default function ChallengePage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl">Loading...</div>
        </div>
      }
    >
      <ChallengePageContent />
    </Suspense>
  );
}
