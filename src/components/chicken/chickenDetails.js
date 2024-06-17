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
import ChickenApi from "../../api/chicken.api";
import Global from "../../temp/globalUrl";
const ChickenDetailsWhite = ({ route }) => {
  const chickenApi = new ChickenApi(Global.getGlobalVariable());
  const [chickenDetails, setChickenDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const BaseApi = new baseApis().baseApi;
  const { id } = route.params;
  useEffect(() => {
    console.log(id);
    chickenApi
      .postChickenEgg({ ID: id })
      .then((response) => {
        setChickenDetails(response.data.result);
        console.log(response.data.result)
        setLoading(false);
        console.log(chickenDetails[1].value[0])
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
              uri: `${chickenDetails[0].value[0].replace(
                "http://localhost:8000",
                BaseApi
              )}`,
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20, padding: 20}}>{chickenDetails[1].value[0]}</Text>
          <Accordion
            m="$5"
            width="100%"
            size="md"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
          >
            {chickenDetails.map((item, index1) => (
              <>
                {item.index !== "الصورة" && (
                  <>
                    <AccordionItem key={`${index1}`} value={`${index1}`}>
                      <AccordionHeader>
                        <AccordionTrigger>
                          {({ isExpanded }) => {
                            return (
                              <>
                              {isExpanded ? (
                                  <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                ) : (
                                  <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                )}
                                <AccordionTitleText style={{ textAlign: 'right' }}>
                                  {item.index}
                                </AccordionTitleText>
                                
                              </>
                            );
                          }}
                        </AccordionTrigger>
                      </AccordionHeader>
                      <AccordionContent>
                        <AccordionContentText>
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

export default ChickenDetailsWhite;
