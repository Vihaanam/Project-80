var para1_writer = [];
var para2_writer = [];
function write_the_para1() {
    for (var i = 1; i <= 6; i++) {
        para1_writer.push(document.getElementById("input_"+i).value);
        console.log(para1_writer);
    }
    console.log(para1_writer);
    document.getElementById("paragraphh").style.display = "inline-block";
    document.getElementById("paragraph1").innerHTML = para1_writer.join(". ");
}
function write_the_para2() {
    for (var i = 7; i <= 12; i++) {
        para2_writer.push(document.getElementById("input_"+i).value);
        console.log(para2_writer);
    }
    console.log(para2_writer);
    document.getElementById("paragraphh").style.display = "inline-block";
    document.getElementById("paragraph2").innerHTML = para2_writer.join(". ");
}