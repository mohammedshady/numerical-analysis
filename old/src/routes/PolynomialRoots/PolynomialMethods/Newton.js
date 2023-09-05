import React from "react";
import MethodForm from "../../../components/MethodForm/PolyForm/MethodForm";
import { newtonMethod } from '../../../lib/newton-method';

const newtonObject = {
    inputs: [
        { name: 'a', label: 'X', value: '', error: '' },
        { name: 'E', label: 'E', value: '', error: '' },
    ],
    canSubmit: true
}
const Newton = (props) => {

    const solveHandler = props.onSolve;

    return (
        <MethodForm initialValues={newtonObject} onSolve={solveHandler} solver={newtonMethod} method={"NW"} />
    )

}
export default Newton;