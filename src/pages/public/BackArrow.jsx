
function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className="hover:fill-cyan-700 cursor-pointer transition duration-300"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0V0z" opacity={0.87} />
      <path d="M16.62 2.99a1.25 1.25 0 00-1.77 0L6.54 11.3a.996.996 0 000 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
    </svg>
  )
}

export default SvgComponent
