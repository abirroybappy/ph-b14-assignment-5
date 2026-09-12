import TechnologyCard from "./TechnologyCard";

export default function TechnologyGrid({
  technologies,
  stack,
  onAdd,
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          isAdded={stack.some((item) => item.id === technology.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}