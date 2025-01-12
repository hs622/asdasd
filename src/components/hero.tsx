import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="container py-20 mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl lg:leading-tight">
            HealthDesk
            <br />
            Health Assistant
            <br />
            <span className="text-primary">Powered by AI</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Protect personal health issues and effectively manage your health.
            Get insights with our AI Doctor Assistant and make informed
            decisions about your well-being.
          </p>
          <div className="space-y-4">
            <Button size="lg">Try HealthDesk for Free</Button>
            {/* <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 fill-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Excellent</span>
            </div> */}
          </div>
          {/* <div className="flex gap-4 items-center pt-4">
            <Image
              src="/placeholder.svg"
              alt="HIPAA Compliant"
              width={80}
              height={40}
              className="h-12 w-auto"
            />
            <Image
              src="/placeholder.svg"
              alt="GDPR Compliant"
              width={80}
              height={40}
              className="h-12 w-auto"
            />
          </div> */}
        </div>
        <div className="relative">
          <Image
            src="/banner.jpg"
            alt="Health Assistant Demo"
            width={600}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
