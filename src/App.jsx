import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        const data = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);

        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (technology) => {
    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== technology.id
      )
    );

    toast.info(`${technology.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-[#fafaff]">
      <Navbar />

      <main>
        <Hero />

        <section
          id="technologies"
          className="scroll-mt-20 py-16 md:py-20"
        >
          <div className="section-container">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
            
                <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-950 md:text-4xl">
                  Explore the{" "}
                  <span className="gradient-text">Technologies</span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
                 Pick one technology per category to build your ideal stack.
                </p>
              </div>

              
            </div>

            {loading ? (
              <div className="flex min-h-100 items-center justify-center rounded-2xl border border-gray-100 bg-white">
                <div className="text-center">
                  <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-purple-500" />

                  <p className="mt-4 text-sm font-semibold text-gray-500">
                    Loading technologies...
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
                <TechnologyGrid
                  technologies={technologies}
                  stack={stack}
                  onAdd={handleAddToStack}
                />

                <StackSidebar
                  stack={stack}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            )}
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-20 bg-white py-20"
        >
          <div className="section-container text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-purple-500">
              Build Something Great
            </span>

            <h2 className="mt-3 text-3xl font-black text-gray-950 md:text-4xl">
              Your next project starts with the{" "}
              <span className="gradient-text">right stack.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Pick the technologies that match your goals and create a
              development stack tailored to your project.
            </p>

            <a
              href="#technologies"
              className="gradient-bg mt-7 inline-block rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200"
            >
              Build Your Stack
            </a>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-20 py-20"
        >
          <div className="section-container">
            <div className="rounded-3xl bg-[#171329] px-6 py-12 text-center text-white md:px-12">
              <h2 className="text-3xl font-black md:text-4xl">
                Everything you need to{" "}
                <span className="gradient-text">build better.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
                Dev Stack helps developers discover popular technologies,
                understand their strengths and create a personalized stack
                for their next project.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}