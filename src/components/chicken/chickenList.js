import { SafeAreaView } from 'react-native';
import { styles, buttons } from '../../styles/styles';
import { Input, InputField, Text, ImageBackground,  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup, } from "@gluestack-ui/themed"
import NavBar from '../navBar/navBar';
import { useTranslation } from "react-i18next";
const ChickenList = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <>
    <NavBar text={t('animalProduction')}></NavBar>
    <ImageBackground
    source={{ uri: "https://i.imgur.com/Khs6jbX.jpg" }}
    style={{resizeMode: 'cover', width: '100%', height: '100%'}}
  >
    <SafeAreaView style={[styles.containerPoultry, { backgroundColor: 'transparent' }]}>
    <Button
                style={buttons.menuButtonLarge}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate("chickenWhiteList")}
            >
                <ButtonText>دواجن بياض</ButtonText>
        </Button>
        <Button
                style={buttons.menuButtonLarge}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate("chickenFatList")}
            >
                <ButtonText>دواجن تسمين</ButtonText>
        </Button>
    </SafeAreaView>
    </ImageBackground>
    </>
  );
}

export default ChickenList