import { SafeAreaView } from 'react-native';
import { styles, buttons } from '../../styles/styles';
import { Input, InputField, Text, ImageBackground,  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup, } from "@gluestack-ui/themed"
import NavBar from '../navBar/navBar';
import { useTranslation } from "react-i18next";
const PoultryComponent = ({navigation}) => {
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
                onPress={() => navigation.navigate("animalFatteningList")}
            >
                <ButtonText>{t('fatteningBreeds')}</ButtonText>
        </Button>
        <Button
                style={buttons.menuButtonLarge}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate("animalMilking")}
            >
                <ButtonText>{t('milkyBreeds')}</ButtonText>
        </Button>
    </SafeAreaView>
    </ImageBackground>
    </>
  );
}

export default PoultryComponent