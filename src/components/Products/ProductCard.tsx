interface ProductCardProps {
  id: number;
  name: string;
  img?: string;
  desc?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  img,
  desc,
}) => {
  return (
    <div className="bg-stone-200 flex flex-col gap-2 p-3 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl max-w-xs w-full h-full mx-auto">
      <h2 className="text-sm md:text-lg font-light text-center">{name}</h2>
      <img
        src={img}
        alt={name}
        className="w-full h-32 md:h-48 lg:h-42 object-cover rounded-lg"
      />
      {desc && (
        <p className="text-gray-600 text-xs md:text-sm text-center">{desc}</p>
      )}
    </div>
  );
};
