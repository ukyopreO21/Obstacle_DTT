    var CNV = ["XƯƠNG THUỶ TINH","XƯƠNG THỦY TINH"]
    var quesRow = ["Trong suốt sự nghiệp của mình, nhạc sĩ Phong Nhã có rất nhiều sáng tác nổi tiếng gắn liền với nhiều thế hệ hơn nửa thế kỉ qua như \“Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng\”, \“Cùng nhau ta đi lên\”, \“Đi ta đi lên\”, \“Kim Đồng\”,… Những sáng tác trên của ông viết cho đối tượng nào?",
    "Làn da đóng một vai trò cực kỳ quan trọng như một nhân tố phản ánh sức khỏe, tuổi thọ và vẻ đẹp của mỗi người với bên ngoài. Đối với phái nữ, hiện nay có rất nhiều sản phẩm hỗ trợ làm đẹp và bảo vệ da mà họ quảng cáo chứa một loại protein làm chậm tiến trình lão hóa ở phụ nữ. Protein này chiếm 30% tổng lượng protein trong cơ thể, khoảng 70% cấu trúc da và được tạo thành từ các amino acid. Đó là loại protein nào?",
    "Theo sách giáo khoa Vật lý 11 do Bộ Giáo dục và Đào tạo hiện hành (đến 15/9/2021), hiện tượng khúc xạ ánh sáng là hiện tượng quang học trong đó các tia sáng bị lệch phương hay còn gọi là […] khúc khi truyền xiên góc qua mặt phân cách giữa hai môi trường trong suốt khác nhau. Từ nào còn thiếu trong phát biểu trên?",
    "Nhờ những thí nghiệm với cây đậu Hà Lan, Gregor Mendel đã đưa ra những quy luật mà đến năm 1900, các quy luật của ông mới được các nhà khoa học khác tái phát hiện cũng bằng thực nghiệm nên năm 1900 còn được xem là năm ra đời của ngành học nào?",
    "Các loại bệnh mà từ khi em bé được sinh ra đã có được gọi là gì?"]
    var ansRow = ["TRẺ EM","COLLAGEN","GÃY","DI TRUYỀN","BỆNH BẨM SINH"]
    var sokitu = ["","","","","",""]
    var saveAns = [""];
    document.getElementById("myVideo").style.visibility = 'hidden';
    document.getElementById("test").style.visibility = 'hidden';
    document.getElementById("CNV").style.visibility = 'hidden';
    document.getElementById("hangngang1").style.visibility = 'hidden';
    document.getElementById("hangngang2").style.visibility = 'hidden';
    document.getElementById("hangngang3").style.visibility = 'hidden';
    document.getElementById("hangngang4").style.visibility = 'hidden';
    document.getElementById("hangngang5").style.visibility = 'hidden';
    document.getElementById("textboxid").style.visibility = 'hidden';
    document.getElementById("pic").style.visibility = "hidden";
    document.getElementById("goc1").style.visibility = "hidden";
    document.getElementById("goc2").style.visibility = "hidden";
    document.getElementById("goc3").style.visibility = "hidden";
    document.getElementById("goc4").style.visibility = "hidden";
    document.getElementById("goc5").style.visibility = "hidden";
    var rightRow = new Audio('RightRow.mp3');
    var wrongRow = new Audio('WrongRow.mp3');
    var rightObs = new Audio('RightObstacle.mp3');
    var wrongObs = new Audio('WrongObstacle.mp3');
    var mainTime = new Audio('OnTime.mp3');
    var mainTime1 = new Audio('OnTime.mp3');
    var signalObs = new Audio('Activate.mp3');
    var pickRow = new Audio('RowChose.mp3');
    var showAnswer = new Audio('ShowAnswer.mp3');
    var pictureShow = new Audio('PictureShow.mp3');
    var hn = ["1","1","1","1"];
    var check = ["0","0","0","0"];
    var checkCNV = 0;
    var checkBtn = 0;
    var index = "";
    var sothutu = "";
    var HN = "";
    var hangngang = "";
    var goc = "";
    var OTT = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                document.getElementById("hangngang5").style.visibility = 'visible';
            }
        };
    
    })();
    function showgoc(){
    }
    //xử lý số kí tự CNV
    for(i=0; i<5; i++){
        sokitu[i] = ansRow[i].split(" ").join("").length;
    }
    sokitu[5] = CNV[0].split(" ").join("").length;
    //
    function showPicture(){
        document.getElementById("goc1").style.visibility = "hidden";
        document.getElementById("goc2").style.visibility = "hidden";
        document.getElementById("goc3").style.visibility = "hidden";
        document.getElementById("goc4").style.visibility = "hidden";
        document.getElementById("goc5").style.visibility = "hidden";
    }
    function getAnswer(){
        if(event.keyCode==13){
            var answer = document.getElementById("textboxid").value;
            document.getElementById("textboxid").value = "";
            answer = answer.toUpperCase();
            document.getElementById("saveAns").innerHTML = answer;
            saveAns[0] = answer.replace(/\s+/g,' ').trim();
        }
    }
    function timing(){
            checkCNV = 0;
            document.getElementById("timeQ").innerHTML = 15;
            var timeleft = 14;
            var downloadTimer = setInterval(function(){
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    document.getElementById("timeQ").innerHTML = "Hết giờ";
                } else{
                    document.getElementById("timeQ").innerHTML = timeleft;
                }
                if(checkCNV == 1){
                    clearInterval(downloadTimer);
                    document.getElementById("timeQ").innerHTML = "";
                }
                timeleft -= 1;
            }, 1000);
    }
    function checkAnsCNV(){
        clearTimeout(timeoutID9);
        //clearInterval(IntervalID);
        if(saveAns[0] != " ") mainTime1.pause();
        checkCNV = 1;
        document.getElementById("timeQ").innerHTML = "";
        if (saveAns[0] == CNV[0]||saveAns[0] == CNV[1]){
            rightObs.play();
            document.getElementById("question").innerHTML = "Chúc mừng bạn đã vượt qua vòng thi Vượt Chướng Ngại Vật"
            document.getElementById("CNV").innerHTML = "CHƯỚNG NGẠI VẬT: "+ "<span style='color: green;'>"+CNV[0]+"</span>";
            showPicture();
            document.getElementById("HN1").innerHTML = ansRow[0];
            document.getElementById("HN2").innerHTML = ansRow[1];
            document.getElementById("HN3").innerHTML = ansRow[2];
            document.getElementById("HN4").innerHTML = ansRow[3];
            document.getElementById("HN1").style.color = "green";
            document.getElementById("HN2").style.color = "green";
            document.getElementById("HN3").style.color = "green";
            document.getElementById("HN4").style.color = "green";
            }
            else{
                wrongObs.play();
                document.getElementById("CNV").innerHTML = "CHƯỚNG NGẠI VẬT: "+ "<span style='color: red;'>"+CNV[0]+"</span>";
                if (saveAns[0] == " "|| saveAns[0] == ""){document.getElementById("question").innerHTML = "Bạn chưa đưa ra câu trả lời cho chướng ngại vật";}
                else document.getElementById("question").innerHTML = "Bạn đã trả lời sai chướng ngại vật";
                showPicture();
                document.getElementById("HN1").innerHTML = ansRow[0];
                document.getElementById("HN2").innerHTML = ansRow[1];
                document.getElementById("HN3").innerHTML = ansRow[2];
                document.getElementById("HN4").innerHTML = ansRow[3];
                if (check[0] == 0) document.getElementById("HN1").style.color = "red";
                if (check[1] == 0) document.getElementById("HN2").style.color = "red";
                if (check[2] == 0) document.getElementById("HN3").style.color = "red";
                if (check[3] == 0) document.getElementById("HN4").style.color = "red";
            }
    }
    function ansObs(){  
        checkCNV = 1;
        checkBtn = 1;
        signalObs.play();
        document.getElementById("question").innerHTML = "Bạn đã ấn chuông xin trả lời chướng ngại vật";
        document.getElementById("status").innerHTML = "Chướng ngại vật";
        document.getElementById("sokitu").innerHTML = sokitu[5]+" kí tự ";
        document.getElementById("test").style.visibility = 'hidden';
        document.getElementById("timeQ").innerHTML = "";
        //clearTimeout(timeoutID10);
        IntervalID = setInterval(function(){
            clearTimeout(timeoutID1); mainTime.pause();
            clearTimeout(timeoutID2);
            clearTimeout(timeoutID3);
            clearTimeout(timeoutID4);
            clearTimeout(timeoutID5);
            clearTimeout(timeoutID6);
            clearTimeout(timeoutID7);
            clearTimeout(timeoutID8);
        },1);
        hideRow();
        document.getElementById("textboxid").removeEventListener("keyup", getAnswer);
        setTimeout(function(){
            document.getElementById("question").innerHTML = "Hãy nhập CHƯỚNG NGẠI VẬT và ấn enter để trả lời. Bạn có 15 giây.";
            timing();
            saveAns[0] = " ";
            mainTime1.play();
            document.getElementById("textboxid").addEventListener("keyup", getObstacle);
            timeoutID9 = setTimeout(function(){
                document.getElementById("textboxid").removeEventListener("keyup", getObstacle);
                checkAnsCNV();
            }, 15000)
        }, 3000)
    }
    function getObstacle(){
        if(event.keyCode==13){
            //rickroll
            //var vid = document.getElementById("myVideo");
            //document.getElementById("myVideo").style.visibility = 'visible';
            //vid.autoplay = true;
            //vid.load();
            //
            document.getElementById("textboxid").removeEventListener("keyup", getObstacle);
            var answer = document.getElementById("textboxid").value;
            document.getElementById("textboxid").value = "";
            answer = answer.toUpperCase();
            document.getElementById("saveAns").innerHTML = answer;
            saveAns[0] = answer.replace(/\s+/g,' ').trim();
            checkAnsCNV();
        }
    }
    function hideRow(){
        document.getElementById("ques1").style.visibility = 'hidden';
        document.getElementById("ques2").style.visibility = 'hidden';
        document.getElementById("ques3").style.visibility = 'hidden';
        document.getElementById("ques4").style.visibility = 'hidden';
        document.getElementById("hangngang5").style.visibility = 'hidden';
    }
    function checkRow(){
        if(hn[0] == 0) {document.getElementById("ques1").style.visibility = 'hidden';} else {document.getElementById("ques1").style.visibility = 'visible'};
        if(hn[1] == 0) {document.getElementById("ques2").style.visibility = 'hidden';} else {document.getElementById("ques2").style.visibility = 'visible'};
        if(hn[2] == 0) {document.getElementById("ques3").style.visibility = 'hidden';} else {document.getElementById("ques3").style.visibility = 'visible'};
        if(hn[3] == 0) {document.getElementById("ques4").style.visibility = 'hidden';} else {document.getElementById("ques4").style.visibility = 'visible'};
        if(hn[0] == 0 && hn[1] == 0 && hn[2] == 0 && hn[3] == 0){OTT();}
    }
    function start(){
        var startRound = new Audio('Start.mp3');
        startRound.play();
        document.getElementById('button').style.visibility = 'hidden';
        document.getElementById("question").innerHTML = "";
        setTimeout(function(){
            var showRows = new Audio('RowShow.mp3');
            showRows.play();
            setTimeout(function(){
                document.getElementById("question").innerHTML = "Ấn vào số bên cạnh hàng ngang để chọn";
                document.getElementById("textboxid").style.visibility = 'visible';
                document.getElementById("test").style.visibility = 'visible';
                document.getElementById("ques1").style.visibility = 'visible';
                document.getElementById("ques2").style.visibility = 'visible';
                document.getElementById("ques3").style.visibility = 'visible';
                document.getElementById("ques4").style.visibility = 'visible';
            }, 4000)
            document.getElementById("CNV").innerHTML = "CHƯỚNG NGẠI VẬT CÓ "+sokitu[5]+" KÍ TỰ";
            document.getElementById("CNV").style.visibility = 'visible';
            document.getElementById("HN1").style.visibility = 'visible';
            document.getElementById("HN2").style.visibility = 'visible';
            document.getElementById("HN3").style.visibility = 'visible';
            document.getElementById("HN4").style.visibility = 'visible';
            document.getElementById("pic").style.visibility = "visible";
            document.getElementById("goc1").style.visibility = "visible";
            document.getElementById("goc2").style.visibility = "visible";
            document.getElementById("goc3").style.visibility = "visible";
            document.getElementById("goc4").style.visibility = "visible";
            document.getElementById("goc5").style.visibility = "visible";
        }, 6000)
    }
    function ques(btn){
        saveAns[0]="";
        index = btn.name;
        sothutu = parseInt(index);
        HN = "HN"+sothutu;
        hangngang = "hangngang"+sothutu;
        goc = "goc"+sothutu;
        document.getElementById("question").innerHTML = "";
        document.getElementById("status").innerHTML = "Hàng ngang số "+sothutu;
        if (btn.name == 5){document.getElementById("status").innerHTML = "Ô trung tâm"}
        hn[sothutu-1] = 0;
        hideRow();
        document.getElementById(hangngang).style.color = "blue"
        document.getElementById("sokitu").innerHTML = sokitu[sothutu-1] + " kí tự"
        pickRow.play();
        timeoutID1 = setTimeout (function(){
            document.getElementById("question").innerHTML = quesRow[sothutu-1]
            var time = ((quesRow[sothutu-1].length - (quesRow[sothutu-1].length % 45))/45)*1000;
            timeoutID2 = setTimeout(function(){
                mainTime.play();
                timing();
                document.getElementById("textboxid").addEventListener("keyup", getAnswer);
                timeoutID3 = setTimeout(function(){
                    document.getElementById("textboxid").removeEventListener("keyup", getAnswer);
                }, 15000);
                timeoutID4 = setTimeout(function(){
                    showAnswer.play();
                }, 17000)
                timeoutID5 = setTimeout(function(){
                    if (saveAns[0] == ansRow[sothutu-1]){
                        rightRow.play();
                        check[sothutu-1] = 1;
                        document.getElementById(HN).innerHTML = ansRow[sothutu-1];
                        document.getElementById(hangngang).style.color = "green";
                            setTimeout(function(){
                                if (checkBtn == 0){
                                pictureShow.play();
                                document.getElementById(goc).style.visibility = "hidden";
                                }
                            }, 6000)
                        }
                    else {
                        wrongRow.play();
                        document.getElementById(hangngang).style.color = "red";
                    }
                }, 20000)
                timeoutID6 = setTimeout(function(){
                    document.getElementById("timeQ").innerHTML = "";
                    if(btn.name!=5) {document.getElementById("question").innerHTML = "Ấn vào số bên cạnh hàng ngang để chọn";}
                    else {
                        document.getElementById("question").innerHTML = "Chuẩn bị 15 giây cuối cùng để đưa ra tín hiệu chướng ngại vật";
                        saveAns[0]="";
                        timeoutID7 = setTimeout(function(){
                                document.getElementById("question").innerHTML = "15 giây cuối cùng để đưa ra tín hiệu chướng ngại vật";
                                mainTime.play();
                                var timeleft1 = 14;
                                var downloadTimer1 = setInterval(function(){
                                    if(timeleft1 <= 0){
                                        clearInterval(downloadTimer1);
                                        document.getElementById("question").innerHTML = "Hết giờ";
                                    } else{
                                        document.getElementById("question").innerHTML = timeleft1+" giây cuối cùng để đưa ra tín hiệu chướng ngại vật";
                                    }
                                    if(checkCNV == 1){clearInterval(downloadTimer1);}
                                    timeleft1 -= 1;
                                }, 1000);
                                timeoutID8 = setTimeout(function(){
                                    checkAnsCNV();
                                }, 18000)
                        }, 5000)
                    }
                    checkRow();
                }, 26000)
            }, time);
        }, 2700)
    }