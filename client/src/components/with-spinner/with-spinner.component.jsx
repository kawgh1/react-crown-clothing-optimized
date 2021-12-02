import React from "react";
/* 
WithSpinner is a Higher Order Component (HOC)

With any Higher Order Component (HOC) it returns you back a new functional component

So our HOC takes in an existing component with a boolean property isLoading, 
and depending on the value, returns either
a Spinner Component or the Wrapped Component with ...otherProps
*/

// import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

import Spinner from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent) => {
    // const Spinner = ({ isLoading, ...otherProps }) => {
    //     return isLoading ? (
    //         <SpinnerOverlay>
    //             <SpinnerContainer />
    //         </SpinnerOverlay>
    //     ) : (
    //         <WrappedComponent {...otherProps} />
    //     );
    // };
    // return Spinner;
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
    };
};

export default WithSpinner;
