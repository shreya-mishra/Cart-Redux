import React from "react";
import { Text, View } from "react-native";
import CheckoutScreenStyle from "./styles";
import { useSelector } from "react-redux";

const CheckoutScreen = ({ route }) => {
  const { quantity, total } = useSelector((state) => state);

  return (
    <View style={CheckoutScreenStyle.checkoutContainer}>
      <View style={CheckoutScreenStyle.totalItems}>
        <Text style={CheckoutScreenStyle.totalItemValue}>{quantity} Items</Text>
      </View>
      <View style={CheckoutScreenStyle.totalView}>
        <Text style={CheckoutScreenStyle.totalItemValue}>
          Total:${total.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default CheckoutScreen;
