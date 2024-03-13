import React,{createContext, useState} from 'react'
 const context = createContext();
export default function Provider({children}) {
    let [selectedx, setSelectedx] = useState('')
    return (
       <context.Provider value={{ 
        selectedx:selectedx,
        setSelectedx:setSelectedx,
        }}>
         {children}
       </context.Provider>
    )
}

export {Provider, context}