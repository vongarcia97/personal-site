import type { ElementType } from "react";
import {
  SiTypescript,
  SiClaude,
  SiPrisma,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
} from "react-icons/si";
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";

export default function TechIcon() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <TechItem
          icon={SiNotion}
          name="Notion"
          description="My preferred note-taking app due to how easy it is to use and how many integrations are available"
          color="text-black dark:text-white"
        />
        <TechItem
          icon={SiClaude}
          name="Claude"
          description="My preferred AI assistant due to how easy it is to use and how many integrations are available"
          color="text-orange-500"
        />
        <TechItem
          icon={SiNodedotjs}
          name="Node.js"
          description=""
          color="text-green-500"
        />
        <TechItem
          icon={SiNextdotjs}
          name="Next.js"
          description="My preferred framework due to how easy it is to deploy to Vercel or self-host on my own server"
          color="text-black dark:text-white"
        />
        <TechItem
          icon={SiTypescript}
          name="TypeScript"
          description=""
          color="text-blue-500"
        />

        <TechItem
          icon={PiMicrosoftExcelLogoDuotone}
          name="Excel"
          description="This plus ZOD plus Intellisense "
          color="text-green-500"
        />
        <TechItem
          icon={VscVscode}
          name="VSCode"
          description="My preferred IDE due to how easy it is to use and how many extensions are available"
          color="text-blue-500"
        />
        <TechItem
          icon={SiPrisma}
          name="Prisma ORM"
          description="Database ORM because I'm too lazy to write SQL queries"
          color="text-black dark:text-white"
        />
      </div>
    </div>
  );
}

function TechItem({
  icon: Icon,
  name,
  description,
  color,
}: {
  icon: ElementType;
  name: string;
  description: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
        <Icon className={`w-10 h-10 ${color}`} />
      </div>
      <span className="mt-2 text-sm font-medium">{name}</span>
      {/* <span className="text-xs text-gray-500 text-center">{description}</span> */}
    </div>
  );
}
