import Feature from "@/components/Interface/Feature";
import Feature2 from "@/components/Interface/Feature2";
import Feature3 from "@/components/Interface/Feature3";
import Feature4 from "@/components/Interface/Feature4";
import Header from "@/components/Interface/Header";
import Hero from "@/components/Interface/Hero";
import Partner from "@/components/Interface/Partner";
import Pricing from "@/components/Interface/Pricing";

export default function Home() {
  return (
    <main className="h-full mx-auto">
      <div className="min-h-screen ">
        <Header />
        <Hero />
      </div>
      <Partner />
      <Feature />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Pricing />
    </main>
  );
}
