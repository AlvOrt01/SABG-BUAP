import type { ChangeEventHandler } from "react";

type AuthFieldProps = {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export function AuthField({
  id,
  label,
  type,
  name,
  placeholder,
  autoComplete,
  required = true,
  onChange,
}: AuthFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-text-primary"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        onChange={onChange}
        className="
          h-11
          rounded-lg
          border
          border-border
          bg-surface-soft
          px-3
          text-sm
          text-text-primary
          outline-none
          transition-all
          placeholder:text-text-muted
          hover:border-border-hover
          focus:border-primary
          focus:bg-surface
          focus:ring-2
          focus:ring-primary/15
        "
      />
    </div>
  );
}