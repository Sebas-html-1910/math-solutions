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
    <div className="w-full flex flex-col justify-start items-center gap-1 relative">
      {isError && (
        <label className="text-red-500 bg-gray-200 text-sm md:text-base self-start px-1 absolute -top-3 rounded-md right-1">
          {typeof isError === "string" ? isError : "The input is invalid"}
        </label>
      )}
      <input
        name={name}
        value={value}
        defaultValue={defaultValue}
        type="number"
        placeholder="Enter a number"
        className={`border-2 px-2 py-2 rounded-md focus:outline-none w-full md:text-xl text-sm transition-colors ${
          isError
            ? "border-red-500 focus:border-red-600"
            : "border-gray-400 focus:border-main"
        }`}
        min={1}
        max={100000}
      />
    </div>
  );
}
