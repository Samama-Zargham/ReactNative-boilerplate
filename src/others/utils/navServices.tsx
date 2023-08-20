// import { useDrawerStatus } from "@react-navigation/drawer";
import { DrawerActions, EventMapCore, useNavigation } from "@react-navigation/native";

let _navigator: { navigate: (arg0: any, arg1: any) => void; goBack: () => void; };

function setTopLevelNavigator(navigatorRef: any) {
    _navigator = navigatorRef;
}

function navigate(routeName: any, params?: any) {
    _navigator.navigate(routeName, params);
}

function goBack() {
    _navigator.goBack();
}

function toggleDrawer() {
    _navigator.dispatch(DrawerActions.toggleDrawer());
}





function addListener(event: 'tabPress' | 'focus' | 'blur', callback: any) {

    return _navigator.addListener(event, callback);
}


// ... Add other navigation functions as needed

export default {
    setTopLevelNavigator,
    navigate,
    goBack,
    toggleDrawer,
    addListener
};
