import React, {useState} from "react";
import {VStack, Select as NBSelect} from "native-base";

interface SelectionsArr {
  label: string;
  value: string;
}

type SelectorProps = {
  label: String;
  selected: any;
  onValueChange: any;
  selections: Array<SelectionsArr>;
};

const Selector = (props: SelectorProps) => {
  const {label, selected, onValueChange, selections} = props;
  return (
    <VStack alignItems="center" space={4}>
      <NBSelect
        selectedValue={selected}
        px={5}
        borderRadius={5}
        w={{
          base: "100%",
        }}
        h={{
          base: "55px",
        }}
        variant={"filled"}
        placeholder="Gender"
        fontSize={"md"}
        onValueChange={onValueChange}>
        {selections &&
          selections.map((value, index) => (
            <NBSelect.Item
              key={index}
              label={value.label}
              value={value.value}
            />
          ))}
      </NBSelect>
    </VStack>
  );
};

export default Selector;
