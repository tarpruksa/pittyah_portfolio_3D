export default function Highlight({
  text,
  extendClass = 'text-lg',
}: {
  text: string
  extendClass?: string
}) {
  return (
    <span
      className={`text-blue-600 font-suse ${extendClass ? extendClass : ''}`}
      style={{
        textShadow: '0px 3px 13px #1d4ed8',
      }}
    >
      {text}
    </span>
  )
}
