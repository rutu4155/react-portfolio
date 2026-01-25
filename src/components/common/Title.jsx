
import React from "react";
const SectionTitle = ({title, subtitle}) => {
    return(
        <>
        <div>
            <div className=" justify-center mt-20">
        <h1 className="text-center text-5xl font-semibold mb-20 ">{title}</h1>
         {subtitle && (
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
        </div>
        </div>
        </>
    );
};
export default SectionTitle;