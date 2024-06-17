import { SafeAreaView } from 'react-native';
import { buttons, styles } from '../../styles/styles';
import { Input, InputField, Text, ImageBackground,  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup, } from "@gluestack-ui/themed"
import NavBar from '../navBar/navBar';
import { useTranslation } from "react-i18next";
export default function RentForm() {
  const { t, i18n } = useTranslation();
  return (
    <>
    <NavBar text={t('rentedFarms')}></NavBar>
    <SafeAreaView style={styles.contentContainer}>
  <Input
    style={{marginTop: 25}}
    variant="rounded"
    size="md"
    isDisabled={false}
    isInvalid={false}
    isReadOnly={false}
    >
    <InputField placeholder={t('farmName')} />
  </Input>
  <Input
    style={{marginTop: 25}}
    variant="rounded"
    size="md"
    isDisabled={false}
    isInvalid={false}
    isReadOnly={false}
    >
    <InputField placeholder={t('farmAddress')} />
  </Input>
  <Input
    style={{marginTop: 25}}
    variant="rounded"
    size="md"
    isDisabled={false}
    isInvalid={false}
    isReadOnly={false}
    >
    <InputField placeholder={t('farmArea')} />
  </Input><Input
    style={{marginTop: 25}}
    variant="rounded"
    size="md"
    isDisabled={false}
    isInvalid={false}
    isReadOnly={false}
    >
    <InputField placeholder={t('phoneNumber')} />
  </Input>
<Button
  style={buttons.primaryButton}
  size="md"
  variant="solid"
  action="primary"
  isDisabled={false}
  isFocusVisible={false}
>

  <ButtonText>{t('uploadLicenses')}</ButtonText>
</Button>
  <Button
  style={buttons.primaryButton}
  size="md"
  variant="solid"
  action="primary"
  isDisabled={false}
  isFocusVisible={false}
>

  <ButtonText>{t('signIn')}</ButtonText>
</Button>
    </SafeAreaView>
    </>
  );
}

