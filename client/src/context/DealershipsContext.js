import React, {useState, createContext} from "react"

export const DealershipsContext = createContext();

export const DealershipsContextProvider = (props) => {
    const [dealerships, setDealerships] = useState([]);
    const [selectedDealership, setSelectedDealership] = useState([null]);

    const addDealerships = (dealership) => {
        setDealerships([...dealerships, dealership]);
    };

    return (
        <DealershipsContext.Provider 
        value={{ dealerships, setDealerships, addDealerships, selectedDealership, setSelectedDealership }}>
            {props.children}
        </DealershipsContext.Provider>
    );
};