import { SafeAreaView } from "react-native";
import { styles, buttons } from "../../styles/styles";
import NavBar from "../navBar/navBar";
import {
  ImageBackground,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
const RentalComponent = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar text={t("farmRental")}></NavBar>
      <ImageBackground
        source={{ uri: "https://i.imgur.com/Khs6jbX.jpg" }}
        style={{ resizeMode: "cover", width: "100%", height: "100%" }}
      >
        <SafeAreaView
          style={[styles.containerPoultry, { backgroundColor: "transparent" }]}
        >
          <Button
            style={buttons.menuButtonLarge}
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonText>{t("tenant")}</ButtonText>
          </Button>
          <Button
            style={buttons.menuButtonLarge}
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => navigation.navigate("Form")}
          >
            <ButtonText>{t("rented")}</ButtonText>
          </Button>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};
export default RentalComponent;
