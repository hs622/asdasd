import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container text-center space-y-6 mx-auto">
        <h2 className="text-3xl font-bold">
          You&apos;re only one click away
          <br />
          from a life-changing journey
        </h2>
        <Button size="lg" variant="secondary">
          Try Docus for Free
        </Button>
        <p className="text-sm text-gray-400">
          ✓ 100% health-oriented journey ✓ Virtual health assistant powered by
          AI
        </p>
      </div>
    </section>
  );
};

export default CTA;
