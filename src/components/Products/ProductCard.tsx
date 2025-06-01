interface ProductCardProps {
  id: number;
  name: string;
  desc?: string;
  img?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  img,
  desc,
}) => {
  return (
    <div className="bg-stone-200 flex flex-col gap-2 p-3 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl w-56 md:w-96 flex-shrink-0">
      <h2 className="text-sm md:text-lg font-light text-center">{name}</h2>
      <img
        src={img}
        alt={name}
        className="w-auto h-42 md:h-64 object-cover rounded-lg "
      />
      {desc && (
        <p className="text-gray-600 text-xs md:text-sm text-center">{desc}</p>
      )}
    </div>
  );
};
