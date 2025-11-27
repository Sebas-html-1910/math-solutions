export default function NumberInput({
  isError,
  value,
  name,
}: {
  isError?: boolean;
  value?: string;
  name?: string;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <input
        name={name}
        value={value}
        type="number"
        placeholder="Enter a number"
        className="border-2 border-gray-400 px-2 py-2 rounded-md focus:outline-none focus:border-main w-full md:text-xl text-sm"
      />
      {isError && <p className="text-red-500">The input is invalid</p>}
    </div>
  );
}
