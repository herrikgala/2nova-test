import React, { FC } from "react";
import TextField from '@mui/material/TextField';
import { ChangeEventHandler } from "react";

type IProps = {
    label: string,
    helperText?: string,
    hint: string,
    value?: string,
    checked?: boolean,
    onChange: (event:any)=> any,
    onFocus?: ()=> any,
    type?: "text" | "checkbox" | "password",
}

const FormInput: FC<IProps>=({
    label, hint, value, onChange, type='text', checked=false, helperText= ' ', onFocus,
})=>{
    
    return(
        <div className="grid grid-cols-12 items-baseline my-4">
            <label htmlFor="" className="w-52 text-xs md:text-sm xl:text-lg col-span-3">
                {label}
            </label>

            {type!=='checkbox' ?
            <TextField 
            hiddenLabel
            size="small"
            fullWidth
            value={value}
            type={type==='password' ? 'password' : undefined}
            onChange={onChange}
            style={{gridColumn: 'span 5 / span 5'}}
            helperText={helperText}
            error={!!helperText.trim()}
            onFocus={onFocus}
            />:
            
            <>
                <label className="w-max">
                    <input type="checkbox" checked={checked} onChange={onChange} />
                    {' '}
                    принимать актуальную информацию на емейл
                </label>
            </>
            }
            
            <p className="text-gray-400 mx-4 self-start col-span-4 text-xs md:text-base">
                {hint}
            </p>
        </div>
    );
}


export default FormInput;