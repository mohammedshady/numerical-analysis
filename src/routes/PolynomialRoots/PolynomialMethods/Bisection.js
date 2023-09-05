import React from "react";
import MethodForm from "../../../components/MethodForm/PolyForm/MethodForm";
import { BisectionMethod } from '../../../lib/bisection-method'

const BisectionObject = {
    inputs: [
        { name: 'a', label: 'XL', value: '', error: '' },
        { name: 'b', label: 'XU', value: '', error: '' },
        { name: 'E', label: 'E', value: '', error: '' },
    ],
    maxI: "",
    canSubmit: false
}

const Bisection = (props) => {

    const solveHandler = props.onSolve;


    return (

        <MethodForm initialValues={BisectionObject} onSolve={solveHandler} solver={BisectionMethod} method={"BS"} />

    )

}
export default Bisection;