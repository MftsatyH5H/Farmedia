import { SafeAreaView, ImageBackground, StatusBar } from "react-native";
import { styles } from "../styles/styles";
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
import NavBar from "../components/navBar/navBar";
import { useTranslation } from "react-i18next";
const ComingSoon = ({}) => {
  const {t} = useTranslation();
  return (
    <>
    <NavBar text={t('comingSoon')}></NavBar>
    <SafeAreaView>
      <View style={styles.contentContainer}>
        <Text size="2xl">{t('comingSoon')}</Text>
        <Text size="xl">{t('comingSoonCont')}</Text>
      </View>
    </SafeAreaView>
    </>
  );
};
export default ComingSoon;
