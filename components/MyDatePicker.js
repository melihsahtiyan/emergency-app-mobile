import { useContext, useState } from "react";
import { Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { globalColors } from "../theme/colors";
import { ThemeContext } from "../theme/ThemeProvider";
import MyButton from "./MyButton";

const MyDatePicker = ({ date, setDate, children, buttonStyle }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );
  const [open, setOpen] = useState(Platform.OS === "ios" ? true : false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setOpen(Platform.OS === "ios" ? true : false);
  };

  return (
    <>
      {Platform.OS === "ios" ? (
        <>
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            textColor={colors.text}
            style={{ backgroundColor: colors.container }}
          />
        </>
      ) : (
        <>
          <MyButton
            title="Open"
            onPress={() => {
              setOpen(true);
              console.log("Date picker: ", open);
            }}
            style={buttonStyle}
          >
            {children}
          </MyButton>
          {open && (
            <DateTimePicker
              value={date}
              mode="date"
              display="spinner"
              onChange={(e, selectedDate) => {
                setOpen(false);
                setDate(selectedDate);
                console.log("Date picker: ", open);
                console.log("Date picker: ", selectedDate);
              }}
              textColor={colors.text}
              style={{ backgroundColor: colors.container }}
            />
          )}
        </>
      )}
    </>
  );
};

export default MyDatePicker;
