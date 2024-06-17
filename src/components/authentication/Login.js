import { SafeAreaView, ImageBackground } from "react-native";
import { styles, buttons } from "../../styles/styles";
import {
  Input,
  InputField,
  Text,
  Button,
  Image,
  Fab,
  ButtonText,
  View,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  ModalFooter,
  FlatList,
} from "@gluestack-ui/themed";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ChangeLanguage from "../changeLanguage/changeLanguageModal";
import Global from "../../temp/globalUrl";
import { useState } from "react";

const LoginComponent = ({ navigation }) => {
  console.log(Global.getGlobalVariable());
  const [modalOpen, setModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  changeInput = () => {
    console.log(url);
    setModalOpen(false);
    Global.setGlobalVariable(`http://${url}`);
    console.log("url is: ", Global.getGlobalVariable());
  };
  changeUrl = () => {
    setModalOpen(true);
    // console.log('before: ', Global.getGlobalVariable());
    // Global.setGlobalVariable('http://192.168.222.123:8000');
    // console.log('after: ', Global.getGlobalVariable());
  };

  const { t } = useTranslation();
  return (
    <>
              {/* <Fab
          size="sm"
          placement="bottom left"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
          style={{backgroundColor: 'white'}}
        >
          <Button
            style={{
              backgroundColor: "transparent",
            }}
            size="md"
            variant="solid"S
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => changeUrl()}
          >
            <Icon name="wifi-settings" size={30}></Icon>
          </Button>
        </Fab> */}
        <SafeAreaView>
      <View style={styles.ImageContainer}>
        {/* <ChangeLanguage></ChangeLanguage> */}
        <Image
          size="2xl"
          borderRadius="$none"
          alt="image"
          source={{
            uri: "https://i.imgur.com/70Ybe6f.jpg",
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text size="4xl" style={styles.loginText}>
          {t("login")}
          asdlask
        </Text>
        <Input
          style={{ marginTop: 25 }}
          variant="rounded"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder={t("userName")} />
        </Input>
        <Input
          style={{ marginTop: 25 }}
          variant="rounded"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder={t("password")} />
        </Input>
        <Button
          style={buttons.primaryButton}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => navigation.navigate("Menu")}
        >
          <ButtonText>{t("signIn")}</ButtonText>
        </Button>
      </View>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Developer Options</Heading>
          </ModalHeader>
          <ModalBody>
            <Text>http://</Text>
            <Input
              variant="rounded"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder={'Url'} onChangeText={setUrl} />
            </Input>
            <Text>Ex: 192.168.1.1:8000</Text>
            <Text>current: http://{url}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setModalOpen(false);
              }}
            >
              <ButtonText>{t("cancel")}</ButtonText>
            </Button>
            <Button
              onPress={() => changeInput()}
              style={[buttons.primaryButton]}
            >
              <ButtonText>Submit</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SafeAreaView>
    </>
    
  );
};
export default LoginComponent;
