import React from "react";
import ErrorMessage from "../../error-message/error-message";
import LoadingPrimary from "../../loadings/loading-primary/loading-primary";

function LoadingErrorWrapper({ children, isLoading, isError }) {

  return (
    isError
    ? <ErrorMessage />
    : isLoading 
      ? <LoadingPrimary />
      : children
  )
}

export default LoadingErrorWrapper;
