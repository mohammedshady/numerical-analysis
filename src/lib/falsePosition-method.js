import { parse } from "mathjs";

export const FalsePositionMethod = (params) => {
    let error = 1;
    let data = [];
    let root = null;
    let oldRoot = null;
    let errDisplay = null;
    let index = 0;
    let a = params.a;
    let b = params.b;
    const equation = parse(params.equation);
    const startTime = Date.now();

    while (index <= params.maxI && error >= params.E) {
        let evalA = equation.evaluate({ x: a });
        let evalB = equation.evaluate({ x: b });

        root = b - ((evalB * (a - b)) / (evalA - evalB));

        let evalC = equation.evaluate({ x: root });
        (index === 0) ? error = null : error = parseFloat(Math.abs((root - oldRoot) / root) * 100);

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
