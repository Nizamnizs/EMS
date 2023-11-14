import React, {  createContext,  useState } from 'react'

//context creation
export const registerContext=createContext()


//update context
 export const updateContext=createContext()


function ContextShare({children}) {
    //state for register Context
    const[registerUpdate,setRegisterUpdate]=useState("")

    //state for update context
    const[updateEdit,setEditUpdate]=useState("")

  return (
    <div>
        <updateContext.Provider value={{updateEdit,setEditUpdate}}>
          <registerContext.Provider value={{registerUpdate,setRegisterUpdate}}>
              {children}
          </registerContext.Provider>
        </updateContext.Provider>
    </div>
  )
}

export default ContextShare