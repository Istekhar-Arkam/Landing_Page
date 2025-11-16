import React from 'react'

const Card = ({ image, heading, paragraph, showButton, onButtonClick }) => {
  return (
   <div className="px-4 pt-3 mx-3 mt-2 text-center text-black bg-white border-2 rounded-2xl w-[290px] h-[450px] bg-linear-to-br from-blue-50 to-indigo-100 ">
      <div className="flex items-center justify-center">
        <img src={image} alt="icon" />
      </div>
      <h1 className="py-2 text-[15px] font-medium capitalize">{heading}</h1>
      <p className=" leading-5 font-normal text-[15px] md:text-sm">{paragraph}</p>
      {showButton && (
        <button
          className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-full "
          onClick={onButtonClick}
        >
          View More
        </button>
      )}
    </div>
  )
}

export default Card