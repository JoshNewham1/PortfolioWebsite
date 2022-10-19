import SkillLevel from "./SkillLevel";

const skillLevelDescriptions = {
  1: "Still learning",
  2: "Know the basics",
  3: "Experience in side projects",
  4: "Confident to productionise",
  5: "Very confident",
};

export default function Skill({ skill }) {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-700 mr-1 ml-1 mb-2 md:mr-4 md:ml-4 md:mb-4">
      <h2 className="mb-2">{skill.name}</h2>
      <SkillLevel level={skill.skillLevel} />
      <h3>{skill.skillLevel} / 5</h3>
      <p className="text-sm">{skillLevelDescriptions[skill.skillLevel]}</p>
    </div>
  );
}
