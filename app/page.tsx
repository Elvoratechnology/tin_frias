import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* Hero: 100svh cinematic video editor style */}
      <Hero />

      {/* Main Content Sections - Balanced sweet-spot width */}
      <main className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <AboutSection />
        <WorkSection />
        <ToolsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

