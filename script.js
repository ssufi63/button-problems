
function buttonNumber(id){
    return document.getElementById(id);
}

function addingEventHandler(){
    let btn = document.getElementsByClassName("button");
    for(i = 0; i< btn.length; i++){
        btn[i].addEventListener("click", function(){
            let numberBtn = this.innerHTML;
            if(numberBtn == "C"){
                buttonNumber("numbersArea").value = "";
            }
            else if(numberBtn == "<") {
                let numberBtn = buttonNumber("numbersArea").value;
                let removeNumber = numberBtn.slice(0, -1);
                buttonNumber("numbersArea").value = removeNumber;

            }
            else{
                buttonNumber("numbersArea").value += numberBtn;
            }
        });

    }

}
