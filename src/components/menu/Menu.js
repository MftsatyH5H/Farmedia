import { SafeAreaView } from "react-native";
import { buttons, styles } from "../../styles/styles";
import NavBar from "../navBar/navBar";
import { View } from "@gluestack-ui/themed";
import {
  Input,
  InputField,
  Text,
  ImageBackground,
  Button,
  ButtonText,
  ButtonIcon,
  AddIcon,
  ButtonSpinner,
  ButtonGroup,
  HStack,
  Center,
  VStack,
  Box,
} from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Global from "../../temp/globalUrl";
const MenuComponent = ({ navigation }) => {
  console.log("after: ", Global.getGlobalVariable());
  const { t } = useTranslation();
  var navText = t("welcome");
  return (
    <SafeAreaView>
      <NavBar text={navText}></NavBar>
      <ImageBackground
        source={{ uri: "https://i.imgur.com/Khs6jbX.jpg" }}
        style={{ resizeMode: "cover" }}
      >
        <View style={styles.menuContainer}>
          <VStack space="lg">
            <HStack space="lg" reversed={false}>
              <Button
                style={buttons.menuButton}
                size="md"
                variant="outline"
                action="primary"
                onPress={() => navigation.navigate("Animal")}
              >
                <VStack>
                  <Center>
                    <FontAwesome name="paw" size={50} color="black" />
                  </Center>
                  <ButtonText style={buttons.menuButtonText}>مجترات</ButtonText>
                </VStack>
              </Button>
              <Button
                style={buttons.menuButton}
                size="md"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate("chickenList")}
              >
                <VStack>
                  <Center>
                    <Icon name="egg" size={50} color="black" />
                  </Center>
                  <ButtonText style={buttons.menuButtonText}>دواجن</ButtonText>
                </VStack>
              </Button>
            </HStack>
            <HStack space="lg" reversed={false}>
              <Button
                style={buttons.menuButton}
                size="md"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate("diseaseList")}
              >
                <VStack>
                  <Center>
                    <FontAwesome name="medkit" size={50} color="black" />
                  </Center>

                  <ButtonText style={buttons.menuButtonText}>
                    {t("diseases")}
                  </ButtonText>
                </VStack>
              </Button>
              <Button
                style={buttons.menuButton}
                size="md"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate("Soon")}
              >
                <VStack>
                  <Center>
                    <FontAwesome name="comment" size={50} color="black" />
                  </Center>
                  <ButtonText style={buttons.menuButtonText}>
                    {t("consulting")}
                  </ButtonText>
                </VStack>
              </Button>
            </HStack>
            <HStack space="lg" reversed={false}>
              <Button
                style={buttons.menuButton}
                size="md"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate("Soon")}
              >
                <VStack>
                  <Center>
                    <FontAwesome
                      name="graduation-cap"
                      size={50}
                      color="black"
                    />
                  </Center>
                  <ButtonText style={buttons.menuButtonTextTraining}>
                    {t("training")}
                  </ButtonText>
                </VStack>
              </Button>
              <Button
                style={buttons.menuButton}
                size="md"
                variant="outline"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate("Rental")}
              >
                <VStack>
                  <Center>
                    <FontAwesome name="building" size={50} color="black" />
                  </Center>
                  <ButtonText style={buttons.menuButtonText}>
                    {t("farmRental")}
                  </ButtonText>
                </VStack>
              </Button>
            </HStack>
          </VStack>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default MenuComponent;
