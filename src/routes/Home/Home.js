import React from "react";
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="home-page-container">
                <div className="PolynomialMethods home-method-section">
                    <div className="home-page-header-container">
                        <p className="PolynomialMethods-header home-page-header">Polynomial Methods</p>
                        <p className="PolynomialMethods-header home-page-sub-header">Chapter One</p>
                    </div>
                    <div className="method-card-container steps-container">
                        {
                            PolynomialMethods.map((card) => {
                                return (
                                    <div className="method-card" key={card.label}>
                                        <p>{card.label}</p>
                                        <div>{card.desc}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="LinearMethods home-method-section">
                    <div className="home-page-header-container">
                        <p className="PolynomialMethods-header home-page-header">Linear Algebric Methods</p>
                        <p className="PolynomialMethods-header home-page-sub-header">Chapter Two</p>
                    </div>
                    <div className="method-card-container steps-container">
                        {
                            LinearAlgebricMethods.map((card) => {
                                return (
                                    <div className="method-card" key={card.label}>
                                        <p>{card.label}</p>
                                        <div>{card.desc}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )

}
export default Home;

const LinearAlgebricMethods = [
    {
        label: "Gauss Elimination",
        desc: "Gauss Elimination is a popular numerical method for solving linear equations, systematically eliminating variables via row operations to obtain a solution efficiently and accurately."
    },
    {
        label: "LU Decomposition",
        desc: "LU Decomposition is a numerical method that factors a square matrix into the product of lower and upper triangular matrices, enabling efficient solution of systems of linear equations."
    },
    {
        label: "Cramers Rule",
        desc: "Cramer's Rule is a powerful technique for solving linear systems, employing determinants to obtain a distinct solution for each variable, providing valuable insights into system properties."
    },
    {
        label: "Gauss Jordan",
        desc: "Gauss Jordan elimination is an algorithm for solving systems of linear equations by applying elementary row operations to reduce the augmented matrix to row  echelon form."
    },

];

const PolynomialMethods = [
    {
        label: "Bisection Method",
        desc: "The Bisection Method is a numerical technique for finding the root of a polynomial equation by iteratively narrowing down the interval containing the root."
    },
    {
        label: "False Position Method",
        desc: "The False Position Method, also known as the Regula Falsi method, is an iterative approach for approximating the root of a polynomial equation based on linear interpolation."
    },
    {
        label: "Fixed-Point Iteration",
        desc: "The Fixed-Point Iteration method is used to find the fixed points of a polynomial function by repeatedly applying a transformation until convergence is achieved."
    },
    {
        label: "Newton's Method",
        desc: "Newton's Method is an iterative technique for finding the root of a polynomial equation by utilizing successive approximations derived from the function's derivative."
    },
    {
        label: "Secant Method",
        desc: "The Secant Method is an iterative numerical method that estimates the root of a polynomial equation by constructing secant lines between two points and extrapolating to the root."
    }
];