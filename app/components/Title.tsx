import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface titleTypes {
    title:string;
    link:string;
    text:string
}


function Title({title,link,text}:titleTypes) {
  return (
    <div className="flex justify-between gap-4 items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        <Link
          href={link}
          className="text-gray-500 text-sm flex items-center gap-3 hover:text-gray-700"
        >
          {text}{" "}
          <Image
            src="images/icon-caret-right.svg"
            alt="carret"
            width={5}
            height={5}
          ></Image>
        </Link>
      </div>
  )
}

export default Title