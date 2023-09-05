import { parse } from "mathjs";


export function fixedPointMethod(params) {
  let x = params.a;
  let error = 1;
  let errDisplay = null;
  const equation = parse(params.equation);
  let data = [];
  let index = 0;
  let startTime = Date.now();

  while (index <= params.maxI) {
    let xPlus1 = equation.evaluate({ x: x });
    console.log(params.E)


    if (index === 0) {
      errDisplay = null;
    }

    data.push({
      index: parseFloat(index),
      x: parseFloat(x),
      // fx: x1,
      error: errDisplay,

    });

    if (error < params.E && index !== 0) break;
    error = parseFloat(Math.abs((xPlus1 - x) / xPlus1));
    errDisplay = error;

    x = xPlus1;
    index++;
  }
  const timeElapsed = Date.now() - startTime;


  // if (error > params.tolerance) {
  //   throw new Error(`Failed to converge after ${params.maxIterations} iterations`);
  // }

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
