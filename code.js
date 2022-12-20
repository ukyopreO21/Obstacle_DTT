var ObsLength = 13;

var rowQ =
["Nhờ những thí nghiệm với cây đậu Hà Lan, Gregor Mendel đã đưa ra những quy luật mà mãi đến năm 1900 mới được các nhà khoa học khác tái phát hiện cũng bằng thực nghiệm nên năm 1900 còn được xem là năm ra đời của ngành học nào?",
"Trong suốt sự nghiệp của mình, nhạc sĩ Phong Nhã có rất nhiều sáng tác nổi tiếng gắn liền với nhiều thế hệ hơn nửa thế kỉ qua như \"Đi ta đi lên\",  \“Cùng nhau ta đi lên\”, \“Kim Đồng\”,… Những sáng tác trên được nhạc sĩ viết cho lứa tuổi nào?",
"Loại protein nào góp phần tăng độ đàn hồi của da, chiếm khoảng 25% tổng lượng protein trong cơ thể, khoảng 70% cấu trúc da và được tạo thành từ các amino acid?",
"Lò xo sẽ bị dãn ra khi ta kéo dãn hai đầu và sẽ trở lại hình dạng ban đầu nếu ngưng tác dụng lực. Hãy cho biết tên của hiện tượng được nêu trên? ",
"Loại tập tính nào ở động vật mang tính đặc trưng cho mỗi loài?"];

var rowA = ["DITRUYỀN", "TRẺEM", "COLLAGEN", "BIẾNDẠNG"];

var contestantName = ["Văn Hà","con cặc","Nhật Hoàng","Thanh Bình"];

document.getElementById("ObsMode").style.visibility = "hidden";
document.getElementById("video15s").style.visibility = "hidden";
document.getElementById("Question").style.visibility = "hidden";
document.getElementById("intro").style.visibility = "hidden";
document.getElementById("Start").style.visibility = "hidden";
document.getElementById("rowDisplay").style.visibility = "hidden";
document.getElementById("Menu").style.visibility = "hidden";
document.getElementById("ObsImage").style.visibility = "hidden";
document.getElementById("Signal").style.visibility = "hidden";
document.getElementById("signalButton").style.visibility = "hidden";
document.getElementById("Name1").style.visibility = "hidden";
document.getElementById("Name2").style.visibility = "hidden";
document.getElementById("Name3").style.visibility = "hidden";
document.getElementById("Name4").style.visibility = "hidden";

function playIntro(){
    document.getElementById("playIntro").style.visibility = "hidden";
    document.getElementById("intro").style.visibility = "visible";
    document.getElementById("Start").style.visibility = "hidden";
    intro.play();
    setTimeout(closeIntro, 6500);
}

function closeIntro(){
    document.getElementById("intro").style.visibility = "hidden";
    document.getElementById("Start").style.visibility = "visible";
}

function Start(){
    document.getElementById("Start").style.visibility = "hidden";
    var startRound = new Audio("VCNVBatDauVongThi.mp3");
    startRound.play();
    setTimeout(Row, 8000);
}

var i; var j; var rowNumber;

for (i=0; i<4; i++){
    document.getElementById("TS"+(i+1)).innerHTML = contestantName[i];
}

function Row(){
    var showRows = new Audio ("VCNVHienThiHangNgang.mp3");
    showRows.play();
    document.getElementById("Menu").style.visibility = "visible";
    document.getElementById("signalButton").style.visibility = "visible";
    document.getElementById("rowDisplay").style.visibility = "visible";
    document.getElementById("ObsMode").style.visibility = "visible";
    for (i = 0; i<=3; i++){
        for (j = 0; j<=rowA[i].length-1; j++){
            rowNumber = "Row" + (i + 1);
            document.getElementById(rowNumber).innerHTML +=
                "<span class=\"container\"> <img id=\"BackgroundRow"+String(i+1)+String(j+1)+"\"src=\"Row.png\" width=\"80px\" height=\"80px\"></img> <span class=\"centered\"><label id=\"Char"+String(i+1)+String(j+1)+"\"></label></span></span>";    
        }
    }
}

var questionNumber = 0; var idBackground;

function openRow(Question){
    questionNumber = Question.name;
    document.getElementById("rowButton").style.pointerEvents = "none";
    if (questionNumber!=5){
        for (j = 0; j<=rowA[questionNumber-1].length-1; j++){
            idBackground = "BackgroundRow" + String(questionNumber) + String(j+1);
            document.getElementById(idBackground).src = "ChosenRow.png";   
        }
    }
    var openRowSound = new Audio("VCNVChonHangNgang.mp3");
    openRowSound.play();
}

var checkQuestioning = false;

function openQuestion(){
    var openQuestionSound = new Audio("VCNVMoCauHoi.mp3");
    openQuestionSound.play();
    checkQuestioning = true;
    document.getElementById("Question").style.visibility = "visible";
    document.getElementById("video15s").style.visibility = "visible";
    document.getElementById("Question").innerHTML = rowQ[questionNumber-1];
}

var timingVideo = document.getElementById("video15s");

function Timing(){
    timingVideo.play();   
}

function Pause(){
    timingVideo.pause();
}

function openAnswer(){
    var openAnswerSound = new Audio("VCNVMoDapAnThiSinh.mp3");
    openAnswerSound.play();
}

function Right(){
    var rightSound = new Audio("VCNVDungHangNgang.mp3");
    rightSound.play();
    if (questionNumber != 5){
        for (j = 0; j<=rowA[questionNumber-1].length-1; j++){
            idBackground = "Char" + String(questionNumber) + String(j+1);
            document.getElementById(idBackground).innerHTML = rowA[questionNumber-1].charAt(j); 
        }
    }
    document.getElementById("Q"+questionNumber).style.visibility = "hidden";
}

function Wrong(){
    var wrongSound = new Audio("VCNVSaiHangNgangHoacCNV.mp3");
    wrongSound.play();
    for (j = 0; j<=rowA[questionNumber-1].length-1; j++){
        idBackground = "BackgroundRow" + String(questionNumber) + String(j+1);
        document.getElementById(idBackground).src = "FalseRow.png";   
    }
}       

var checkPress = true;

function UI(){
    if (checkPress == true){
        if (checkObs == false){
            var openImageSound = new Audio("VCNVMoGocHinhAnh.mp3");
            openImageSound.play();
        }
        document.getElementById("ObsImage").style.visibility = "visible";
        document.getElementById("rowDisplay").style.visibility = "hidden";
        document.getElementById("video15s").style.visibility = "hidden";
        document.getElementById("Question").style.visibility = "hidden";
        checkPress = false;
        
    }
    else {
        document.getElementById("ObsImage").style.visibility = "hidden";
        document.getElementById("rowDisplay").style.visibility = "visible";
        if (checkQuestioning == true){
            document.getElementById("video15s").style.visibility = "visible";
            document.getElementById("Question").style.visibility = "visible";
        }
        checkPress = true;
    }
}

function turnOffQuestion(){
    checkQuestioning = false;
    document.getElementById("video15s").style.visibility = "hidden";
    document.getElementById("Question").style.visibility = "hidden";
    document.getElementById("rowButton").style.pointerEvents = "auto";
}

var d = 0; //dem so TT bam CNV

function getSignal(pos){
    d++;
    var STT = pos.name;
    document.getElementById("B"+STT).disabled = true;
    var ObsSignalSound = new Audio("VCNVTinHieuCNV.mp3");
    ObsSignalSound.play();
    document.getElementById("Signal").style.visibility = "visible";
    document.getElementById("Name"+STT).style.visibility = "visible";
    document.getElementById("T"+STT).innerHTML = d + ". " + contestantName[Number(STT-1)];
}

var checkObs = false;

function ShowObs(){
    checkObs = true;
    document.getElementById("Q1").style.visibility = "hidden";
    document.getElementById("Q2").style.visibility = "hidden";
    document.getElementById("Q3").style.visibility = "hidden";
    document.getElementById("Q4").style.visibility = "hidden";
    document.getElementById("Q5").style.visibility = "hidden";
    for (i = 0; i<=3; i++){
        for (j = 0; j<=rowA[i].length-1; j++){
            document.getElementById("BackgroundRow" + String(i+1) + String(j+1)).src = "ChosenRow.png";
            document.getElementById("Char" + String(i+1) + String(j+1)).innerHTML = rowA[i].charAt(j);
        }
    }
}

function WrongObs(){
    var WrongObsSound = new Audio("VCNVSaiHangNgangHoacCNV.mp3");
    WrongObsSound.play();
    document.getElementById("Signal").style.visibility = "hidden";
    document.getElementById("Name1").style.visibility = "hidden";
    document.getElementById("Name2").style.visibility = "hidden";
    document.getElementById("Name3").style.visibility = "hidden";
    document.getElementById("Name4").style.visibility = "hidden";
}

function pickWinner(Winner){
    ShowObs();
    var RightObsSound = new Audio("VCNVDungCNV.mp3");
    RightObsSound.play();
    var winnerName = Winner.name;
    //for (i=1; i<=4; i++){
    //    if (i!=winnerName) document.getElementById("W"+winnerName).disabled = true;
    //}
    document.getElementById("T"+winnerName).style.color = "#FFA700";
    document.getElementById("Signal").style.pointerEvents = "none";
}