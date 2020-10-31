let allQuestion = [
    {   "name" : '"กระบวนการเปลี่ยนแปลงแบ่งเป็น 2 ลักษณะ ?"',
        "bool" : true,
        "answer" : "มี 2 ลักษณะ" },

    {   "name" : '"กระบวนการเปลี่ยนแปลงภายในแบ่งเป็น 3  กระบวนการ ?"',
        "bool" : true,
        "answer" : "มีทั้งหมด 3 กระบวนการ" },

    {   "name" : '"หุบเขาจมน้ำเกิดจากกระบวนการทรุดตัวส่วนชะวากทะเลเกิดจากการกระบวนการยกตัว?"',
        "bool" : false,
        "answer" : "หุบเขาจมน้ำกับชะวากทะเลคืออันเดียวกัน เกิดจากการทรุดตัวเหมือนกัน" },

    {   "name" : '"กระบวนการภูเขาไฟเกิดจากแรงภายในโลกปะทุลาวาขึ้นมาเป็นแมกมา?"',
        "bool" : false,
        "answer" : "เกิดจากแรงภายในโลกปะทุแมกมาเป็นลาวา" },
    
    {   "name" : '"กระบวนการภูเขาไฟเป็นกระบวนการแปรสันฐานอย่างรวดเร็ว ?"',
        "bool" : true,
        "answer" : "มันเปลี่ยนอย่างรวดเร็ว" },
    
    {   "name" : '"นายฟูฟูต้องการปลูกพืชเพื่อดำนงชีวิตและขายจึงเลือกที่จะไปปลูกแถวหุบเขาซึ่งเกิดจากกัดกร่อนของน้ำ นายฟูฟูจึงคิดว่า \"บริเวณนี้จะต้องปลูกพืชได้ดีแน่ๆ\"?"',
        "bool" : false,
        "answer" : "หุบเขาเกิดจากการบีบตัว" },
    
    {   "name" : '"กระบวนการเปลี่ยนแปลงที่เกิดจากน้ำใต้ดินเป็นการเปลี่ยนแปลงภายใน?"',
        "bool" : false,
        "answer" : "ผิด เพราะ เป็นการเปลี่ยนแปลงภายนอกโลก" },
    
    {   "name" : '"เทือกเขาเกิดจากการบีบตัว ?"',
        "bool" : true,
        "answer" : "มันเกิดจากการบีบตัว" },
    
    {   "name" : '"การยกตัวทำให้เกิดภูเขาและที่ราบสูง?"',
        "bool" : false,
        "answer" : "ผิด เพราะ ที่ราบสูงเกิดจากการยกตัวส่วนภูเขาเกิดจากการบีบตัว" },
    
    {   "name" : '"กระบวนการเปลี่ยนแปลงภายในนั้นไม่ได้เกิดตลอดเวลา?"',
        "bool" : false,
        "answer" : "ผิด เพราะ กระบวนการเปลี่ยนแปลงภายในเกิดขึ้นตลอดเวลา" },
    
    {   "name" : '"ซุ้มหินชายฝั่งเกิดจากการผุผัง?"',
        "bool" : false,
        "answer" : "ผิด เพราะ ซุ้มหินชายฝั่งเกิดจากการกัดกร่อนโดยคลื่น" },
    
    {   "name" : '"เกาะหินโด่งเกิดจากการกัดเซาะของคลื่น ?"',
        "bool" : true,
        "answer" : "มันเกิดจากการกัดเซาะของคลื่น" },
    
    {   "name" : '"เนินตะกอนรูปสามเหลี่ยมเป็นเนินตะกอนที่น้ำพัดพามาจากหุบเขาลาดชัน?"',
        "bool" : false,
        "answer" : "ผิด เพราะ เนินตะกอนที่น้ำพัดพามาจากหุบเขาลาดชัน คือ เนินตะกอนรูปพัด" },
    
    {   "name" : '"ลุงพลคนดีไปถ่าย MV บริเวณกุมภลักษณ์ บริเวณที่ลุงพลไปถ่ายนั้นเกิดจากการถับถมของน้ำ?"',
        "bool" : false,
        "answer" : "ผิด เพราะ กุมภลักษณ์เกิดจากการกัดกร่อนโดยน้ำ" },
    
    {   "name" : '"หลุมยุบเป็นภูมิประเทศที่เกิดบนพื้นน้ำ?"',
        "bool" : false,
        "answer" : "ผิด เพราะ หลุมยุบเป็นภูมิประเทศที่เกิดบนพื้นดิน" },
    
    {   "name" : '"หินปูนส่วนใหญ่เกิดในถ้ำ ?"',
        "bool" : true,
        "answer" : "หินปูนเกิดจากถ้ำ" },
    
    {   "name" : '"หลุมยุบมักมีรัศมี 10-100 เมตร ?"',
        "bool" : true,
        "answer" : "มีรัศมี 10-100 เมตร เส้นผ่านศูนย์กลาง 20-200 เมตร" },
    
    {   "name" : '"เสาหินเกิดจากการกัดกร่อนของลม ?"',
        "bool" : true,
        "answer" : "เสาหินเกิดจากการกัดกร่อนของลม" },
    
    {   "name" : '"สันเขาอาแรตเกิดจากการบีบตัว?"',
        "bool" : false,
        "answer" : "ผิด เพราะ สันเขาอาแรตเกิดจากการกัดกร่อนโดยธารน้ำแข็ง" },
    
    {   "name" : '"ยอดเขาพีระมิด อยู่บนยอดเขาสูงที่มีธารน้ำแข็งปกคลุม ?"',
        "bool" : true,
        "answer" : "It's jojo reference." },
    
    {   "name" : '"ลากูนเป็นแหล่งน้ำเค็มที่แคบตื้น ?"',
        "bool" : true,
        "answer" : "ลากูน ทั้งเค็ม แคบ ตื้น" },
    
    {   "name" : '"สันดอนเกิดจากลม?"',
        "bool" : false,
        "answer" : "ผิด เพราะ สันดอนเกิดจากการที่กระแสน้ำพัดตะกอนมาทับถม" },
    
    {   "name" : '"เขาอีโต้เกิดจากการบีบตัว?"',
        "bool" : false,
        "answer" : "ผิด เพราะ เขาอีโต้เกิดจากการยกตัว" },
    
    {   "name" : '"กระบวนการผุผังอยู่กับที่แบ่งเป็น 3 อย่าง ?"',
        "bool" : true,
        "answer" : "กระบวนการผุผังอยู่กับที่แบ่งเป็น 3 อย่าง" },
    
    {   "name" : '"แผ่นดินถล่มเกิดจากการเปลี่ยนแปลงภายใน?"',
        "bool" : false,
        "answer" : "ผิด เพราะ แผ่นดินถล่มเกิดจากการเปลี่ยนแปลงภายนอก" },
    
    {   "name" : '"การเลื่อนไถลเกิดจากการเคลื่อนที่ของมวลเศษหินและดิน ?"',
        "bool" : true,
        "answer" : "การเลื่อนไถลเกิดจากการเคลื่อนที่ของมวลเศษหินและดิน" },
    
    {   "name" : '"การไหลของดินเป็นกระบวนการเคลื่อนที่ของดินที่ชุ่มน้ำ ?"',
        "bool" : true,
        "answer" : "การไหลของดินเป็นกระบวนการเคลื่อนที่ของดินที่ชุ่มน้ำ" },
    
    {   "name" : '"ธารน้ำแข็งเป็นตัวการทำให้เกิดการเปลี่ยนแปลงภายนอก ?"',
        "bool" : true,
        "answer" : "ธารน้ำแข็ง ทำให้เกิดการเปลี่ยนแปลงภายนอก" },
    
    {   "name" : '"ชายฝั่งทะเลแบ่งเป็น 3 ประเภท?"',
        "bool" : false,
        "answer" : "ผิด เพราะ ชายฝั่งทะเลแบ่งเป็น 2 ประเภท" },

    {   "name" : '"prayut glacier  คือ ธารน้ำแข็งภูเขา?"',
        "bool" : false,
        "answer" : "ผิด เพราะ alpine glacier คือ ธารน้ำแข็งภูเขา" },

    {   "name" : '"หินงอก คือ ส่วนที่พอกพูนจากน้ำคาร์บอเนตที่รับน้ำหยดลงมาจากเพดานถ้ำ?"',
        "bool" : false,
        "answer" : "ผิด เพราะ น้ำคาร์บอเนตหยดลงมาจากหินย้อย" },
        
    {   "name" : '"เนินเคมเป็นกลุ่มเนินเตี้ย  ?"',
        "bool" : true,
        "answer" : "เนินเคมเป็นกลุ่มเนินเตี้ย " },
        
    {   "name" : '"ชะวากทะเลบริเวณปากแม่น้ำแอมะซอน ?"',
        "bool" : true,
        "answer" : "ชะวากทะเลบริเวณปากแม่น้ำแอมะซอน " },
    
    {   "name" : '"บริเวณทะเลทรายสโตนีเป็นภูมิประเทศแบบเสาหิน?"',
        "bool" : false,
        "answer" : "ผิด เพราะ ทะเลทรายสโตนีเป็นภูมิประเทศแบบทะเลทราย" },
    
    {   "name" : '"sea arch เป็นภูมิอากาศที่เกิดจากการกัดเซาะโดยคลื่น?"',
        "bool" : false,
        "answer" : "ผิด เพราะ sea arch เป็นภูมิประเทศ" },
    
    {   "name" : '"แท่งเสาหินบะซอลต์เกิดจากการหดตัว ?"',
        "bool" : true,
        "answer" : "แท่งเสาหินบะซอลต์เกิดจากการหดตัว" },
    
    {   "name" : '"ตะกอนทะเลมีอีกชื่อว่า สิ่งถับถมภาคพื้นทวีป หรือ submarine?"',
        "bool" : false,
        "answer" : "ผิด เพราะ ตะกอนทะเลมีอีกชื่อว่า สิ่งถับถมภาคพื้นทวีป หรือ marine deposit" },
    
    {   "name" : '"เด็กชายประยุทธ์เดินทางไปภาคใต้ของประเทศไทยจะเจอที่ราบสูง?"',
        "bool" : false,
        "answer" : "ผิด เพราะ ควรเดินทางไปที่ภาคกลางมากกว่า" },
    
    {   "name" : '"นายอนุทินต้องการโลหะจึงเดินทางไปที่ภูเขาหินแกรนิต ?"',
        "bool" : true,
        "answer" : "นายอนุทินต้องการโลหะจึงเดินทางไปที่ภูเขาหินแกรนิต" },
    
    {   "name" : '"นายนพดลชอบที่ราบจึงเดินทางไปที่ภาคกลางของประเทศไทย ?"',
        "bool" : true,
        "answer" : "นายนพดลชอบที่ราบจึงเดินทางไปที่ภาคกลางของประเทศไทย " },
    
    {   "name" : '"นายภูมิภัทรต้องการปลูกต้นไม้เพื่อทำรายงานศึกษาการเจริญเติบโตของพืชส่งครูธนพร ควรปลูกที่หุบเขาทรุด?"',
        "bool" : false,
        "answer" : "ผิด เพราะ ควรปลูกที่หุบเขา" },
    
    {   "name" : '"แอ่งภูเขาไฟเรียกอีกอย่างว่า \"แคลซีรา\"?"',
        "bool" : false,
        "answer" : "ผิด เพราะ แอ่งภูเขาไฟเรียกอีกอย่างว่า\"แคลดีรา\" ไม่ใช่ \"ซี\" แต่เป็น \"ดี\"" }

];

var bool_input_value;
var rand_number;

function randomQuestion() {
    // console.log(question.length);
    rand_number = Math.floor(Math.random() * allQuestion.length);
    // console.log(question[rand_number]);
    document.getElementById("question-name").innerHTML = allQuestion[rand_number].name;
    document.getElementById("value_bool").innerHTML = "";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("QIContainer").style.justifyContent = "space-evenly";
    document.getElementById("right").style.removeProperty("display");
    document.getElementById("left").style.removeProperty("display");
    document.getElementById("question-container").style.display = "flex";
    document.getElementById("first-random-container").style.display = "none";
    // document.getElementById("ans-random").style.display = "none";
    document.getElementById("to-kanit-font").style.marginTop = "2rem";
    // document.getElementById("left-btn").style.background = "rgb(52, 216, 52)";
    // document.getElementById("right-btn").style.background = "rgb(216, 52, 52)";
    document.getElementById("left-btn").style.background = "rgb(0, 42, 180)";
    document.getElementById("right-btn").style.background = "rgb(0, 42, 180)";
    document.getElementById("footer-zone").style.display = "none";
}

function true_value() {
    bool_input_value = true;
    document.getElementById("ans-random").style.removeProperty("display");
    if (bool_input_value == allQuestion[rand_number].bool){
        document.getElementById("value_bool").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> คุณได้เดินหมาก';
        document.getElementById("value_bool").style.color = "green";
        document.getElementById("answer").innerHTML = allQuestion[rand_number].answer;
        document.getElementById("right").style.display = "none";
        document.getElementById("QIContainer").style.justifyContent = "center";
        document.getElementById("left-btn").style.background = "rgb(52, 216, 52)";
    }
    else {
        document.getElementById("value_bool").innerHTML = '<i class="fa fa-times" aria-hidden="true"></i> คุณไม่ได้เดินหมาก';
        document.getElementById("value_bool").style.color = "red";
        document.getElementById("answer").innerHTML = allQuestion[rand_number].answer;
        document.getElementById("right").style.display = "none";
        document.getElementById("QIContainer").style.justifyContent = "center";
        document.getElementById("left-btn").style.background = "rgb(216, 52, 52)";
    }
}
function false_value(){
    bool_input_value = false;
    document.getElementById("ans-random").style.removeProperty("display");
    if (bool_input_value == allQuestion[rand_number].bool){
        document.getElementById("value_bool").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> คุณได้เดินหมาก';
        document.getElementById("value_bool").style.color = "green";
        document.getElementById("answer").innerHTML = allQuestion[rand_number].answer;
        document.getElementById("left").style.display = "none";
        document.getElementById("QIContainer").style.justifyContent = "center";
        document.getElementById("right-btn").style.background = "rgb(52, 216, 52)";
    }
    else {
        document.getElementById("value_bool").innerHTML = '<i class="fa fa-times" aria-hidden="true"></i> คุณไม่ได้เดินหมาก';
        document.getElementById("value_bool").style.color = "red";
        document.getElementById("answer").innerHTML = allQuestion[rand_number].answer;
        document.getElementById("left").style.display = "none";
        document.getElementById("QIContainer").style.justifyContent = "center";
        document.getElementById("right-btn").style.background = "rgb(216, 52, 52)";
    }
}

function kanitFont(){
    document.body.classList.toggle("Sarabun-font");
}