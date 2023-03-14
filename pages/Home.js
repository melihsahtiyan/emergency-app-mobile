import { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { globalColors } from "./../theme/colors";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );

  useEffect(() => {
    setColors(theme === "light" ? globalColors.light : globalColors.dark);
  }, [theme]);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
