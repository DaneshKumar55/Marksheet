var english = prompt("Type english marks (1-100)");
if (english === "" || english === null){
    alert("Type something...")
} else if (Number(english)>100){
    alert("Plaese type valid english marks (1-100)")
} else{
    var html = prompt("Type html marks (1-100)");
    if (html ==="" || html ===null){
        alert("type something...")
    }else if (Number(html) > 100){
        alert("please enter valid html marks (1 - 100)")
    } else{
        var css = prompt("type css marks (1 - 100)");
        if(css === "" || css === null){
            alert("type something...")
        } else if (Number(css)>100){
            alert("please enter valid css marks (1 - 100)")
        } else{
            var java = prompt("Type java marks (1-100)");
            if (java === "" || java === null){
            alert("type something...")
            } else if (Number(java)>100){
            alert("please enter valid java marks (1 - 100)")
            } else {
                var php = prompt("Type php marks (1-100)");
                if (php === "" || php=== null){
                     alert("type something...")
                } else if (Number(php)>100){
                    alert("please enter valid php marks (1 - 100)")
                } else {
                    var total = Number(english) + Number(html) + Number(css) + Number(java) + Number(php);
                    var percentage = total*100/500;
                } if(percentage>=80){ // 80 ... 100
                    alert("Your percentage is " + percentage + "% and your grade is (A+).")
                } else if (percentage >= 70) {
                    alert("Your percentage is " + percentage + "% and your grade is (A).")
                } else if (percentage >= 60) {
                    alert("Your percentage is " + percentage + "% and your grade is (B).")
                } else if (percentage >= 50) {
                    alert("Your percentage is " + percentage + "% and your grade is (C).")
                } else if (percentage >= 33) {
                    alert("Your percentage is " + percentage + "% and your grade is (D).")
                }
                // else if(percentage < 33){
                //     alert("Your percentage is " + percentage + "% and your grade is (F).")
                // }
                else {
                    alert("Your percentage is " + percentage + "% and your grade is (F).")
                }
            }
        }
    }
}