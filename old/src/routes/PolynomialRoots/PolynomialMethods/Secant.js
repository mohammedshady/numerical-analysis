import React from "react";
import MethodForm from "../../../components/MethodForm/PolyForm/MethodForm";
import { secantMethod } from '../../../lib/secant-method';

const secantObject = {
    inputs: [
        { name: 'a', label: 'a', value: '', error: '' },
        { name: 'b', label: 'b', value: '', error: '' },
        { name: 'E', label: 'E', value: '', error: '' },
    ],

    canSubmit: true
}


const Secant = (props) => {

    const solveHandler = props.onSolve;

    return (
        <MethodForm initialValues={secantObject} onSolve={solveHandler} solver={secantMethod} method={"SC"} />
    )

}
export default Secant;