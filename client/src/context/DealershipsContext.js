import React, {useState, createContext} from "react"

export const DealershipsContext = createContext();

export const DealershipsContextProvider = (props) => {
    const [dealerships, setDealerships] = useState([])
    console.log("DealershipContext initialized");
    return (
        <DealershipsContext.Provider value={{ dealerships, setDealerships }}>
            {props.children}
        </DealershipsContext.Provider>
    );
};