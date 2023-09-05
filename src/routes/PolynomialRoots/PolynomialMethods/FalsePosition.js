import React from "react";
import MethodForm from "../../../components/MethodForm/PolyForm/MethodForm";
import { FalsePositionMethod } from "../../../lib/falsePosition-method";

const FalsePositionObject = {
    inputs: [
        { name: 'a', label: 'XL', value: '', error: '' },
        { name: 'b', label: 'XU', value: '', error: '' },
        { name: 'E', label: 'E', value: '', error: '' },
    ],
    //maxI: 15,
    canSubmit: true
}

const FalsePosition = (props) => {

    const solveHandler = props.onSolve;


    return (
        <MethodForm initialValues={FalsePositionObject} onSolve={solveHandler} solver={FalsePositionMethod} method={"FP"} />
    )

}
export default FalsePosition;