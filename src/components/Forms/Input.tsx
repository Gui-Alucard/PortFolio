interface IInput {
  id: string
  name: string
  label: string
  htmlFor: string
  inputType: string
  placeholder: string
  defaultValue: string
}

export default function Input({
  id,
  name,
  label,
  htmlFor,
  inputType,
  placeholder,
  defaultValue,
}: IInput) {
  return (
    <>
      <label
        className="mb-2 block font-orbitron text-xs font-semibold uppercase tracking-wide"
        htmlFor={htmlFor}
        key={htmlFor}
      >
        {label}
      </label>
      <input
        key={`${id}+${inputType}+${placeholder}+${defaultValue}`}
        className="form-input mb-1 block w-full appearance-none rounded border-b-2 border-r-2 border-purple-logo/60 bg-purple-100/20 px-4 py-3 leading-tight text-purple-900 placeholder-purple-900/50 focus:border-purple-logo focus:bg-purple-50/20 focus:outline-none focus:ring-0 dark:text-purple-50 dark:placeholder-purple-100/50"
        id={id}
        name={name}
        type={inputType}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </>
  )
}
