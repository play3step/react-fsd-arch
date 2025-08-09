interface ButtonProps {
  label: string
}

export const Button = ({ label }: ButtonProps) => {
  return (
    <button className="bg-red-500 text-white p-2 rounded-md">{label}</button>
  )
}
