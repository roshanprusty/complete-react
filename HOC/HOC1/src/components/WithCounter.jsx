// import { React } from "react";

// const UpdatedComponent = OriginalComponent => {
//     class NewComponent extends React.Component {
//         render() {
//             return <OriginalComponent  name="Roshan"/>
//         }
//     }
//     return NewComponent
// }
// export default UpdatedComponent

import React from 'react';

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent name="Roshan" />;
        }
    }
    return NewComponent;
};

export default UpdatedComponent;

