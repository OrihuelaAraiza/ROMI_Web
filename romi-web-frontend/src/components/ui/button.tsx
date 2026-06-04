"use client";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean };

export default function Button({ loading, className = "", children, ...rest }: Props) {
  return (
    <button
      {...rest}
      disabled={loading || rest.disabled}
      className={`romi-action disabled:opacity-60 ${className}`}
    >
      {loading ? "Procesando..." : children}
    </button>
  );
}
