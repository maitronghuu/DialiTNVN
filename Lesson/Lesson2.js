import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
const Lesson2 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Image
                    style={{
                        height: 250,
                        width: "100%",
                        padding: 10,
                        marginTop: 5,
                        resizeMode: "contain"
                    }} source={
                        require('../assets/hinhthe.jpg')}>
                </Image>
            </View>

            <View style={styles.View}>
                <Text style={styles.textTenBai}>CHỦ ĐỀ 2. LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN LÃNH THỔ VIỆT NAM</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View>
                    <Text style={styles.textDeMuc}>
                        1. Giai đoạn Tiền Cambri:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Tiền Cambri cách đây 570 triệu năm.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Đại bộ phận nước ta còn là biển.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Các mảng nền cổ tạo thành các  điểm tựa cho sự phát triển lãnh thổ sau này như: Việt Bắc, Sông Mã, KonTum.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Sinh vật nghèo nàn, bầu khí quyển rất ít khí ôxi.
                    </Text>
                    <Text style={styles.textDeMuc}>
                        2. Giai đoạn Cổ kiến tạo:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Cổ kiến tạo (cách  đây 65 triệu năm kéo dài 505 triệu   năm)
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Có nhiều cuộc tạo núi lớn; phần lớn lãnh thổ đã trở thành đất liền.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Tạo thành nhiều núi đá vôi lớn và than đá ở miền Bắc.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Sinh vật phát triển mạnh- thời kỳ cực thịnh  của bò sát khủng long và cây hạt trần.
                    </Text>
                    <Text style={styles.textDeMuc}>
                        3. Giai đoạn Tân kiến tạo:
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Tân kiến tạo: (cách đây 25 triệu năm)
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Nâng cao địa hình; núi, sông trẻ lại. Các cao nguyên badan, đồng bằng phù sa trẻ hình thành.
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Mở rộng biển Đông và tạo các mỏ dầu khí, bôxít, than bùn…
                    </Text>
                    <Text style={styles.textNoiDung}>
                        - Sinh vật phát triển phong phú, hoàn thiện (cây hạt kín, lớp thú). Loài người xuất hiện.
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Lesson2

const styles = StyleSheet.create({
    View: {
        padding: 10,


    },
    textTenBai: {
        color: "#FFFFFF",
        backgroundColor: "#0000FF",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: "auto",
    },
    textDeMuc: {
        marginLeft: 10,
        fontSize: 20,
        color: "#FF0000",

    },
    textNoiDung: {
        marginLeft: 10,
        fontSize: 20,
        color: "#0000FF",
        justifyContent: 'center'

    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        padding: 3,
        marginVertical: 5,
        marginBottom: 10,
    },
})