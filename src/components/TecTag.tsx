import type { IconType } from "react-icons";
import {
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaFigma,
  FaWordpress,
  FaPaypal,
  FaPhp,
  FaHtml5,
} from "react-icons/fa";
import {
  SiRedux,
  SiAngular,
  SiNextdotjs,
  SiMui,
  SiExpress,
  SiNestjs,
  SiSpring,
  SiJsonwebtokens,
  SiTypescript,
  SiDotnet,
  SiStrapi,
  SiPostgresql,
  SiMongodb,
  SiPandas,
  SiGithubactions,
  SiNginx,
  SiWoocommerce,
  SiAntdesign,
  SiFormstack,
  SiAmazonec2,
  SiAmazons3,
  SiAmazon,
  SiTableau,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GiBearHead } from "react-icons/gi";

export enum TecTagType {
  REACT = "react",
  REDUX = "redux",
  TAILWIND_CSS = "tailwind-css",
  SPRING_BOOT = "spring-boot",
  JWT = "jwt",
  MYSQL = "mysql",
  GIT = "git",
  PYTHON = "python",
  TYPESCRIPT = "typescript",
  REACT_NATIVE = "react-native",
  NEXT_JS = "next-js",
  ANGULAR = "angular",
  MATERIAL_UI = "material-ui",
  ANT_DESIGN = "ant-design",
  ZUSTAND = "zustand",
  NODE_JS = "node-js",
  EXPRESS = "express",
  NESTJS = "nestjs",
  SPRING_SECURITY = "spring-security",
  DOTNET = "dotnet",
  STRAPI = "strapi",
  POSTGRESQL = "postgresql",
  MONGODB = "mongodb",
  PANDAS = "pandas",
  AWS = "aws",
  DOCKER = "docker",
  GITHUB_ACTIONS = "github-actions",
  NGINX = "nginx",
  FIGMA = "figma",
  WORDPRESS = "wordpress",
  WOOCOMMERCE = "woocommerce",
  PAYPAL = "paypal",
  FORMIK = "formik",
  CSS_HTML = "css-html",
  PHP = "php",
  AWS_EC2 = "aws-ec2",
  AWS_S3 = "aws-s3",
  AWS_IAM = "aws-iam",
  AWS_TRANSLATE = "aws-translate",
  TABLEAU = "tableau",
}

const ACCENTS = {
  cyan: {
    icon: "text-cyan-600",
  },
  purple: {
    icon: "text-purple-600",
  },
  teal: {
    icon: "text-teal-600",
  },
  green: {
    icon: "text-emerald-600",
  },
  pink: {
    icon: "text-pink-500",
  },
  blue: {
    icon: "text-blue-600",
  },
  orange: {
    icon: "text-orange-500",
  },
  sky: {
    icon: "text-sky-500",
  },
  gray: {
    icon: "text-slate-600",
  },
  red: {
    icon: "text-red-600",
  },
  amber: {
    icon: "text-amber-600",
  },
  rose: {
    icon: "text-rose-600",
  },
  indigo: {
    icon: "text-indigo-600",
  },
  emerald: {
    icon: "text-green-600",
  },
} as const;

type AccentToken = keyof typeof ACCENTS;

interface TecTagInfo {
  icon: IconType;
  title: string;
  accent: AccentToken;
}

const TEC_TAG_DATA: Record<TecTagType, TecTagInfo> = {
  [TecTagType.REACT]: {
    icon: FaReact,
    title: "React",
    accent: "cyan",
  },
  [TecTagType.REDUX]: {
    icon: SiRedux,
    title: "Redux",
    accent: "purple",
  },
  [TecTagType.TAILWIND_CSS]: {
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    accent: "teal",
  },
  [TecTagType.SPRING_BOOT]: {
    icon: SiSpring,
    title: "Spring Boot",
    accent: "green",
  },
  [TecTagType.SPRING_SECURITY]: {
    icon: SiSpring,
    title: "Spring Security",
    accent: "green",
  },
  [TecTagType.JWT]: {
    icon: SiJsonwebtokens,
    title: "JWT",
    accent: "pink",
  },
  [TecTagType.MYSQL]: {
    icon: GrMysql,
    title: "MySQL",
    accent: "blue",
  },
  [TecTagType.POSTGRESQL]: {
    icon: SiPostgresql,
    title: "PostgreSQL",
    accent: "blue",
  },
  [TecTagType.MONGODB]: {
    icon: SiMongodb,
    title: "MongoDB",
    accent: "emerald",
  },
  [TecTagType.GIT]: {
    icon: FaGitAlt,
    title: "Git",
    accent: "orange",
  },
  [TecTagType.PYTHON]: {
    icon: FaPython,
    title: "Python",
    accent: "blue",
  },
  [TecTagType.TYPESCRIPT]: {
    icon: SiTypescript,
    title: "TypeScript",
    accent: "blue",
  },
  [TecTagType.REACT_NATIVE]: {
    icon: TbBrandReactNative,
    title: "React Native",
    accent: "sky",
  },
  [TecTagType.NEXT_JS]: {
    icon: SiNextdotjs,
    title: "Next.js",
    accent: "gray",
  },
  [TecTagType.ANGULAR]: {
    icon: SiAngular,
    title: "Angular",
    accent: "red",
  },
  [TecTagType.MATERIAL_UI]: {
    icon: SiMui,
    title: "Material UI",
    accent: "sky",
  },
  [TecTagType.ANT_DESIGN]: {
    icon: SiAntdesign,
    title: "Ant Design",
    accent: "blue",
  },
  [TecTagType.ZUSTAND]: {
    icon: GiBearHead,
    title: "Zustand",
    accent: "amber",
  },
  [TecTagType.NODE_JS]: {
    icon: FaNodeJs,
    title: "Node.js",
    accent: "green",
  },
  [TecTagType.EXPRESS]: {
    icon: SiExpress,
    title: "Express",
    accent: "gray",
  },
  [TecTagType.NESTJS]: {
    icon: SiNestjs,
    title: "NestJS",
    accent: "rose",
  },
  [TecTagType.DOTNET]: {
    icon: SiDotnet,
    title: ".NET",
    accent: "purple",
  },
  [TecTagType.STRAPI]: {
    icon: SiStrapi,
    title: "Strapi",
    accent: "indigo",
  },
  [TecTagType.PANDAS]: {
    icon: SiPandas,
    title: "Pandas",
    accent: "purple",
  },
  [TecTagType.AWS]: {
    icon: FaAws,
    title: "AWS",
    accent: "orange",
  },
  [TecTagType.AWS_EC2]: {
    icon: SiAmazonec2,
    title: "AWS EC2",
    accent: "orange",
  },
  [TecTagType.AWS_S3]: {
    icon: SiAmazons3,
    title: "Amazon S3",
    accent: "orange",
  },
  [TecTagType.AWS_IAM]: {
    icon: SiAmazon,
    title: "AWS IAM",
    accent: "orange",
  },
  [TecTagType.AWS_TRANSLATE]: {
    icon: SiAmazon,
    title: "Amazon Translate",
    accent: "orange",
  },
  [TecTagType.TABLEAU]: {
    icon: SiTableau,
    title: "Tableau",
    accent: "purple",
  },
  [TecTagType.DOCKER]: {
    icon: FaDocker,
    title: "Docker",
    accent: "blue",
  },
  [TecTagType.GITHUB_ACTIONS]: {
    icon: SiGithubactions,
    title: "GitHub Actions",
    accent: "blue",
  },
  [TecTagType.NGINX]: {
    icon: SiNginx,
    title: "NGINX",
    accent: "green",
  },
  [TecTagType.FIGMA]: {
    icon: FaFigma,
    title: "Figma",
    accent: "pink",
  },
  [TecTagType.WORDPRESS]: {
    icon: FaWordpress,
    title: "WordPress",
    accent: "blue",
  },
  [TecTagType.WOOCOMMERCE]: {
    icon: SiWoocommerce,
    title: "WooCommerce",
    accent: "purple",
  },
  [TecTagType.PAYPAL]: {
    icon: FaPaypal,
    title: "PayPal",
    accent: "blue",
  },
  [TecTagType.FORMIK]: {
    icon: SiFormstack,
    title: "Formik",
    accent: "orange",
  },
  [TecTagType.CSS_HTML]: {
    icon: FaHtml5,
    title: "HTML/CSS",
    accent: "orange",
  },
  [TecTagType.PHP]: {
    icon: FaPhp,
    title: "PHP",
    accent: "indigo",
  },
};

interface TecTagProps {
  type: TecTagType;
}

export function TecTag({ type }: TecTagProps) {
  const { icon: Icon, title, accent } = TEC_TAG_DATA[type];
  const styles = ACCENTS[accent];

  return (
    <span className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
      <Icon className={`text-xl ${styles.icon}`} />
      {title}
    </span>
  );
}
