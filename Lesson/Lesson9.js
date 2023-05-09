import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Lesson9 = () => {
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
            require('../assets/diahinh.jpg')}>
        </Image>
      </View>





      <View style={styles.View}>
        <Text style={styles.textTenBai}>CHỦ ĐỀ 9. CÁC MIỀN TỰ NHIÊN VIỆT NAM</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.textDeMuc}>
            1. Miền Bắc và đồng bằng Bắc Bộ:
          </Text>
          <Text style={styles.textNoiDung}>
            - Vị trí: Tả ngạn sông Hồng.
          </Text>
          <Text style={styles.textNoiDung}>
            - Địa hình: đồi núi thấp, huớng chính là vòng cung, hướng nghiêng địa hình là Tây Bắc – Đông Nam.
          </Text>

          <Text style={styles.textNoiDung}>
            - Khí hậu: Mùa đông lạnh, do địa hình hứng gió mùa Đông Bắc.
          </Text>
          <Text style={styles.textNoiDung}>
            - Sông ngòi: Theo hướng chung của địa hình và có vai trò rất quan trọng trong hình thành nên đồng bằng sông Hồng.
          </Text>
          <Text style={styles.textNoiDung}>
            - Thổ nhưỡng sinh vật: Khí hậu đã làm hạ thấp đai cao cận nhiệt đới, nên có nhiều sinh vật của phương Bắc và sự thay đổi cảnh quan thiên nhiên theo mùa.
          </Text>
          <Text style={styles.textNoiDung}>
            - Khoáng sản: Giầu than, sắt, thiếc, vonfram, đá vôi, bể dầu khí sông Hồng.
          </Text>
          <Text style={styles.textNoiDung}>
            - Khó khăn: Sự bất thường của nhịp điệu mùa khí hậu, của dòng chảy sông ngòi…là trở ngại lớn.
          </Text>

          <Text style={styles.textDeMuc}>
            2. Miền Tây Bắc và Bắc Trung Bộ:
          </Text>
          <Text style={styles.textNoiDung}>
            - Vị trí: Từ hữu ngạn sông Hồng tới dãy núi Bạch Mã.
          </Text>
          <Text style={styles.textNoiDung}>
            - Địa hình: cao (Đây là miền núi cao VN có đủ 3 đai cao), các dãy núi xen kẽ các dòng sông theo hướng TB-ĐN, đồng bằng hẹp.
          </Text>
          <Text style={styles.textNoiDung}>
            - Khí hậu: Giảm sút gió mùa Đông Bắc về phía Tây và Nam, tính nhiệt đới tăng dần;
          </Text>
          <Text style={styles.textNoiDung}>
            - Sông ngòi: dốc có giá trị thuỷ điện cao.
          </Text>
          <Text style={styles.textNoiDung}>
            - Thổ nhưỡng và sinh vật: Rừng chiếm tỉ lệ nhiều, chỉ sau Tây Nguyên.
          </Text>
          <Text style={styles.textNoiDung}>
            - Khoáng sản: Thiếc, sắt, crôm, titan, apatít.
          </Text>
          <Text style={styles.textNoiDung}>
            - Khó khăn: Bão, lũ quét, khô hạn, gío Tây khô nóng.
          </Text>

          <Text style={styles.textDeMuc}>
            3. Miền Nam Trung Bộ và Nam Bộ:
          </Text>
          <Text style={styles.textNoiDung}>
            - Vị trí: Từ dãy núi Bạch Mã trở vào Nam.
          </Text>
          <Text style={styles.textNoiDung}>
            - Địa hình: Phức tạp (Gồm các khối núi cổ Kotum, các bề mặt sơn nguyên bóc mòn và bề mặt cao nguyên ba dan ở cực Nam Trung Bộ và Tây Nguyên. Hướng vòng cung, sườn Đông dốc mạnh sườn Tây thoải. Đồng bằng châu thổ ở Nam Bộ mở rộng và đồng bằng ven biển hẹp.
          </Text>
          <Text style={styles.textNoiDung}>
            - Khí hậu: Cận xích đạo gió mùa, nền nhiệt cao (TB từ 27-30 0C), biên độ dao động nhiệt nhỏ, chia 2 mùa (Mùa mưa và mùa khô rõ rệt);
          </Text>
          <Text style={styles.textNoiDung}>
            - Sông ngòi: nhiều nước phụ thuộc vào mùa khí hậu.
          </Text>
          <Text style={styles.textNoiDung}>
            - Thổ nhưỡng và sinh vật: Miền núi và cao nguyên phát triển rừng nhiệt đới chân núi đến 1000 m, thực vật nhiệt đới xích đạo ưu thế (Luồng di cư Inđônêxia-Malaixia, họ Dầu) cây công nghiệp, động vật đa dạng như voi, hổ, bò rừng. Miền đồng bằng phát triển nông nghiệp,...
          </Text>
          <Text style={styles.textNoiDung}>
            - Khoáng sản: Dầu mỏ có trữ lượng lớn ở vùng thềm lục địa, bô xít ở Tây Nguyên
          </Text>
          <Text style={styles.textNoiDung}>
            - Khó khăn: Đất bị rửa trôi ở vùng đồi núi, lũ lụt ở đồng bằng, thiếu nước vào mùa khô...
          </Text>



        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Lesson9

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