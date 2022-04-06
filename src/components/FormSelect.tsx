import React, { FC, useMemo } from "react"
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import cities from 'cities.json';

type IProps = {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=> any
}

type City = {
    city: string,
    population: string,
}


const FormSelect: FC<IProps> = ({
    value, onChange
}) =>{


    const processedCities = useMemo(()=>{
        const sortedArray = cities.sort(function(a, b){
            if(a.city < b.city) { return -1; }
            if(a.city > b.city) { return 1; }
            return 0;
        })

        let max=0;
        let index=0;
    
        sortedArray.forEach((item, idx)=>{
            if(max<Number(item.population)){
                max = Number(item.population);
                index = idx;
            }
        });

        const maximumPopulatedCity = sortedArray.splice(index,1)
        sortedArray.unshift(maximumPopulatedCity[0])        
        
        return sortedArray        

    },[])
    
    
    

    return (
        <div className="grid items-baseline my-4 grid-cols-12">
            <label htmlFor="" className="w-52 text-xs md:text-sm xl:text-lg col-span-3">
                Ваш город
            </label>

            <TextField
            select
            hiddenLabel
            size="small"
            fullWidth
            style={{gridColumn: 'span 5 / span 5'}}
            value={value}
            onChange={onChange}
            helperText=" "
            >
            {processedCities.map((option:City) => (
                <MenuItem key={option.city} value={option.city} className='bg-red-200'>
                    <span>{option.city}</span>
                    <span className="ml-auto float-right"> {option.population}</span>
                </MenuItem>
            ))}
            </TextField>

            <p className="text-gray-400 mx-4 self-start col-span-4">
                
            </p>
        </div>
    );
}

export default FormSelect;