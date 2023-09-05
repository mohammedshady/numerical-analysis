import { parse } from "mathjs";

export const BisectionMethod = (params) => {

    if (params.maxI === "") {
        params.maxI = 20;
    }
    let error = 1;
    let data = [];

    let root = null;
    let oldRoot = null;
    let errDisplay = null;

    let a = params.a;
    let b = params.b;
    let index = 0;
    const equation = parse(params.equation);
    const startTime = Date.now();


    while (index <= params.maxI && error >= params.E) {
        root = (a + b) / 2;

        let evalA = equation.evaluate({ x: a });
        let evalC = equation.evaluate({ x: root });



        error = parseFloat(Math.abs((root - oldRoot) / root));

        errDisplay = error;
        if (index === 0) {
            errDisplay = null;
        }


        data.push({
            index: parseFloat(index),
            a: parseFloat(a),
            evalA: parseFloat(evalA),
            b: parseFloat(b),
            root: parseFloat(root),
            evalC: parseFloat(evalC),
            error: errDisplay,
        });


        (evalA * evalC > 0) ? a = root : b = root;
        oldRoot = root;
        index++;
    }

    const timeElapsed = Date.now() - startTime;
    console.log(data);
    return {
        result: root,
        rawEquation: equation,
        iterations: index - 1,
        error: error,
        tolerate: params.tolerate,
        timeElapsed: timeElapsed,
        data,
    }

}
