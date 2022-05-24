import * as React from "react"

const Hamburger = (props) => (
  <svg
    width={26}
    height={18}
    className="fill-black dark:fill-white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 17.5H.25v-2.833H13V17.5Zm12.75-7.083H.25V7.583h25.5v2.834Zm0-7.084H13V.5h12.75v2.833Z"
    />
  </svg>
)

export default Hamburger;
