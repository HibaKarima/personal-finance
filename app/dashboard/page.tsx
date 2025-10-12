import React from 'react'
import Overview from './overview/page';


function page() {
 return (
    <div className="flex lg:flex-row flex-col lg:p-0 p-5 bg-[#f8f4f0]">
      <Overview/>
    </div>
  );
}

export default page