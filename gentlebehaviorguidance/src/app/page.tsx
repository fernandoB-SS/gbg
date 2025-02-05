import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      {/* Other homepage-specific sections can follow here */}
      <section className="">
        <h2 className="text-2xl font-bold">Welcome to Gentle Behavior Guidance</h2>
        <p className="mt-4 text-lg">
          We provide resources and support for families navigating Autism.
        </p>
      </section>
    </>
  );
}
