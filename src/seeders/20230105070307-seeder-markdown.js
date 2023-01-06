"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("markdowns", [
      {
        contentHtml: `<p><strong>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</strong></p>
        <ul>
        <li>Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng</li>
        <li>Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương</li>
        <li>Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương</li>
        <li>Bác sĩ Nội trú chuyên ngành Tai Mũi Họng</li>
        <li>Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng</li>
        </ul>
        <p><strong>Khám &amp; điều trị</strong></p>
        <ul>
        <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn</li>
        <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em</li>
        <li>Nội soi Tai Mũi Họng</li>
        <li>Thực hiện các qui trình kỹ thuật Tai Mũi Họng</li>
        </ul>
        <p><strong>Các bệnh về tai</strong></p>
        <ul>
        <li>Ù tai, nghe kém, điếc đột ngột</li>
        <li>Chẩy mủ tai, viêm tai giữa cấp, mạn</li>
        <li>Vá màng nhĩ nội soi</li>
        <li>Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài</li>
        </ul>
        <p><strong>Các bệnh mũi xoang</strong></p>
        <ul>
        <li>Viêm mũi xoang dị ứng, viêm mũi vận mạch</li>
        <li>Viêm mũi ngạt tắc mũi mạn tính</li>
        <li>Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li>
        <li>Nấm mũi xoang</li>
        <li>Đau đầu mạn tính do mũi xoang…</li>
        </ul>
        <p><strong>Các bệnh về họng thanh quản</strong></p>
        <ul>
        <li>Ở trẻ em viêm VA, viêm mũi họng mạn tính</li>
        <li>Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)</li>
        <li>Viêm amiđan cấp, mạn</li>
        <li>Nạo V.A</li>
        <li>Cắt Amidan</li>
        </ul>
        <p><img src="https://otakugo.net/wp-content/uploads/2022/06/one-piece-chap-1054-spoiler-ke-hoach-cua-ryokugyu.jpg?raw=true" alt="img"></p>
        `,
        contentMarkdown: `**Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An**
        * Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng
        * Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
        * Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương
        * Bác sĩ Nội trú chuyên ngành Tai Mũi Họng
        * Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng
        
        **Khám & điều trị**
        * Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn
        * Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em
        * Nội soi Tai Mũi Họng
        * Thực hiện các qui trình kỹ thuật Tai Mũi Họng
        
        **Các bệnh về tai**
        
        * Ù tai, nghe kém, điếc đột ngột
        * Chẩy mủ tai, viêm tai giữa cấp, mạn
        * Vá màng nhĩ nội soi
        * Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài
        
        **Các bệnh mũi xoang**
        
        * Viêm mũi xoang dị ứng, viêm mũi vận mạch
        * Viêm mũi ngạt tắc mũi mạn tính
        * Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang
        * Nấm mũi xoang
        * Đau đầu mạn tính do mũi xoang…
        
        **Các bệnh về họng thanh quản**
        * Ở trẻ em viêm VA, viêm mũi họng mạn tính
        * Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)
        * Viêm amiđan cấp, mạn
        * Nạo V.A
        * Cắt Amidan
        
        ![img](https://otakugo.net/wp-content/uploads/2022/06/one-piece-chap-1054-spoiler-ke-hoach-cua-ryokugyu.jpg?raw=true)
        `,
        description: `Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An
        Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
        Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương
        Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em`,
        doctorId: 1,
        specialtyId: 0,
        clinicId: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h3>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h3>
        <ul>
        <li>Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng</li>
        <li>Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương</li>
        <li>Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương</li>
        <li>Bác sĩ Nội trú chuyên ngành Tai Mũi Họng</li>
        <li>Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng</li>
        </ul>
        <h3>Khám &amp; điều trị</h3>
        <ul>
        <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn</li>
        <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em</li>
        <li>Nội soi Tai Mũi Họng</li>
        <li>Thực hiện các qui trình kỹ thuật Tai Mũi Họng</li>
        <li>Các bệnh về tai</li>
        <li></li>
        <li>Ù tai, nghe kém, điếc đột ngột</li>
        <li>Chẩy mủ tai, viêm tai giữa cấp, mạn</li>
        <li>Vá màng nhĩ nội soi</li>
        <li>Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài</li>
        <li>Các bệnh mũi xoang</li>
        <li></li>
        <li>Viêm mũi xoang dị ứng, viêm mũi vận mạch</li>
        <li>Viêm mũi ngạt tắc mũi mạn tính</li>
        <li>Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li>
        <li>Nấm mũi xoang</li>
        <li>Đau đầu mạn tính do mũi xoang…</li>
        <li>Các bệnh về họng thanh quản</li>
        <li></li>
        <li>Ở trẻ em viêm VA, viêm mũi họng mạn tính</li>
        <li>Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)</li>
        <li>Viêm amiđan cấp, mạn</li>
        <li>Nạo V.A</li>
        <li>Cắt Amidan</li>
        </ul>
        `,
        contentMarkdown: `
        ### Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An
        
        * Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng
        * Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
        * Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương
        * Bác sĩ Nội trú chuyên ngành Tai Mũi Họng
        * Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng
        
        
        ### Khám & điều trị
        
        * Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn
        * Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em
        * Nội soi Tai Mũi Họng
        * Thực hiện các qui trình kỹ thuật Tai Mũi Họng
        * Các bệnh về tai
        * 
        * Ù tai, nghe kém, điếc đột ngột
        * Chẩy mủ tai, viêm tai giữa cấp, mạn
        * Vá màng nhĩ nội soi
        * Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài
        * Các bệnh mũi xoang
        * 
        * Viêm mũi xoang dị ứng, viêm mũi vận mạch
        * Viêm mũi ngạt tắc mũi mạn tính
        * Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang
        * Nấm mũi xoang
        * Đau đầu mạn tính do mũi xoang…
        * Các bệnh về họng thanh quản
        * 
        * Ở trẻ em viêm VA, viêm mũi họng mạn tính
        * Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)
        * Viêm amiđan cấp, mạn
        * Nạo V.A
        * Cắt Amidan`,
        description: "Phòng khám Chuyên khoa Da Liễu",
        doctorId: 2,
        specialtyId: 0,
        clinicId: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h3>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h3>
        <ul>
        <li>Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng</li>
        <li>Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương</li>
        <li>Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương</li>
        <li>Bác sĩ Nội trú chuyên ngành Tai Mũi Họng</li>
        <li>Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng</li>
        </ul>
        <h3>Khám &amp; điều trị</h3>
        <ul>
        <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn</li>
        <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em</li>
        <li>Nội soi Tai Mũi Họng</li>
        <li>Thực hiện các qui trình kỹ thuật Tai Mũi Họng</li>
        </ul>
        <h3>Các bệnh về tai</h3>
        <ul>
        <li>Ù tai, nghe kém, điếc đột ngột</li>
        <li>Chẩy mủ tai, viêm tai giữa cấp, mạn</li>
        <li>Vá màng nhĩ nội soi</li>
        <li>Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài</li>
        </ul>
        <h3>Các bệnh mũi xoang</h3>
        <ul>
        <li>Viêm mũi xoang dị ứng, viêm mũi vận mạch</li>
        <li>Viêm mũi ngạt tắc mũi mạn tính</li>
        <li>Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li>
        <li>Nấm mũi xoang</li>
        <li>Đau đầu mạn tính do mũi xoang…</li>
        </ul>
        <h3>Các bệnh về họng thanh quản</h3>
        <ul>
        <li>Ở trẻ em viêm VA, viêm mũi họng mạn tính</li>
        <li>Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)</li>
        <li>Viêm amiđan cấp, mạn</li>
        <li>Nạo V.A</li>
        <li>Cắt Amidan</li>
        </ul>
        `,
        contentMarkdown: `
        ### Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An
        
        * Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng
        * Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
        * Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương
        * Bác sĩ Nội trú chuyên ngành Tai Mũi Họng
        * Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng
        
        
        ### Khám & điều trị
        
        * Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn
        * Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em
        * Nội soi Tai Mũi Họng
        * Thực hiện các qui trình kỹ thuật Tai Mũi Họng
        
        
        ### Các bệnh về tai
        
        
        * Ù tai, nghe kém, điếc đột ngột
        * Chẩy mủ tai, viêm tai giữa cấp, mạn
        * Vá màng nhĩ nội soi
        * Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài
        
        
        ### Các bệnh mũi xoang
        
        
        
        * Viêm mũi xoang dị ứng, viêm mũi vận mạch
        * Viêm mũi ngạt tắc mũi mạn tính
        * Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang
        * Nấm mũi xoang
        * Đau đầu mạn tính do mũi xoang…
        
        
        ### Các bệnh về họng thanh quản
        
        
        * Ở trẻ em viêm VA, viêm mũi họng mạn tính
        * Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)
        * Viêm amiđan cấp, mạn
        * Nạo V.A
        * Cắt Amidan`,
        description:
          "Lưu ý thường xảy ra tình trạng đông bệnh nhân vào một số thời điểm: 08:00 - 09:00, 08:30 - 09:30, 09:00 - 10:00, 09:30 - 10:30",
        doctorId: 3,
        specialtyId: 0,
        clinicId: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h3>Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Ngọc Hà</h3>
        <ul>
        <li>Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu</li>
        <li>Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương</li>
        <li>Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương</li>
        <li>Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan</li>
        <li>Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu</li>
        <li>Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới</li>
        <li>Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội</li>
        <li>Trưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ</li>
        <li>Tốt nghiệp Đại học Y Hà Nội (1977)</li>
        <li>Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam</li>
        <li>Phó Giáo sư khám và điều trị</li>
        </ul>
        <h3>Các bệnh lý về chuyên sâu về da liễu người lớn và trẻ em</h3>
        <ul>
        <li>Trứng cá thông thường thanh thiếu niên, người lớn, trứng cá do thuốc, mỹ phẩm, do bôi corticord, các thể bệnh trứng cá nặng, trứng cá đỏ (rosacea)</li>
        <li>Điều trị da phục hồi da tổn hại do trứng cá, sẹo trứng cá</li>
        <li>Các bệnh lý da mặt: viêm da dị ứng, tổn hại da do sử dụng mỹ phẩm, do corticord, lão hóa da</li>
        <li>Nám da, tàn nhang, sạm da, các bệnh da tăng sắc tố sau viêm, sau trứng cá, do mỹ phẩm</li>
        <li>Viêm da cơ địa trẻ em và người lớn</li>
        <li>Viêm da dị ứng, viêm da tiếp xúc, viêm da dầu</li>
        <li>Tổ đỉa</li>
        <li>Mày đay</li>
        <li>Bạch biến</li>
        <li>Vảy nến</li>
        <li>Tổ đỉa</li>
        <li>Mày đay</li>
        <li>Bạch biến</li>
        <li>Vảy nến</li>
        <li>Rụng tóc</li>
        <li>Các bệnh da do nhiễm khuẩn: Viêm nang lông, chốc, nhọt, viêm da mủ</li>
        <li>Zona, Thủy đậu, Herpes</li>
        <li>Ghẻ</li>
        <li>Các bênh da do nấm: Nấm nông da, nấm da đầu, nấm móng tay, móng chân, lang ben, nấm men niêm mạc</li>
        <li>Viêm mao mạch dị ứng</li>
        <li>các bệnh da: Có bọng nước, bệnh vẩy phấn hồng, á vẩy nến, liken phẳng, các bệnh da dị ứng thuốc</li>
        <li>U lành tính của da: Đồi mồi, u cổ tuyến mồ hôi, u mềm lây, u mềm treo, u tuyến bã</li>
        <li>Một số bệnh lông - tóc - móng</li>
        <li>Chăm sóc da (skincare)  cho viêm da mặt, trứng cá, liệu trình trị nám, lăn kim, huyết tương giàu tiểu cầu, trị sẹo trứng cá, laser, plasma trị u lành da, nám, đồi mồi</li>
        <li></li>
        <li>Tiêm tái sinh nang tóc</li>
        <li>Và các bệnh lý chuyên sâu khác về chuyên khoa Da liễu</li>
        </ul>
        `,
        contentMarkdown: `
        ### Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Ngọc Hà
        
        * Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu
        * Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương
        * Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương
        * Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan
        * Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu
        * Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới
        * Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội
        * Trưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ
        * Tốt nghiệp Đại học Y Hà Nội (1977)
        * Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam
        * Phó Giáo sư khám và điều trị
        
        
        ### Các bệnh lý về chuyên sâu về da liễu người lớn và trẻ em
        
        
        * Trứng cá thông thường thanh thiếu niên, người lớn, trứng cá do thuốc, mỹ phẩm, do bôi corticord, các thể bệnh trứng cá nặng, trứng cá đỏ (rosacea)
        * Điều trị da phục hồi da tổn hại do trứng cá, sẹo trứng cá
        * Các bệnh lý da mặt: viêm da dị ứng, tổn hại da do sử dụng mỹ phẩm, do corticord, lão hóa da
        * Nám da, tàn nhang, sạm da, các bệnh da tăng sắc tố sau viêm, sau trứng cá, do mỹ phẩm
        * Viêm da cơ địa trẻ em và người lớn
        * Viêm da dị ứng, viêm da tiếp xúc, viêm da dầu
        * Tổ đỉa
        * Mày đay
        * Bạch biến
        * Vảy nến
        * Tổ đỉa
        * Mày đay
        * Bạch biến
        * Vảy nến
        * Rụng tóc
        * Các bệnh da do nhiễm khuẩn: Viêm nang lông, chốc, nhọt, viêm da mủ
        * Zona, Thủy đậu, Herpes
        * Ghẻ
        * Các bênh da do nấm: Nấm nông da, nấm da đầu, nấm móng tay, móng chân, lang ben, nấm men niêm mạc
        * Viêm mao mạch dị ứng
        * các bệnh da: Có bọng nước, bệnh vẩy phấn hồng, á vẩy nến, liken phẳng, các bệnh da dị ứng thuốc
        * U lành tính của da: Đồi mồi, u cổ tuyến mồ hôi, u mềm lây, u mềm treo, u tuyến bã
        * Một số bệnh lông - tóc - móng
        * Chăm sóc da (skincare)  cho viêm da mặt, trứng cá, liệu trình trị nám, lăn kim, huyết tương giàu tiểu cầu, trị sẹo trứng cá, laser, plasma trị u lành da, nám, đồi mồi
        * 
        * Tiêm tái sinh nang tóc
        * Và các bệnh lý chuyên sâu khác về chuyên khoa Da liễu
        `,
        description: `Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương
        Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương
        Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam`,
        doctorId: 4,
        specialtyId: 0,
        clinicId: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h3>Giáo sư, Tiến sĩ, Bác sĩ Hà Văn Quyết</h3>
        <ul>
        <li>Giáo sư, Tiến sỹ, Bác sĩ chuyên khoa Ngoại Tiêu hóa</li>
        <li>Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa</li>
        <li>Kinh nghiệm làm việc trên 35 năm trong lĩnh vực bệnh lý Tiêu hóa</li>
        <li>Chuyên ngành Ngoại – Phẫu thuật Nội soi Tiêu hóa, Ổ bụng &amp; các bệnh lý hậu môn, trực tràng.</li>
        <li>Bác sĩ Nội trú Bệnh viện Việt Đức</li>
        <li>Nguyên Chủ nhiệm Bộ môn Ngoại - Đại học Y Hà Nội</li>
        <li>Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội</li>
        <li>Nguyên Phó Giám đốc Bệnh viện Việt Đức.</li>
        <li>Bác sĩ khám cho người bệnh từ 3 tuổi trở lên</li>
        </ul>
        <h3>Quá trình Đào tạo</h3>
        <ul>
        <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội.</li>
        <li>Bác sĩ Nội trú tại các bệnh viện ở Paris, Cộng hòa Pháp</li>
        <li>Thực tập sinh khoa Tiêu hóa trường Đại học Tokai, Nhật Bản</li>
        <li>Tu nghiệp về chuyên khoa Tiêu hóa tại Mỹ, Singapore, Hàn Quốc</li>
        <li>Sách và các công trình nghiên cứu, báo cáo khoa học</li>
        <li>Chủ biên nhiều bộ sách giáo khoa về Ngoại khoa phẫu thuật tiêu hóa và chuyên sâu về tiêu hóa.</li>
        <li>Tham gia các đề tài nghiên cứu khoa học về ung thư dạ dày, đại trực tràng; các chủ đề về bệnh lý tụy; các loại phẫu thuật nội soi, nội soi can thiệp; bệnh lý về hậu môn trực tràng.</li>
        <li>Thành viên các Hội khoa học, tổ chức chuyên môn</li>
        <li>Nguyên Tổng thư kí Hội Ngoại khoa Việt Nam</li>
        <li>Phó Chủ tịch Hội Khoa học về Hậu môn trực tràng</li>
        <li>Tham gia các chuyên đề sức khỏe</li>
        <li>Ban biên tập Tạp chí Y học thực hành</li>
        <li>Ban biên tập Tạp chí Ngoại khoa</li>
        <li>Ban biên tập Tạp chí Hậu môn Trực tràng</li>
        </ul>
        <h3>Giáo sư Khám, điều trị các bệnh</h3>
        <ul>
        <li>Giáo sư nhận khám, điều trị các bệnh lý khó về Tiêu hóa, hậu môn, trực tràng, gan mật.</li>
        <li>Trực tiếp tiến hành Nội soi tiêu hóa, dạ dày, đại tràng</li>
        <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng</li>
        <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày</li>
        <li>Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa</li>
        <li>Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại.</li>
        </ul>
        <h3>Khám và điều trị các bệnh lý dạ dày</h3>
        <ul>
        <li>Gắp dị vật đường tiêu hóa</li>
        <li>Đau dạ dày</li>
        <li>Chảy máu dạ dày</li>
        <li>Đau thượng vị</li>
        <li>Viêm dạ dày</li>
        <li>Loét dạ dày tá tràng</li>
        <li>Nhiễm Helicobacter pylori dạ dày (HP)</li>
        <li>Trào ngược dạ dày thực quản (Gerd)</li>
        <li>Tắc ruột</li>
        <li>Polyp dạ dày</li>
        <li>Chảy máu dạ dày</li>
        <li>Viêm dạ dày ruột Virus</li>
        <li>Viêm ruột thừa</li>
        <li>Polyp dạ dày</li>
        <li>Ung thư dạ dày</li>
        <li>Táo bón</li>
        <li>Khó nuốt</li>
        <li>Khó tiêu</li>
        <li>Ợ nóng, Ợ chua</li>
        <li>Táo bón</li>
        </ul>
        <h3>Bệnh lý đại tràng, trực tràng, hậu môn</h3>
        <ul>
        <li>Hội chứng ruột kích thích (viêm đại tràng co thắt)</li>
        <li>Viêm đại tràng</li>
        <li>Viêm đại tràng màng giả</li>
        <li>Viêm loét đại tràng</li>
        <li>Bệnh trĩ, trĩ chảy máu, rò hậu môn</li>
        <li>Rò hậu môn, ngứa hậu môn</li>
        <li>Nứt kẽ hậu môn, đại tiện ra máu, đại tiện khó</li>
        <li>Apxe hậu môn</li>
        <li>Đi ngoài ra máu</li>
        </ul>
        <h3>Khám và điều trị các bệnh lý về gan, mật</h3>
        <ul>
        <li>Viêm túi mật, sỏi mật</li>
        <li>Viêm tụy</li>
        <li>Viêm xơ đường mật</li>
        <li>Viêm xơ gan do rượu</li>
        <li>Xơ gan</li>
        <li>U gan</li>
        </ul>
        <h3>Nội soi tiêu hóa</h3>
        <ul>
        <li>Gắp dị vật đường tiêu hóa</li>
        <li>Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại</li>
        <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng</li>
        <li>Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa</li>
        <li>Khám, nội soi dạ dày</li>
        <li>Nội soi dạ dày (có gây mê)</li>
        <li>Nội soi đại tràng (có gây mê)</li>
        <li>Nội soi cắt polyp dạ dày</li>
        <li>Nội soi cắt polyp đại trực tràng</li>
        <li>Phẫu thuật nội soi cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng</li>
        <li>Phẫu thuật nội soi trào ngược dạ dày thực quản</li>
        </ul>
        `,
        contentMarkdown: `
        ### Giáo sư, Tiến sĩ, Bác sĩ Hà Văn Quyết
        
        * Giáo sư, Tiến sỹ, Bác sĩ chuyên khoa Ngoại Tiêu hóa
        * Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa
        * Kinh nghiệm làm việc trên 35 năm trong lĩnh vực bệnh lý Tiêu hóa
        * Chuyên ngành Ngoại – Phẫu thuật Nội soi Tiêu hóa, Ổ bụng & các bệnh lý hậu môn, trực tràng.
        * Bác sĩ Nội trú Bệnh viện Việt Đức 
        * Nguyên Chủ nhiệm Bộ môn Ngoại - Đại học Y Hà Nội 
        * Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội
        * Nguyên Phó Giám đốc Bệnh viện Việt Đức.
        * Bác sĩ khám cho người bệnh từ 3 tuổi trở lên
        
        
        ### Quá trình Đào tạo
        
        * Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội.
        * Bác sĩ Nội trú tại các bệnh viện ở Paris, Cộng hòa Pháp
        * Thực tập sinh khoa Tiêu hóa trường Đại học Tokai, Nhật Bản
        * Tu nghiệp về chuyên khoa Tiêu hóa tại Mỹ, Singapore, Hàn Quốc 
        * Sách và các công trình nghiên cứu, báo cáo khoa học
        * Chủ biên nhiều bộ sách giáo khoa về Ngoại khoa phẫu thuật tiêu hóa và chuyên sâu về tiêu hóa.
        * Tham gia các đề tài nghiên cứu khoa học về ung thư dạ dày, đại trực tràng; các chủ đề về bệnh lý tụy; các loại phẫu thuật nội soi, nội soi can thiệp; bệnh lý về hậu môn trực tràng. 
        * Thành viên các Hội khoa học, tổ chức chuyên môn
        * Nguyên Tổng thư kí Hội Ngoại khoa Việt Nam 
        * Phó Chủ tịch Hội Khoa học về Hậu môn trực tràng 
        * Tham gia các chuyên đề sức khỏe 
        * Ban biên tập Tạp chí Y học thực hành
        * Ban biên tập Tạp chí Ngoại khoa
        * Ban biên tập Tạp chí Hậu môn Trực tràng
        
        
        ### Giáo sư Khám, điều trị các bệnh 
        
        * Giáo sư nhận khám, điều trị các bệnh lý khó về Tiêu hóa, hậu môn, trực tràng, gan mật.
        * Trực tiếp tiến hành Nội soi tiêu hóa, dạ dày, đại tràng
        * Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng
        * Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày
        * Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa
        * Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại.
        
        ### Khám và điều trị các bệnh lý dạ dày
        
        
        * Gắp dị vật đường tiêu hóa
        * Đau dạ dày
        * Chảy máu dạ dày 
        * Đau thượng vị 
        * Viêm dạ dày
        * Loét dạ dày tá tràng
        * Nhiễm Helicobacter pylori dạ dày (HP)
        * Trào ngược dạ dày thực quản (Gerd)
        * Tắc ruột 
        * Polyp dạ dày 
        * Chảy máu dạ dày 
        * Viêm dạ dày ruột Virus
        * Viêm ruột thừa
        * Polyp dạ dày
        * Ung thư dạ dày
        * Táo bón
        * Khó nuốt
        * Khó tiêu
        * Ợ nóng, Ợ chua
        * Táo bón
        
        ### Bệnh lý đại tràng, trực tràng, hậu môn
        
        
        * Hội chứng ruột kích thích (viêm đại tràng co thắt)
        * Viêm đại tràng
        * Viêm đại tràng màng giả
        * Viêm loét đại tràng
        * Bệnh trĩ, trĩ chảy máu, rò hậu môn
        * Rò hậu môn, ngứa hậu môn
        * Nứt kẽ hậu môn, đại tiện ra máu, đại tiện khó
        * Apxe hậu môn
        * Đi ngoài ra máu
        
        
        ### Khám và điều trị các bệnh lý về gan, mật 
        
        
        * Viêm túi mật, sỏi mật 
        * Viêm tụy
        * Viêm xơ đường mật
        * Viêm xơ gan do rượu
        * Xơ gan
        * U gan
        
        
        ### Nội soi tiêu hóa 
        
        
        * Gắp dị vật đường tiêu hóa 
        * Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại
        * Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng
        * Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa
        * Khám, nội soi dạ dày 
        * Nội soi dạ dày (có gây mê)
        * Nội soi đại tràng (có gây mê)
        * Nội soi cắt polyp dạ dày
        * Nội soi cắt polyp đại trực tràng  
        * Phẫu thuật nội soi cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng
        * Phẫu thuật nội soi trào ngược dạ dày thực quản`,
        description: "Bác sĩ khám cho người bệnh từ 3 tuổi trở lên ",
        doctorId: 5,
        specialtyId: 0,
        clinicId: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h3>Bác sĩ chuyên khoa II Trần Thị Hoài Hương</h3>
        <ul>
        <li>Trưởng Khoa Dinh Dưỡng bệnh viện Da Liễu TP. HCM</li>
        <li>Bác sĩ Hương có hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý da liễu</li>
        <li>Bác sĩ nhận khám mọi độ tuổi</li>
        </ul>
        <h3>Quá trình công tác</h3>
        <ul>
        <li>Trưởng khoa Dinh Dưỡng, Bệnh viện Da Liễu TP.HCM</li>
        <li>Nguyên Phó trưởng khoa Lâm sàng 1, Bệnh viện Da Liễu TP.HCM</li>
        <li>Hiện là Bác sĩ Da liễu, Phòng khám Da liễu Táo Đỏ</li>
        <li>Bác sĩ chuyên khoa da liễu, thẩm mỹ da Bệnh Viện Da Liễu TP.HCM</li>
        </ul>
        <h3>Quá trình đào tạo</h3>
        <ul>
        <li>Tốt nghiệp Bác sĩ Chuyên khoa II, chuyên ngành Da liễu, Đại học Y dược TP.HCM</li>
        <li>Tốt nghiệp Bác sĩ Chuyên khoa I, chuyên ngành Da liễu, Đại học Y dược TP.HCM</li>
        <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TP.HCM</li>
        <li>Tham gia lớp Sơ bộ DInh dưỡng, Đại học Y khoa Phạm Ngọc Thạch</li>
        <li>Thành viên các Hội khoa học, tổ chức chuyên môn</li>
        <li>Hội viên chi hội Da Liễu Hồ Chí Minh</li>
        <li>Hội viên Hội Da Liễu Việt Nam</li>
        </ul>
        <h3>Khám và điều trị</h3>
        <h3>Bác sĩ khám và điều trị:</h3>
        <ul>
        <li>Mụn trứng cá: mụn viêm, bọc, nang, mụn đầu trắng, đâu đen</li>
        <li>Nám, sạm da: nám, sạm da mặt</li>
        <li>Rụng tóc, da dầu: mụn trứng cá, sẹo lồi, sẹo thâm, sẹo mụn</li>
        <li>Mề đay: tóc gàu, vảy, rụng tóc từng phần, lan tỏa</li>
        <li>Viêm da cơ địa: mảng da đỏ, ngứa nhiều, từng cơn</li>
        <li>Viêm da dị ứng: mẩn đỏ da, ngứa, lan tỏa</li>
        <li>Thủy đậu: mụn nước, ngứa, kèm sốt nhẹ, mệt mỏi</li>
        <li>Zona: mang mụn nước, 1 bên người, đau nhức</li>
        <li>Da nhờn, lỗ chân lông to</li>
        <li>Vảy nến: mảng đổ da, tróc vảy, có thể toàn thân</li>
        <li>Ghẻ ngứa: ngứa về đêm, vùng nếp, kẽ ngón tay, ngón chân</li>
        <li>Rạn da: da đùi, da rạn teo, bụng, nếp bẹn, nách, lưng</li>
        <li>Lão hóa da: da đổi màu, nhão, xệ, nến nhăn, sần</li>
        <li>Da đồi mồi: đốm nâu</li>
        <li>Pemphigus: bóng nước thân mình, niêm mạc</li>
        <li>Lupus ban đỏ: hồng ban cánh bướm mặt, đau nhức mỏi cơ xương khớp</li>
        <li>Xơ cứng bì: da cứng, không đều màu</li>
        <li>Nấm da: da đỏ quằn quện, các vùng da, tóc, nếp da</li>
        <li>Viêm da tiếp xúc: da đỏ, rát, nhạy cảm, tiếp xúc kiến ba khoang</li>
        <li>Viêm da do nhiễm Corticoid, nhạy cảm: da đỏ, giãn mạch, mãng, nhạy cảm, nôi mụn</li>
        <li>Nấm móng</li>
        <li>Các bệnh lý da khác và bệnh lây qua đường quan hệ tình dục (STDs)</li>
        </ul>
        `,
        contentMarkdown: `
        ### Bác sĩ chuyên khoa II Trần Thị Hoài Hương
        
        * Trưởng Khoa Dinh Dưỡng bệnh viện Da Liễu TP. HCM
        * Bác sĩ Hương có hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý da liễu
        * Bác sĩ nhận khám mọi độ tuổi
        
        
        ### Quá trình công tác
        
        * Trưởng khoa Dinh Dưỡng, Bệnh viện Da Liễu TP.HCM
        * Nguyên Phó trưởng khoa Lâm sàng 1, Bệnh viện Da Liễu TP.HCM
        * Hiện là Bác sĩ Da liễu, Phòng khám Da liễu Táo Đỏ
        * Bác sĩ chuyên khoa da liễu, thẩm mỹ da Bệnh Viện Da Liễu TP.HCM
        
        
        ### Quá trình đào tạo
        
        * Tốt nghiệp Bác sĩ Chuyên khoa II, chuyên ngành Da liễu, Đại học Y dược TP.HCM
        * Tốt nghiệp Bác sĩ Chuyên khoa I, chuyên ngành Da liễu, Đại học Y dược TP.HCM
        * Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TP.HCM
        * Tham gia lớp Sơ bộ DInh dưỡng, Đại học Y khoa Phạm Ngọc Thạch
        * Thành viên các Hội khoa học, tổ chức chuyên môn
        * Hội viên chi hội Da Liễu Hồ Chí Minh
        * Hội viên Hội Da Liễu Việt Nam
        
        
        ### Khám và điều trị
        
        
        ### Bác sĩ khám và điều trị:
        
        
        * Mụn trứng cá: mụn viêm, bọc, nang, mụn đầu trắng, đâu đen
        * Nám, sạm da: nám, sạm da mặt
        * Rụng tóc, da dầu: mụn trứng cá, sẹo lồi, sẹo thâm, sẹo mụn
        * Mề đay: tóc gàu, vảy, rụng tóc từng phần, lan tỏa
        * Viêm da cơ địa: mảng da đỏ, ngứa nhiều, từng cơn
        * Viêm da dị ứng: mẩn đỏ da, ngứa, lan tỏa
        * Thủy đậu: mụn nước, ngứa, kèm sốt nhẹ, mệt mỏi
        * Zona: mang mụn nước, 1 bên người, đau nhức
        * Da nhờn, lỗ chân lông to
        * Vảy nến: mảng đổ da, tróc vảy, có thể toàn thân
        * Ghẻ ngứa: ngứa về đêm, vùng nếp, kẽ ngón tay, ngón chân
        * Rạn da: da đùi, da rạn teo, bụng, nếp bẹn, nách, lưng
        * Lão hóa da: da đổi màu, nhão, xệ, nến nhăn, sần
        * Da đồi mồi: đốm nâu
        * Pemphigus: bóng nước thân mình, niêm mạc
        * Lupus ban đỏ: hồng ban cánh bướm mặt, đau nhức mỏi cơ xương khớp
        * Xơ cứng bì: da cứng, không đều màu
        * Nấm da: da đỏ quằn quện, các vùng da, tóc, nếp da
        * Viêm da tiếp xúc: da đỏ, rát, nhạy cảm, tiếp xúc kiến ba khoang
        * Viêm da do nhiễm Corticoid, nhạy cảm: da đỏ, giãn mạch, mãng, nhạy cảm, nôi mụn
        * Nấm móng
        * Các bệnh lý da khác và bệnh lây qua đường quan hệ tình dục (STDs)`,
        description: "Bác sĩ nhận khám mọi độ tuổi",
        doctorId: 6,
        specialtyId: 0,
        clinicId: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
        <ul>
        <li>Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh</li>
        <li>Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris)</li>
        <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li>
        <li>Quá trình đào tạo</li>
        <li>Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học y dược thành phố Hồ Chí Minh</li>
        <li>Học chuyên khoa cấp I và chuyên khoa cấp II Chuyên ngành Tâm thần, Đại học Y khoa Huế</li>
        <li>Tốt nghiệp Tâm lý trị liệu, trường Tâm lý thực Hành Paris (Psychology practique de Paris)</li>
        </ul>
        <h3>Quá trình công tác</h3>
        <ul>
        <li>Nguyên Trưởng phòng Kế hoạch Nghiệp vụ, Trưởng phòng khám Tâm thần Quận 3, thành phố Hồ Chí Minh</li>
        <li>Nguyên Trưởng khoa lâm sàng Bệnh tâm thần thành phố Hồ Chí Minh</li>
        <li>Giám định viên tư pháp chuyên ngành Tâm thần giám định các trường hợp trọng án, các trường hợp có liên quan pháp lý do cảnh sát điều tra, tòa án các cấp trưng cầu.</li>
        </ul>
        <h3>Khám và điều trị</h3>
        <ul>
        <li>Các rối loạn giấc ngủ không thực tổn: mất ngủ, ngủ nhiều, ngủ ngày quá mức, rối loạn nhịp thức ngủ, hoảng sợ khi ngủ, ác mộng, ngủ rũ,...</li>
        <li>Các rối loạn lo âu: lo lắng, sợ hãi về tương lai, cảm giác cáu gắt, căng thẳng, vận động, bồn chồn, hồi hộp, vã mồ hôi tay chân, cồn cào,...</li>
        <li>Rối loạn trầm cảm: buồn chán, bi quan, mệt mỏi, giảm hoạt động,...</li>
        <li>Hưng cảm: vui vẻ quá mức, suồng sã, tăng hoạt động, đứng ngồi không yên,...</li>
        <li>Rối loạn hoang tưởng: hoang tưởng bị hại, bị theo dõi, liên hệ, bị tội,...</li>
        <li>Rối loạn ảo giác</li>
        <li>Các rối loạn liên quan đến stress</li>
        <li>Rối loạn khí sắc</li>
        <li>Rối loạn cảm xúc phân liệt</li>
        <li>Rối loạn đa nhân cách</li>
        <li>Các bệnh lý loạn thần do sử dụng chất (ma túy đá, cần sa, heroin..)...
        </ul>
        `,
        contentMarkdown: `
        ### Bác sĩ Chuyên khoa II Trần Minh Khuyên
        
        * Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
        * Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris)
        * Bác sĩ nhận khám từ 16 tuổi trở lên
        * Quá trình đào tạo
        * Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học y dược thành phố Hồ Chí Minh
        * Học chuyên khoa cấp I và chuyên khoa cấp II Chuyên ngành Tâm thần, Đại học Y khoa Huế
        * Tốt nghiệp Tâm lý trị liệu, trường Tâm lý thực Hành Paris (Psychology practique de Paris)
        
        
        ### Quá trình công tác
        
        * Nguyên Trưởng phòng Kế hoạch Nghiệp vụ, Trưởng phòng khám Tâm thần Quận 3, thành phố Hồ Chí Minh
        * Nguyên Trưởng khoa lâm sàng Bệnh tâm thần thành phố Hồ Chí Minh
        * Giám định viên tư pháp chuyên ngành Tâm thần giám định các trường hợp trọng án, các trường hợp có liên quan pháp lý do cảnh sát điều tra, tòa án các cấp trưng cầu.
        
        
        ### Khám và điều trị
        
        * Các rối loạn giấc ngủ không thực tổn: mất ngủ, ngủ nhiều, ngủ ngày quá mức, rối loạn nhịp thức ngủ, hoảng sợ khi ngủ, ác mộng, ngủ rũ,...
        * Các rối loạn lo âu: lo lắng, sợ hãi về tương lai, cảm giác cáu gắt, căng thẳng, vận động, bồn chồn, hồi hộp, vã mồ hôi tay chân, cồn cào,...
        * Rối loạn trầm cảm: buồn chán, bi quan, mệt mỏi, giảm hoạt động,...
        * Hưng cảm: vui vẻ quá mức, suồng sã, tăng hoạt động, đứng ngồi không yên,...
        * Rối loạn hoang tưởng: hoang tưởng bị hại, bị theo dõi, liên hệ, bị tội,...
        * Rối loạn ảo giác
        * Các rối loạn liên quan đến stress
        * Rối loạn khí sắc
        * Rối loạn cảm xúc phân liệt
        * Rối loạn đa nhân cách
        * Các bệnh lý loạn thần do sử dụng chất (ma túy đá, cần sa, heroin..)...
        `,
        description: `Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai
        Chủ tịch Hội Thấp khớp học Việt Nam
        Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp
        Bác sĩ khám cho người bệnh từ 14 tuổi trở lên`,
        doctorId: 7,
        specialtyId: 0,
        clinicId: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h2>Giáo sư, Tiến sĩ, Bác sĩ Trần Ngọc Ân</h2>
        <ul>
        <li>Cố vấn chuyên môn chuyên khoa Cơ xương khớp, Bệnh Viện Đa khoa Hồng Phát</li>
        <li>Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp</li>
        <li>Chủ tịch Hội Thấp khớp học Việt Nam</li>
        <li>Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai</li>
        <li>Nguyên Giám đốc Bệnh viện E</li>
        <li>Nguyên giảng viên cao cấp Đại học Y Hà Nội</li>
        <li>Bác sĩ khám cho người bệnh từ 14 tuổi trở lên</li>
        </ul>
        <h2><strong>Quá trình công tác</strong></h2>
        <ul>
        <li>
        <p>Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai</p>
        </li>
        <li>
        <p>Giáo sư đào tạo được trên 10 Tiến sĩ, trên 30 Bác sĩ Chuyên khoa cấp II, Thạc sĩ và Bác sĩ Nội trú về chuyên ngành thấp khớp</p>
        </li>
        <li>
        <p>Chỉ đạo chuyên môn tại Trung tâm Cơ xương khớp, Bệnh viện E (2004-2007)</p>
        </li>
        <li>
        <p>Giám đốc Bệnh viện E (1995-2004)</p>
        </li>
        <li>
        <p>Phó trưởng khoa – Bí thư chi bộ khoa Y trường Đại học Tây Nguyên (1984)</p>
        </li>
        <li>
        <p>Một trong các Phó Tiến sĩ đầu tiên bảo vệ luận án Tiến sĩ trong nước tại Trường Đại học Y với đề tài: “Viêm cột sống dính khớp” (1981)</p>
        </li>
        <li>
        <p>Tham quan, trao đổi tại Hung-ga-ri (1974)</p>
        </li>
        <li>
        <p>Tốt nghiệp bác sĩ trường Đại học Y Hà Nội (1960)</p>
        </li>
        </ul>
        <h3>Giải thưởng</h3>
        <ul>
        <li>Huân chương Lao động hạng Hai (2007)</li>
        <li>Huân chương Lao động hạng Ba (2001)</li>
        <li>Sách và các công trình nghiên cứu, báo cáo khoa học</li>
        <li>Tác giả cuốn sách: Bệnh thấp khớp</li>
        <li>Tham gia biên soạn 3 cuốn sách: Bách khoa thư bệnh học, Bệnh học Nội khoa và Nội khoa cơ sở</li>
        <li>Thành viên các Hội khoa học, tổ chức chuyên môn</li>
        <li>Chủ tịch Hội Thấp khớp học Việt Nam</li>
        <li>Giáo sư Khám &amp; điều trị</li>
        </ul>
        <p><strong>Giáo sư chuyên khám, điều trị các bệnh chuyên khoa Cơ xương khớp:</strong></p>
        <ul>
        <li>Viêm khớp dạng thấp</li>
        <li>Bệnh Gút cấp và mạn tính</li>
        <li>Viêm cột sống dính khớp</li>
        <li>Thoái hóa khớp, cột sống cổ, cột sống thắt lưng</li>
        <li>Đau thần kinh tọa, thoát vị đĩa đệm</li>
        <li>Viêm quanh khớp vai và các điểm bám gân khác</li>
        <li>Bệnh loãng xương</li>
        <li>Bệnh đau nhức xương khớp</li>
        <li>Lupus ban đỏ hệ thống</li>
        <li>Nội soi khớp gối, khớp vai</li>
        </ul>
        `,
        contentMarkdown: `
        ## Giáo sư, Tiến sĩ, Bác sĩ Trần Ngọc Ân
        
        * Cố vấn chuyên môn chuyên khoa Cơ xương khớp, Bệnh Viện Đa khoa Hồng Phát
        * Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp
        * Chủ tịch Hội Thấp khớp học Việt Nam
        * Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai 
        * Nguyên Giám đốc Bệnh viện E
        * Nguyên giảng viên cao cấp Đại học Y Hà Nội
        * Bác sĩ khám cho người bệnh từ 14 tuổi trở lên
        
        **Quá trình công tác**
        ---
        
        * Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai
        * Giáo sư đào tạo được trên 10 Tiến sĩ, trên 30 Bác sĩ Chuyên khoa cấp II, Thạc sĩ và Bác sĩ Nội trú về chuyên ngành thấp khớp
        * Chỉ đạo chuyên môn tại Trung tâm Cơ xương khớp, Bệnh viện E (2004-2007)
        * Giám đốc Bệnh viện E (1995-2004)
        * Phó trưởng khoa – Bí thư chi bộ khoa Y trường Đại học Tây Nguyên (1984)
        
        
        
        
        * Một trong các Phó Tiến sĩ đầu tiên bảo vệ luận án Tiến sĩ trong nước tại Trường Đại học Y với đề tài: “Viêm cột sống dính khớp” (1981)
        * Tham quan, trao đổi tại Hung-ga-ri (1974)
        * Tốt nghiệp bác sĩ trường Đại học Y Hà Nội (1960)
        
        
        ### Giải thưởng
        
        * Huân chương Lao động hạng Hai (2007)
        * Huân chương Lao động hạng Ba (2001)
        * Sách và các công trình nghiên cứu, báo cáo khoa học
        * Tác giả cuốn sách: Bệnh thấp khớp
        * Tham gia biên soạn 3 cuốn sách: Bách khoa thư bệnh học, Bệnh học Nội khoa và Nội khoa cơ sở
        * Thành viên các Hội khoa học, tổ chức chuyên môn
        * Chủ tịch Hội Thấp khớp học Việt Nam
        * Giáo sư Khám & điều trị
        
        **Giáo sư chuyên khám, điều trị các bệnh chuyên khoa Cơ xương khớp:**
        
        * Viêm khớp dạng thấp
        * Bệnh Gút cấp và mạn tính
        * Viêm cột sống dính khớp
        * Thoái hóa khớp, cột sống cổ, cột sống thắt lưng
        * Đau thần kinh tọa, thoát vị đĩa đệm
        * Viêm quanh khớp vai và các điểm bám gân khác
        * Bệnh loãng xương
        * Bệnh đau nhức xương khớp
        * Lupus ban đỏ hệ thống
        * Nội soi khớp gối, khớp vai`,
        description: "",
        doctorId: 8,
        specialtyId: 0,
        clinicId: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<p><strong>GIỚI THIỆU</strong></p>
          <p>Hệ thống Y tế Thu Cúc TCI tự hào là đơn vị y tế được hàng triệu người dân tin tưởng và Sở Y tế công nhận</p>
          <ul>
          <li>Huy chương vàng Dịch vụ y tế do Bộ Y tế trao tặng</li>
          <li>TOP 3 Bệnh viện tư nhân có điểm chất lượng dẫn đầu Hà Nội</li>
          <li>TOP 5 bệnh viện có điểm chất lượng cao nhất</li>
          <li>99% khách hàng đánh giá hài lòng theo thang điểm chấm của Sở Y tế</li>
          </ul>
          <p><strong>Hệ thống Y tế Thu Cúc TCI quy tụ đội ngũ bác sĩ gồm đông đảo các Giáo sư, Tiến sĩ, Thạc sĩ, Bác sĩ giỏi chuyên môn và giàu kinh nghiệm.</strong></p>
          <ul>
          <li>Đại tá, Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa II, Thầy thuốc nhân dân Nguyễn Văn Quýnh: 40 năm kinh nghiệm trong chuyên khoa Tim mạch. Hơn 30 năm công tác tại Bệnh viện Trung ương Quận đội 108</li>
          <li>Thầy thuốc ưu tú, Bác sĩ chuyên khoa II Nguyễn Thị Kim Loan: Nguyên Trưởng khoa Cơ xương khớp và Nội tổng hợp Bệnh viện E Hà Nội</li>
          <li>Tiến sĩ, Bác sĩ Nguyễn Văn Doanh: Nguyên là chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị</li>
          <li>Tiến sĩ, Bác sĩ Nguyễn Thị Thu Hương: Nguyên Phó Giám đốc Bệnh viện Thận Hà Nội. Hơn 30 năm kinh nghiệm khám và chữa các bệnh thận, tiết niệu</li>
          <li>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa I, Thầy thuốc nhân dân Nguyễn Xuân Thành: Hơn 30 năm kinh nghiệm trong lĩnh vực gan mật.</li>
          <li>Và nhiều Phó Giáo sư, Tiến sĩ, Thạc sĩ, Bác sĩ uy tín khác.</li>
          </ul>
          <p><strong>Địa chỉ:</strong></p>
          <ul>
          <li>Cơ sở Thụy Khuê: 286 Thụy Khuê, Tây Hồ, Hà Nội</li>
          <li>Cơ sở Trần Duy Hưng: 216 Trần Duy Hưng, Cầu Giấy, Hà Nội</li>
          <li>Cơ sở Đại Từ: 32 Đại Từ, Hoàng Mai, Hà Nội</li>
          <li>Cơ sở Nguyễn Trãi: 136 Nguyễn Trãi, Thanh Xuân, Hà Nội</li>
          </ul>
          <p><strong>Thời gian làm việc:</strong> Bệnh viện làm việc, tiếp nhận khám bệnh cho bệnh nhân ngoại trú từ thứ 2 đến thứ 7 hàng tuần:</p>
          <ul>
          <li>Sáng: 07:30 - 11:30</li>
          <li>Chiều: 12:30 - 16:30</li>
          </ul>
          <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
          <p><strong>Bệnh viện có 05 Trung tâm</strong></p>
          <ol>
          <li>Trung tâm Ung bướu Chợ Rẫy.</li>
          <li>Trung tâm Đào tạo – Chỉ đạo tuyến.</li>
          <li>Trung tâm Thông tin thuốc và theo dõi phản ứng thuốc có hại của thuốc khu vực Thành phố HCM.</li>
          <li>Trung tâm Truyền máu Chợ Rẫy.</li>
          <li>Trung tâm Tim mạch.</li>
          </ol>
          <p><strong>38 Khoa Lâm sàng</strong>
          04 Khoa khám bệnh ngoại trú:</p>
          <ol>
          <li>Khoa Khám bệnh I</li>
          <li>Khoa Khám bệnh II</li>
          <li>Khoa Chăm sóc sức khỏe theo yêu cầu.</li>
          <li>Khoa Khám xuất cảnh.</li>
          <li>34 Khoa lâm sàng.</li>
          <li></li>
          <li>Khoa Phẫu thuật – gây mê hồi sức.</li>
          <li>Khoa Hồi sức – phẫu thuật tim.</li>
          <li>Khoa Phẫu thuật mạch máu.</li>
          <li>Khoa Hồi sức cấp cứu.</li>
          <li>Khoa Hồi sức ngoại thần kinh.</li>
          <li>Khoa Chấn thương sọ não.</li>
          <li>Khoa Ngoại thần kinh (3B1,3B3, Đơn vị Gamma knife).</li>
          <li>Khoa Ngoại Tiêu hóa.</li>
          <li>Khoa Gan Mật Tụy.</li>
          <li>Khoa Ngoại Tiết Niệu.</li>
          <li>Khoa Chấn thương chỉnh hình.</li>
          <li>Khoa Tai Mũi họng.</li>
          <li>Khoa Tạo hình thẩm mỹ.</li>
          <li>Khoa Mắt.</li>
          <li>Khoa Ngoại lồng ngực.</li>
          <li>Khoa Nội tim mạch.</li>
          <li>Khoa Tim mạch can thiệp và Đơn vị Nhịp học.</li>
          <li>Khoa Nội phổi.</li>
          <li>Khoa Nội thận.</li>
          <li>Khoa Nội tiêu hóa.</li>
          <li>Khoa Nội thần kinh và Đơn vị Thăm dò chức năng thần kinh.</li>
          <li>Khoa Nội tổng quát (Lầu 9B1).</li>
          <li>Khoa Nội tổng quát – quốc tế (Lầu 10B1).</li>
          <li>Khoa Nội tổng quát (Lầu 10B3).</li>
          <li>Khoa Điều trị theo yêu cầu (T6).</li>
          <li>Khoa Bệnh nhiệt đới và Đơn vị Chống độc.</li>
          <li>Khoa Nghiên cứu &amp; điều trị viêm gan.</li>
          <li>Khoa Phỏng – tạo hình.</li>
          <li>Khoa Nội tiết và Đơn vị Bàn chân đái tháo đường.</li>
          <li>Khoa Nội cơ xương khớp.</li>
          <li>Khoa Huyết học lâm sàng - Bộ phận Xét nghiệm huyết học và Đơn vị Điều trị trong ngày.</li>
          <li>Khoa Cấp cứu.</li>
          <li>Khoa Thận nhân tạo.</li>
          <li>Khoa Vật lý trị liệu.</li>
          </ol>
          <p><strong>TRANG THIẾT BỊ</strong></p>
          <p>Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.</p>
          <ul>
          <li>Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.</li>
          <li>Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.</li>
          </ul>
          <p><strong>SCHWIND AMRI 1050RS</strong></p>
          <p><img src="https://bookingcare.vn/files/blog/2022/05/12/155457-co-so-vat-chat-saigon-healthcare.jpg" alt="img"></p>
          <p><strong>MÁY SOIXLTON 265FS</strong>
          <img src="https://bookingcare.vn/files/blog/2022/05/12/105419-anh-3-sg-health.jpg" alt="img">****</p>
          `,
        contentMarkdown: `**GIỚI THIỆU**
 
          Hệ thống Y tế Thu Cúc TCI tự hào là đơn vị y tế được hàng triệu người dân tin tưởng và Sở Y tế công nhận
          * Huy chương vàng Dịch vụ y tế do Bộ Y tế trao tặng
          * TOP 3 Bệnh viện tư nhân có điểm chất lượng dẫn đầu Hà Nội
          * TOP 5 bệnh viện có điểm chất lượng cao nhất
          * 99% khách hàng đánh giá hài lòng theo thang điểm chấm của Sở Y tế
          
          
          **Hệ thống Y tế Thu Cúc TCI quy tụ đội ngũ bác sĩ gồm đông đảo các Giáo sư, Tiến sĩ, Thạc sĩ, Bác sĩ giỏi chuyên môn và giàu kinh nghiệm.**
          
          * Đại tá, Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa II, Thầy thuốc nhân dân Nguyễn Văn Quýnh: 40 năm kinh nghiệm trong chuyên khoa Tim mạch. Hơn 30 năm công tác tại Bệnh viện Trung ương Quận đội 108
          * Thầy thuốc ưu tú, Bác sĩ chuyên khoa II Nguyễn Thị Kim Loan: Nguyên Trưởng khoa Cơ xương khớp và Nội tổng hợp Bệnh viện E Hà Nội
          * Tiến sĩ, Bác sĩ Nguyễn Văn Doanh: Nguyên là chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị
          * Tiến sĩ, Bác sĩ Nguyễn Thị Thu Hương: Nguyên Phó Giám đốc Bệnh viện Thận Hà Nội. Hơn 30 năm kinh nghiệm khám và chữa các bệnh thận, tiết niệu
          * Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa I, Thầy thuốc nhân dân Nguyễn Xuân Thành: Hơn 30 năm kinh nghiệm trong lĩnh vực gan mật.
          * Và nhiều Phó Giáo sư, Tiến sĩ, Thạc sĩ, Bác sĩ uy tín khác.
          
          **Địa chỉ:**
          
          * Cơ sở Thụy Khuê: 286 Thụy Khuê, Tây Hồ, Hà Nội
          * Cơ sở Trần Duy Hưng: 216 Trần Duy Hưng, Cầu Giấy, Hà Nội
          * Cơ sở Đại Từ: 32 Đại Từ, Hoàng Mai, Hà Nội
          * Cơ sở Nguyễn Trãi: 136 Nguyễn Trãi, Thanh Xuân, Hà Nội
          
          **Thời gian làm việc:** Bệnh viện làm việc, tiếp nhận khám bệnh cho bệnh nhân ngoại trú từ thứ 2 đến thứ 7 hàng tuần:
          * Sáng: 07:30 - 11:30
          * Chiều: 12:30 - 16:30
          
          
          **THẾ MẠNH CHUYÊN MÔN**
          
          **Bệnh viện có 05 Trung tâm**
          1. Trung tâm Ung bướu Chợ Rẫy.
          2. Trung tâm Đào tạo – Chỉ đạo tuyến.
          3. Trung tâm Thông tin thuốc và theo dõi phản ứng thuốc có hại của thuốc khu vực Thành phố HCM.
          4. Trung tâm Truyền máu Chợ Rẫy.
          5. Trung tâm Tim mạch.
          
          **38 Khoa Lâm sàng**
          04 Khoa khám bệnh ngoại trú:
          
          1. Khoa Khám bệnh I
          2. Khoa Khám bệnh II
          3. Khoa Chăm sóc sức khỏe theo yêu cầu.
          4. Khoa Khám xuất cảnh.
          5. 34 Khoa lâm sàng.
          6. 
          7. Khoa Phẫu thuật – gây mê hồi sức.
          8. Khoa Hồi sức – phẫu thuật tim.
          9. Khoa Phẫu thuật mạch máu.
          10. Khoa Hồi sức cấp cứu.
          11. Khoa Hồi sức ngoại thần kinh.
          12. Khoa Chấn thương sọ não.
          13. Khoa Ngoại thần kinh (3B1,3B3, Đơn vị Gamma knife).
          14. Khoa Ngoại Tiêu hóa.
          15. Khoa Gan Mật Tụy.
          16. Khoa Ngoại Tiết Niệu.
          17. Khoa Chấn thương chỉnh hình.
          18. Khoa Tai Mũi họng.
          19. Khoa Tạo hình thẩm mỹ.
          20. Khoa Mắt.
          21. Khoa Ngoại lồng ngực.
          22. Khoa Nội tim mạch.
          23. Khoa Tim mạch can thiệp và Đơn vị Nhịp học.
          24. Khoa Nội phổi.
          25. Khoa Nội thận.
          26. Khoa Nội tiêu hóa.
          27. Khoa Nội thần kinh và Đơn vị Thăm dò chức năng thần kinh.
          28. Khoa Nội tổng quát (Lầu 9B1).
          29. Khoa Nội tổng quát – quốc tế (Lầu 10B1).
          30. Khoa Nội tổng quát (Lầu 10B3).
          31. Khoa Điều trị theo yêu cầu (T6).
          32. Khoa Bệnh nhiệt đới và Đơn vị Chống độc.
          33. Khoa Nghiên cứu & điều trị viêm gan.
          34. Khoa Phỏng – tạo hình.
          35. Khoa Nội tiết và Đơn vị Bàn chân đái tháo đường.
          36. Khoa Nội cơ xương khớp.
          37. Khoa Huyết học lâm sàng - Bộ phận Xét nghiệm huyết học và Đơn vị Điều trị trong ngày.
          38. Khoa Cấp cứu.
          39. Khoa Thận nhân tạo.
          40. Khoa Vật lý trị liệu.
          
          **TRANG THIẾT BỊ**
          
          Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.
          
          * Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.
          * Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.
          
          **SCHWIND AMRI 1050RS**
          
          ![img](https://bookingcare.vn/files/blog/2022/05/12/155457-co-so-vat-chat-saigon-healthcare.jpg)
          
          **MÁY SOIXLTON 265FS**
          ![img](https://bookingcare.vn/files/blog/2022/05/12/105419-anh-3-sg-health.jpg)****`,
        description: "",
        doctorId: 0,
        specialtyId: 0,
        clinicId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<p><strong>GIỚI THIỆU</strong></p>
        <p>Bệnh viện Chợ Rẫy với lịch sử thành lập trên 100 năm, là bệnh viện hạng đặc biệt tuyến Trung ương lớn nhất cả nước với trên 1.800 giường và trên 3.000 kỹ thuật y tế được thực hiện. Hàng ngày Bệnh viện Chợ Rẫy tiếp nhận trung bình 6,000 -  8,000 bệnh nhân đến khám.</p>
        <p>Bệnh viện Chợ Rẫy là bệnh viện đa khoa hoàn chỉnh, xếp hạng đặc biệt, tuyến kỹ thuật sau cùng các tỉnh thành phía Nam, trực thuộc Bộ Y tế. Thế mạnh nổi bật tại Bệnh viện Chợ Rẫy là sự kết hợp giữa các chuyên khoa mang lại hiệu quả tốt nhất trong việc chẩn đoán và điều trị cho người bệnh.</p>
        <p><strong>Địa chỉ:</strong> 201B Nguyễn Chí Thanh, Phường 12, Quận 5, Hồ Chí Minh</p>
        <p><strong>Thời gian làm việc:</strong> Bệnh viện làm việc, tiếp nhận khám bệnh cho bệnh nhân ngoại trú từ thứ 2 đến thứ 7 hàng tuần:</p>
        <ul>
        <li>Sáng: 07:30 - 11:30</li>
        <li>Chiều: 12:30 - 16:30</li>
        </ul>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p><strong>Bệnh viện có 05 Trung tâm</strong></p>
        <ol>
        <li>Trung tâm Ung bướu Chợ Rẫy.</li>
        <li>Trung tâm Đào tạo – Chỉ đạo tuyến.</li>
        <li>Trung tâm Thông tin thuốc và theo dõi phản ứng thuốc có hại của thuốc khu vực Thành phố HCM.</li>
        <li>Trung tâm Truyền máu Chợ Rẫy.</li>
        <li>Trung tâm Tim mạch.</li>
        </ol>
        <p><strong>38 Khoa Lâm sàng</strong>
        04 Khoa khám bệnh ngoại trú:</p>
        <ol>
        <li>Khoa Khám bệnh I</li>
        <li>Khoa Khám bệnh II</li>
        <li>Khoa Chăm sóc sức khỏe theo yêu cầu.</li>
        <li>Khoa Khám xuất cảnh.</li>
        <li>34 Khoa lâm sàng.</li>
        <li></li>
        <li>Khoa Phẫu thuật – gây mê hồi sức.</li>
        <li>Khoa Hồi sức – phẫu thuật tim.</li>
        <li>Khoa Phẫu thuật mạch máu.</li>
        <li>Khoa Hồi sức cấp cứu.</li>
        <li>Khoa Hồi sức ngoại thần kinh.</li>
        <li>Khoa Chấn thương sọ não.</li>
        <li>Khoa Ngoại thần kinh (3B1,3B3, Đơn vị Gamma knife).</li>
        <li>Khoa Ngoại Tiêu hóa.</li>
        <li>Khoa Gan Mật Tụy.</li>
        <li>Khoa Ngoại Tiết Niệu.</li>
        <li>Khoa Chấn thương chỉnh hình.</li>
        <li>Khoa Tai Mũi họng.</li>
        <li>Khoa Tạo hình thẩm mỹ.</li>
        <li>Khoa Mắt.</li>
        <li>Khoa Ngoại lồng ngực.</li>
        <li>Khoa Nội tim mạch.</li>
        <li>Khoa Tim mạch can thiệp và Đơn vị Nhịp học.</li>
        <li>Khoa Nội phổi.</li>
        <li>Khoa Nội thận.</li>
        <li>Khoa Nội tiêu hóa.</li>
        <li>Khoa Nội thần kinh và Đơn vị Thăm dò chức năng thần kinh.</li>
        <li>Khoa Nội tổng quát (Lầu 9B1).</li>
        <li>Khoa Nội tổng quát – quốc tế (Lầu 10B1).</li>
        <li>Khoa Nội tổng quát (Lầu 10B3).</li>
        <li>Khoa Điều trị theo yêu cầu (T6).</li>
        <li>Khoa Bệnh nhiệt đới và Đơn vị Chống độc.</li>
        <li>Khoa Nghiên cứu &amp; điều trị viêm gan.</li>
        <li>Khoa Phỏng – tạo hình.</li>
        <li>Khoa Nội tiết và Đơn vị Bàn chân đái tháo đường.</li>
        <li>Khoa Nội cơ xương khớp.</li>
        <li>Khoa Huyết học lâm sàng - Bộ phận Xét nghiệm huyết học và Đơn vị Điều trị trong ngày.</li>
        <li>Khoa Cấp cứu.</li>
        <li>Khoa Thận nhân tạo.</li>
        <li>Khoa Vật lý trị liệu.</li>
        </ol>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.</p>
        <ul>
        <li>Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.</li>
        <li>Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.</li>
        </ul>
        <p><strong>SCHWIND AMRI 1050RS</strong></p>
        <p><img src="https://bookingcare.vn/files/blog/2022/05/12/155457-co-so-vat-chat-saigon-healthcare.jpg" alt="img"></p>
        <p><strong>MÁY SOIXLTON 265FS</strong>
        <img src="https://bookingcare.vn/files/blog/2022/05/12/105419-anh-3-sg-health.jpg" alt="img"></p>
        `,
        contentMarkdown: `**GIỚI THIỆU**
 
        Bệnh viện Chợ Rẫy với lịch sử thành lập trên 100 năm, là bệnh viện hạng đặc biệt tuyến Trung ương lớn nhất cả nước với trên 1.800 giường và trên 3.000 kỹ thuật y tế được thực hiện. Hàng ngày Bệnh viện Chợ Rẫy tiếp nhận trung bình 6,000 -  8,000 bệnh nhân đến khám.
        
        Bệnh viện Chợ Rẫy là bệnh viện đa khoa hoàn chỉnh, xếp hạng đặc biệt, tuyến kỹ thuật sau cùng các tỉnh thành phía Nam, trực thuộc Bộ Y tế. Thế mạnh nổi bật tại Bệnh viện Chợ Rẫy là sự kết hợp giữa các chuyên khoa mang lại hiệu quả tốt nhất trong việc chẩn đoán và điều trị cho người bệnh.
        
        **Địa chỉ:** 201B Nguyễn Chí Thanh, Phường 12, Quận 5, Hồ Chí Minh
        
        **Thời gian làm việc:** Bệnh viện làm việc, tiếp nhận khám bệnh cho bệnh nhân ngoại trú từ thứ 2 đến thứ 7 hàng tuần:
        * Sáng: 07:30 - 11:30
        * Chiều: 12:30 - 16:30
        
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        **Bệnh viện có 05 Trung tâm**
        1. Trung tâm Ung bướu Chợ Rẫy.
        2. Trung tâm Đào tạo – Chỉ đạo tuyến.
        3. Trung tâm Thông tin thuốc và theo dõi phản ứng thuốc có hại của thuốc khu vực Thành phố HCM.
        4. Trung tâm Truyền máu Chợ Rẫy.
        5. Trung tâm Tim mạch.
        
        **38 Khoa Lâm sàng**
        04 Khoa khám bệnh ngoại trú:
        
        1. Khoa Khám bệnh I
        2. Khoa Khám bệnh II
        3. Khoa Chăm sóc sức khỏe theo yêu cầu.
        4. Khoa Khám xuất cảnh.
        5. 34 Khoa lâm sàng.
        6. 
        7. Khoa Phẫu thuật – gây mê hồi sức.
        8. Khoa Hồi sức – phẫu thuật tim.
        9. Khoa Phẫu thuật mạch máu.
        10. Khoa Hồi sức cấp cứu.
        11. Khoa Hồi sức ngoại thần kinh.
        12. Khoa Chấn thương sọ não.
        13. Khoa Ngoại thần kinh (3B1,3B3, Đơn vị Gamma knife).
        14. Khoa Ngoại Tiêu hóa.
        15. Khoa Gan Mật Tụy.
        16. Khoa Ngoại Tiết Niệu.
        17. Khoa Chấn thương chỉnh hình.
        18. Khoa Tai Mũi họng.
        19. Khoa Tạo hình thẩm mỹ.
        20. Khoa Mắt.
        21. Khoa Ngoại lồng ngực.
        22. Khoa Nội tim mạch.
        23. Khoa Tim mạch can thiệp và Đơn vị Nhịp học.
        24. Khoa Nội phổi.
        25. Khoa Nội thận.
        26. Khoa Nội tiêu hóa.
        27. Khoa Nội thần kinh và Đơn vị Thăm dò chức năng thần kinh.
        28. Khoa Nội tổng quát (Lầu 9B1).
        29. Khoa Nội tổng quát – quốc tế (Lầu 10B1).
        30. Khoa Nội tổng quát (Lầu 10B3).
        31. Khoa Điều trị theo yêu cầu (T6).
        32. Khoa Bệnh nhiệt đới và Đơn vị Chống độc.
        33. Khoa Nghiên cứu & điều trị viêm gan.
        34. Khoa Phỏng – tạo hình.
        35. Khoa Nội tiết và Đơn vị Bàn chân đái tháo đường.
        36. Khoa Nội cơ xương khớp.
        37. Khoa Huyết học lâm sàng - Bộ phận Xét nghiệm huyết học và Đơn vị Điều trị trong ngày.
        38. Khoa Cấp cứu.
        39. Khoa Thận nhân tạo.
        40. Khoa Vật lý trị liệu.
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.
        
        * Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.
        * Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.
        
        **SCHWIND AMRI 1050RS**
        
        ![img](https://bookingcare.vn/files/blog/2022/05/12/155457-co-so-vat-chat-saigon-healthcare.jpg)
        
        **MÁY SOIXLTON 265FS**
        ![img](https://bookingcare.vn/files/blog/2022/05/12/105419-anh-3-sg-health.jpg)`,
        description: "",
        doctorId: 0,
        specialtyId: 0,
        clinicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<p><strong>GIỚI THIỆU</strong></p>
        <p><strong>Địa chỉ:</strong> số 458 Minh Khai, Hai Bà Trưng, Hà Nội</p>
        <p><strong>Thời gian làm việc:</strong> Thứ 2 đến Chủ Nhật</p>
        <ul>
        <li>Thứ 2 đến thứ 6</li>
        <li>Sáng: 07:30 - 11:30</li>
        <li>Chiều: 12:30 - 16:30</li>
        </ul>
        <p>Bệnh viện có trực cấp cứu 24/7</p>
        <p>Bệnh viện Đa khoa Quốc tế Vinmec Times City tọa lạc trong khu Đô thị Times City hiện đại và sang trọng bậc nhất Hà Nội, có diện tích lên đến 24.670m2.</p>
        <p>Vinmec Times City là bệnh viện đa khoa đầu tiên tại Việt Nam đạt chứng chỉ JCI - Chứng chỉ uy tín hàng đầu thế giới về thẩm định chất lượng dịch vụ y tế, được công nhận trên 90 quốc gia, “Tiêu chuẩn vàng” tại các bệnh viện danh tiếng toàn cầu.</p>
        <p><strong>Chi phí khám</strong></p>
        <p>Giá khám có hẹn trước trong giờ hành chính thấp hơn giá khám không hẹn trước hoặc khám ngoài giờ hành chính. Vì vậy, bệnh nhân nên đặt lịch trước khi đến khám để tiết kiệm được chi phí khám và được ưu tiên.</p>
        <p><strong>Bảo hiểm áp dụng</strong></p>
        <ul>
        <li>Bảo hiểm Y tế nhà nước</li>
        <li>Bảo hiểm Y tế tư nhân: bảo hiểm bảo lãnh trực tiếp và bảo hiểm không bảo lãnh trực tiếp</li>
        </ul>
        <p><strong>Hình thức thanh toán</strong></p>
        <p>Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ</p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p>Bệnh viện có thế mạnh về khám chữa bệnh cả nội khoa và ngoại khoa, kiểm tra sức khỏe định kỳ, Nhi khoa, Phẫu thuật tim mạch, Ung bướu-Xạ trị, Hỗ trợ sinh sản,...</p>
        <p><strong>Khám và điều trị:</strong></p>
        <ul>
        <li>Khám tổng quát</li>
        <li>Tiêu hóa - Gan - Mật</li>
        <li>Nội tiết</li>
        <li>Dị ứng miễn dịch</li>
        <li>Tai - Mũi - Họng</li>
        <li>Tim mạch</li>
        <li>Sản Phụ khoa</li>
        <li>Hỗ trợ sinh sản</li>
        <li>Nhi khoa</li>
        <li>Tai mũi họng</li>
        <li>Mắt</li>
        <li>Da liễu</li>
        <li>Cơ xương khớp</li>
        <li>Thần kinh cột sống</li>
        <li>Chấn thương chỉnh hình</li>
        <li>Tiết Niệu - Thận</li>
        <li>Ung bướu-Xạ trị</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.</p>
        <ul>
        <li>Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.</li>
        <li>Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.</li>
        </ul>
        <p><strong>SCHWIND AMRI 1050RS</strong></p>
        <p><img src="https://bookingcare.vn/files/image/2018/05/11/113803schwindamaris-1050rs.jpg" alt="img"></p>
        <p><strong>MÁY VISUMAX</strong>
        <img src="https://bookingcare.vn/files/image/2018/05/18/092339may-visumax-benh-vien-mat-quoc-te-dnd-128-bui-thi-xuan-hn-0969128128.png" alt="img"></p>
        `,
        contentMarkdown: `**GIỚI THIỆU**
 
        **Địa chỉ:** số 458 Minh Khai, Hai Bà Trưng, Hà Nội
        
        **Thời gian làm việc:** Thứ 2 đến Chủ Nhật
        
        * Thứ 2 đến thứ 6
        * Sáng: 07:30 - 11:30
        * Chiều: 12:30 - 16:30
        
        Bệnh viện có trực cấp cứu 24/7
        
        Bệnh viện Đa khoa Quốc tế Vinmec Times City tọa lạc trong khu Đô thị Times City hiện đại và sang trọng bậc nhất Hà Nội, có diện tích lên đến 24.670m2.
        
        Vinmec Times City là bệnh viện đa khoa đầu tiên tại Việt Nam đạt chứng chỉ JCI - Chứng chỉ uy tín hàng đầu thế giới về thẩm định chất lượng dịch vụ y tế, được công nhận trên 90 quốc gia, “Tiêu chuẩn vàng” tại các bệnh viện danh tiếng toàn cầu.
        
        **Chi phí khám**
        
        Giá khám có hẹn trước trong giờ hành chính thấp hơn giá khám không hẹn trước hoặc khám ngoài giờ hành chính. Vì vậy, bệnh nhân nên đặt lịch trước khi đến khám để tiết kiệm được chi phí khám và được ưu tiên.
        
        **Bảo hiểm áp dụng**
        
        * Bảo hiểm Y tế nhà nước
        * Bảo hiểm Y tế tư nhân: bảo hiểm bảo lãnh trực tiếp và bảo hiểm không bảo lãnh trực tiếp
        
        **Hình thức thanh toán**
        
        Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        Bệnh viện có thế mạnh về khám chữa bệnh cả nội khoa và ngoại khoa, kiểm tra sức khỏe định kỳ, Nhi khoa, Phẫu thuật tim mạch, Ung bướu-Xạ trị, Hỗ trợ sinh sản,...
        
        **Khám và điều trị:**
        
        * Khám tổng quát
        * Tiêu hóa - Gan - Mật
        * Nội tiết
        * Dị ứng miễn dịch
        * Tai - Mũi - Họng
        * Tim mạch
        * Sản Phụ khoa
        * Hỗ trợ sinh sản
        * Nhi khoa
        * Tai mũi họng
        * Mắt
        * Da liễu
        * Cơ xương khớp
        * Thần kinh cột sống
        * Chấn thương chỉnh hình
        * Tiết Niệu - Thận
        * Ung bướu-Xạ trị
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.
        
        * Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.
        * Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.
        
        **SCHWIND AMRI 1050RS**
        
        ![img](https://bookingcare.vn/files/image/2018/05/11/113803schwindamaris-1050rs.jpg)
        
        **MÁY VISUMAX**
        ![img](https://bookingcare.vn/files/image/2018/05/18/092339may-visumax-benh-vien-mat-quoc-te-dnd-128-bui-thi-xuan-hn-0969128128.png)`,
        description: "",
        doctorId: 0,
        specialtyId: 0,
        clinicId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<p><strong>GIỚI THIỆU</strong></p>
        <p><strong>Địa chỉ:</strong> Số 1E Trường Chinh, Thanh Xuân, Hà Nội</p>
        <p><strong>Thời gian làm việc:</strong> Thứ 2 đến Chủ Nhật</p>
        <ul>
        <li>Sáng: Từ 7h30 – 12h00</li>
        <li>Chiều: Từ 13h30 – 16h30</li>
        </ul>
        <p>Bệnh viện Đa khoa An Việt là bệnh viện Đa khoa tư nhân với đội ngũ bác sĩ từ các bệnh viện lớn trên địa bàn thành phố Hà Nội: Bệnh viện Tai mũi họng Trung ương, Bệnh viện Phụ sản Trung ương, Bệnh viện K, Bệnh viện Việt Đức,... Bệnh viện được đánh giá cao về sự đầu tư cơ sở hạ tầng và trang thiết bị. Bệnh viện được định hướng trở thành bệnh viện top đầu về chuyên môn và công nghệ, đạt tiêu chuẩn cao nhất về quản lý chất lượng và an toàn cho bệnh nhân.</p>
        <p>Lưu ý khi đi khám</p>
        <ul>
        <li>Nên mang theo thẻ bảo hiểm y tế hoặc thẻ bảo hiểm bảo lãnh</li>
        </ul>
        <p><img src="https://bookingcare.vn/files/blog/2021/05/19/091814-benh-vien-an-viet.jpg" alt="img"></p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p>Bệnh viện có thế mạnh chẩn đoán và điều trị về các vấn đề:</p>
        <p>Tai mũi họng
        Thận tiết niệu
        Nam học
        Thần kinh
        Sản phụ khoa
        Cơ xương khớp
        Điều trị thoái hóa khớp gối bằng phương pháp tế bào gốc</p>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện sở hữu hệ thống trang các thiết bị máy móc hiện đại, được đồng bộ từ các nước tiên tiến trên thế giới như Mỹ, Đức, Nhật…
        <img src="https://bookingcare.vn/files/image/2018/06/22/084654pgs-hoai-an-nao-va1.jpg" alt="img"></p>
        `,
        contentMarkdown: `**GIỚI THIỆU**
 
        **Địa chỉ:** Số 1E Trường Chinh, Thanh Xuân, Hà Nội
        
        **Thời gian làm việc:** Thứ 2 đến Chủ Nhật
        
        * Sáng: Từ 7h30 – 12h00
        * Chiều: Từ 13h30 – 16h30
        
        Bệnh viện Đa khoa An Việt là bệnh viện Đa khoa tư nhân với đội ngũ bác sĩ từ các bệnh viện lớn trên địa bàn thành phố Hà Nội: Bệnh viện Tai mũi họng Trung ương, Bệnh viện Phụ sản Trung ương, Bệnh viện K, Bệnh viện Việt Đức,... Bệnh viện được đánh giá cao về sự đầu tư cơ sở hạ tầng và trang thiết bị. Bệnh viện được định hướng trở thành bệnh viện top đầu về chuyên môn và công nghệ, đạt tiêu chuẩn cao nhất về quản lý chất lượng và an toàn cho bệnh nhân. 
        
        Lưu ý khi đi khám
        
        * Nên mang theo thẻ bảo hiểm y tế hoặc thẻ bảo hiểm bảo lãnh
        
        ![img](https://bookingcare.vn/files/blog/2021/05/19/091814-benh-vien-an-viet.jpg)
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        Bệnh viện có thế mạnh chẩn đoán và điều trị về các vấn đề:
        
        Tai mũi họng
        Thận tiết niệu
        Nam học
        Thần kinh
        Sản phụ khoa
        Cơ xương khớp
        Điều trị thoái hóa khớp gối bằng phương pháp tế bào gốc
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện sở hữu hệ thống trang các thiết bị máy móc hiện đại, được đồng bộ từ các nước tiên tiến trên thế giới như Mỹ, Đức, Nhật…
        ![img](https://bookingcare.vn/files/image/2018/06/22/084654pgs-hoai-an-nao-va1.jpg)`,
        description: "",
        doctorId: 0,
        specialtyId: 0,
        clinicId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<p><strong>GIỚI THIỆU</strong></p>
        <p><strong>Địa chỉ:</strong> Số 14 Trần Bình Trọng, Hoàn Kiếm, Hà Nội</p>
        <p><strong>Thời gian làm việc:</strong> Thứ 2 đến Chủ Nhật</p>
        <ul>
        <li>Sáng: Từ 7h30 – 12h00</li>
        <li>Chiều: Từ 13h30 – 16h30</li>
        </ul>
        <p>Phòng khám Vietlife MRI Trần Bình Trọng là phòng khám đa khoa tư nhân, nằm trong chuỗi hệ thống phòng khám Vietlife trên cả nước. Với đội ngũ chuyên môn, kỹ thuật, điều dưỡng, nhân viên tư vấn chăm sóc hoạt động trong ngành dịch vụ y tế, chăm sóc sức khỏe, dùng Y học hiện đại, Y học cổ truyền kết hợp với Công nghệ để phục vụ người dân.</p>
        <p>Đội ngũ bác sĩ tại Phòng khám Vietlife đều là các bác sĩ giỏi có nhiều năm kinh nghiệm, đã và đang làm việc tại các bệnh viện lớn trên cả nước như bệnh viện Bạch Mai, bệnh viện Nhi Trung ương, bệnh viện phụ sản Trung ương, bệnh viện Đại học Y Hà Nội,...</p>
        <p><img src="https://bookingcare.vn/files/blog/2019/08/02/155831vietlife-tran-binh-trong.jpg" alt="img"></p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p>Bệnh viện có thế mạnh chẩn đoán và điều trị về các vấn đề:</p>
        <ul>
        <li>Chụp cộng hưởng từ MRI</li>
        <li>Thần kinh</li>
        <li>Cơ xương khớp</li>
        <li>Tai mũi họng</li>
        <li>Hô hấp</li>
        <li>Nhi khoa</li>
        <li>Da liễu</li>
        <li>Sản phụ khoa</li>
        <li>Gói khám sức khỏe cho trẻ em và người lớn</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện sở hữu hệ thống trang các thiết bị máy móc hiện đại, được đồng bộ từ các nước tiên tiến trên thế giới như Mỹ, Đức, Nhật…
        <img src="https://bookingcare.vn/files/blog/2019/08/07/094033mri.jpg" alt="img"></p>
        `,
        contentMarkdown: `**GIỚI THIỆU**
 
        **Địa chỉ:** Số 14 Trần Bình Trọng, Hoàn Kiếm, Hà Nội
        
        **Thời gian làm việc:** Thứ 2 đến Chủ Nhật
        
        * Sáng: Từ 7h30 – 12h00
        * Chiều: Từ 13h30 – 16h30
        
        Phòng khám Vietlife MRI Trần Bình Trọng là phòng khám đa khoa tư nhân, nằm trong chuỗi hệ thống phòng khám Vietlife trên cả nước. Với đội ngũ chuyên môn, kỹ thuật, điều dưỡng, nhân viên tư vấn chăm sóc hoạt động trong ngành dịch vụ y tế, chăm sóc sức khỏe, dùng Y học hiện đại, Y học cổ truyền kết hợp với Công nghệ để phục vụ người dân.
        
        Đội ngũ bác sĩ tại Phòng khám Vietlife đều là các bác sĩ giỏi có nhiều năm kinh nghiệm, đã và đang làm việc tại các bệnh viện lớn trên cả nước như bệnh viện Bạch Mai, bệnh viện Nhi Trung ương, bệnh viện phụ sản Trung ương, bệnh viện Đại học Y Hà Nội,...
        
        ![img](https://bookingcare.vn/files/blog/2019/08/02/155831vietlife-tran-binh-trong.jpg)
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        Bệnh viện có thế mạnh chẩn đoán và điều trị về các vấn đề:
        
        * Chụp cộng hưởng từ MRI
        * Thần kinh
        * Cơ xương khớp
        * Tai mũi họng
        * Hô hấp
        * Nhi khoa
        * Da liễu
        * Sản phụ khoa
        * Gói khám sức khỏe cho trẻ em và người lớn
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện sở hữu hệ thống trang các thiết bị máy móc hiện đại, được đồng bộ từ các nước tiên tiến trên thế giới như Mỹ, Đức, Nhật…
        ![img](https://bookingcare.vn/files/blog/2019/08/07/094033mri.jpg)`,
        description: "",
        doctorId: 0,
        specialtyId: 0,
        clinicId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<p><strong>GIỚI THIỆU</strong></p>
        <p><strong>Địa chỉ:</strong> 45 Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh</p>
        <p><strong>Thời gian làm việc:</strong> Thứ 2 đến Chủ Nhật</p>
        <ul>
        <li>Thứ 2 đến thứ 6</li>
        <li>Sáng: 07:30 - 11:30</li>
        <li>Chiều: 12:30 - 16:30</li>
        </ul>
        <p>Phòng khám Đa khoa Saigon Healthcare quy tụ đội ngũ bác sĩ giỏi đã và đang công tác nhiều năm tại các bệnh viện lớn như: Bệnh viện Nhân dân 115, Bệnh viện Từ Dũ, Bệnh viện Thống Nhất, Bệnh viện Hùng Vương,...</p>
        <p>Với hầu hết các bệnh lý, người bệnh đều có thể thăm khám tại Phòng khám. Một số chuyên khoa được phòng khám chú trọng phát triển, trở thành thế mạnh chuyên sâu như: tim mạch, nội tiết, tiêu hóa, chấn thương chỉnh hình.
        <strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p>Bệnh viện có thế mạnh về khám chữa bệnh cả nội khoa và ngoại khoa, kiểm tra sức khỏe định kỳ, Nhi khoa, Phẫu thuật tim mạch, Ung bướu-Xạ trị, Hỗ trợ sinh sản,...</p>
        <p><strong>Khám và điều trị:</strong></p>
        <ul>
        <li>Khám tổng quát</li>
        <li>Tiêu hóa - Gan - Mật</li>
        <li>Nội tiết</li>
        <li>Dị ứng miễn dịch</li>
        <li>Tai - Mũi - Họng</li>
        <li>Tim mạch</li>
        <li>Sản Phụ khoa</li>
        <li>Hỗ trợ sinh sản</li>
        <li>Nhi khoa</li>
        <li>Tai mũi họng</li>
        <li>Mắt</li>
        <li>Da liễu</li>
        <li>Cơ xương khớp</li>
        <li>Thần kinh cột sống</li>
        <li>Chấn thương chỉnh hình</li>
        <li>Tiết Niệu - Thận</li>
        <li>Ung bướu-Xạ trị</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.</p>
        <ul>
        <li>Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.</li>
        <li>Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.</li>
        </ul>
        <p><strong>SCHWIND AMRI 1050RS</strong></p>
        <p><img src="https://bookingcare.vn/files/blog/2022/05/12/155457-co-so-vat-chat-saigon-healthcare.jpg" alt="img"></p>
        <p><strong>MÁY SOIXLTON 265FS</strong>
        <img src="https://bookingcare.vn/files/blog/2022/05/12/105419-anh-3-sg-health.jpg" alt="img"></p>
        `,
        contentMarkdown: `**GIỚI THIỆU**
 
        **Địa chỉ:** 45 Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh
        
        **Thời gian làm việc:** Thứ 2 đến Chủ Nhật
        
        * Thứ 2 đến thứ 6
        * Sáng: 07:30 - 11:30
        * Chiều: 12:30 - 16:30
        
        Phòng khám Đa khoa Saigon Healthcare quy tụ đội ngũ bác sĩ giỏi đã và đang công tác nhiều năm tại các bệnh viện lớn như: Bệnh viện Nhân dân 115, Bệnh viện Từ Dũ, Bệnh viện Thống Nhất, Bệnh viện Hùng Vương,...
        
        Với hầu hết các bệnh lý, người bệnh đều có thể thăm khám tại Phòng khám. Một số chuyên khoa được phòng khám chú trọng phát triển, trở thành thế mạnh chuyên sâu như: tim mạch, nội tiết, tiêu hóa, chấn thương chỉnh hình.
        **THẾ MẠNH CHUYÊN MÔN**
        
        Bệnh viện có thế mạnh về khám chữa bệnh cả nội khoa và ngoại khoa, kiểm tra sức khỏe định kỳ, Nhi khoa, Phẫu thuật tim mạch, Ung bướu-Xạ trị, Hỗ trợ sinh sản,...
        
        **Khám và điều trị:**
        
        * Khám tổng quát
        * Tiêu hóa - Gan - Mật
        * Nội tiết
        * Dị ứng miễn dịch
        * Tai - Mũi - Họng
        * Tim mạch
        * Sản Phụ khoa
        * Hỗ trợ sinh sản
        * Nhi khoa
        * Tai mũi họng
        * Mắt
        * Da liễu
        * Cơ xương khớp
        * Thần kinh cột sống
        * Chấn thương chỉnh hình
        * Tiết Niệu - Thận
        * Ung bướu-Xạ trị
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.
        
        * Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.
        * Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.
        
        **SCHWIND AMRI 1050RS**
        
        ![img](https://bookingcare.vn/files/blog/2022/05/12/155457-co-so-vat-chat-saigon-healthcare.jpg)
        
        **MÁY SOIXLTON 265FS**
        ![img](https://bookingcare.vn/files/blog/2022/05/12/105419-anh-3-sg-health.jpg)`,
        description: "",
        doctorId: 0,
        specialtyId: 0,
        clinicId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<p><strong>GIỚI THIỆU</strong></p>
        <p><strong>Địa chỉ:</strong>  431 Tam Trinh (Lô 01-8A cụm tiểu thủ công nghiệp Hai Bà Trưng),Phường Hoàng Văn Thụ, Quận Hoàng Mai, Hà Nội</p>
        <p><strong>Thời gian làm việc:</strong> Thứ 2 đến Chủ Nhật</p>
        <ul>
        <li>Sáng: Từ 7h30 – 12h00</li>
        <li>Chiều: Từ 13h30 – 16h30</li>
        </ul>
        <p>Bệnh viện Nam Học và Hiếm Muộn Hà Nội (Andrology And Fertility Hospital Of Hanoi) thành lập năm 2009 với chức năng điều trị bệnh lý Nam khoa &amp; Y học giới tính, Sức khỏe sinh sản và Vô sinh – Hiếm muộn (cho cả nam và nữ). Bệnh viện là cơ sở y tế ngoài công lập đầu tiên ở Miền Bắc được cấp phép thực hiện Kỹ thuật Thụ tinh trong ống nghiệm (TTTON).</p>
        <p>Từ 2009 đến nay, Bệnh viện đã đón tiếp hàng chục nghìn lượt bệnh nhân tới khám, chữa bệnh và hàng ngàn cặp vợ chồng thực hiện kĩ thuật TTTON với tỷ lệ thành công rất cao (tương đương với tỷ lệ của các trung tâm thụ tinh ống nghiệm lớn trong nước và quốc tế) nhờ các phác đồ điều trị và can thiệp y khoa thích hợp.</p>
        <p><img src="https://bookingcare.vn/files/blog/2021/04/15/104133-bv-nam-hoc-hn.jpg" alt="img"></p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p><strong>Nam khoa &amp; Y học giới tính</strong></p>
        <ul>
        <li>Rối loạn cương dương; rối loạn khoái cảm; rối loạn xuất tinh; khó quan hệ tình dục; cương cứng liên tục; …</li>
        <li>Dị tật bẩm sinh hệ sinh sản: bất thường về nhiễm sắc thể; lưỡng giới; tinh hoàn ẩn, lạc chỗ; dương vật dị dạng: vẹo, xoắn, lệch lỗ tiểu, …</li>
        <li>Bệnh lý hệ sinh sản: chấn thương gẫy dương vật, xoắn tinh hoàn, tràn dịch màng tinh hoàn, khối u, viêm nhiễm bộ phận sinh dục, …</li>
        <li>Điều trị giãn tĩnh mạch tinh – nguyên nhân hàng đầu dẫn đến vô sinh nam.</li>
        <li>Khám và điều trị các bệnh lý về rối loạn sinh lý tình dục: rối loạn cảm xúc tình dục, lãnh cảm tình dục, …</li>
        </ul>
        <p><strong>Sức khỏe sinh sản</strong></p>
        <ul>
        <li>Kiểm tra sức khỏe sinh sản; tư vấn kế hoạch thụ thai thành công.</li>
        <li>Vô sinh nam: không tinh trùng (vô tinh); tinh trùng ít, chết, dị dạng; không ống dẫn tinh; tắc ống dẫn tinh; rối loạn nội tiết; rối loạn sinh tinh; …</li>
        <li>Vô sinh nữ: rối loạn nội tiết, không phóng noãn, suy buồng trứng sớm, tắc ống dẫn trứng, …</li>
        <li>Phẫu thuật điều trị các bệnh lý phụ khoa: tạo hình vòi trứng, thông tắc vòi trứng, u nang buồng trứng, u xơ tử cung, polyp tử cung, …</li>
        <li>Phẫu thuật điều trị các bệnh lý nam khoa: nối ống dẫn tinh sau triệt sản, giãn tĩnh mạch tinh, tinh hoàn lạc chỗ, …</li>
        <li>Phẫu thuật tạo hình hệ sinh sản cả Nam và Nữ.</li>
        <li>Vô sinh – Hiếm muộn (Nam &amp; Nữ)</li>
        </ul>
        <p><strong>Khám, điều trị, phẫu thuật các bệnh lý vô sinh nam và vô sinh nữ.</strong></p>
        <ul>
        <li>Kích thích buồng trứng bằng phác đồ chuẩn, hiện đại, hiệu quả cao nhất.</li>
        <li>Thực hiện Hỗ trợ sinh sản: Thụ tinh nhân tạo (IUI) &amp; Thụ tinh trong ống nghiệm (IVF, ICSI).</li>
        <li>Ngân hàng tinh trùng (Sperm Bank),Ngân hàng phôi sẵn sàng cung cấp cho người có nhu cầu và nhận của người hiến vì mục đích nhân đạo, …</li>
        <li>Điều trị thành công những ca khó trong vô sinh nam như: không tinh trùng, không phóng tinh, xuất tinh ngược, sau chấn thương đứt niệu đạo sau, liệt 2 chi dưới, …</li>
        <li>Ứng dụng các kĩ thuật, phương pháp tiên tiến nhất trong điều trị các bệnh lý liên quan tới Vô sinh – Hiếm muộn (Nam &amp; Nữ).</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.</p>
        <ul>
        <li>Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.</li>
        <li>Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.</li>
        </ul>
        <p><strong>SCHWIND AMRI 1050RS</strong></p>
        <p><img src="https://bookingcare.vn/files/image/2018/05/11/113803schwindamaris-1050rs.jpg" alt="img"></p>
        <p><strong>MÁY VISUMAX</strong>
        <img src="https://bookingcare.vn/files/image/2018/05/18/092339may-visumax-benh-vien-mat-quoc-te-dnd-128-bui-thi-xuan-hn-0969128128.png" alt="img"></p>
        `,
        contentMarkdown: `**GIỚI THIỆU**
 
        **Địa chỉ:**  431 Tam Trinh (Lô 01-8A cụm tiểu thủ công nghiệp Hai Bà Trưng),Phường Hoàng Văn Thụ, Quận Hoàng Mai, Hà Nội
        
        **Thời gian làm việc:** Thứ 2 đến Chủ Nhật
        
        * Sáng: Từ 7h30 – 12h00
        * Chiều: Từ 13h30 – 16h30
        
        Bệnh viện Nam Học và Hiếm Muộn Hà Nội (Andrology And Fertility Hospital Of Hanoi) thành lập năm 2009 với chức năng điều trị bệnh lý Nam khoa & Y học giới tính, Sức khỏe sinh sản và Vô sinh – Hiếm muộn (cho cả nam và nữ). Bệnh viện là cơ sở y tế ngoài công lập đầu tiên ở Miền Bắc được cấp phép thực hiện Kỹ thuật Thụ tinh trong ống nghiệm (TTTON).
        
        Từ 2009 đến nay, Bệnh viện đã đón tiếp hàng chục nghìn lượt bệnh nhân tới khám, chữa bệnh và hàng ngàn cặp vợ chồng thực hiện kĩ thuật TTTON với tỷ lệ thành công rất cao (tương đương với tỷ lệ của các trung tâm thụ tinh ống nghiệm lớn trong nước và quốc tế) nhờ các phác đồ điều trị và can thiệp y khoa thích hợp.
        
        ![img](https://bookingcare.vn/files/blog/2021/04/15/104133-bv-nam-hoc-hn.jpg)
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        **Nam khoa & Y học giới tính**
        
        * Rối loạn cương dương; rối loạn khoái cảm; rối loạn xuất tinh; khó quan hệ tình dục; cương cứng liên tục; …
        * Dị tật bẩm sinh hệ sinh sản: bất thường về nhiễm sắc thể; lưỡng giới; tinh hoàn ẩn, lạc chỗ; dương vật dị dạng: vẹo, xoắn, lệch lỗ tiểu, …
        * Bệnh lý hệ sinh sản: chấn thương gẫy dương vật, xoắn tinh hoàn, tràn dịch màng tinh hoàn, khối u, viêm nhiễm bộ phận sinh dục, …
        * Điều trị giãn tĩnh mạch tinh – nguyên nhân hàng đầu dẫn đến vô sinh nam.
        * Khám và điều trị các bệnh lý về rối loạn sinh lý tình dục: rối loạn cảm xúc tình dục, lãnh cảm tình dục, …
        
        **Sức khỏe sinh sản**
        
        * Kiểm tra sức khỏe sinh sản; tư vấn kế hoạch thụ thai thành công.
        * Vô sinh nam: không tinh trùng (vô tinh); tinh trùng ít, chết, dị dạng; không ống dẫn tinh; tắc ống dẫn tinh; rối loạn nội tiết; rối loạn sinh tinh; …
        * Vô sinh nữ: rối loạn nội tiết, không phóng noãn, suy buồng trứng sớm, tắc ống dẫn trứng, …
        * Phẫu thuật điều trị các bệnh lý phụ khoa: tạo hình vòi trứng, thông tắc vòi trứng, u nang buồng trứng, u xơ tử cung, polyp tử cung, …
        * Phẫu thuật điều trị các bệnh lý nam khoa: nối ống dẫn tinh sau triệt sản, giãn tĩnh mạch tinh, tinh hoàn lạc chỗ, …
        * Phẫu thuật tạo hình hệ sinh sản cả Nam và Nữ.
        * Vô sinh – Hiếm muộn (Nam & Nữ)
        
        
        **Khám, điều trị, phẫu thuật các bệnh lý vô sinh nam và vô sinh nữ.**
        * Kích thích buồng trứng bằng phác đồ chuẩn, hiện đại, hiệu quả cao nhất.
        * Thực hiện Hỗ trợ sinh sản: Thụ tinh nhân tạo (IUI) & Thụ tinh trong ống nghiệm (IVF, ICSI).
        * Ngân hàng tinh trùng (Sperm Bank),Ngân hàng phôi sẵn sàng cung cấp cho người có nhu cầu và nhận của người hiến vì mục đích nhân đạo, …
        * Điều trị thành công những ca khó trong vô sinh nam như: không tinh trùng, không phóng tinh, xuất tinh ngược, sau chấn thương đứt niệu đạo sau, liệt 2 chi dưới, …
        * Ứng dụng các kĩ thuật, phương pháp tiên tiến nhất trong điều trị các bệnh lý liên quan tới Vô sinh – Hiếm muộn (Nam & Nữ).
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.
        
        * Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.
        * Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.
        
        **SCHWIND AMRI 1050RS**
        
        ![img](https://bookingcare.vn/files/image/2018/05/11/113803schwindamaris-1050rs.jpg)
        
        **MÁY VISUMAX**
        ![img](https://bookingcare.vn/files/image/2018/05/18/092339may-visumax-benh-vien-mat-quoc-te-dnd-128-bui-thi-xuan-hn-0969128128.png)`,
        description: "",
        doctorId: 0,
        specialtyId: 0,
        clinicId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<p><strong>GIỚI THIỆU</strong></p>
        <p><strong>Địa chỉ:</strong>  126 – 128 Bùi Thị Xuân, quận Hai Bà Trưng, Hà Nội</p>
        <p><strong>Thời gian làm việc:</strong> Thứ 2 đến Chủ Nhật</p>
        <ul>
        <li>Sáng: Từ 7h30 – 12h00</li>
        <li>Chiều: Từ 13h30 – 16h30</li>
        </ul>
        <p>Bệnh viện Mắt quốc tế DND là bệnh viện chuyên khoa, vận hành theo mô hình quốc tế hiện đại. Bệnh viện ra đời từ năm 2011 với mục tiêu trở thành Bệnh viện chuyên khoa sâu với:</p>
        <ul>
        <li>Hệ thống máy móc, trang thiết bị khám và điều trị đồng bộ, hiện đại.</li>
        <li>Đội ngũ chuyên gia, bác sĩ trên 30 năm kinh nghiệm</li>
        <li>Hợp tác với các Trung tâm nhãn khoa lớn trên thế giới của Mỹ, Singapore và Canada trong chẩn đoán và điều trị</li>
        <li>Dịch vụ chăm sóc chuyên nghiệp, phục vụ tận tâm</li>
        <li>Dữ liệu được chuẩn hóa và quản lý toàn diện</li>
        </ul>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p>Bệnh viện có thế mạnh chẩn đoán và điều trị về các vấn đề:</p>
        <ul>
        <li>Bong võng mạc</li>
        <li>Thoái hóa võng mạc</li>
        <li>Thoái hóa dịch kính võng mạc</li>
        <li>Bệnh võng mạc đái tháo đường</li>
        <li>Bệnh thoái hóa hoàng điểm tuổi già</li>
        <li>Các bệnh võng mạc trong các bệnh lý toàn thân</li>
        <li>Viêm màng bồ đào</li>
        <li>Viêm nội nhãn</li>
        <li>Xuất huyết dịch kính</li>
        </ul>
        <p><strong>Chấn thương</strong></p>
        <ul>
        <li>Chấn thương mắt</li>
        <li>Chấn thương mi</li>
        <li>Chấn thương lệ đạo</li>
        <li>Dị vật kết giác mạc</li>
        <li>Dị vật nội nhãn</li>
        <li></li>
        </ul>
        <p><strong>Các bệnh lí khác về mắt</strong></p>
        <ul>
        <li>Quặm mi</li>
        <li>Sa mí mắt</li>
        <li>Viêm kết mạc</li>
        <li>Lác mắt</li>
        <li>Mộng thịt</li>
        <li>Song thị</li>
        <li>Viêm giác mạc</li>
        <li>Viêm mi mắt</li>
        <li>Bong võng mạc</li>
        <li>Rách võng mạc</li>
        <li>Đục thủy tinh thể</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.</p>
        <ul>
        <li>Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.</li>
        <li>Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.</li>
        </ul>
        <p><strong>SCHWIND AMRI 1050RS</strong></p>
        <p><img src="https://bookingcare.vn/files/image/2018/05/11/113803schwindamaris-1050rs.jpg" alt="img"></p>
        <p><strong>MÁY VISUMAX</strong>
        <img src="https://bookingcare.vn/files/image/2018/05/18/092339may-visumax-benh-vien-mat-quoc-te-dnd-128-bui-thi-xuan-hn-0969128128.png" alt="img"></p>
        `,
        contentMarkdown: `**GIỚI THIỆU**
 
        **Địa chỉ:**  126 – 128 Bùi Thị Xuân, quận Hai Bà Trưng, Hà Nội
        
        **Thời gian làm việc:** Thứ 2 đến Chủ Nhật
        
        * Sáng: Từ 7h30 – 12h00
        * Chiều: Từ 13h30 – 16h30
        
        Bệnh viện Mắt quốc tế DND là bệnh viện chuyên khoa, vận hành theo mô hình quốc tế hiện đại. Bệnh viện ra đời từ năm 2011 với mục tiêu trở thành Bệnh viện chuyên khoa sâu với:
        
        * Hệ thống máy móc, trang thiết bị khám và điều trị đồng bộ, hiện đại.
        * Đội ngũ chuyên gia, bác sĩ trên 30 năm kinh nghiệm
        * Hợp tác với các Trung tâm nhãn khoa lớn trên thế giới của Mỹ, Singapore và Canada trong chẩn đoán và điều trị
        * Dịch vụ chăm sóc chuyên nghiệp, phục vụ tận tâm
        * Dữ liệu được chuẩn hóa và quản lý toàn diện
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        Bệnh viện có thế mạnh chẩn đoán và điều trị về các vấn đề:
        
        * Bong võng mạc
        * Thoái hóa võng mạc
        * Thoái hóa dịch kính võng mạc
        * Bệnh võng mạc đái tháo đường
        * Bệnh thoái hóa hoàng điểm tuổi già
        * Các bệnh võng mạc trong các bệnh lý toàn thân
        * Viêm màng bồ đào
        * Viêm nội nhãn
        * Xuất huyết dịch kính
        
        **Chấn thương**
        
        * Chấn thương mắt
        * Chấn thương mi
        * Chấn thương lệ đạo
        * Dị vật kết giác mạc
        * Dị vật nội nhãn
        * 
        **Các bệnh lí khác về mắt**
        
        * Quặm mi
        * Sa mí mắt
        * Viêm kết mạc
        * Lác mắt
        * Mộng thịt
        * Song thị
        * Viêm giác mạc
        * Viêm mi mắt
        * Bong võng mạc
        * Rách võng mạc
        * Đục thủy tinh thể
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện Mắt Quốc tế DND là bệnh viện chuyên khoa mắt hiện đại với hệ thống trang thiết bị máy khám, điều trị tân tiến.
        
        * Hệ thống máy khám và chẩn đoán hình ảnh thông qua máy đo bản đồ giác mạc (Obscan II, Atlas, Pentacam),máy chụp cắt lớp bán phần trước (OCT),máy đo cơ sinh học giác mạc (ORA) giúp đánh giá được chất lượng và hình thái giác mạc trên từng mắt của bệnh nhân.
        * Hệ thống máy mổ gồm 5 máy thế hệ mới trong ngành nhãn khoa: Visumax, MEL 90, Zeimer, Amaris 1050 RS cho phép bác sĩ phẫu thuật có thêm sự lựa chọn phù hợp cho từng bệnh nhân với những đặc thù riêng mang lại hiệu quả.
        
        **SCHWIND AMRI 1050RS**
        
        ![img](https://bookingcare.vn/files/image/2018/05/11/113803schwindamaris-1050rs.jpg)
        
        **MÁY VISUMAX**
        ![img](https://bookingcare.vn/files/image/2018/05/18/092339may-visumax-benh-vien-mat-quoc-te-dnd-128-bui-thi-xuan-hn-0969128128.png)`,
        description: "",
        doctorId: 0,
        specialtyId: 0,
        clinicId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h3>Dị ứng miễn dịch</h3>
        <p><strong>Bác sĩ Dị ứng Miễn dịch giỏi</strong></p>
        <p>Danh sách các giáo sư, bác sĩ chuyên khoa Dị ứng miễn dịch giỏi:</p>
        <ul>
        <li>
        <p>Các bác sĩ uy tín đầu ngành chuyên khoa Dị ứng miễn dịch đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Đại học Y dược 1 TP.HCM, Bệnh viện E,...</p>
        </li>
        <li>
        <p>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội dị ứng miễn dịch châu Âu, Hội Hen – Dị ứng - Miễn dịch Lâm sàng TPHCM...</p>
        </li>
        </ul>
        <p><strong>Dị ứng</strong></p>
        <ul>
        <li>
        <p>Dị ứng thuốc, Phản ứng quá mẫn với Vacxin</p>
        </li>
        <li>
        <p>Hen phế quản</p>
        </li>
        <li>
        <p>Mày đay, Dị ứng thức ăn, Dị ứng do côn trùng đốt</p>
        </li>
        <li>
        <p>Viêm mũi dị ứng, Viêm kết mạc dị ứng, Viêm da cơ địa</p>
        </li>
        </ul>
        <p><strong>Miễn dịch</strong></p>
        <ul>
        <li>Lupus ban đỏ hệ thống, Xơ cứng bì hệ thống</li>
        <li>Viêm da cơ, viêm đa cơ, Bệnh mô liên kết hỗn hợp</li>
        <li>Hội chứng kháng Phospholipid</li>
        <li>Viêm mạch Schoenlein-Henoch, Viêm gan tự miễn</li>
        </ul>
        `,
        contentMarkdown: `
        ### Dị ứng miễn dịch
        **Bác sĩ Dị ứng Miễn dịch giỏi**
        
        Danh sách các giáo sư, bác sĩ chuyên khoa Dị ứng miễn dịch giỏi:
        
        * Các bác sĩ uy tín đầu ngành chuyên khoa Dị ứng miễn dịch đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Đại học Y dược 1 TP.HCM, Bệnh viện E,...
        
        * Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội dị ứng miễn dịch châu Âu, Hội Hen – Dị ứng - Miễn dịch Lâm sàng TPHCM...
        
        **Dị ứng**
        
        * Dị ứng thuốc, Phản ứng quá mẫn với Vacxin
        * Hen phế quản
        
        * Mày đay, Dị ứng thức ăn, Dị ứng do côn trùng đốt
        * Viêm mũi dị ứng, Viêm kết mạc dị ứng, Viêm da cơ địa
        
        **Miễn dịch**
        
        * Lupus ban đỏ hệ thống, Xơ cứng bì hệ thống
        * Viêm da cơ, viêm đa cơ, Bệnh mô liên kết hỗn hợp
        * Hội chứng kháng Phospholipid
        * Viêm mạch Schoenlein-Henoch, Viêm gan tự miễn`,
        description: "",
        doctorId: 0,
        clinicId: 0,
        specialtyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h2>Cơ Xương Khớp</h2>
        <p><strong>Bác sĩ Cơ Xương Khớp giỏi</strong>
        Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li>
        <li>Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội</li>
        <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</li>
        <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>
        </ul>
        <p><strong>Bệnh Cơ Xương Khớp</strong></p>
        <ul>
        <li>Gout</li>
        <li>Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ</li>
        <li>Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân</li>
        <li>Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai</li>
        <li>Loãng xương, đau nhức xương</li>
        <li>Viêm xương, gai xương</li>
        <li>Viêm cơ, Teo cơ, chứng đau mỏi cơ</li>
        <li>Yếu cơ, Loạn dưỡng cơ</li>
        <li>Các chấn thương về cơ, xương, khớp</li>
        <li>...</li>
        </ul>
        `,
        contentMarkdown: `## Cơ Xương Khớp
        **Bác sĩ Cơ Xương Khớp giỏi**
        Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:
        
        * Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm
        * Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội
        * Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.
        * Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...
        * Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...
        
        **Bệnh Cơ Xương Khớp**
        * Gout
        * Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ
        * Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân
        * Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai
        * Loãng xương, đau nhức xương
        * Viêm xương, gai xương
        * Viêm cơ, Teo cơ, chứng đau mỏi cơ
        * Yếu cơ, Loạn dưỡng cơ
        * Các chấn thương về cơ, xương, khớp
        * ...`,
        description: "",
        doctorId: 0,
        clinicId: 0,
        specialtyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h2>Tim mạch</h2>
        <p><strong>Bác sĩ tim mạch giỏi</strong></p>
        <p><strong>Danh dách các bác sĩ tim mạch uy tín đầu ngành tại Việt Nam:</strong></p>
        <ul>
        <li>Các chuyên gia được đào tạo bài bản về chuyên ngành Tim mạch tại các trường đại học trong nước và quốc tế.</li>
        <li>Các giáo sư, phó giáo sư nghiên cứu và giảng dạy tại Đại học Y Hà Nội</li>
        <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Viện Tim Mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh Viện E, Bệnh Viện Tim Hà Nội</li>
        <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Tim Mạch Việt Nam</li>
        <li>Đạt danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>
        </ul>
        <p><strong>Khám tư vấn tim mạch</strong></p>
        <ul>
        <li>Khó thở, Đau ngực, đau tim</li>
        <li>Tăng huyết áp, hạ huyết áp</li>
        <li>Rối loạn mỡ máu, cao huyết áp, chóng mặt</li>
        <li>Bệnh van tim (Hẹp hở van tim), Hẹp động mạch chủ</li>
        <li>Cảm giác hồi hộp, tim đập nhanh</li>
        <li>Tim bẩm sinh, có tiền sử bệnh tim to, tiền sử tai biến</li>
        <li>Đã đặt stent tim, nong động mạch vành</li>
        <li>Giãn tĩnh mạch chân</li>
        <li>...</li>
        </ul>
        `,
        contentMarkdown: `## Tim mạch
        **Bác sĩ tim mạch giỏi**
        
        **Danh dách các bác sĩ tim mạch uy tín đầu ngành tại Việt Nam:**
        
        * Các chuyên gia được đào tạo bài bản về chuyên ngành Tim mạch tại các trường đại học trong nước và quốc tế.
        * Các giáo sư, phó giáo sư nghiên cứu và giảng dạy tại Đại học Y Hà Nội
        * Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Viện Tim Mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh Viện E, Bệnh Viện Tim Hà Nội
        * Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Tim Mạch Việt Nam
        * Đạt danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...
        
        **Khám tư vấn tim mạch**
        
        * Khó thở, Đau ngực, đau tim
        * Tăng huyết áp, hạ huyết áp
        * Rối loạn mỡ máu, cao huyết áp, chóng mặt
        * Bệnh van tim (Hẹp hở van tim), Hẹp động mạch chủ
        * Cảm giác hồi hộp, tim đập nhanh   
        * Tim bẩm sinh, có tiền sử bệnh tim to, tiền sử tai biến   
        * Đã đặt stent tim, nong động mạch vành
        * Giãn tĩnh mạch chân   
        * ...`,
        description: "",
        doctorId: 0,
        clinicId: 0,
        specialtyId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h2>Chuyên khoa Mắt</h2>
        <p><strong>Bác sĩ Chuyên khoa Mắt</strong></p>
        <p>Hệ thống BookingCare cung cấp thông tin và lịch khám của các bác sĩ uy tín đầu ngành tại Việt Nam.</p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Mắt tại Hà Nội.</li>
        <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Mắt Trung ương, Viện Y học Hàng không - Không quân, Bệnh viện Mắt Quốc tế DND...</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...</li>
        </ul>
        <p><strong>Các bệnh về mắt</strong>
        T</p>
        <ul>
        <li>ật khúc xạ</li>
        <li>Cận thị</li>
        <li>Nhược thị</li>
        <li>Viễn thị</li>
        <li>Lão thị</li>
        <li>Loạn thị</li>
        </ul>
        <p><strong>Các rối loạn về mắt</strong></p>
        <ul>
        <li>Hội chứng khô mắt</li>
        <li>Rối loạn ở hốc mắt</li>
        <li>Rối loạn tuyến lệ</li>
        <li>Tăng nhãn áp</li>
        <li>Các bệnh lí khác về mắt</li>
        <li>Lác mắt</li>
        <li>Viêm giác mạc</li>
        <li>Đục thủy tinh thể</li>
        <li>Dịch kính võng mạc</li>
        <li>Bong võng mạc</li>
        <li>Bệnh thoái hóa hoàng điểm tuổi già</li>
        </ul>
        `,
        contentMarkdown: `
        ## Chuyên khoa Mắt
        
        **Bác sĩ Chuyên khoa Mắt**
        
        Hệ thống BookingCare cung cấp thông tin và lịch khám của các bác sĩ uy tín đầu ngành tại Việt Nam.
        * Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Mắt tại Hà Nội.
        * Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Mắt Trung ương, Viện Y học Hàng không - Không quân, Bệnh viện Mắt Quốc tế DND...
        * Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...
        
        **Các bệnh về mắt**
        T
        * ật khúc xạ
        * Cận thị
        * Nhược thị
        * Viễn thị
        * Lão thị
        * Loạn thị
        
        **Các rối loạn về mắt**
        * Hội chứng khô mắt
        * Rối loạn ở hốc mắt
        * Rối loạn tuyến lệ
        * Tăng nhãn áp
        * Các bệnh lí khác về mắt
        * Lác mắt
        * Viêm giác mạc
        * Đục thủy tinh thể
        * Dịch kính võng mạc
        * Bong võng mạc
        * Bệnh thoái hóa hoàng điểm tuổi già`,
        description: "",
        doctorId: 0,
        clinicId: 0,
        specialtyId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h2>Sức khỏe tâm thần</h2>
        <p><strong>Bác sĩ về Sức khỏe Tâm thần giỏi</strong></p>
        <p>Danh sách các giáo sư, bác sĩ chuyên khoa Sức khỏe tâm thần giỏi:</p>
        <ul>
        <li>Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Sức khỏe tâm thần đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Tâm thần Trung ương, Bệnh viện Chợ Rẫy, Bệnh viện Lão khoa...</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.</li>
        </ul>
        <p><strong>Bác sĩ khám -Tư vấn - Điều trị</strong></p>
        <ul>
        <li>Mất ngủ, Rối loạn giấc ngủ</li>
        <li>Trầm cảm, Căng thẳng, stress</li>
        <li>Tâm thần phân liệt, Bệnh hoang tưởng</li>
        <li>Rối loạn cảm xúc , Rối loạn căng thẳng sau chấn thương tâm lý</li>
        <li>Rối loạn lo âu, Rối loạn lưỡng cực, Rối loạn nhân cách</li>
        <li>Tư vấn và tạo điều kiện cho bệnh nhân tái thích ứng xã hội</li>
        </ul>
        <p><strong>Một số triệu chứng, biểu hiện</strong></p>
        <ul>
        <li>Ảo giác, Hoang tưởng, Nói cười một mình</li>
        <li>Bi quan, Bồn chồn, Buồn rầu, Hoảng hốt</li>
        <li>Khó tập trung tâm trí, Nhầm lẫn tư duy</li>
        <li>Lo âu, Lo lắng</li>
        <li>Rối loạn giấc ngủ</li>
        <li>Sợ hãi, Sợ một mình, Sợ nơi đông người</li>
        <li>Xa lánh mọi người, Ý nghĩ kì lạ</li>
        </ul>
        `,
        contentMarkdown: `
        ## Sức khỏe tâm thần
        
        **Bác sĩ về Sức khỏe Tâm thần giỏi**
        
        Danh sách các giáo sư, bác sĩ chuyên khoa Sức khỏe tâm thần giỏi:
        * Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Sức khỏe tâm thần đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Tâm thần Trung ương, Bệnh viện Chợ Rẫy, Bệnh viện Lão khoa...
        * Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.
        
        **Bác sĩ khám -Tư vấn - Điều trị**
        * Mất ngủ, Rối loạn giấc ngủ
        * Trầm cảm, Căng thẳng, stress
        * Tâm thần phân liệt, Bệnh hoang tưởng
        * Rối loạn cảm xúc , Rối loạn căng thẳng sau chấn thương tâm lý 
        * Rối loạn lo âu, Rối loạn lưỡng cực, Rối loạn nhân cách
        * Tư vấn và tạo điều kiện cho bệnh nhân tái thích ứng xã hội
        
        **Một số triệu chứng, biểu hiện**
        
        * Ảo giác, Hoang tưởng, Nói cười một mình
        * Bi quan, Bồn chồn, Buồn rầu, Hoảng hốt
        * Khó tập trung tâm trí, Nhầm lẫn tư duy
        * Lo âu, Lo lắng
        * Rối loạn giấc ngủ
        * Sợ hãi, Sợ một mình, Sợ nơi đông người
        * Xa lánh mọi người, Ý nghĩ kì lạ`,
        description: "",
        doctorId: 0,
        clinicId: 0,
        specialtyId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        contentHtml: `<h2>Y học Cổ truyền</h2>
        <p>Bác sĩ Y học Cổ truyền giỏi</p>
        <p><strong>Danh sách các bác sĩ Y học Cổ truyền uy tín đầu ngành tại Việt Nam:</strong></p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Y học Cổ truyền</li>
        <li>Các bác sĩ đã, đang công tác tại chuyên Khoa Y học Cổ truyền - Bệnh viện Y học Cổ truyền Trung ương, Bệnh viện Bạch Mai, Thanh Nhàn..</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,..</li>
        </ul>
        <p><strong>Tư vấn, khám và điều trị các vấn đề:</strong></p>
        <ul>
        <li>Bệnh lý thần kinh: đau đầu, mất ngủ, suy nhược thần kinh...</li>
        <li>Bệnh lý cơ xương khớp: đau mỏi tay chân, thoái hóa khớp, viêm khớp...</li>
        <li>Bệnh lý tim mạch: Tăng huyết áp, huyết áp thấp, đau thắt ngực...</li>
        <li>Bệnh lý đường tiêu hóa: đau bụng, rối loạn chức năng tiêu hóa...</li>
        </ul>
        <h2></h2>
        `,
        contentMarkdown: `
        ## Y học Cổ truyền
        
        Bác sĩ Y học Cổ truyền giỏi
        
        **Danh sách các bác sĩ Y học Cổ truyền uy tín đầu ngành tại Việt Nam:**
        * Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Y học Cổ truyền
        * Các bác sĩ đã, đang công tác tại chuyên Khoa Y học Cổ truyền - Bệnh viện Y học Cổ truyền Trung ương, Bệnh viện Bạch Mai, Thanh Nhàn..
        * Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,..
        
        **Tư vấn, khám và điều trị các vấn đề:**
        
        * Bệnh lý thần kinh: đau đầu, mất ngủ, suy nhược thần kinh...
        * Bệnh lý cơ xương khớp: đau mỏi tay chân, thoái hóa khớp, viêm khớp...
        * Bệnh lý tim mạch: Tăng huyết áp, huyết áp thấp, đau thắt ngực...
        * Bệnh lý đường tiêu hóa: đau bụng, rối loạn chức năng tiêu hóa...
        
        ## 
        `,
        description: "",
        doctorId: 0,
        clinicId: 0,
        specialtyId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h2>Cột sống</h2>
        <p>Bác sĩ Chuyên khoa Cột sống</p>
        <p><strong>Danh sách các bác sĩ Cột sống uy tín đầu ngành tại Việt Nam.</strong></p>
        <ul>
        <li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Thần kinh - Cột sống - Xương khớp tại Hà Nội</li>
        <li>Các giáo sư, tiến sĩ, bác sĩ là giảng viên Đại học Y khoa Hà Nội, Học viện Quân Y.</li>
        <li>Các bác sĩ đã, đang công tác tại chuyên Khoa Thần Kinh, Cột sống, Xương Khớp - Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Trung ương Quân đội 108, Bệnh viện 103...</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>
        </ul>
        <p><strong>Bệnh Thần kinh - Cột sống</strong></p>
        <ul>
        <li>Đau cột sống, đau thắt lưng</li>
        <li>Chấn thương cột sống</li>
        <li>Cột sống bị đau, sưng, cong, vẹo</li>
        <li>Đau mỏi cổ vai gáy, bả vai</li>
        <li>Đau tê mông xuống chân</li>
        <li>Phồng đĩa đệm</li>
        <li>Tê bì tay chân</li>
        <li>Thóa hóa đốt sống</li>
        <li>Thoái hóa L4, L5</li>
        <li>Thoát vị đĩa đệm</li>
        <li>Vôi hóa cột sống</li>
        <li>Xẹp cột sống</li>
        <li>...</li>
        </ul>
        `,
        contentMarkdown: `
        ## Cột sống
        
        Bác sĩ Chuyên khoa Cột sống
        
        **Danh sách các bác sĩ Cột sống uy tín đầu ngành tại Việt Nam.**
        
        * Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Thần kinh - Cột sống - Xương khớp tại Hà Nội
        * Các giáo sư, tiến sĩ, bác sĩ là giảng viên Đại học Y khoa Hà Nội, Học viện Quân Y.
        * Các bác sĩ đã, đang công tác tại chuyên Khoa Thần Kinh, Cột sống, Xương Khớp - Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Trung ương Quân đội 108, Bệnh viện 103...
        * Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...
        
        **Bệnh Thần kinh - Cột sống**
        
        * Đau cột sống, đau thắt lưng
        * Chấn thương cột sống
        * Cột sống bị đau, sưng, cong, vẹo
        * Đau mỏi cổ vai gáy, bả vai
        * Đau tê mông xuống chân
        * Phồng đĩa đệm
        * Tê bì tay chân
        * Thóa hóa đốt sống
        * Thoái hóa L4, L5
        * Thoát vị đĩa đệm
        * Vôi hóa cột sống
        * Xẹp cột sống
        * ...
        `,
        description: "",
        doctorId: 0,
        clinicId: 0,
        specialtyId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentHtml: `<h2>Thần kinh</h2>
        <p>Bác sĩ Thần kinh giỏi</p>
        <p><strong>Danh sách các giáo sư, bác sĩ chuyên khoa Thần kinh giỏi:</strong></p>
        <ul>
        <li>Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Thần kinh đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện 108, Bệnh viện Đại học Y Hà Nội, Bệnh viện 103.</li>
        <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội Thần kinh Việt Nam, Hội Phẫu thuật Thần kinh...</li>
        <li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.</li>
        </ul>
        <p><strong>Khám bệnh chuyên khoa Thần kinh</strong></p>
        <ul>
        <li>Bại Não</li>
        <li>Đau đầu, chóng mặt, buồn nôn</li>
        <li>Bệnh Pakison, bệnh tiền đình</li>
        <li>Bị co cơ, căng dây thần kinh</li>
        <li>Động kinh, có những cơn vãng ý thức</li>
        <li>Bị tê bì nửa mặt, chèn dây thần kinh</li>
        <li>Bồn chồn, lo lắng, hồi hộp, chân tay run</li>
        <li>Có dấu hiệu tăng động</li>
        <li>Co rút cổ, đau đầu với mặt, chân tay, vã mồ hôi</li>
        <li>Chấn thương đầu, dây thần kinh</li>
        <li>...</li>
        </ul>
        `,
        contentMarkdown: `
        ## Thần kinh
        
        Bác sĩ Thần kinh giỏi
        
        **Danh sách các giáo sư, bác sĩ chuyên khoa Thần kinh giỏi:**
        
        * Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Thần kinh đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện 108, Bệnh viện Đại học Y Hà Nội, Bệnh viện 103.
        * Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội Thần kinh Việt Nam, Hội Phẫu thuật Thần kinh...
        * Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.
        
        **Khám bệnh chuyên khoa Thần kinh**
        * Bại Não   
        * Đau đầu, chóng mặt, buồn nôn   
        * Bệnh Pakison, bệnh tiền đình   
        * Bị co cơ, căng dây thần kinh       
        * Động kinh, có những cơn vãng ý thức   
        * Bị tê bì nửa mặt, chèn dây thần kinh
        * Bồn chồn, lo lắng, hồi hộp, chân tay run   
        * Có dấu hiệu tăng động    
        * Co rút cổ, đau đầu với mặt, chân tay, vã mồ hôi   
        * Chấn thương đầu, dây thần kinh
        * ...`,
        description: "",
        doctorId: 0,
        clinicId: 0,
        specialtyId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("markdowns", null, {});
  },
};
