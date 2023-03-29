import React from "react";
import MethodForm from "../../../components/MethodForm/PolyForm/MethodForm";
import { fixedPointMethod } from '../../../lib/simpleFixedPoint-method';

const fixedPointObject = {
    inputs: [
        { name: 'a', label: 'X', value: '', error: '' },
        { name: 'E', label: 'E', value: '', error: '' },
    ],
    canSubmit: true
}

const FixedPoint = (props) => {

    const solveHandler = props.onSolve;

    return (
        <MethodForm initialValues={fixedPointObject} onSolve={solveHandler} solver={fixedPointMethod} method={"SF"} />
    )

}
export default FixedPoint;