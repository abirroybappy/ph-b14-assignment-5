export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}) {
  const difficultyColor = {
    "Beginner-Friendly": "bg-green-50 text-green-600",
    Intermediate: "bg-yellow-50 text-yellow-600",
    Advanced: "bg-red-50 text-red-600",
  };

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm transition duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60
        ${
          isAdded
            ? "border-2 border-pink-400 shadow-md shadow-pink-100"
            : "border border-gray-100"
        }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 p-3 transition group-hover:bg-gray-100">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-linear-to-r from-orange-50 to-purple-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-purple-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-extrabold text-gray-950">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-10 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
          {technology.category}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            difficultyColor[technology.difficulty]
          }`}
        >
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-gray-700">
        <span className="text-yellow-400">★</span>
        {technology.rating}
        
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-bold transition ${
          isAdded
            ? "cursor-not-allowed bg-pink-50 text-pink-600"
            : "gradient-bg text-white shadow-md shadow-pink-100 hover:-translate-y-0.5 hover:shadow-lg"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
      </button>
    </article>
  );
}