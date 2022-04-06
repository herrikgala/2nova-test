import React from "react";

const FormHeader: React.FC = ()=>{
    return (
        <div className="flex justify-between items-end pb-20">
            <h1 className="font-bold text-gray-500 text-2xl inline">
                Здравствуйте, {' '}
                <span className="text-black relative">
                    Человек № 3596941
                    <div className="absolute text-base font-normal bg-gray-200 p-4 w-max left-0 top-full mt-2">Прежде чем действовать, надо понять </div>
                </span> 
            </h1>
            <span className="cursor-pointer text-base text-blue-500 border-b border-dashed border-blue-500">Сменить статус</span>
        </div>
    )
}

export default FormHeader;