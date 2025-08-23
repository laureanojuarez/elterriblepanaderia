import type {ReactNode} from "react";

interface ProductSectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  id,
  title,
  children,
  className = "",
}) => {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={[
        "w-full flex flex-col gap-5 p-6 bg-stone-100 rounded-xl",
        className,
      ].join(" ")}
    >
      <h2
        id={headingId}
        className="text-2xl font-semibold text-center tracking-tight"
      >
        {title}
      </h2>
      {children}
    </section>
  );
};
