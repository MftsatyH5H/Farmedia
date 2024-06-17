import { SafeAreaView } from "react-native";
import { styles, buttons } from "../../styles/styles";
import {
  Text,
  FlatList,
  Box,
  View,
  Button,
  ButtonText,

} from "@gluestack-ui/themed";
import NavBar from "../navBar/navBar";
import ChickenApi from "../../api/chicken.api";
import { useEffect, useState } from "react";
import Global from "../../temp/globalUrl";
const ChickenWhiteList = ({ navigation }) => {
  const chickenApi = new ChickenApi(Global.getGlobalVariable());
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    chickenApi
      .getChickenEgg()
      .then((response) => {
        console.log(response.data.result);
        setListData(response.data.result);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <NavBar text={"دواجن بياض"}></NavBar>
      {loading === true ? <Text>Loading</Text> : null}
      {loading === false ? (
        <SafeAreaView style={{backgroundColor: '#F1EEEE' , height: '100%'}}>
        <View style={styles.contentContainer}>
        <View style={styles.sectionContainer}>
        <Box style={{width: 320, backgroundColor: 'white' }}>
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <>
              <View style={styles.tableContainer}>
                <Box
                  borderBottomColor="black"
                  width={320}
                  borderWidth={'$1'}
                  justifyContent="center"
                >
                  <View style={styles.tableContainer}>
                  <Button onPress={() => navigation.navigate('chickenDetailsWhite', { id: item.ID })} style={{backgroundColor: 'white', width: 300}}>
                    <ButtonText style={{color: 'black'}}>{item.NAME}</ButtonText>
                  </Button>
                  </View>
                </Box>
              </View>

            </>
          )}
          keyExtractor={(item) => item.ID}
        />
        </Box>
        </View>
        </View>
        </SafeAreaView>
      ) : null}
      
    </>
  );
};

export default ChickenWhiteList;
