export default function NumberInput({
  isError,
  value,
  defaultValue,
  name,
}: {
  isError?: boolean | string | null;
  value?: string;
  defaultValue?: string;
  name?: string;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <input
        name={name}
        value={value}
        defaultValue={defaultValue}
        type="number"
        placeholder="Enter a number"
        className="border-2 border-gray-400 px-2 py-2 rounded-md focus:outline-none focus:border-main w-full md:text-xl text-sm"
        min={1}
        max={100000}
      />
      {isError && <p className="text-red-500">The input is invalid</p>}
    </div>
  );
}
