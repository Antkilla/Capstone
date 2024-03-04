import React, {useState, createContext} from "react"

export const DealershipsContext = createContext();

export const DealershipsContextProvider = (props) => {
    const [dealerships, setDealerships] = useState([]);

    const addDealerships = (dealership) => {
        setDealerships([...dealerships, dealership]);
    };

    return (
        <DealershipsContext.Provider value={{ dealerships, setDealerships, addDealerships }}>
            {props.children}
        </DealershipsContext.Provider>
    );
};