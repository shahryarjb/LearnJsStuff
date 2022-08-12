import React from "react";

const Wrapper = (WrapperComponent, className) => {
   return (props) => (
    <div className={className}>
        <WrapperComponent {...props} />
    </div>
   )
}

export default Wrapper;