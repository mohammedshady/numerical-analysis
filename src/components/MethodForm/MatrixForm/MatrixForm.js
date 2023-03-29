import "./MatrixForm.css"
import React, { useState } from "react";
import { useEffect } from "react";

const MatrixForm = ({ initialValues }) => {

    const [inputValues, setInputValues] = useState(initialValues);
    useEffect(() => {
        setInputValues(initialValues);

    }, [initialValues])









    console.log(inputValues);





    return (
        <>
            <form className="matrix-form">
                {inputValues.matrix.map((row, index) => {
                    return (
                        <div key={row[0].name}>{
                            row.map((input, index) => {
                                return (
                                    <input key={input.name} className="matrix-input" name={input.name} placeholder={input.name}></input>
                                )
                            })
                        }
                        </div>
                    )
                })
                }



            </form >
        </>
    )
}

export default MatrixForm