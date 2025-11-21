import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <article className="w-[90%] min-h-full border border-gray-300 rounded-xl  shadow-gray-400 shadow-xl flex justify-between items-center relative">
        <section className="p-5 w-3/6 flex flex-col relative z-10 gap-10 text-center">
          <h1 className="md:text-6xl text-3xl text-main font-extrabold">
            Math Solucions <span className="text-black">for your problems</span>
          </h1>
          <p className="md:text-xl text-large text-justify">
            This app is the evolution of the mathematical workspace. We have
            redefined the way professionals, students, and researchers interact
            with calculus and logic. This application is not just a calculator;
            it is a modern, integral ecosystem meticulously designed to
            consolidate a vast repertoire of advanced mathematical functions in
            one accessible place.
          </p>

          <Link
            to="/funcs"
            className="bg-main px-2 py-4 text-gray-100 md:text-2xl text-xl font-bold rounded-xl text-center hover:scale-90 transition-transform"
          >
            Go to functions.
          </Link>
        </section>
        <section className="absolute inset-y-0 right-0 w-3/6 h-full z-0 overflow-hidden">
          <img
            src="src/assets/math.webp"
            alt="math image"
            className="w-full h-full object-cover opacity-80"
          />
        </section>
      </article>
    </>
  );
}

export default Home;
