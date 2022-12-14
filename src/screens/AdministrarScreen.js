import React from "react";
import { FlatList } from "react-native";
import Item from "../components/Item";

import { useSelector, useDispatch, connect } from "react-redux";
import { selectTipo } from "../actions/Tipo.action";

const CrearScreen = ({ navigation }) => {
  const tiposTarea = useSelector((state) => state.tipos.imagen);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectTipo(item.id));
    navigation.navigate("CrearScreen", {
      name: item.title,
    });
  };

  const renderItem = ({ item }) => (
    <Item item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={tiposTarea}
      keyExtractor={(item) => item.id}
      renderOneItem={renderItem}
      numColumns={2}
    />
  );
};

export default connect()(CrearScreen);

