import React from 'react'

function Certificates() {
  return (
    
        <section className="relative w-full h-[500px]">
          {/* Background Image */}
          <img
            src="/path/to/your/certificate-image.png" // Replace with your image path
            alt="Certified Students"
            className="w-full h-full object-cover"
          />
    
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex flex-col items-center justify-center p-6">
            {/* Heading */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white text-2xl">🎖️</span>
              <h2 className="text-white font-bold text-2xl md:text-3xl">
                Our Certified Students
              </h2>
            </div>
    
            {/* Card */}
            <div className="bg-white bg-opacity-90 backdrop-blur-sm shadow-lg rounded-md p-6 w-full max-w-4xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">No Record Found</span>
                <span className="text-gray-500">Page 1 of 0</span>
              </div>
    
              {/* Pagination Arrows */}
              <div className="flex justify-end gap-4">
                <button className="text-gray-500 hover:text-gray-700">&lt;</button>
                <button className="text-gray-500 hover:text-gray-700">&gt;</button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Certificates
