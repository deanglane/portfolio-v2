import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-[#8B5E34]">Ah-shit!.</h1>
      <p className="mt-4">Something went fucking wrong with the code.</p>
      <p className="mt-2 opacity-70">Status: {status}</p>
      <Link
        to="/"
        className="inline-block mt-8 px-4 py-2 rounded-lg bg-[#F77F00] text-white hover:bg-[#E76F00] transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
