import React, { useState, useEffect } from "react";
import { Text, Button, View, TouchableOpacity, TextInput } from "react-native";
import homeScreenStyle from "./styles";
import { useDispatch } from "react-redux";
import { data } from "../../assets/constants/data";
import { myCart, addQty, subQty } from "../../redux/Action";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.newCart);

  const { total } = useSelector((state) => state);

  useEffect(() => {
    dispatch(myCart(data.map((item) => ({ ...item, qty: 0 }))));
  }, []);

  return (
    <View style={homeScreenStyle.container}>
      <View>
        <Text style={homeScreenStyle.total}>Total: {total.toFixed(2)}</Text>
      </View>
      {cart.map((item) => (
        <View key={item.id} style={homeScreenStyle.block1}>
          <Text style={homeScreenStyle.total}>{item.name}</Text>
          <Text style={homeScreenStyle.total}>{item.cost}</Text>
          <View style={homeScreenStyle.updatePriceContainer}>
            <TouchableOpacity onPress={() => dispatch(subQty(item))}>
              <View style={homeScreenStyle.decrement}>
                <Text style={homeScreenStyle.sub}>-</Text>
              </View>
            </TouchableOpacity>

            <TextInput style={homeScreenStyle.valueInput} value={item.qty} />

            <TouchableOpacity onPress={() => dispatch(addQty(item))}>
              <View style={homeScreenStyle.decrement}>
                <Text style={homeScreenStyle.add}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
        <View style={homeScreenStyle.checkoutButton}>
          <Text style={homeScreenStyle.textColor}>Checkout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
