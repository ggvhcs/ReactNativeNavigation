import React from "react";
import { Button, View, Text } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="Go About Page" onPress={() => navigate("About")} />
      </View>
    );
  }
}
