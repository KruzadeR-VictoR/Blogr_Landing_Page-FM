// eslint-disable-next-line react/prop-types
function DownArrow({color}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity=".75"
        d="M1 1l4 4 4-4"
      />
    </svg>
  );
}

export default DownArrow;
