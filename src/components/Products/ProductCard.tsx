import {useState} from "react";
import type {Product} from "../../types/Product";

interface ProductCardProps extends Product {
  currency?: string;
  onClick?: (id: number) => void;
  loading?: boolean;
  highlight?: boolean; // ahora solo suaviza el borde
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  img,
  desc,
  priceCents,
  currency = "ARS",
  onClick,
  loading = false,
  highlight = false,
}) => {
  const [errored, setErrored] = useState(false);

  const formattedPrice =
    priceCents != null
      ? new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency,
          minimumFractionDigits: 0,
        }).format(priceCents / 100)
      : undefined;

  const clickable = !!onClick && !loading;

  return (
    <article
      className={[
        "group relative flex w-full flex-col overflow-hidden rounded-xl",
        "border border-stone-200 bg-white shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md",
        clickable ? "cursor-pointer" : "",
        // highlight ahora solo refuerza el borde gris (sin dorado)
        highlight ? "border-stone-300 shadow-md" : "hover:border-stone-300",
      ].join(" ")}
      tabIndex={0}
      aria-label={name}
      role={clickable ? "button" : undefined}
      onClick={() => clickable && onClick?.(id)}
      onKeyDown={(e) => {
        if (clickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.(id);
        }
      }}
    >
      <figure className="relative w-full overflow-hidden">
        <div
          className={[
            "aspect-[4/3] w-full",
            "bg-gradient-to-br from-stone-100 to-stone-200",
            "flex items-center justify-center text-stone-400 text-xs select-none",
            loading ? "animate-pulse" : "",
          ].join(" ")}
        >
          {!loading && !errored && img && (
            <img
              src={img}
              alt={`Imagen de ${name}`}
              loading="lazy"
              onError={() => setErrored(true)}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          )}
          {!loading && (errored || !img) && (
            <span className="font-light text-stone-400">Sin imagen</span>
          )}
        </div>
        {formattedPrice && (
          <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-stone-700 shadow ring-1 ring-stone-200 backdrop-blur">
            {formattedPrice}
          </span>
        )}
      </figure>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <h2
          title={name}
          className="line-clamp-1 text-center text-sm font-medium tracking-wide text-stone-800 md:text-base"
        >
          {loading ? (
            <span className="inline-block h-4 w-32 animate-pulse rounded bg-stone-200" />
          ) : (
            name
          )}
        </h2>

        {desc && !loading && (
          <p className="line-clamp-3 text-center text-xs text-stone-500 md:text-sm">
            {desc}
          </p>
        )}
        {loading && (
          <div className="mx-auto flex w-full flex-col gap-1">
            <span className="mx-auto h-3 w-40 animate-pulse rounded bg-stone-200" />
            <span className="mx-auto h-3 w-32 animate-pulse rounded bg-stone-200" />
          </div>
        )}
      </div>
    </article>
  );
};
