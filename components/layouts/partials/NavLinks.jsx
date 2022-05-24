import React from "react";
import Link from 'next/link';

let NavLinks = (props) => {
  return (
    <>
      <Link href={props.link}>
        <li key={props.id} className="ml-4 my-6 cursor-pointer md:my-0 md:mx-0">
          <a
            className="py-2 md:px-3 text-xl hover:text-blue-600 lg:hover:bg-blue-600 lg:hover:text-white rounded transition duration-300"
            target={props.target}
          >
            {props.title}
          </a>
        </li>
      </Link>
    </>
  );
};

export default NavLinks;
