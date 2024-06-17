import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Button, ButtonText, Spinner } from "@gluestack-ui/themed";
import NavBar from "../navBar/navBar";
import * as DocumentPicker from "expo-document-picker"; // Import DocumentPicker from Expo
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, buttons } from "../../styles/styles";
import ChickenApi from "../../api/chicken.api";
import AnimalApi from "../../api/animal.api";
import Global from "../../temp/globalUrl";

const UploadDiseaseChicken = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({});
      console.log(result.assets[0].uri);
      setSelectedFile(result.assets[0]);
      console.log(selectedFile);
    } catch (e) {
      // console.log(e);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      Alert.alert("No file selected", "Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', {
      uri: selectedFile.uri,
      type: selectedFile.mimeType,
      name: selectedFile.name,
    });
    const chickenApi = new AnimalApi(Global.getGlobalVariable());
    setLoading(true)
    chickenApi.postDiseaseChicken(formData).then((response) => {
      console.log(response.data)
      setResult(response.data.disease);
      setLoading(false);
    }).catch((e) => {
      Alert.alert("حدث خطأ فى الاتصال, من فضلك حاول مرة اخرى");
      setLoading(false)
      console.log(e);
    })
  }
  return (
    <SafeAreaView style={{backgroundColor: '#F1EEEE' , height: '100%'}}>
      <NavBar text={"امراض الدواجن"}></NavBar>
      <View style={styles.contentContainer}>
      <View style={styles.sectionContainer}>
        {selectedFile ? (
          <>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20 }}>
              الصورة التى تم اختيارها: 
              </Text>
            </View>
            <Image
              source={{ uri: selectedFile.uri }}
              style={{ width: 300, height: 300, borderWidth: 3, borderColor: 'black' }}
            />
            {loading === true ? (<><Spinner style={{marginTop: 25}} size="large" /></>): null}
            {loading === false && result !== null ? (<>
              <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20}}>المرض هو:</Text>
              <Text style={{ fontWeight: "bold", fontSize: 20}}>{result}</Text>
            </>): null}
            <Button
          style={buttons.primaryButton}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => uploadFile()}
        >
          <ButtonText>تحليل المرض</ButtonText>
        </Button>
          </>
        ) : (
          <>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                تعتبر تقنية الذكاء الاصطناعي في تشخيص أمراض الدواجن خطوة مهمة في
                تحسين صحة وإنتاجية الثروة الداجنة. يهدف هذا النظام إلى تحليل
                الصور الطبية للدواجن وتمييز الأمراض المختلفة بدقة عالية، مما
                يساهم في تشخيصها بشكل سريع وفعال. باستخدام تقنيات الذكاء
                الاصطناعي والتعلم الآلي، يمكن للنظام تحديد العلامات والأعراض
                المميزة لكل مرض بشكل دقيق، مما يساعد على اتخاذ الإجراءات اللازمة
                للعلاج والوقاية. هذا النهج يعزز جودة الرعاية الصحية للدواجن
                ويسهم في تحسين إنتاجيتها بشكل عام، مما يعود بالفائدة على الصناعة
                الداجنة والمزارعين على حد سواء.
              </Text>
            </View>
            <View>
              <Text style={{ marginTop: 50, fontSize: 15 }}>
                من فضلك ادخل الصورة التى تريد ان تعرف المرض بها.
              </Text>
            </View>
          </>
        )}

        <Button
          style={buttons.primaryButton}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={pickDocument}
        >
          <ButtonText>اختر صورة</ButtonText>
        </Button>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadDiseaseChicken;
