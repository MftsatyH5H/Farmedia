import { SafeAreaView } from "react-native";
import { styles, buttons } from "../../styles/styles";
import {
  Text,
  Image,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ScrollView,
  View
} from "@gluestack-ui/themed";
import NavBar from "../navBar/navBar";
import AnimalApi from "../../api/animal.api";
import { useEffect, useState } from "react";
import baseApis from "../../api/base.api";
import React from "react";
import Global from "../../temp/globalUrl";

const AnimalDetails = ({ route }) => {
  const animalApi = new AnimalApi(Global.getGlobalVariable());
  const [animalDetails, setAnimalDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const BaseApi = `http://${Global.getGlobalVariable()}`
  const { id } = route.params;
  useEffect(() => {
    console.log(id);
    animalApi
      .getLargeData({ ID: id })
      .then((response) => {
        setAnimalDetails(response.data.result);
        console.log(response.data.result)
        setLoading(false);
        console.log(animalDetails[1].value[0])
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <NavBar text={"سلالات التسمين"}></NavBar>
      <ScrollView>
      <View style={styles.animalDetailsContainer}>
      {loading === true ? <Text>Loading</Text> : null}
      {loading === false ? (
        <>
          <Image
            style={{
              width: 400,
              height: 300,
              borderWidth: 3,
              borderColor: "black",
            }}
            alt="Animal Image"
            source={{
              uri: `${animalDetails[0].value[0].replace(
                "http://localhost:8000",
                `${Global.getGlobalVariable()}`
              )}`,
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20}}>{animalDetails[1].value[0]}</Text>
          <Accordion
            m="$5"
            width="100%"
            size="md"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
          >
            {animalDetails.map((item, index1) => (
              <>
                {item.index !== "الصورة" && (
                  <>
                    <AccordionItem key={`${index1}`} value={`${index1}`}>
                      <AccordionHeader key={`${index1}`}>
                        <AccordionTrigger key={`${index1}`}>
                          {({ isExpanded }) => {
                            return (
                              <>
                              {isExpanded ? (
                                  <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                ) : (
                                  <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                )}
                                <AccordionTitleText key={`${index1}`} style={{ textAlign: 'right' }}>
                                  {item.index}
                                </AccordionTitleText>
                                
                              </>
                            );
                          }}
                        </AccordionTrigger>
                      </AccordionHeader>
                      <AccordionContent>
                        <AccordionContentText key={`${index1}`}>
                          {item.value.map((info, index2) => (
                            <>
                              {info !== "nan" && info !== '' ? (
                                <>
                                  <Text key={index2}>{info}</Text>
                                </>
                              ) : (<>
                                <Text key={index2}>لا تتوفر معلومات</Text>
                              </>)}
                            </>
                          ))}
                        </AccordionContentText>
                      </AccordionContent>
                    </AccordionItem>
                  </>
                )}
              </>
            ))}
          </Accordion>
        </>
      ) : null}
      </View>
      </ScrollView>
    </>
  );
};

export default AnimalDetails;
