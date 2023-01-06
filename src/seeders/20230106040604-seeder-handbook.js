"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("handbooks", [
      {
        name: "Nỗi lo bệnh gút",
        doctorId: 1,
        descriptionHtml: `<h3>Bệnh Gout đang ngày càng trẻ hóa, nguyên nhân đến từ những thói quen sống hiện đại. Bài viết này sẽ giúp bạn tìm địa chỉ xét nghiệm Gout uy tín ở Hà Nội phù hợp với nhu cầu của mình.</h3>
        <blockquote>
        <p>BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 150 bệnh viện - phòng khám uy tín, hơn 1,000 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.</p>
        </blockquote>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2022/08/18/102655-5-dia-chi.png" alt="img"></p>
        <blockquote>
        <p>Bệnh Gout đang ngày càng trẻ hóa, nguyên nhân đến từ những thói quen sống hiện đại. Bài viết này sẽ giúp bạn tìm địa chỉ xét nghiệm Gout uy tín ở Hà Nội phù hợp với nhu cầu của mình.</p>
        </blockquote>
        <h5></h5>
        <p>Gout là một trong những bệnh xương khớp phổ biến nhất, chiếm khoảng 1/3 tổng số lượng người bệnh đến khám các vấn đề về xương khớp. Việc thực hiện xét nghiệm giúp người bệnh sớm phát hiện bất thường, từ đó chẩn đoán, điều trị bệnh trước khi biến tướng các triệu chứng nặng hơn.</p>
        <hr>
        <p>Gout là một trong những bệnh về xương khớp phổ biến nhất. Điều đáng quan ngại là người mắc gout ngày càng trẻ hóa.</p>
        <hr>
        <hr>
        <p>Các tiêu chí để lựa chọn địa điểm xét nghiệm Gout (Uric)</p>
        <ol>
        <li>Dựa trên nhu cầu của khách hàng</li>
        </ol>
        <p>Nếu bạn biết rõ mình muốn xét nghiệm để tầm soát Gout, hãy lựa chọn các trung tâm xét nghiệm. Các đơn vị này sẽ thực hiện xét nghiệm mà không yêu cầu sự thăm khám từ bác sĩ. Ưu điểm của mô hình này là cho phép người bệnh kiểm tra sức khỏe định kỳ nhanh chóng, hiệu quả.
        Nếu bạn còn chưa rõ mình nên xét nghiệm gì, cần tư vấn chuyên sâu, kê đơn thuốc cũng như hướng dẫn cách sử dụng thuốc, hãy ghé phòng khám hay các bệnh viện, nơi có sự thăm khám trực tiếp của đội ngũ các bác sĩ.
        2. Chất lượng xét nghiệm của các đơn vị</p>
        <p>Khách hàng cần tìm kiếm các đơn vị có nhiều năm kinh nghiệm, có tiếng trong việc thực hiện các xét nghiệm Gout. Ngoài ra, để nâng cao tính chính xác, độ tin cậy của kết quả xét nghiệm trong chẩn đoán và điều trị tại các bệnh viện, cơ sở y tế, người bệnh nên tới các phòng xét nghiệm đảm bảo các tiêu chuẩn, chứng chỉ như ISO 15189, JCI hay CAP… và có trang bị hệ thống, máy móc xét nghiệm tiên tiến, hiện đại.</p>
        <ol start="3">
        <li>Giá xét nghiệm</li>
        </ol>
        <p>Khách hàng nên lựa chọn các đơn vị niêm yết công khai, rõ ràng và minh bạch giá xét nghiệm Gout cùng những phí dịch vụ kèm theo.</p>
        <ol start="4">
        <li>Chất lượng dịch vụ</li>
        </ol>
        <p>Người bệnh cần lưu tâm các đơn vị đã được các khách hành kiểm chứng và đánh giá tốt.</p>
        <p>Top 6 địa chỉ xét nghiệm Gout uy tín ở Hà Nội</p>
        <ol>
        <li>Trung tâm Xét nghiệm Y khoa Labhouse
        Địa chỉ: Tầng 2, tòa D1 - CT2 Khu đô thị mới Kim Văn - Kim Lũ, Đại Kim, Hoàng Mai, Hà Nội
        Thời gian làm việc: Thứ 2 - Chủ nhật: 7h00 - 21h00
        Trung tâm Xét nghiệm Y khoa Labhouse là một trong những đơn vị chuyên sâu về thực hiện xét nghiệm được nhiều bệnh viện, phòng khám, khách hàng tin tưởng lựa chọn thực hiện xét nghiệm.</li>
        </ol>
        <p>Theo BookingCare tìm hiểu, trung tâm Labhouse thực hiện hầu hết xét nghiệm cơ quan triệu chứng, trong đó có xét nghiệm Gout.</p>
        <p><img src="https://bookingcare.vn/files/blog/2022/08/18/095156-5-dia-chi-1.png?w=1000" alt="img"></p>
        `,
        descriptionMarkdown: `
        ### Bệnh Gout đang ngày càng trẻ hóa, nguyên nhân đến từ những thói quen sống hiện đại. Bài viết này sẽ giúp bạn tìm địa chỉ xét nghiệm Gout uy tín ở Hà Nội phù hợp với nhu cầu của mình.
        > BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 150 bệnh viện - phòng khám uy tín, hơn 1,000 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/08/18/102655-5-dia-chi.png)
        
        > Bệnh Gout đang ngày càng trẻ hóa, nguyên nhân đến từ những thói quen sống hiện đại. Bài viết này sẽ giúp bạn tìm địa chỉ xét nghiệm Gout uy tín ở Hà Nội phù hợp với nhu cầu của mình.
        
        
        ##### 
        Gout là một trong những bệnh xương khớp phổ biến nhất, chiếm khoảng 1/3 tổng số lượng người bệnh đến khám các vấn đề về xương khớp. Việc thực hiện xét nghiệm giúp người bệnh sớm phát hiện bất thường, từ đó chẩn đoán, điều trị bệnh trước khi biến tướng các triệu chứng nặng hơn.
        
        ---
        Gout là một trong những bệnh về xương khớp phổ biến nhất. Điều đáng quan ngại là người mắc gout ngày càng trẻ hóa. 
        
        ---
        ---
        Các tiêu chí để lựa chọn địa điểm xét nghiệm Gout (Uric)
        1. Dựa trên nhu cầu của khách hàng
        
        Nếu bạn biết rõ mình muốn xét nghiệm để tầm soát Gout, hãy lựa chọn các trung tâm xét nghiệm. Các đơn vị này sẽ thực hiện xét nghiệm mà không yêu cầu sự thăm khám từ bác sĩ. Ưu điểm của mô hình này là cho phép người bệnh kiểm tra sức khỏe định kỳ nhanh chóng, hiệu quả.
        Nếu bạn còn chưa rõ mình nên xét nghiệm gì, cần tư vấn chuyên sâu, kê đơn thuốc cũng như hướng dẫn cách sử dụng thuốc, hãy ghé phòng khám hay các bệnh viện, nơi có sự thăm khám trực tiếp của đội ngũ các bác sĩ.
        2. Chất lượng xét nghiệm của các đơn vị
        
        Khách hàng cần tìm kiếm các đơn vị có nhiều năm kinh nghiệm, có tiếng trong việc thực hiện các xét nghiệm Gout. Ngoài ra, để nâng cao tính chính xác, độ tin cậy của kết quả xét nghiệm trong chẩn đoán và điều trị tại các bệnh viện, cơ sở y tế, người bệnh nên tới các phòng xét nghiệm đảm bảo các tiêu chuẩn, chứng chỉ như ISO 15189, JCI hay CAP… và có trang bị hệ thống, máy móc xét nghiệm tiên tiến, hiện đại.
        
        3. Giá xét nghiệm
        
        Khách hàng nên lựa chọn các đơn vị niêm yết công khai, rõ ràng và minh bạch giá xét nghiệm Gout cùng những phí dịch vụ kèm theo. 
        
        4. Chất lượng dịch vụ
        
        Người bệnh cần lưu tâm các đơn vị đã được các khách hành kiểm chứng và đánh giá tốt.
        
        Top 6 địa chỉ xét nghiệm Gout uy tín ở Hà Nội
        1. Trung tâm Xét nghiệm Y khoa Labhouse
        Địa chỉ: Tầng 2, tòa D1 - CT2 Khu đô thị mới Kim Văn - Kim Lũ, Đại Kim, Hoàng Mai, Hà Nội
        Thời gian làm việc: Thứ 2 - Chủ nhật: 7h00 - 21h00
        Trung tâm Xét nghiệm Y khoa Labhouse là một trong những đơn vị chuyên sâu về thực hiện xét nghiệm được nhiều bệnh viện, phòng khám, khách hàng tin tưởng lựa chọn thực hiện xét nghiệm.
        
        Theo BookingCare tìm hiểu, trung tâm Labhouse thực hiện hầu hết xét nghiệm cơ quan triệu chứng, trong đó có xét nghiệm Gout.
        
        ![img](https://bookingcare.vn/files/blog/2022/08/18/095156-5-dia-chi-1.png?w=1000)

        `,
        image: "gut.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chi phí xét nghiệm gan có đắt?",
        doctorId: 1,
        descriptionHtml: `<h2>Giá xét nghiệm chức năng gan bao nhiêu? Có đắt không? Cập nhật bảng giá chi tiết</h2>
        <h3>Dưới đây BookingCare tổng hợp chi tiết danh mục và bảng giá xét nghiệm chức năng gan bao nhiêu tại các cơ sở uy tín để bạn đọc tham khảo.</h3>
        <blockquote>
        <p>BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 150 bệnh viện - phòng khám uy tín, hơn 1,000 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.</p>
        </blockquote>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2022/08/23/114221-5-dia-chi.png" alt="img"></p>
        <blockquote>
        <p>Dưới đây BookingCare tổng hợp chi tiết danh mục và bảng giá xét nghiệm chức năng gan bao nhiêu tại các cơ sở uy tín để bạn đọc tham khảo.</p>
        </blockquote>
        <p>Gan đóng vai trò quan trọng trong cơ thể con người. Do đó, làm xét nghiệm chức năng gan định kỳ là phương pháp giúp chẩn đoán các bệnh lý về gan cũng như xác định mức độ tổn thương của gan. Vậy giá xét nghiệm chức năng gan bao nhiêu? Liệu có đắt không?</p>
        <h4>Xét nghiệm chức năng gan là gì?</h4>
        <p>Xét nghiệm chức năng gan là một xét nghiệm để chẩn đoán và theo dõi các bệnh hoặc các tổn thương ở gan. Xét nghiệm này tiến hành đo nồng độ protein và enzym trong máu... từ đó xác định mức độ tổn thương của gan.</p>
        <h3>Xét nghiệm chức năng gan cho phép người bệnh theo dõi và phát hiện các bệnh hoặc các tổn thương ở gan kịp thời.</h3>
        <p><img src="https://bookingcare.vn/files/blog/2022/08/23/162116-5-dia-chi-1.png?w=1000" alt="img"></p>
        <blockquote>
        <p>Những chỉ số trong danh mục xét nghệm chức năng gan là gì?
        Chức năng sinh lý của gan rất phức tạp, chính vì thế các xét nghiệm kiểm tra chức năng gan cũng vô cùng phong phú. Các hạng mục kiểm tra chức năng gan hiện nay tương đối nhiều, chủ yếu gồm:</p>
        <ul>
        <li>Khảo sát chức năng tổng hợp: Protein máu, Thời gian Prothrombin, Thời gian Quick...</li>
        <li>Đánh giá chức năng bài tiết và khử độc: Phosphatase kiềm, Amoniac máu, 5’ Nucleotidase...</li>
        <li>Xét nghiệm HBsAg và kiểm tra viêm gan B: HBsAg, Anti – HBs, Anti – HBc...</li>
        <li>Kiểm tra định lượng virus: Anti HBe, DNS – HBV (định tính), DNA – HBV (định lượng)...</li>
        <li>Đánh giá tình trạng hoại tử gan: AST, ALT, Lactat dehydrogenase...</li>
        <li>Kiểm tra men gan: SGOT, SGPT, GGT, Bilirubin TT, GT...
        Cùng với các xét nghiệm trên, việc thực hiện siêu âm gan mật cũng cần được tiến hành để có kết quả chẩn đoán tối ưu.</li>
        </ul>
        </blockquote>
        <h3>Giá xét nghiệm chức năng gan bao nhiêu?</h3>
        <p>Theo khảo sát các đơn vị đối tác và khách hàng sử dụng dịch vụ mà BookingCare thực hiện, chi phí các xét nghiệm chức năng gan dao động từ 38.000 đến 590.000 VNĐ tùy theo xét nghiệm đơn lẻ các chỉ số hay gói kiểm tra tổng quát.</p>
        <p>Cần lưu ý đây chỉ là giá tham khảo của một số loại xét nghiệm nhất định, trường hợp tình trạng của người bệnh có chiều hướng xấu đi có thể phát sinh thêm một vài quy trình khám và xét nghiệm chức năng gan khiến chi phí tăng lên.
        <img src="https://bookingcare.vn/files/blog/2022/08/23/163311-5-dia-chi-2.png?w=1000" alt="img">
        Ngoài ra, còn rất nhiều yếu tố tác động tới chi phí xét nghiệm chức năng gan, bao gồm:</p>
        <p>Loại xét nghiệm:
        Để đánh giá một số bệnh lý về gan, các bác sĩ thường chỉ định thực hiện 3 xét nghiệm là:</p>
        <ol>
        <li>Đo hoạt độ ALT;</li>
        <li>Đo hoạt độ AST;</li>
        <li>Đo hoạt độ GGT;</li>
        </ol>
        <p>Tùy vào độ chuyên sâu cũng như yêu cầu kỹ thuật thực hiện phức tạp hơn, giá xét nghiệm cũng cao hơn.</p>
        <p>Số lượng xét nghiệm cần thực hiện:
        Có những người bệnh mà bác sĩ chỉ yêu cầu thực hiện 1 xét nghiệm đánh giá chức năng gan. Song, cũng có những khách hàng được chỉ định thực hiện nhiều xét nghiệm mới có đủ cơ sở để đưa ra chẩn đoán bệnh cuối cùng.</p>
        <p>Cơ sở thực hiện
        Các cơ sở y tế có danh tiếng tốt, nhiều năm kinh nghiệm trong thực hiện xét nghiệm cũng như đầu tư hệ thống máy móc thiết bị xét nghiệm hiện đại... sẽ có mức giá xét nghiệm chức năng gan cao hơn những cơ sở nhỏ lẻ.</p>
        <p>Có thể thấy, giá xét nghiệm gan được chi phối bởi nhiều yếu tố. Tuy nhiên, người bệnh cũng không cần quá lo lắng vì khi đến thăm khám, bác sĩ sẽ tư vấn và chỉ định làm xét nghiệm cần thiết mà không xét nghiệm tràn lan, giúp bạn tiết kiệm chi phí.</p>
        `,
        descriptionMarkdown: `
        ## Giá xét nghiệm chức năng gan bao nhiêu? Có đắt không? Cập nhật bảng giá chi tiết
        
        ### Dưới đây BookingCare tổng hợp chi tiết danh mục và bảng giá xét nghiệm chức năng gan bao nhiêu tại các cơ sở uy tín để bạn đọc tham khảo.
        
        
        > BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 150 bệnh viện - phòng khám uy tín, hơn 1,000 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/08/23/114221-5-dia-chi.png)
        
        > Dưới đây BookingCare tổng hợp chi tiết danh mục và bảng giá xét nghiệm chức năng gan bao nhiêu tại các cơ sở uy tín để bạn đọc tham khảo.
        
        Gan đóng vai trò quan trọng trong cơ thể con người. Do đó, làm xét nghiệm chức năng gan định kỳ là phương pháp giúp chẩn đoán các bệnh lý về gan cũng như xác định mức độ tổn thương của gan. Vậy giá xét nghiệm chức năng gan bao nhiêu? Liệu có đắt không?
        
        
        #### Xét nghiệm chức năng gan là gì?
        
        Xét nghiệm chức năng gan là một xét nghiệm để chẩn đoán và theo dõi các bệnh hoặc các tổn thương ở gan. Xét nghiệm này tiến hành đo nồng độ protein và enzym trong máu... từ đó xác định mức độ tổn thương của gan.
        
        
        ### Xét nghiệm chức năng gan cho phép người bệnh theo dõi và phát hiện các bệnh hoặc các tổn thương ở gan kịp thời.
        
        ![img](https://bookingcare.vn/files/blog/2022/08/23/162116-5-dia-chi-1.png?w=1000)
        
        >Những chỉ số trong danh mục xét nghệm chức năng gan là gì?
        Chức năng sinh lý của gan rất phức tạp, chính vì thế các xét nghiệm kiểm tra chức năng gan cũng vô cùng phong phú. Các hạng mục kiểm tra chức năng gan hiện nay tương đối nhiều, chủ yếu gồm:
        >* Khảo sát chức năng tổng hợp: Protein máu, Thời gian Prothrombin, Thời gian Quick...
        >* Đánh giá chức năng bài tiết và khử độc: Phosphatase kiềm, Amoniac máu, 5’ Nucleotidase...
        >* Xét nghiệm HBsAg và kiểm tra viêm gan B: HBsAg, Anti – HBs, Anti – HBc...
        >* Kiểm tra định lượng virus: Anti HBe, DNS – HBV (định tính), DNA – HBV (định lượng)...
        >* Đánh giá tình trạng hoại tử gan: AST, ALT, Lactat dehydrogenase...
        >* Kiểm tra men gan: SGOT, SGPT, GGT, Bilirubin TT, GT...
        Cùng với các xét nghiệm trên, việc thực hiện siêu âm gan mật cũng cần được tiến hành để có kết quả chẩn đoán tối ưu.
        
        
        ### Giá xét nghiệm chức năng gan bao nhiêu?
        
        Theo khảo sát các đơn vị đối tác và khách hàng sử dụng dịch vụ mà BookingCare thực hiện, chi phí các xét nghiệm chức năng gan dao động từ 38.000 đến 590.000 VNĐ tùy theo xét nghiệm đơn lẻ các chỉ số hay gói kiểm tra tổng quát.
        
        Cần lưu ý đây chỉ là giá tham khảo của một số loại xét nghiệm nhất định, trường hợp tình trạng của người bệnh có chiều hướng xấu đi có thể phát sinh thêm một vài quy trình khám và xét nghiệm chức năng gan khiến chi phí tăng lên.
        ![img](https://bookingcare.vn/files/blog/2022/08/23/163311-5-dia-chi-2.png?w=1000)
        Ngoài ra, còn rất nhiều yếu tố tác động tới chi phí xét nghiệm chức năng gan, bao gồm:
        
        Loại xét nghiệm:
        Để đánh giá một số bệnh lý về gan, các bác sĩ thường chỉ định thực hiện 3 xét nghiệm là: 
        
        1. Đo hoạt độ ALT;
        2. Đo hoạt độ AST;
        3. Đo hoạt độ GGT;
        
        Tùy vào độ chuyên sâu cũng như yêu cầu kỹ thuật thực hiện phức tạp hơn, giá xét nghiệm cũng cao hơn. 
        
        Số lượng xét nghiệm cần thực hiện:
        Có những người bệnh mà bác sĩ chỉ yêu cầu thực hiện 1 xét nghiệm đánh giá chức năng gan. Song, cũng có những khách hàng được chỉ định thực hiện nhiều xét nghiệm mới có đủ cơ sở để đưa ra chẩn đoán bệnh cuối cùng.
        
        Cơ sở thực hiện
        Các cơ sở y tế có danh tiếng tốt, nhiều năm kinh nghiệm trong thực hiện xét nghiệm cũng như đầu tư hệ thống máy móc thiết bị xét nghiệm hiện đại... sẽ có mức giá xét nghiệm chức năng gan cao hơn những cơ sở nhỏ lẻ.
        
        Có thể thấy, giá xét nghiệm gan được chi phối bởi nhiều yếu tố. Tuy nhiên, người bệnh cũng không cần quá lo lắng vì khi đến thăm khám, bác sĩ sẽ tư vấn và chỉ định làm xét nghiệm cần thiết mà không xét nghiệm tràn lan, giúp bạn tiết kiệm chi phí. 
        `,
        image: "gan.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Xét nghiệm tầm soát ung thư ở đâu? Gợi ý các địa chỉ uy tín tại Hà Nội`,
        doctorId: 2,
        descriptionHtml: `<h4>Trong bối cảnh hiện đại, việc xét nghiệm tầm soát ung thư được xem là phương án hiệu quả để bảo vệ sức khỏe.</h4>
        <blockquote>
        <p>BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 150 bệnh viện - phòng khám uy tín, hơn 1,000 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.</p>
        </blockquote>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2022/08/25/085554-5-dia-chi.png" alt="img"></p>
        <blockquote>
        <p>Trong bối cảnh hiện đại, việc xét nghiệm tầm soát ung thư được xem là phương án hiệu quả để bảo vệ sức khỏe.
        Trong bối cảnh tỷ lệ người mắc bệnh ung thư ngày càng gia tăng và có xu hướng trẻ hóa tại Việt Nam, việc xét nghiệm tầm soát ung thư được xem là phương án hiệu quả để bảo vệ sức khỏe.</p>
        </blockquote>
        <p>Tầm soát ung thư là công cụ phát hiện những thương tổn tiền ung thư hoặc ung thư giai đoạn sớm ở những người không có triệu chứng.
        Tiêu chí lựa chọn địa chỉ xét nghiệm tầm soát ung thư
        Để lựa chọn các địa chỉ đưa vào nội dung bài viết này, BookingCare đã dựa vào các tiêu chí sau đây:</p>
        <ul>
        <li>Đơn vị có đầy đủ hệ thống trang thiết bị xét nghiệm hiện đại từ các hãng thiết bị y tế uy tín hàng đầu thế giới như Abbott, Roche, Siemens, Hitachi, GE...</li>
        <li>Phòng xét nghiệm thực hiện theo quy trình một chiều với đầy đủ hệ thống bảo đảm yêu cầu khử khuẩn và vô trùng.</li>
        <li>Đội ngũ kỹ thuật viên, nhân viên, y bác sĩ được đào tạo bài bản, giàu chuyên môn và kinh nghiệm trong lĩnh vực xét nghiệm.</li>
        <li>Đạt các chứng chỉ về tiêu chuẩn chất lượng do các tổ chức có thẩm quyền chứng nhận như Viện Tiêu chuẩn chất lượng (Bộ Y tế) hoặc các tổ chức nước ngoài (Hiệp hội Bệnh học Hoa Kỳ - CAP).</li>
        <li>Nhận được nhiều phản hồi tích cực của người dùng về chất lượng dịch vụ xét nghiệm.</li>
        </ul>
        <hr>
        <p>Gợi ý các địa chỉ xét nghiệm tầm soát ung thư uy tín tại Hà Nội</p>
        <ol>
        <li>Trung tâm Xét nghiệm True Medicine
        Địa chỉ: 20 Ng. 4 P. Phương Mai, Phương Mai, Đống Đa, Hà Nội;
        Thời gian làm việc: Thứ 2 - Chủ nhật: 07:30 - 21:00;
        True Medicine là trung tâm xét nghiệm y khoa chuyên thực hiện các dịch vụ xét nghiệm, xét nghiệm tại nhà và được nhiều người dân thủ đô lựa chọn.
        <img src="https://bookingcare.vn/files/blog/2022/08/25/145654-5-dia-chi.png?w=1000" alt="img"></li>
        </ol>
        <p><strong>Vì sao khách hàng nên chọn lựa True Medicine?</strong></p>
        <p>True Medicine đã có gần 10 năm kinh nghiệm trong trong dịch vụ xét nghiệm tại nhà tại Hà Nội, với các gói xét nghiệm tổng quát, xét nghiệm sàng lọc ung thư...</p>
        <p>Tại đây sử dụng trang thiết bị là những máy móc hiện đại của Abbott, Bechman Coulter, Roche nhập khẩu từ Mỹ và Đức. Đội ngũ làm việc cũng có nhiều năm kinh nghiệm khi làm việc tại Bệnh viện Bạch Mai, bệnh viện Phụ sản Hà Nội...</p>
        <p>Để đảm bảo sự chính xác, đáng tin cậy và không nhầm lẫn giữa các mẫu. True Medicine tiên phong sử dụng phần mềm chuyên biệt Labcon nhằm quản lý kết quả xét nghiệm cho khách hàng.</p>
        <p>Ngoài ra, True Medicine còn được khách hàng ưu ái bởi quy trình xét nghiệm đơn giản, tiện lợi cùng với vài phút lấy mẫu xét nghiệm. Song, trung tâm cũng nhận được số ít phản hồi chưa hài lòng về việc chậm trễ trong gửi kết quả xét nghiệm.</p>
        `,
        descriptionMarkdown: `
        #### Trong bối cảnh hiện đại, việc xét nghiệm tầm soát ung thư được xem là phương án hiệu quả để bảo vệ sức khỏe.
        
        > BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 150 bệnh viện - phòng khám uy tín, hơn 1,000 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/08/25/085554-5-dia-chi.png)
        
        > Trong bối cảnh hiện đại, việc xét nghiệm tầm soát ung thư được xem là phương án hiệu quả để bảo vệ sức khỏe.
        Trong bối cảnh tỷ lệ người mắc bệnh ung thư ngày càng gia tăng và có xu hướng trẻ hóa tại Việt Nam, việc xét nghiệm tầm soát ung thư được xem là phương án hiệu quả để bảo vệ sức khỏe.
        
        Tầm soát ung thư là công cụ phát hiện những thương tổn tiền ung thư hoặc ung thư giai đoạn sớm ở những người không có triệu chứng.
        Tiêu chí lựa chọn địa chỉ xét nghiệm tầm soát ung thư
        Để lựa chọn các địa chỉ đưa vào nội dung bài viết này, BookingCare đã dựa vào các tiêu chí sau đây:
        
        * Đơn vị có đầy đủ hệ thống trang thiết bị xét nghiệm hiện đại từ các hãng thiết bị y tế uy tín hàng đầu thế giới như Abbott, Roche, Siemens, Hitachi, GE...
        * Phòng xét nghiệm thực hiện theo quy trình một chiều với đầy đủ hệ thống bảo đảm yêu cầu khử khuẩn và vô trùng.
        * Đội ngũ kỹ thuật viên, nhân viên, y bác sĩ được đào tạo bài bản, giàu chuyên môn và kinh nghiệm trong lĩnh vực xét nghiệm.
        * Đạt các chứng chỉ về tiêu chuẩn chất lượng do các tổ chức có thẩm quyền chứng nhận như Viện Tiêu chuẩn chất lượng (Bộ Y tế) hoặc các tổ chức nước ngoài (Hiệp hội Bệnh học Hoa Kỳ - CAP).
        * Nhận được nhiều phản hồi tích cực của người dùng về chất lượng dịch vụ xét nghiệm.
        
        ---
        Gợi ý các địa chỉ xét nghiệm tầm soát ung thư uy tín tại Hà Nội
        1. Trung tâm Xét nghiệm True Medicine
        Địa chỉ: 20 Ng. 4 P. Phương Mai, Phương Mai, Đống Đa, Hà Nội;
        Thời gian làm việc: Thứ 2 - Chủ nhật: 07:30 - 21:00;
        True Medicine là trung tâm xét nghiệm y khoa chuyên thực hiện các dịch vụ xét nghiệm, xét nghiệm tại nhà và được nhiều người dân thủ đô lựa chọn.
        ![img](https://bookingcare.vn/files/blog/2022/08/25/145654-5-dia-chi.png?w=1000)
        
        **Vì sao khách hàng nên chọn lựa True Medicine?**
        
        True Medicine đã có gần 10 năm kinh nghiệm trong trong dịch vụ xét nghiệm tại nhà tại Hà Nội, với các gói xét nghiệm tổng quát, xét nghiệm sàng lọc ung thư...
        
        Tại đây sử dụng trang thiết bị là những máy móc hiện đại của Abbott, Bechman Coulter, Roche nhập khẩu từ Mỹ và Đức. Đội ngũ làm việc cũng có nhiều năm kinh nghiệm khi làm việc tại Bệnh viện Bạch Mai, bệnh viện Phụ sản Hà Nội...
        
        Để đảm bảo sự chính xác, đáng tin cậy và không nhầm lẫn giữa các mẫu. True Medicine tiên phong sử dụng phần mềm chuyên biệt Labcon nhằm quản lý kết quả xét nghiệm cho khách hàng.
        
        Ngoài ra, True Medicine còn được khách hàng ưu ái bởi quy trình xét nghiệm đơn giản, tiện lợi cùng với vài phút lấy mẫu xét nghiệm. Song, trung tâm cũng nhận được số ít phản hồi chưa hài lòng về việc chậm trễ trong gửi kết quả xét nghiệm.`,
        image: "ungthu.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("handbooks", null, {});
  },
};
