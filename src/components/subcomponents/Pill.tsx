const bgArray = ['bg-cyan-950', 'bg-sky-950', 'bg-slate-800']

export default function Pill({
  text,
  className,
  index,
}: {
  text: string
  className?: string
  index: number
}) {
  return (
    <div
      className={`${
        bgArray[index % 3]
      } text-xs tracking-wider text-slate-400 p-1.5 px-2.5 text-nowrap rounded-lg ${
        className ? className : ''
      }  drop-shadow-black-xs`}
    >
      {text}
    </div>
  )
}
