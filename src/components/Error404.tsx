import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <main className="w-full min-h-screen bg-gray-200 flex flex-col justify-center items-center gap-10">
      <h3 className="md:text-7xl text-4xl text-center font-extrabold">
        404 Page not found
      </h3>
      <Link
        to="/"
        className="bg-main px-2 py-4 text-gray-100 md:text-2xl text-xl font-bold rounded-xl text-center hover:scale-90 transition-transform"
      >
        Back to Home.
      </Link>
    </main>
  );
}
