import React from "react";
import { InputText } from "primereact/inputtext";
import { BuildInputText } from "@/@types/components";
import "../../styles/globals.scss";

export default function InputTypeText({ state, setState, label }: BuildInputText) {
  return (
    <div className="card flex justify-content-center FullLine">
      <div className="flex flex-column gap-2" style={{ width: "80%" }}>
        <label htmlFor="username" style={{ color: "black" }}>
          {label}
        </label>
        <InputText value={state} onChange={(e) => setState(e.target.value)} />
      </div>
    </div>
  );  
}