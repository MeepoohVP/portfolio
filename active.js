togglePopup = () => {
    document.getElementById("dropbar").classList.toggle("active");
}
dot1 = () => {
    document.getElementById("dot1").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot2").style = "width:15px;height:15px;background-color: #fff;"
}

dot2 = () => {
    document.getElementById("dot2").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot3").style = "width:15px;height:15px;background-color: #fff;"
}
dot3 = () => {
    document.getElementById("dot3").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot4").style = "width:15px;height:15px;background-color: #fff;"
}
dot4 = () => {
    document.getElementById("dot4").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot5").style = "width:15px;height:15px;background-color: #fff;"
}
dot5 = () => {
    document.getElementById("dot5").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot6").style = "width:15px;height:15px;background-color: #fff;"
}
dot6 = () => {
    document.getElementById("dot6").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot7").style = "width:15px;height:15px;background-color: #fff;"
}
rev1 = () => {
    document.getElementById("dot6").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot5").style = "width:15px;height:15px;background-color: #fff;"
}
rev2 = () => {
    document.getElementById("dot5").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot4").style = "width:15px;height:15px;background-color: #fff;"
}
rev3 = () => {
    document.getElementById("dot4").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot3").style = "width:15px;height:15px;background-color: #fff;"
}
rev4 = () => {
    document.getElementById("dot3").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot2").style = "width:15px;height:15px;background-color: #fff;"
}
rev5 = () => {
    document.getElementById("dot2").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot1").style = "width:15px;height:15px;background-color: #fff;"
}
rev6 = () => {
    document.getElementById("dot7").style = "width:10px;height:10px;background-color: #bbb;"
    document.getElementById("dot6").style = "width:15px;height:15px;background-color: #fff;"
}

changeText = () => {
    document.getElementById("text").innerHTML = "<span style='color: #ffb6a1;' onchange = 'changeText1()'>ชื่อ</span> กิตติกร วรประทีป";
    document.getElementById("next").innerHTML = '<button class="next" onclick = "changeText1();dot1();">Next >></button>'
}
changeText1 = () => {
    document.getElementById("text").innerHTML = "<span style='color: #ffb6a1;'>ชื่อเล่น</span> พู";
    document.getElementById("next").innerHTML = '<button class="next" onclick ="changeText();rev5();" style="background: #fff;width: 110px;"><< Previous</button>&nbsp;&nbsp;<button class="next" onclick = "changeText2();dot2();">Next >></button>';
}
changeText2 = () => {
    document.getElementById("text").innerHTML = "<span style='color: #ffb6a1;'>อายุ</span> 17 ปี";
    document.getElementById("next").innerHTML = '<button class="next" onclick ="changeText1();rev4();" style="background: #fff;width: 110px;"><< Previous</button>&nbsp;&nbsp;<button class="next" onclick = "changeText3();dot3();">Next >></button>'
}
changeText3 = () => {
    document.getElementById("text").innerHTML = "<span style='color: #ffb6a1;'>วันเกิด</span> 11 พฤศจิกายน 2547";
    document.getElementById("next").innerHTML = '<button class="next" onclick ="changeText2();rev3();" style="background: #fff;width: 110px;"><< Previous</button>&nbsp;&nbsp;<button class="next" onclick = "changeText4();dot4();">Next >></button>'
}
changeText4 = () => {
    document.getElementById("text").innerHTML = "<span style='color: #ffb6a1;'>ศึกษาที่</span><br>โรงเรียนบางปะกอกวิทยาคม";
    document.getElementById("next").innerHTML = '<button class="next" onclick ="changeText3();rev2();" style="background: #fff;width: 110px;"><< Previous</button>&nbsp;&nbsp;<button class="next" onclick = "changeText5();dot5()">Next >></button>'
}

changeText5 = () => {
    document.getElementById("text").innerHTML = "<span style='color: #ffb6a1;'>งานอดิเรก</span> Coding, เลี้ยงแมว";
    document.getElementById("next").innerHTML = '<button class="next" onclick ="changeText4();rev1();" style="background: #fff;width: 110px;"><< Previous</button>&nbsp;&nbsp;<button class="next" onclick = "changeText6();dot6()">Next >></button>'
}
changeText6 = () => {
    document.getElementById("text").innerHTML = "<span style='color: #f17572;font-size: 25px;'>My skill</span><br>"
        + "<div class = 'icon'><img src = 'html-5.png'>" + "<img src = 'css-3.png'>" + "<img src = 'java-script.png'>"
        + "<img src = 'pyicon.png'>" + "<img src = 'c-logo.png'>" + "<img src = 'git.png'></div>";
    document.getElementById("next").innerHTML = '<button class="next" onclick ="changeText5();rev6();" style="background: #fff;width: 110px;"><< Previous</button>'
}

