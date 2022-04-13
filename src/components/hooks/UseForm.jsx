import { useState } from "react";


 export const UseForm = (initialState={}) => {
    const [values, setValues] = useState(initialState)
    
    const handleInputChange = ({target})=>{
        setValues({
            ...values,[target.name]:target.value
        })
        
    }
    const reset=()=>{
        setValues(initialState)
    }


    const editar=()=>{
        setValues(paciente)
    }


    



    
 
    return [values,handleInputChange,reset,editar]
}

