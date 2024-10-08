import {createContext, useContext, useState} from 'react';



const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({children}) {

    const [cartOpen, setCartOpen ] = useState(false);
    
    function toggleCart(){
        setCartOpen(!cartOpen);
    }

    function closeCart(){
        setCartOpen(false);
    }

    function openCart(){
        setCartOpen(true);
    }

    return (
        <LocalStateProvider value={{cartOpen, setCartOpen,toggleCart,closeCart,openCart}}>{children}</LocalStateProvider>
    );
}

function useCart(){

    // we use a consumer here to access the local state
    const all = useContext(LocalStateContext);
    return all;

}

// make a custom hook for 
export {CartStateProvider, useCart};

 
