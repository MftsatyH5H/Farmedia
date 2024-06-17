import { SafeAreaView, ImageBackground, StatusBar } from "react-native";
import { styles, buttons } from "../../styles/styles";
import {
  Input,
  InputField,
  Text,
  Button,
  Image,
  ButtonText,
  View,
  Icon,
  MenuIcon
} from "@gluestack-ui/themed";
const NavBar = ({ text }) => {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="green"
      />
      <View style={styles.navbar}>
        <Text size="xl" style={styles.navbarTitle}>{text}</Text>
        {/* <Icon as={MenuIcon} size="md" /> */}
      </View>
    </SafeAreaView>
  );
};
export default NavBar;
