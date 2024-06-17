import LoginComponent from "./src/components/authentication/Login";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MenuComponent from "./src/components/menu/Menu";
import PoultryComponent from "./src/components/poultry/PoultryProduction";
import RentalComponent from "./src/components/rent/farmRental";
import RentForm from "./src/components/rent/rentForm";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import Theme from "./src/styles/theme";
import ComingSoon from "./src/temp/comingSoon";
import AnimalFatteningList from "./src/components/poultry/animalFatteningList";
import AnimalDetails from "./src/components/poultry/animalDetails";
import UploadDiseaseChicken from "./src/components/uploadDiseaseChicken/uploadDiseaseChicken";
import DiseaseList from "./src/components/diseaseList/diseaseList";
import AnimalMilkingList from "./src/components/poultry/animalMlikingList";
import ChickenList from "./src/components/chicken/chickenList";
import ChickenWhiteList from "./src/components/chicken/chickenWhiteList";
import ChickenDetailsWhite from "./src/components/chicken/chickenDetails";
import ChickenFatList from "./src/components/chicken/chickenFatList";
import ChickenDetailsFat from "./src/components/chicken/chickenDetailsFat";
import { LogBox } from "react-native";
export default function App() {
  const Stack = createStackNavigator();
  //remove this when developing again
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={LoginComponent} />
            <Stack.Screen name="Menu" component={MenuComponent} />
            <Stack.Screen name="Animal" component={PoultryComponent} />
            <Stack.Screen name="Rental" component={RentalComponent} />
            <Stack.Screen name="Form" component={RentForm} />
            <Stack.Screen name="Soon" component={ComingSoon} />
            <Stack.Screen
              name="animalFatteningList"
              component={AnimalFatteningList}
            />
            <Stack.Screen name="animalDetails" component={AnimalDetails} />
            <Stack.Screen
              name="uploadDiseaseChicken"
              component={UploadDiseaseChicken}
            />
            <Stack.Screen name="diseaseList" component={DiseaseList} />
            <Stack.Screen name="animalMilking" component={AnimalMilkingList} />
            <Stack.Screen name="chickenList" component={ChickenList} />
            <Stack.Screen
              name="chickenWhiteList"
              component={ChickenWhiteList}
            />
            <Stack.Screen
              name="chickenDetailsWhite"
              component={ChickenDetailsWhite}
            />
            <Stack.Screen name="chickenFatList" component={ChickenFatList} />
            <Stack.Screen
              name="chickenDetailsFat"
              component={ChickenDetailsFat}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </>
  );
}
