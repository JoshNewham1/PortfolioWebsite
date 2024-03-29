import SkillLevel from "./SkillLevel";
import { usePopperTooltip } from "react-popper-tooltip";
import infoIcon from "../public/info.png";
import Image from "next/image";
import Card from "./Card";

const skillLevelDescriptions = {
  1: "Still learning",
  2: "Know the basics",
  3: "Experience in side projects",
  4: "Confident to productionise",
  5: "Very confident",
};

export default function Skill({ skill }) {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({ placement: "top" });
  return (
    <Card>
      <div className="flex flex-row">
        {/* Title and info button */}
        <h2 className="mb-2 mr-2">{skill.name}</h2>{" "}
        <button ref={setTriggerRef}>
          <Image
            className="z-0"
            alt="More info"
            src={infoIcon}
            height={24}
            width={24}
          />
        </button>
      </div>

      <SkillLevel level={skill.skillLevel} />
      <h3>{skill.skillLevel} / 5</h3>
      <p className="text-sm">{skillLevelDescriptions[skill.skillLevel]}</p>

      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className:
              "tooltip-container p-4 rounded-lg shadow-lg bg-white dark:bg-gray-700 md:w-96 z-10",
          })}
        >
          {skill.description}
        </div>
      )}
    </Card>
  );
}
