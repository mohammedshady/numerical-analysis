
import "./PolynomialRoots.css"
import { useState } from 'react';
import { useEffect } from 'react';

import Table from '../../components/Table/Table';
import SelectInput from '../../components/SelectRound/SelectRound'
import MethodNavbar from '../../components/MethodNavBar/MethodNavbar';

import Bisection from './PolynomialMethods/Bisection';
import FixedPoint from './PolynomialMethods/FixedPoint';
import FalsePosition from './PolynomialMethods/FalsePosition';
import Secant from './PolynomialMethods/Secant';
import Newton from './PolynomialMethods/Newton';





const routes = ["BS", "FP", "SF", "NW", "SC"]


const PolynomialRoots = () => {

    const [rootResults, setRootResults] = useState(null);
    const [round, setRound] = useState(5);
    const [method, setCurMethod] = useState(routes[0]);

    const [animation, setAnimation] = useState("method-form")

    useEffect(() => {
        setAnimation("method-form");
    }, [method]);

    const solveHandler = (result) => {
        setRootResults(result);
        console.log(result);
    }


    return (

        <>

            <div className={`main-section ${animation}`} onAnimationEnd={() => {
                setAnimation("")
            }}>

                {method === "BS" && <Bisection onSolve={solveHandler} />}
                {method === "FP" && <FalsePosition onSolve={solveHandler} />}
                {method === "SF" && <FixedPoint onSolve={solveHandler} />}
                {method === "NW" && <Newton onSolve={solveHandler} />}
                {method === "SC" && <Secant onSolve={solveHandler} />}

                {(rootResults) ? <SelectInput setRound={setRound} option={round} /> : null}
            </div>

            {(rootResults) ? <Table result={rootResults} round={round} /> : null}
            <MethodNavbar setCurMethod={setCurMethod} routes={routes} />
        </>
    );
}

export default PolynomialRoots;
