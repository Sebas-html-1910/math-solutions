export default function FunctionBox({
  boxIcon,
  functionName,
}: {
  functionName: string;
  boxIcon: React.ReactNode;
}) {
  return (
    <div className="bg-main p-4 rounded-xl text-center text-gray-200 md:text-3xl text-xl hover:scale-90 transition-transform flex justify-center items-center gap-3">
      <span>{functionName}</span>
      {boxIcon}
    </div>
  );
}
