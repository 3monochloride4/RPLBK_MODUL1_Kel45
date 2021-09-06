document.getElementById("tombol_form").
addEventListener("click", tampilkan_nilai_form);
var a;
var b;
hasil=()=>"input yang anda masukkan adalah " + a + " dan " + b;
function tampilkan_nilai_form(){
    a=document.getElementById("input_form1").value;
    b=document.getElementById("input_form2").value;
    console.log("anda memasukkan "+a+" dan "+b);
    document.getElementById("hasil").innerHTML = hasil(a, b);
}
hasil();
