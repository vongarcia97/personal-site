import type { ElementType } from "react";
import { SiTypescript, SiTrpc, SiPrisma, SiNextdotjs } from "react-icons/si";

export default function TechIcon() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <TechItem
          icon={SiTypescript}
          name="TypeScript"
          description="This plus ZOD plus Intellisense "
          color="text-blue-500"
        />
        <TechItem
          icon={SiTrpc}
          name="tRPC"
          description="I need the type safety because I've been told to be too daring with my frontend code..."
          color="text-blue-600"
        />
        <TechItem
          icon={SiPrisma}
          name="Prisma"
          description="Database ORM because I'm too lazy to write SQL queries"
          color="text-black dark:text-white"
        />
        <TechItem
          icon={SiNextdotjs}
          name="Next.js"
          description="My preferred framework due to how easy it is to deploy to Vercel or self-host on my own server"
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
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
        <Icon className={`w-10 h-10 ${color}`} />
      </div>
      <span className="mt-2 text-sm font-medium">{name}</span>
      {/* <span className="text-xs text-gray-500 text-center">{description}</span> */}
    </div>
  );
}
