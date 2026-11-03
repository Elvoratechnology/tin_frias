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

      {/* Main Content Sections */}
      <main className="max-w-[1080px] mx-auto px-4 sm:px-6 relative z-10">
        <AboutSection />
        <WorkSection />
        <ToolsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
