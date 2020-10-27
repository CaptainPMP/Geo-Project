let allQuestion = [
    {   "name" : '"Is this jojo reference?"',
        "bool" : true,
        "answer" : "It's jojo reference." },
    {   "name" : '"Is Thanaporn\'s test easy?"',
        "bool" : false,
        "answer" : "It's very hard. (hard sus sus)" },
    {   "name" : '"Is Anfield bird?"',
        "bool" : false,
        "answer" : "He is Garuda." }
    
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
    }
    else {
        document.getElementById("value_bool").innerHTML = '<i class="fa fa-times" aria-hidden="true"></i> คุณไม่ได้เดินหมาก';
        document.getElementById("value_bool").style.color = "red";
        document.getElementById("answer").innerHTML = allQuestion[rand_number].answer;
        document.getElementById("right").style.display = "none";
        document.getElementById("QIContainer").style.justifyContent = "center";
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
    }
    else {
        document.getElementById("value_bool").innerHTML = '<i class="fa fa-times" aria-hidden="true"></i> คุณไม่ได้เดินหมาก';
        document.getElementById("value_bool").style.color = "red";
        document.getElementById("answer").innerHTML = allQuestion[rand_number].answer;
        document.getElementById("left").style.display = "none";
        document.getElementById("QIContainer").style.justifyContent = "center";
    }
}

function kanitFont(){
    document.body.classList.toggle("Sarabun-font");
}