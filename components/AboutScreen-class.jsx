import React from "react";
import { Button, View, Text } from "react-native";

export default class AboutScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>About Screen</Text>
        <Button title="Go Home Page" onPress={() => navigate("Home")} />
      </View>
    );
  }
}
