import * as math from "mathjs";

export const secantMethod = (params) => {
    let index = 0;
    const equation = math.parse(params.equation);

    let a = params.b;
    let b = params.a;
    let data = [];
    let error = 0;
    let x = 0;
    let errDisplay = null;
    const startTime = Date.now();

    while (index <= params.maxI) {

        let fa = equation.evaluate({ x: a });
        let fb = equation.evaluate({ x: b });
        x = a - (fa * (b - a)) / (fb - fa);


        if (index === 0) {
            errDisplay = null;
        }

        data.push({
            index: parseFloat(index),
            a: parseFloat(a),
            fa: parseFloat(fa),
            b: parseFloat(b),
            fb: parseFloat(fb),
            error: errDisplay,
        });
        if (error < params.E && index !== 0) break;

        error = Math.abs(((x - a) / x));
        errDisplay = parseFloat(error);

        b = a;
        a = x;


        index++;
    }
    const timeElapsed = Date.now() - startTime;

    return {
        result: x,
        rawEquation: equation,
        iterations: index - 1,
        error: error,
        tolerate: params.tolerate,
        timeElapsed: timeElapsed,
        data,
    }

}

