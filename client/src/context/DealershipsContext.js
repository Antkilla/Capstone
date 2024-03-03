import React, {useState, createContext} from "react"

export const DealershipsContext = createContext();

export const DealershipsContextProvider = props => {
    const [Dealerships,setDealerships] = useState([])

    return (
        <DealershipsContext.Provider value={{Dealerships, setDealerships}}>
            {props.children}
        </DealershipsContext.Provider>
    )
}