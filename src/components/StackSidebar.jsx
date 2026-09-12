export default function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}) {
  return (
    <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm ">

      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-gray-950">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {stack.length} Technology{stack.length !== 1 ? "ies" : ""} Selected
        </p>
      </div>

      {/* Empty Stack */}
      {stack.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-5 py-10 text-center">

          <h3 className="font-bold text-gray-700">
            Your stack is empty
          </h3>

          <p className="mt-2 text-xs leading-5 text-gray-400">
            Add technologies from the list to start building your stack.
          </p>

        </div>
      ) : (
        /* Stack Items */
        <div className="mt-5 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
            >

              {/* Technology Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                <img
                  src={technology.icon}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Technology Info */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-gray-800">
                  {technology.name}
                </p>

                <p className="text-xs text-gray-400">
                  {technology.category}
                </p>
              </div>

              {/* Remove Individual Item */}
              <button
                onClick={() => onRemove(technology)}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>

            </div>
          ))}
        </div>
      )}

      {/* Remove All Button - Bottom Center */}
      {stack.length > 0 && (
        <div className="mt-5 mb-1.25 flex justify-center">
          <button
            onClick={onRemoveAll}
            className="rounded-lg border-2 w-full border-pink-500 px-6 py-2 text-xs font-bold text-pink-500 transition hover:bg-pink-50 hover:text-pink-600"
          >
            Remove All
          </button>
        </div>
      )}

    </aside>
  );
}