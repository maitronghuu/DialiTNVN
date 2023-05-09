import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Lesson5 = () => {
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
            require('../assets/khihau.jpg')}>
        </Image>
      </View>
      <View style={styles.View}>
        <Text style={styles.textTenBai}>CHỦ ĐỀ 5. ĐẶC ĐIỂM KHÍ HẬU VIỆT NAM</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.textDeMuc}>
            1. Khí hậu nhiệt đới gió mùa ẩm:
          </Text>
          <Text style={styles.textDeMuc}>
            a. Tính chất nhiệt đới:
          </Text>
          <Text style={styles.textNoiDung}>
            - Nguyên nhân: Nằm trong vùng nội chí tuyến, mỗi năm có 2 lần mặt trời lên thiên đỉnh.
          </Text>

          <Text style={styles.textDeMuc}>
            b. Gió mùa :
          </Text>
          <Text style={styles.textDeMuc}>
            - Gió mùa mùa đông
          </Text>
          <Text style={styles.textNoiDung}>
            Nguồn gốc từ áp cao Xibia. Thời gian hoạt động từ tháng 11 - 4. Phạm vi hoạt động Miền Bắc. Hướng gió Đông Bắc. Kiểu thời tiết đặc trưng tháng 11, 12, 1: lạnh, khô; tháng 2, 3 lạnh, ẩm.
          </Text>
          <Text style={styles.textDeMuc}>
            - Gió mùa mùa hạ:
          </Text>
          <Text style={styles.textNoiDung}>
            + Áp cao Ấn Độ Dương: Thời gian hoạt động tháng 5-7. Phạm vi hoạt động cả nước. Hướng gió Tây Nam. Kiểu thời tiết đặc trưng: Nóng ẩm ở Nam Bộ và Tây Nguyên; nóng khô ở Bắc Trung Bộ.
          </Text>
          <Text style={styles.textNoiDung}>
            + Áp cao cận chí tuyến Nam: Thời gian hoạt động tháng 6-10. Phạm vi hoạt động cả nước. Hướng gió Tây Nam riêng Bắc Bộ có hướng Đông Nam. Kiểu thời tiết đặc trưng: Nóng và mưa nhiều ở cả miền Bắc và miền Nam
          </Text>

          <Text style={styles.textDeMuc}>
            c. Lượng mưa, độ ẩm lớn:
          </Text>
          <Text style={styles.textNoiDung}>
            - Lượng mưa trung bình năm cao: 1500 - 2000mm. Mưa phân bố không đều, sườn đón gió 3500 - 4000mm.
          </Text>
          <Text style={styles.textNoiDung}>
            - Độ ẩm không khí cao trên 80%.
          </Text>

          <Text style={styles.textDeMuc}>
            2. Các mùa khí hậu và thời tiết nước ta:
          </Text>
          <Text style={styles.textDeMuc}>
            a. Mùa gió đông bắc từ tháng 11 đến tháng 4(mùa đông).
          </Text>
          <Text style={styles.textNoiDung}>
            - Gió mùa đông bắc mạnh, xen kẽ là những đợt gió đông nam.
          </Text>
          <Text style={styles.textNoiDung}>
            - Miền Bắc chịu ảnh hưởng trực tiếp gió đông bắc tạo nên mùa đông lạnh, khô hanh (đầu mùa đông) và lạnh, mưa phùn ( cuối đông). Nhiệt độ trung bình nhiều tháng dưới 150C. Miền núi cao có thể xuất hiện sương muối, sương giá, mưa tuyết.
          </Text>
          <Text style={styles.textNoiDung}>
            - Ở miền Nam (Tây Nguyên và Nam Bộ) thời tiết nóng, khô kéo dài ổn định suốt mùa.
          </Text>
          <Text style={styles.textNoiDung}>
            - Riêng duyên hải Trung Bộ có mưa rất lớn vào các tháng cuối năm(tháng10,11,12).
          </Text>

          <Text style={styles.textDeMuc}>
            b. Mùa gió tây nam từ tháng 5 đến tháng 10(mùa hạ).
          </Text>
          <Text style={styles.textNoiDung}>
            - Gió tây nam là chủ yếu, xen kẽ là gió tín phong của nửa cầu Bắc thổi theo hướng đông nam.
          </Text>
          <Text style={styles.textNoiDung}>
            - Mùa gió tây nam tạo nên mùa hạ nóng ẩm có mưa to, dông bão diễn ra phổ biến trên cả nứơc. Riêng vùng Duyên hải Trung Bộ mùa này ít mưa (do chịu ảnh hưởng mạnh của gió Tây)
          </Text>
          <Text style={styles.textNoiDung}>
            - Thời tiết phổ biến là trời nhiều mây, có mưa rào và mưa dông.
          </Text>
          <Text style={styles.textNoiDung}>
            - Ngoài ra có các dạng thời tiết đặc biệt: gió Tây, mưa ngâu, bão.
          </Text>

          <Text style={styles.textDeMuc}>
            3. Những thuận lợi và khó khăn do khí hậu mang lại
          </Text>
          <Text style={styles.textDeMuc}>
            a. Thuận lợi
          </Text>
          <Text style={styles.textNoiDung}>
            - Giúp cho sinh vật nhiệt đới phát triển, cây cối quanh năm ra hoa kết quả.
          </Text>
          <Text style={styles.textNoiDung}>
            - Tăng vụ, xen canh, đa canh thuận lợi. (Ví dụ : Có thể trồng 2 đến 3 vụ lúa/năm với các giống thích hợp).
          </Text>
          <Text style={styles.textDeMuc}>
            b. Khó khăn
          </Text>
          <Text style={styles.textNoiDung}>
            - Rét lạnh, rét hại, sương giá, sương muối về mùa đông.
          </Text>
          <Text style={styles.textNoiDung}>
            - Nắng nóng, khô hạn cuối đông ở Nam Bộ và Tây Nguyên
          </Text>
          <Text style={styles.textNoiDung}>
            - Bão, mưa lũ, xói mòn, xâm thực đất, sâu bệnh phát triển.
          </Text>



        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Lesson5

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