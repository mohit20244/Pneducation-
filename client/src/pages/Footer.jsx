import React from 'react'

function Footer() {
  return (
  
    <footer className=" bg-[url('https://pninfosys.org/footerImage.jpg')]    bg-cover bg-center  text-white text-sm  ">
     <div>
         <h3 className="text-center  text-4xl font-bold mt-5">PN<span className='text-black'>INFO</span>SYS

         </h3>
         
     </div>

  <div className="max-w-screen-xl mx-auto px-4 py-10 border-t border-b border-blue-600">
    <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-6 md:space-y-0">
      
      {/* <!-- Email Section --> */}
      <div>
        <div className="flex justify-center md:justify-start items-center gap-2">
          <span className="text-white">&#9993;</span>
          <span className="font-semibold">Email</span>
        </div>
        <p class="mt-2">www.pninfosys.com</p>

      </div>

      {/* <!-- Phone Section --> */}
      <div>
        <div className="flex justify-center items-center gap-2">
          <span className="text-white">&#128222;</span>
          <span className="font-semibold">Phone</span>
        </div>
        <p className="mt-2">+91 7000846823</p>
        <p>+91 7415289378</p>
      </div>

      {/* <!-- Address Section --> */}
      <div>
        <div className="flex justify-center md:justify-end items-center gap-2 ">
          <span className="text-white">&#128205;</span>
          <span className="font-semibold ">Street Address</span>
        </div>
        <p className="mt-2 ">MIG-332 Darpan Colony, Thatipur,</p>
        <p>Gwalior, Madhya Pradesh</p>
      </div>
    </div>
  </div>

  <div className="text-center py-4  text-sm">
    Copyright © PNINFOSYS
  </div>
</footer>


  )
}

export default Footer
