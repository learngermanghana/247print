import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p> : null}
      {children}
    </div>
  );
}
