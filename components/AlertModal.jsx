"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

const AlertModal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div class="mx-auto w-96 rounded-md border-2 border-picton-blue-400 bg-white p-4 shadow-lg">
            <h1 class="mb-4 text-2xl font-semibold text-picton-blue-600">
              An Important Alert
            </h1>
            <p class="mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              metus ornare, volutpat mauris sit amet, ornare est. Praesent massa
              nulla, lacinia sit amet neque sed, ornare porttitor ante. Nunc
              vulputate ultrices sollicitudin. Quisque in tristique felis, vel
              blandit felis. Aliquam ut vestibulum massa. Proin at lectus in
              risus ultrices interdum a fringilla nisi. Maecenas tristique augue
              at pretium consectetur.
            </p>
            <div>
              <button class="rounded border-2 border-picton-blue-600 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 px-2 py-1">
                Confirm
              </button>
              <Link href={pathname}>
                <button
                  type="button"
                  class="rounded border-2 border-picton-blue-400 bg-white px-2 py-1 text-picton-blue-400"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default AlertModal;
