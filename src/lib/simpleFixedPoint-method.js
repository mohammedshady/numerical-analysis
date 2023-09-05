import { parse } from "mathjs";

function rightHand(equation) {
  const regex = /([+-]?[\d.]*)(\*?x\^?(\d+)?)|([+-]?[\d.]+)/g;
  let terms = [];
  let match;
  equation = equation.replace(/\s/g, "").replaceAll(/([-+])\s*x/g, "$11*x");

  while ((match = regex.exec(equation)) !== null) {
    let coefficient = parseFloat(match[1] || match[4] || "1");
    const power = parseInt(match[3]) || (match[2] ? 1 : 0);
    terms.push({ coefficient, power });
  }

  terms.sort((a, b) => b.power - a.power);
  const leadingTerm = terms.shift();

  let rightHandSide = terms.reduce((acc, term) => {
    const sign =
      (term.coefficient >= 0) ^ (leadingTerm.coefficient > 0) ? " + " : " - ";
    const coefficient = Math.abs(term.coefficient);
    const power =
      term.power === 0 ? "" : term.power === 1 ? "*x" : `*x^${term.power}`;
    return acc + `${sign}${coefficient}${power}`;
  }, "");

  return `((${rightHandSide}) / ${Math.abs(leadingTerm.coefficient)})^(1/${leadingTerm.power
    })`;
}



export function fixedPointMethod(params) {




  const arrangedEquation = rightHand(params.equation.split("=")[0])
  let x = params.a;
  let error = 1;
  let errDisplay = null;
  const equation = parse(arrangedEquation);
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
