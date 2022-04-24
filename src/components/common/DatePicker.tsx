import React, {useEffect, useState} from "react";
import {useDisclose, Input as NBInput, FormControl} from "native-base";
import {View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import DatePicker from "react-native-date-picker";

type DatePickerProps = {
  placeholder: any;
};

const DatePickerSelector = (props: DatePickerProps) => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [date, setDate] = useState(new Date());
  const {placeholder} = props;

  useEffect(() => {
    initDate();
  }, []);

  const initDate = () => {
    var date = new Date();
    var newdate = new Date(date);
    newdate.setFullYear(newdate.getFullYear() - 18);
    var initDate = new Date(newdate);
    setDate(initDate);
  };

  return (
    <View>
      <DatePicker
        modal
        mode={"date"}
        open={isOpen}
        date={date}
        androidVariant={"nativeAndroid"}
        onConfirm={date => {
          onClose();
          setDate(date);
        }}
        maximumDate={new Date()}
        onCancel={() => {
          onClose();
        }}
      />
      <TouchableOpacity style={{width: "100%", height: 55}} onPress={onOpen}>
        <FormControl>
          <NBInput
            {...props}
            isDisabled
            px={5}
            borderRadius={5}
            w={"100%"}
            h={{
              base: "55px",
            }}
            type={"text"}
            placeholder={placeholder}
            variant={"filled"}
            size={"lg"}
          />
        </FormControl>
      </TouchableOpacity>
    </View>
  );
};

export default DatePickerSelector;
