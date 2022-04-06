import FormHeader from "components/FormHeader";
import React from "react"

const Form: React.FC = () =>{
    return(
        <div className="px-8 py-12 bg-white h-max shadow-lg rounded w-[500px] md:w-[600px] lg:w-[800px]">
            <FormHeader/>
            <hr className="h-px border-gray-200"/>
        </div>
    )
}

export default Form;