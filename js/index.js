var Username = "trần văn b";
console.log("Username", Username);

// khai báo thôn tin sau và gán giá trị cho nó : tuổi,địa chỉ,bạn có phải nam hay không,giới tính
var age = 30;
var address = "Hà Nội";
var isMale = true;
var gender = "Nam";

// gọi tên biến /In dữ liệu
console.log(age);
console.warn("đã có lỗi sảy ra..");
console.error("sai mật khẩu");
console.table("sai mật khẩu");

// dạng chuỗi(string)
var userCode = "NV001"
console.log("mã người dùng",userCode);

// Dạng số(number)
var weight = 100;
console.log("lâm nặng ",weight,"kg");

// dạng boolean 
var isMale = true;
console.log("tôi là đàn ông",isMale);

// Kiểu không xác định (undefiend)=>Một biến không được gán giá trị thì sẽ nhận được giá trị undefiend
var a;
console.log("giá trị của a là",a);

// Kiểu null => Một biến được khai báo nhưng nhận một giá trị rỗng
var dateOfBirth = null;
console.log("Ngày sinh của Lâm là",dateOfBirth);

// kiểu NaN => Not a Number (không phải là số)
var result = 0/0;
console.log("result",result);

// toán tử so sánh : >, < ,== , ===, >= ,,<= 
// kết quả nhận được sau các phép so sách là boolean(true false)
var myNumberA = 10;
var myNumberB = 20;

var result = myNumberA > myNumberB;
console.log("result ==>",result);

// toán tử logic:hoặc hoặc (||) , và và (&&) , phủ định (!) ,


var isMale = 0;
var isFemale = 1;
var other = 2;

if (isMale === 0 && isFemale ==1) {
    console.log("điều kiện đúng");
} else{
    console.log("điều kiện sai")
}

// điểm trung bình và tổng điểm của 3 môn
// var chemistry = +prompt("mời bạn nhập điểm môn hóa")
// var math = +prompt("mời bạn nhập điểm môn toán")
// var physics = +prompt("mời bạn nhập điểm môn lý")

// var average = (chemistry + math + physics)/3;

// console.log ("Điểm trung bình 3 môn là :",average);
// modal xác nhận từ người dùng
// var isLogout = window.confirm("Bạn có muốn đăng xuất không ?")

// if(isLogout===true) {
//     console.log("đăng xuất thành công")
// }else{
//     console.log("bạn đã đăng xuất");
// }
// dạng thông báo ()
// window.alert("phiên của bạn đã hết");

// yêu cầu người dùng nhập vào tuổi , nếu tuổi lớn hơn 18 và là con traithì hiển thj thông báo là đủ điều kiện,
//không đủ điều kiện

var age = +prompt("mời bạn nhập tuổi")
var gender = prompt("nhập giới tính của bạn Nam/nữ")
if(age>=18 && gender===Nam){
    alert("bạn đủ điều kiện");
}else{
    alert("bạn không đủ điều kiện");
}
// những giá trị false trong js
// một chuỗi rỗng , null , false ,0 ,NaN,underfined
var value = undefined;
if(value){
    console.log("điều kiện đúng");
}else{
    console.log("điều kiện sai");
}

