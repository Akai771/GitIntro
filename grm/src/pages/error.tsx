import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReactLenis } from 'lenis/react';

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <ReactLenis root />
      <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/20 flex items-center justify-center">
        {/* Abstract Background Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 opacity-50 dark:opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-75 h-75 bg-secondary/20 rounded-full blur-[100px] pointer-events-none -z-10 opacity-30" />

        {/* Error Content */}
        <section className="container mx-auto px-6 py-24 flex flex-col items-center text-center relative z-10">
          {/* Error Message */}
          <div className="max-w-2xl space-y-6">
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-linear-to-b from-foreground/10 to-foreground/5 select-none">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/70 leading-relaxed max-w-md mx-auto font-light">
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-6">
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="rounded-full px-8 h-12 text-sm font-medium tracking-wide hover:scale-105 transition-transform duration-300"
              >
                <Home className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
              <Button
                onClick={() => navigate(-1)}
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-sm font-medium bg-background/50 backdrop-blur-sm border-border hover:bg-secondary/50 transition-all"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Go Back
              </Button>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="w-12 h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent mx-auto mt-16" />
        </section>
      </div>
    </>
  );
}
