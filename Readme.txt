---CHƯƠNG 1:
Bài 3: Cài đặt gulp

Bài 4: Tìm hiểu cơ bản cấu trúc dự án
    sass (css pre-processor) -> css
    pug (html pre-processor) -> html

Bài 5: Tìm hiểu cấu trúc layout của PUG

Bài 6: Fix lỗi tab và space khi code PUG
    Không thể cùng lúc dùng tab và space trong PUG.

    Khắc phục:
        1. Xác định lỗi ở vị trí nào file nào.
        2. Sử dụng `covert indentation to tabs/spaces`.

Bài 7: Kiến thức về PUG cơ bản nên biết

Bài 8: Mixin cơ bản trong PUG
    Khai báo:
        mixin mixinName(parameter1= "Default value", parameter2) 
            ul
                li
                    span= parameter1
                    p= parameter2

    Sử dụng:
        +mixinName
        +mixinName(parameter1)
        +mixinName(parameter1, parameter2)

    Sử dụng if:
        Với vd trên, khi ta muốn thêm một phần từ p nằm trong mixinName đầu tiên thì làm ?

        --> mixin mixinName(parameter1= "Default value", parameter2) 
            ul
                li
                    span= parameter1
                    if parameter2 // Nếu có parameter2 thì thực hiện đoạn code
                        p= parameter2 // Thêm phần tử p có nội dung parameter2
                    if block // Nếu có block thì thêm block
                        block
    
Bài 9: Biến cơ bản trong PUG

Baif 10: TÌm hiểu về cấu trúc thư mục style

---CHƯƠNG 2:
Bài 14: lấy mã màu với photoshop

Bài 15: Lấy font chữ

Bài 16: Phân tích kích thước
    layout/_structure.scss là nơi viết các class chung.

Bài 17: Thiết lập code cơ bản ban đầu
    base/_typography.scss nơi code base css cho text
    helpers/_global.scss nơi code base css cho các thành phần khác

Bài 18: Tách ảnh trong photoshop

    Chọn move tool (V) với góc trên bên phải chọn auto-select và layer.
    
    Nhấn vào ảnh muốn tách -> góc dưới bên trái hiển thị cách lớp layer.

    Alt + chuột phải vào biểu tượng con mắt của layer đang được selected.
        Nếu vẫn còn các lớp phủ ở trên thì tìm và tắt các layer đó.
    
    Image -> trim -> hộp thoại -> OK (nhấn vào vùng trống trước khi nhấn OK)

    Alt + ctrl + shift + s -> hộp thoại -> chọn loại ảnh -> chọn maximum -> save


---CHƯƠNG 3:
Bài 20: Phân tích tổng quan header
    header -> header-top -> header-content -> header-bottom -> responsive -> menu javascript -> slick slider

    
--CHƯƠNG 4:
    --Scroll ngang với grid.
        grid-auto-column: px/auto/min-content/max-content;
        *Tạo số cột = số phần tử con.
        *Kích thước tùy thuộc vào giá trị truyền vào.
        *Không áp dụng cho các phần tử đã set kích thước
            -> grid-template-column: unset;

        grid-auto-flow: ;
        *Có 3 giá trị row/column/dense
        *Với giá trị row và column tác dụng tương tụ như flex-direction: row/column;

    --Tối ưu hóa scroll = scroll-snap 
    *link: https://evondev.com/css-scroll-snap/
           https://css-tricks.com/practical-css-scroll-snapping/

        Phần tử cha
            scroll-snap-type: x/y/both mandatory/proximity;
            *Xác định phương của scroll x/y/both
            *Kiểu snap mandatory/proximity

            scroll-snap-stop: always/normal;
            *Mặc định là normal.
            *normal cho phép user scroll nhanh và always thì ngược lại.

        Phần tử con
            scroll-snap-align: start/center/end;
            *Chỉ định vị trí của phần tử con trong khung nhìn.
            *Thuộc tính này sẽ giữa cho phần tử con luôn nằm sát start poit / end poit hoặc căng giữa. (Ghi đè kể cả các thuộc tính như transform: translate();).

    --Thêm class cho phần tử khi dùng pug mixin
        vd: lưu ý nên đặt tên tham số khác với attribute.
            mixin bottomItem(pclass)
                li(class= pclass).header-bottom__item
    
    --margin giá trị âm
        *Chỉ áp dụng cho thẻ inline và inline-block

    --Kỹ thuật căng giữa cho thẻ inline và inline-block không cần tạo thẻ cha để dùng text-align: center;
        position: relative;
        left: 50%;
        transform: translateX(-%50%);

    --margin-left: auto;
        *Đẩy phần tử nằm sát lề phải.
        *Có thể dùng để căng chỉnh vị trí các phần tử trong flexbox như justify-content: space-between;

    --mixin với tham số truyền vào là class
    vd: mixin class($pclass) {
        #{$class} {
            css
        }
    }

    --Khắc phục hoạt ảnh bị giật 
        will-change: [properties-name];
        // Báo cho trình duyệt biết trước về sự thay đổi.
        // Tối ưu hóa hoạt ảnh.

    --object
        





    
