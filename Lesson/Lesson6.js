import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Lesson6 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Image
          style={{
            height: 250,
            width: "100%",
            marginTop: 5,
            resizeMode: "contain"
          }} source={
            require('../assets/song.jpg')}>
        </Image>
      </View>
      <View style={styles.View}>
        <Text style={styles.textTenBai}>CHỦ ĐỀ 6. ĐẶC ĐIỂM SÔNG NGÒI VIỆT NAM</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.textDeMuc}>
            1. Đặc điểm chung:
          </Text>
          <Text style={styles.textDeMuc}>
            a. Nước ta có mạng lưới sông ngòi dày đặc, phân bố rộng khắp trên cả nước.
          </Text>
          <Text style={styles.textNoiDung}>
            Nước ta có tới 2360 con sông (từ 10 km trở lên), trong đó 93% là sông nhỏ và ngắn. Các sông lớn sông Hồng, sông Mê Công (Cửu Long). Chỉ có trung và hạ lưu chảy qua lãnh thổ nước ta.
          </Text>

          <Text style={styles.textDeMuc}>
            b. Sông ngòi nước ta chảy theo hai hướng chính là tây bắc-đông nam và vòng cung
          </Text>
          <Text style={styles.textNoiDung}>
            - Tây bắc-đông nam:sông Hồng, sông Đà, S.Mã. S.Cả, S.Ba, S.Tiền, sông Hậu.
          </Text>
          <Text style={styles.textNoiDung}>
            - Vòng cung: sông Lô, sông Gâm, sông Cầu, sông Thương, sông Lục Nam.
            Ngoài ra còn có các hướng khác: Sông Kì Cùng(ĐN-TB), Sông Đồng Nai ( ĐB-TN). Sông Xê-xan (Đ-T)

          </Text>
          <Text style={styles.textDeMuc}>
            c. Chế độ nước của sông ngòi nước ta có hai mùa rõ rệt
          </Text>
          <Text style={styles.textNoiDung}>
            Mùa lũ và mùa cạn khác nhau rõ rệt. Mùa lũ chiếm 70-80% lượng nước cả năm.
          </Text>
          <Text style={styles.textDeMuc}>
            d. Sông ngòi nước ta có lượng phù sa lớn
          </Text>
          <Text style={styles.textNoiDung}>
            Trung bình 1 m3 có 223g cát bùn và các chất hòa tan khác nhau. Tổng lượng phù sa trôi theo dòng nước lên tới 200 triệu tấn/năm, trong đó Sông Hồng 120 triệu tấn/năm (chiếm 60%), sông Cửu Long 70 triệu tấn/năm (chiếm 35%).
          </Text>
          <Text style={styles.textDeMuc}>
            2. Các hệ thống sông lớn ở nước ta
          </Text>
          <Text style={styles.textDeMuc}>
            a. Sông ngòi Bắc Bộ.
          </Text>
          <Text style={styles.textNoiDung}>
            - Mạng lưới sông dạng nan quạt.
          </Text>
          <Text style={styles.textNoiDung}>
            - Chế độ nước rất thất thường (mùa lũ kéo dài từ tháng 6 -10)
          </Text>
          <Text style={styles.textNoiDung}>
            - Hệ thống sông lớn: Sông Hồng (hệ thống sông chính), sông Thái Bình, Kì Cùng-Bằng Giang, S. Mã.
          </Text>
          <Text style={styles.textDeMuc}>
            b. Sông ngòi Trung Bộ:
          </Text>
          <Text style={styles.textNoiDung}>
            -Sông ngòi ngắn, dốc
          </Text>
          <Text style={styles.textNoiDung}>
            -Mùa lũ vào thu đông (từ tháng 9 đến tháng 12). Lũ lên nhanh, đột ngột.
          </Text>
          <Text style={styles.textNoiDung}>
            -Sông Trung Bộ: Sông Cả (Sông Lam), sông Thu Bồn.
          </Text>
          <Text style={styles.textDeMuc}>
            c. Sông ngòi Nam Bộ.
          </Text>
          <Text style={styles.textNoiDung}>
            - Sông ngòi Nam Bộ có chế độ nước khá điều hoà; mùa lũ từ tháng 7 – tháng 11, ảnh hưởng của thuỷ triều lớn (thường bị triều cường).
          </Text>
          <Text style={styles.textNoiDung}>
            - Hệ thông lớn: Sông Đồng Nai, Sông Mê Công.
          </Text>
          <Text style={styles.textDeMuc}>
            3. Giá trị kinh tế và bảo vệ sự trong sạch của các dòng sông
          </Text>
          <Text style={styles.textNoiDung}>
            Cung cấp nước cho sinh hoạt và sản xuất nông nghiệp, công nghiệp, dịch vụ; sản xuất điện, cung cấp thủy sản, bồi đắp phù sa, du lịch, giao thông vận tải….
          </Text>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Lesson6

const styles = StyleSheet.create({
  View: {
    padding: 10,
    marginTop: 40,

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