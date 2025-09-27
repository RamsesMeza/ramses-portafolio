interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  size?: "default" | "compact";
}

const SectionHeading = ({
  title,
  description,
  align = "center",
  theme = "light",
  size = "default",
}: SectionHeadingProps) => {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const accentAlign = align === "center" ? "mx-auto" : "";
  const isDark = theme === "dark";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const descriptionColor = isDark ? "text-blue-100/90" : "text-slate-600";
  const accentColor = isDark ? "bg-white/70" : "bg-[#106399]";
  const titleSize =
    size === "compact" ? "text-xl font-bold sm:text-2xl" : "text-3xl font-black sm:text-4xl";

  return (
    <div className={`mb-10 ${textAlign}`}>
      <h2 className={`mt-2 ${titleSize} ${titleColor}`}>{title}</h2>
      {description ? (
        <p className={`mt-4 text-base sm:text-lg ${descriptionColor} ${accentAlign}`}>{description}</p>
      ) : null}
      <div className={`mt-4 h-1 w-20 rounded-full ${accentColor} ${accentAlign}`}></div>
    </div>
  );
};

export default SectionHeading;
