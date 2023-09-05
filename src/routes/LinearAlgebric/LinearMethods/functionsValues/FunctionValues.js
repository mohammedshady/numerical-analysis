import React from "react";

const FunctionValues = ({ equations, xValues }) => {
    return (
        <div className="result">
            {equations && <div className="functions-result">
                <p>Equations</p>
                <div className="result-equations">
                    {equations.map(equation => {
                        const subscriptedEquation = equation.replace(/X(\d+)/g, 'x<sub class="subscript">$1</sub>');
                        return (
                            <div key={equation} dangerouslySetInnerHTML={{ __html: subscriptedEquation }} />
                        )
                    })}
                </div>
            </div>}

            <div className="values-result">
                Values
                {
                    xValues.map((value, i) => {
                        return (
                            <div key={value.name}>{value.name.slice(0, 1)}<sub>{value.name.slice(1)}</sub>{" "}= {parseFloat(value.value.toFixed(2))}</div>

                        )
                    })
                }
            </div>
        </div>
    )
}
export default FunctionValues;