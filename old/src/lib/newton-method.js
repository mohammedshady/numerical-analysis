import * as math from "mathjs";

export const newtonMethod = (params) => {
    let index = 0;
    const equation = math.parse(params.equation);
    let fxD = math.derivative(equation, 'x');
    let xiPlus1 = 0
    let data = [];
    let error = 1;

    let Xi = params.a;
    let errDisplay = null;
    const startTime = Date.now();

    while (index <= params.maxI) {

        let fx = equation.evaluate({ x: Xi });
        let fxDash = fxD.evaluate({ x: Xi });


        if (index === 0) {
            errDisplay = null;
        }

        data.push({
            index: parseFloat(index),
            Xi: parseFloat(Xi),
            Fx: parseFloat(fx),
            FxDash: parseFloat(fxDash),
            error: errDisplay,
        });

        xiPlus1 = Xi - (fx / fxDash);

        if (error < params.E && index !== 0) break;

        error = (Math.abs((xiPlus1 - Xi) / xiPlus1)).toString();
        errDisplay = parseFloat(error);
        Xi = xiPlus1;
        index++;
    }
    const timeElapsed = Date.now() - startTime;

    return {
        result: Xi,
        rawEquation: fxD.toString(),
        iterations: index - 1,
        error: error,
        tolerate: params.tolerate,
        timeElapsed: timeElapsed,
        data,
    }

}

