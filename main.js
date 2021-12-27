let button = [];

const quiz = [
    {
        mode:"start",
        question:"JR東日本クイズ",
        choices:[
            "始める"
        ]
    },
    {
        mode:"difficulty",
        question:"初級",
        choices:[
            "次へ"
        ]
    },
    {
        mode:"quiz",
        question:"E233系0番台は何線用？",
        answer:"中央線快速",
        choices:[
            "中央線快速",
            "中央・総武各駅停車",
            "山手線",
            "埼京線",
        ]
    },
    {
        mode:"end",
        question:"終了"
    },
];

let nowQuestionNumber = 0; 

function question(){
    console.log(nowQuestionNumber)
    let q = document.getElementById("q");
    q.textContent = quiz[nowQuestionNumber].question;
    for(let i = 0; i < 10; i++){
        button[i] = document.getElementById("b" + i);
        switch(quiz[nowQuestionNumber].mode){
            case "start":
                if(i < quiz[nowQuestionNumber].choices.length){
                    button[i].className = "button";
                    button[i].textContent = quiz[nowQuestionNumber].choices[i];
                }else{
                    button[i].className = "nobutton";
                }
                button[i].addEventListener("click", function(e){
                    console.log(nowQuestionNumber)
                    if(quiz[nowQuestionNumber].mode == "start"){
                        nowQuestionNumber++;
                        question();
                    }
                });
                break;
            case "difficulty":
                if(i < quiz[nowQuestionNumber].choices.length){
                    button[i].className = "button";
                    button[i].textContent = quiz[nowQuestionNumber].choices[i];
                }else{
                    button[i].className = "nobutton";
                }
                button[i].addEventListener("click", function(e){
                    console.log(nowQuestionNumber)
                    if(quiz[nowQuestionNumber].mode == "difficulty"){
                        nowQuestionNumber++;
                        question();
                    }
                });
                break;
            case "quiz":
                if(i < quiz[nowQuestionNumber].choices.length){
                    button[i].className = "button";
                    button[i].textContent = quiz[nowQuestionNumber].choices[i];
                }else{
                    button[i].className = "nobutton";
                }
                button[i].addEventListener("click", function(e){
                    console.log(nowQuestionNumber)
                    if(quiz[nowQuestionNumber].mode == "quiz"){
                        if(quiz[nowQuestionNumber].answer === e.target.textContent){
                            window.alert("正解!。\n正解は、"+quiz[nowQuestionNumber].answer+"です。")
                        }else{
                            window.alert("不正解!。\n正解は、"+quiz[nowQuestionNumber].answer+"です。")
                        }
                        nowQuestionNumber++;
                        question();
                    }
                });
                break;
            case "end":
                button[i].className = "nobutton";
                break;
        }
    }

//     if(quiz[nowQuestionNumber].question == "終了"){
//         for(let i = 0; i < 10; i++){
//             button[i] = document.getElementById("b" + i);
//             button[i].className = "nobutton";
//         }
//         return;
//     } 
//     for(let i = 0; i < 10; i++){
//         button[i] = document.getElementById("b" + i);
//         if(i < quiz[nowQuestionNumber].choices.length){
//             button[i].className = "button";
//             button[i].textContent = quiz[nowQuestionNumber].choices[i];
//         }else{
//             button[i].className = "nobutton";
//         }


//         button[i].id = "b" + i;
//         button[i].addEventListener("click", function(e){
//             console.log(e.target.id);
//             if(quiz[nowQuestionNumber].answer === e.target.textContent){
//                 window.alert("正解!。\n正解は、"+quiz[nowQuestionNumber].answer+"です。")
//             }else{
//                 window.alert("不正解!。\n正解は、"+quiz[nowQuestionNumber].answer+"です。")
//             }
//             nowQuestionNumber++;
//             question();
//         });
//         document.body.appendChild(button[i]);
//     }
}

question();