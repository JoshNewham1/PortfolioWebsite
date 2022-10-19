export default function SkillLevel({ level }) {
  return (
    <div className="flex flex-row">
      {/* Filled in / coloured dots */}
      {[...Array(level)].map((_, i) => (
        <div
          className="rounded-full border-2 border-current bg-purple-400 w-4 h-4 mr-1"
          key={"skilllevel-" + i}
        ></div>
      ))}
      {/* Remaining white dots */}
      {[...Array(5 - level)].map((_, i) => (
        <div
          className="rounded-full border-2 border-current bg-white w-4 h-4 mr-1"
          key={"skilllevel-" + (5 - i)}
        ></div>
      ))}
    </div>
  );
}
