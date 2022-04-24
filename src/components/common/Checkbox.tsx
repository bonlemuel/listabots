import React, {useState} from "react";
import {Checkbox as NBCheckbox} from "native-base";

type CheckBoxProps = {
  label: any;
  checked: any;
  setChecked: any;
};

const Checkbox = (props: CheckBoxProps) => {
  const {label, checked, setChecked} = props;
  return (
    <NBCheckbox size={"md"} value={checked} my={3} onChange={setChecked}>
      {label}
    </NBCheckbox>
  );
};

export default Checkbox;
