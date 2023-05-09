import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { ref, set, onValue } from "firebase/database";
import { db } from '../components/config';
import { SafeAreaView } from 'react-native-safe-area-context';

const DictionaryScreen = () => {
    const [tu, setTu] = useState('');
    const [nghia, setNghia] = useState('');
    function create() {
        set(ref(db, 'users/' + tu), {
            tu: tu,
            nghia: nghia
        }).then(() => {
            // Data saved successfully!
            alert('Dữ liệu đã được cập nhật');
        })
            .catch((error) => {
                // The write failed...
                alert(error);
            });
    };
    function readData() {
        const starCountRef = ref(db, 'users/' + tu);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setNghia(data.nghia);
        });
    };
    return (

        <View style={styles.container}>

            <View >
                <Text style={styles.viewtext} >TRA CỨU THUẬT NGỮ ĐỊA LÍ</Text>
            </View>
            <TextInput value={tu} onChangeText={(tu) => { setTu(tu) }} placeholder="Từ khoá" style={styles.texboxtukhoa}></TextInput>
            <View style={styles.scrollView}>
                <TextInput value={nghia} onChangeText={(nghia) => { setNghia(nghia) }} placeholder="Định nghĩa" style={styles.texboxnghia}></TextInput>
            </View>
            <View style={styles.view}>
                <View style={styles.viewbt} >
                    <Button title='Cập nhật' onPress={create} > </Button>
                </View>
                <View style={styles.viewbt}>
                    <Button title='Tra cứu từ' onPress={readData} > </Button>
                </View>
            </View>
        </View>



    )
}

export default DictionaryScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 2,

        alignItems: 'center',
        justifyContent: 'center',
    },
    texboxtukhoa: {

        fontSize: 15,
        color: "blue",
        padding: 12,
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 5,
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
    },
    texboxnghia: {

        fontSize: 15,
        color: "#FF00FF",
        padding: 12,
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 5,
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
    },
    viewtext: {
        marginTop: 200,
        padding: 20,
        fontSize: 20,
        color: "red",

    },
    view: {
        padding: 10,
        flexDirection: "row",

        borderRadius: 10,
        marginBottom: 300,


    },
    viewbt: {
        padding: 5,
        borderRadius: 20,
        marginBottom: 10,

    },
    scrollView: {
        padding: 3,
        marginVertical: 5,
        marginBottom: 50,


    },
})