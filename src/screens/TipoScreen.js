import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { selectTipo } from "../actions/Tipo.action";

const TipoScreen = ({ navigation }) => {
    const tipos = useSelector(state => state.tipos.categories);
    const dispatch = useDispatch();

    const renderGridItem = (itemData) => {
        <CategoryGridTitle
            item={itemData.item}
            onSelected={hanlderSelectedTipo} />
    }

    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderGridItem}
            numColumns={2} />
    )
}