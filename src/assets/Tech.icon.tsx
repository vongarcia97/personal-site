import type { ElementType } from "react";
import {
  SiTypescript,
  SiTrpc,
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
  SiAuth0,
  SiNextdns,
} from "react-icons/si";

export default function TechIcon() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <TechItem icon={SiTypescript} name="TypeScript" color="text-blue-500" />
        <TechItem icon={SiTrpc} name="tRPC" color="text-blue-600" />
        <TechItem
          icon={SiPrisma}
          name="Prisma"
          color="text-black dark:text-white"
        />
        <TechItem
          icon={SiTailwindcss}
          name="Tailwind CSS"
          color="text-cyan-500"
        />
        <TechItem
          icon={SiNextdotjs}
          name="Next.js"
          color="text-black dark:text-white"
        />
        <TechItem
          icon={SiNextdns}
          name="NextAuth.js"
          color="text-black dark:text-white"
        />
      </div>
    </div>
  );
}

function TechItem({
  icon: Icon,
  name,
  color,
}: {
  icon: ElementType;
  name: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
        <Icon className={`w-10 h-10 ${color}`} />
      </div>
      <span className="mt-2 text-sm font-medium">{name}</span>
    </div>
  );
}
