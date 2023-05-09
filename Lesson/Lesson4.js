import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Lesson4 = () => {
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
            require('../assets/diahinh.jpg')}>
        </Image>
      </View>
      <View style={styles.View}>
        <Text style={styles.textTenBai}>CHỦ ĐỀ 4. ĐẶC ĐIỂM ĐỊA HÌNH VIỆT NAM</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.textDeMuc}>
            I. ĐẶC ĐIỂM CHUNG CỦA ĐỊA HÌNH.
          </Text>
          <Text style={styles.textDeMuc}>
            1. Địa hình đồi núi chiếm phần lớn diện tích nhưng chủ yếu là đồi núi thấp:
          </Text>
          <Text style={styles.textNoiDung}>
            Đồi núi chiếm 3/4 diện tích đất đai, đồi núi thấp chiếm hơn 60%, núi cao khoảng 1% đồi núi cả nước, ĐB chiếm 1/4 đất đai.
          </Text>
          <Text style={styles.textDeMuc}>
            2. Cấu trúc địa hình nước ta khá đa dạng:
          </Text>
          <Text style={styles.textNoiDung}>
            - Song phần lớn các mỏ có trữ lượng vừa và nhỏ. Một số khoáng sản có trữ lượng lớn: than, dầu khí, apatit, đá vôi, sắt, …
          </Text>
          <Text style={styles.textDeMuc}>
            3.  Địa hình vùng nhiệt đới ẩm gió mùa:
          </Text>
          <Text style={styles.textNoiDung}>
            - Xâm thực mạnh ở miền núi.
          </Text>
          <Text style={styles.textNoiDung}>
            - Bồi tụ ở đồng bằng.
          </Text>
          <Text style={styles.textDeMuc}>
            II. CÁC KHU VỰC ĐỊA HÌNH ĐỒI NÚI.
          </Text>
          <Text style={styles.textDeMuc}>
            1. Vùng núi Đông Bắc:
          </Text>
          <Text style={styles.textNoiDung}>
            - Giới hạn: Vùng núi phía tả ngạn sông Hồng chủ yếu là đồi núi thấp.
          </Text>
          <Text style={styles.textNoiDung}>
            - Gồm cánh cung lớn mở rộng về phía bắc và đông chụm lại ở Tam Đảo.
          </Text>
          <Text style={styles.textNoiDung}>
            - Hướng nghiêng: cao ở Tây Bắc và thấp xuống Đông Nam.
          </Text>
          <Text style={styles.textDeMuc}>
            2. Vùng núi Tây Bắc:
          </Text>
          <Text style={styles.textNoiDung}>
            -  Giới hạn: Nằm giữa sông Hồng và sông Cả.
          </Text>
          <Text style={styles.textNoiDung}>
            - Địa hình cao nhất nước ta, dãy Hoàng Liên Sơn (Phanxipang 3143m). Các dãy núi hướng tây bắc - đông nam, xen giữa là cao nguyên đá vôi (cao nguyên Sơn La, Mộc Châu).
          </Text>
          <Text style={styles.textDeMuc}>
            3.  Vùng núi Bắc Trường Sơn:
          </Text>
          <Text style={styles.textNoiDung}>
            - Giới hạn: Từ sông Cả tới dãy núi Bạch Mã.
          </Text>
          <Text style={styles.textNoiDung}>
            - Hướng Tây Bắc - Đông Nam .
          </Text>
          <Text style={styles.textNoiDung}>
            - Các dãy núi song song, so le nhau dài nhất, cao ở hai đầu, thấp ở giữa.
          </Text>
          <Text style={styles.textNoiDung}>
            - Các vùng núi đá vôi (Quảng Bình, Quảng Trị).
          </Text>
          <Text style={styles.textDeMuc}>
            4.  Vùng núi Trường Sơn Nam:
          </Text>
          <Text style={styles.textNoiDung}>
            - Các khối núi Kontum, khối núi cực nam tây bắc, sườn tây thoải, sườn đông dốc đứng.
          </Text>
          <Text style={styles.textNoiDung}>
            - Các cao nguyên đất đỏ ba dan:  Playku, Đắk Lắk, Mơ Nông, Lâm Viên bề mặt bằng phẳng, độ cao xếp tầng 500 - 800 - 1000m.
          </Text>

          <Text style={styles.textDeMuc}>
            III. KHU VỰC ĐỊA HÌNH ĐỒNG BẰNG.
          </Text>
          <Text style={styles.textDeMuc}>
            1. Đồng bằng châu thổ (ĐBSH, ĐBSCL):
          </Text>
          <Text style={styles.textDeMuc}>
            a. Đồng bằng sông Hồng:
          </Text>
          <Text style={styles.textNoiDung}>
            - Đồng bằng phù sa của hệ thống sông Hồng và Thái Bình, được khai phá từ lâu, nay đã biến đổi nhiều.
          </Text>
          <Text style={styles.textNoiDung}>
            - Diện tích: 15 nghìn km2.
          </Text>
          <Text style={styles.textNoiDung}>
            - Địa hình: Cao ở rìa T, TB và thấp dần về phía biển, chia cắt thành nhiều ô nhỏ; Nhưng nhìn chung khá bằng phẳng.
          </Text>
          <Text style={styles.textNoiDung}>
            - Đất: Trong đê đất không được bôì đắp phù sa hàng năm, gồm các ruộng bậc thang bạc mầu và các ô trũng ngập nước; ngoài đê được bồi đắp phù sa hàng năm.
          </Text>
          <Text style={styles.textNoiDung}>
            -Thuận lợi: Đất phù sa mầu mỡ phì nhiêu thuận lợi cho nông nghiệp phát triển, đặc biệt trồng lúa và hình thành các vùng chuyên canh lương thực thực phẩm.
          </Text>
          <Text style={styles.textNoiDung}>
            - Thuận lợi: Đất phù sa mầu mỡ phì nhiêu thuận lợi cho nông nghiệp phát triển, đặc biệt trồng lúa và hình thành các vùng chuyên canh lương thực thực phẩm.
          </Text>
          <Text style={styles.textNoiDung}>
            - Khó khăn: Đất bị bạc mầu; đất trong đê không được bồi đắp phù sa hàng năm, nên phải sử dụng đất hợp lí đi đôi với bảo vệ và cải tạo đất.
          </Text>
          <Text style={styles.textDeMuc}>
            b. Đồng bằng sông Cửu Long:
          </Text>
          <Text style={styles.textNoiDung}>
            - Diện tích: 40 nghìn km2.
          </Text>
          <Text style={styles.textNoiDung}>
            - Do phù sa của HT sông Cửu Long bồi đắp, mới được khai thác sau ĐBSH.
          </Text>
          <Text style={styles.textNoiDung}>
            -Địa hình: Thấp và khá bằng phẳng.
          </Text>
          <Text style={styles.textNoiDung}>
            - Đất: Do không có đê, nhưng mạng lưới kênh rạch chằng chịt, nên vào mùa lũ bị ngập nước, mùa cạn nước triều lấn mạnh vào đồng bằng.
          </Text>
          <Text style={styles.textNoiDung}>
            - Thuận lợi: Đất phù sa mầu mỡ phì nhiêu luôn được bồi hàng năm thuận lợi cho nông nghiệp phát triển, đặc biệt trồng lúa và hình thành các vùng chuyên canh lương thực thực phẩm.
          </Text>
          <Text style={styles.textNoiDung}>
            - Khó khăn: Đất bị nhiễm phèn, mặn nhiều, bạc mầu, nên phải sử dụng đất hợp lí đi đôi với thau chua rửa mặn và cải tạo tự nhiên ở đồng bằng.
          </Text>
          <Text style={styles.textDeMuc}>
            2. Đồng bằng ven biển:
          </Text>
          <Text style={styles.textNoiDung}>
            - Diện tích: 15 nghìn km2
          </Text>
          <Text style={styles.textNoiDung}>
            - Đồng bằng do phù sa sông biển bồi đắp.
          </Text>
          <Text style={styles.textNoiDung}>
            - Địa hình: Hẹp ngang và bị chia cắt thành từng ô nhỏ (Chỉ có ĐB Thanh Hoá, Nghệ An, Quảng Nam, Phú Yên tương đối rộng).
          </Text>
          <Text style={styles.textNoiDung}>
            - Đất: Đất phù sa có nhiều cát (Phần giáp biển có cồn cát và đầm phá, tiếp theo là đất thấp trũng, trong cùng đã bồi tụ thnàh ĐB).
          </Text>
          <Text style={styles.textNoiDung}>
            - Thuận lợi: Trồng lương thực, hoa mầu và các cây công nghiệp ngắn ngày
          </Text>
          <Text style={styles.textNoiDung}>
            - Khó khăn: Thiếu nước, nạn cát bay.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Lesson4

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