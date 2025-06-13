import type { IconType } from "react-icons";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";

export enum TecTagType {
  REACT = "react",
  REDUX = "redux",
  TAILWIND_CSS = "tailwind-css",
  SPRING_BOOT = "spring-boot",
  JWT = "jwt",
  MYSQL = "mysql",
  GIT = "git",
  PYTHON = "python",
}

interface TecTagInfo {
  icon: IconType;
  title: string;
  textColor: string;
  borderColor: string;
}

const TEC_TAG_DATA: Record<TecTagType, TecTagInfo> = {
  [TecTagType.REACT]: {
    icon: FaReact,
    title: "React",
    textColor: "text-cyan-400",
    borderColor: "border-cyan-400",
  },
  [TecTagType.REDUX]: {
    icon: SiRedux,
    title: "Redux",
    textColor: "text-purple-600",
    borderColor: "border-purple-600",
  },
  [TecTagType.TAILWIND_CSS]: {
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    textColor: "text-teal-800",
    borderColor: "border-teal-800",
  },
  [TecTagType.SPRING_BOOT]: {
    icon: SiSpring,
    title: "Spring Boot",
    textColor: "text-green-500",
    borderColor: "border-green-500",
  },
  [TecTagType.JWT]: {
    icon: SiJsonwebtokens,
    title: "JWT",
    textColor: "text-pink-500",
    borderColor: "border-pink-500",
  },
  [TecTagType.MYSQL]: {
    icon: GrMysql,
    title: "MySQL",
    textColor: "text-blue-700",
    borderColor: "border-blue-700",
  },
  [TecTagType.GIT]: {
    icon: FaGitAlt,
    title: "Git",
    textColor: "text-red-500",
    borderColor: "border-red-500",
  },
  [TecTagType.PYTHON]: {
    icon: FaPython,
    title: "Python",
    textColor: "text-blue-500",
    borderColor: "border-blue-500",
  },
};

interface TecTagProps {
  type: TecTagType;
}

export function TecTag({ type }: TecTagProps) {
  const { icon: Icon, title, textColor, borderColor } = TEC_TAG_DATA[type];

  return (
    <label
      className={`inline-flex items-center gap-[2px] px-[6px] py-[2px] text-[12px] font-semibold border rounded-xl ${textColor} ${borderColor}`}
    >
      <Icon className="text-[16px]" />
      {title}
    </label>
  );
}
