interface GuideCardProps {
  step: number
  title: string
  description: string
}

export const GuideCard = ({ step, title, description }: GuideCardProps) => {
  return (
    <div className="flex flex-col gap-2 w-[320px]">
      <h1 className="text-2xl font-bold text-gray-500 text-center">{step}</h1>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">
        {description.split('<br />').map((line, index, array) => (
          <span key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  )
}
