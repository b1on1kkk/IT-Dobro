interface TProductDicount {
  discount_range: string;
  children: string;
}

export default function ProductDicount({
  discount_range,
  children
}: TProductDicount) {
  return (
    <div className="flex gap-2">
      <div className="px-3 py-1 bg-main_green flex rounded-2xl">
        <span className="font-semibold text-green-700"> {discount_range}</span>
      </div>
      <div className="flex items-center line-through opacity-50">
        {children}
      </div>
    </div>
  );
}
