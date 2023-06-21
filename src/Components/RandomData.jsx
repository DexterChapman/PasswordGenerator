import React from "react";
import dataCatA from "./Data";
import { dataCatB } from "./Data";
import { dataCatC } from "./Data";
import { dataCatD } from "./Data";
import { dataCatE } from "./Data";

function Password() {
  // add slider function here to adjust total number

  //const valueSlider = document.getElementById("slids").value;

  const totalDigits = 10;

  function mixedPass() {
    const OTPOrder = [];
    const OTP = [];

    // number of data strings
    const numberOfDataStrings = 5;
    for (let c = 0; c < totalDigits; c++) {
      let dataBaseNumbers = Math.floor(Math.random() * numberOfDataStrings);
      OTPOrder.push(dataBaseNumbers);
    }
    for (let x = 0; x < totalDigits; x++) {
      if (OTPOrder[x] === 0) {
        const numb = Math.floor(Math.random() * 10);
        const dataFromDataCatA = dataCatA[numb];
        OTP.push(dataFromDataCatA);
      } else if (OTPOrder[x] === 1) {
        const letter = Math.floor(Math.random() * 10);
        const dataFromDataCatB = dataCatB[letter];
        OTP.push(dataFromDataCatB);
      } else if (OTPOrder[x] === 2) {
        const Symb = Math.floor(Math.random() * 10);
        const dataFromDataCatC = dataCatC[Symb];
        OTP.push(dataFromDataCatC);
      } else if (OTPOrder[x] === 3) {
        const Symb = Math.floor(Math.random() * 10);
        const dataFromDataCatD = dataCatD[Symb];
        OTP.push(dataFromDataCatD);
      } else if (OTPOrder[x] === 4) {
        const Symb = Math.floor(Math.random() * 10);
        const dataFromDataCatE = dataCatE[Symb];
        OTP.push(dataFromDataCatE);
      }
    }

    const Test = OTP.join("");
    return Test;
  }

  let otpGen = mixedPass();

  function refreshButton() {
    document.getElementById("Password").innerHTML = mixedPass();
  }

  return (
    <div>
      <h1>Password Generator</h1>
      <h2 id="Password">{otpGen}</h2>
      <button id="refreshB" onClick={refreshButton}>
        Refresh
      </button>
    </div>
  );
}

export default Password;
