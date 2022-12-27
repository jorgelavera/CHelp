import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from "react-native";
import { COLORS } from "../constants";
import { useDispatch } from "react-redux";
import DeviceLocation from "../components/LocationSelector";

const NewPlaceScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();

    useEffect(() => {
    }, [route]);

    const handleSave = () => {
        dispatch(DeviceLocation());
        navigation.navigate("NewPlaceScreen");
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Ubicación</Text>
                <Text >{DeviceLocation()}</Text>
                <Button
                    title="Grabar direccion"
                    color={COLORS.secundario}
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
        marginTop: 26,
        backgroundColor: COLORS.secundario,
        width: "100%",
    },
    input: {
        borderBottomColor: COLORS.principal,
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
});

export default NewPlaceScreen;