import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

/* 
WithSpinner is a Higher Order Component (HOC)

With any Higher Order Component (HOC) it returns you back a new functional component

So our HOC takes in an existing component with a boolean property isLoading, 
and depending on the value, returns either
a Spinner Component or the Wrapped Component with ...otherProps
*/
const WithSpinner = (WrappedComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};

export default WithSpinner;
