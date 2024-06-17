import {
  View,
  Button,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  Text,
  ModalFooter,
  FlatList,
} from "@gluestack-ui/themed";
import { styles, buttons } from "../../styles/styles";
import { useState } from "react";
import i18next from "../../services/i18next";
import { useTranslation } from "react-i18next";
import { languageResources } from "../../services/i18next";
const ChangeLanguage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLng = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
    setModalOpen(false);
  };
  return (
    <View>
      <Button
        style={buttons.changeLngButton}
        onPress={() => setModalOpen(true)}
      >
        <ButtonText style={{ color: "black" }}>
          {t("changeLanguage")}
        </ButtonText>
      </Button>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">{t("changeLanguage")}</Heading>
          </ModalHeader>
          <ModalBody>
            <Button
              onPress={() => changeLng()}
              style={{
                backgroundColor: "white",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <ButtonText style={{ color: "black" }}>العربية</ButtonText>
            </Button>
            <Button
              onPress={() => changeLng()}
              style={{
                backgroundColor: "white",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <ButtonText style={{ color: "black" }}>English</ButtonText>
            </Button>
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View>
  );
};
export default ChangeLanguage;
