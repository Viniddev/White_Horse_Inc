import React from "react";
import "../../styles/globals.scss";
import { BuildInputNumber } from "@/@types/components";
import { InputNumber } from "primereact/inputnumber";

export default function InputTypeNumber({state,setState,label,required,}: BuildInputNumber) {
  return (
    <div className="card flex justify-content-center FullLine">
      <div className="flex flex-column gap-2" style={{ width: "90%" }}>
        <label htmlFor="locale-user" className="font-bold block">
          {label}
        </label>
        <InputNumber
          inputId={`input_${label}`}
          value={state ?? 0}
          onValueChange={(e) => setState(e.value ?? 0)}
          required={required}
        />
      </div>
    </div>
  );
}