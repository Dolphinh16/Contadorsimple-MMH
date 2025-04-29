import React from "react";
import PropTypes from 'prop-types';

const MyCounter = (props) => {

    return (
        <div className="text-center">
            <h1 className="text-center">Contador</h1>
       
        <div className="makingCounter d-flex justify-content-center">
            <div className="calendario">
                <i className="far fa-clock"></i>
            </div>
            <div className="cuatro">{props.numeroCuatro % 10}</div>
            <div className="tres">{props.numeroTres % 10}</div>
            <div className="dos">{props.numeroDos % 10}</div>
            <div className="uno">{props.numeroUno % 10}</div>
            </div>
        </div>
    );
}

export default MyCounter;

MyCounter.proptype = {
    numeroCuatro: PropTypes.number,
    numeroTres: PropTypes.number,
    numeroDos: PropTypes.number,
    numeroUno: PropTypes.number

}