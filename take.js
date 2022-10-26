function pilihan(){
    var x = document.getElementById("pilihan").value;
    if(x=="Segitiga"){
        document.getElementById("segitiga").style.display= "block";
        document.getElementById("segiempat").style.display= "none";
        document.getElementById("trapesium").style.display= "none";
        document.getElementById("jajargenjang").style.display= "none";
        document.getElementById("lingkaran").style.display= "none";
    }
    else if(x=="Segiempat"){
        document.getElementById("segiempat").style.display= "block";
        document.getElementById("segitiga").style.display= "none";
        document.getElementById("trapesium").style.display= "none";
        document.getElementById("jajargenjang").style.display= "none";
        document.getElementById("lingkaran").style.display= "none";
    }
    else if(x=="Trapesium"){
        document.getElementById("trapesium").style.display= "block";
        document.getElementById("segitiga").style.display= "none";
        document.getElementById("segiempat").style.display= "none";
        document.getElementById("jajargenjang").style.display= "none";
        document.getElementById("lingkaran").style.display= "none";
    }
    else if(x=="Jajaran-genjang"){
        document.getElementById("jajargenjang").style.display= "block";
        document.getElementById("segitiga").style.display= "none";
        document.getElementById("segiempat").style.display= "none";
        document.getElementById("trapesium").style.display= "none";
        document.getElementById("lingkaran").style.display= "none";
    }
    else if(x=="Lingkaran"){
        document.getElementById("lingkaran").style.display= "block";
        document.getElementById("segitiga").style.display= "none";
        document.getElementById("segiempat").style.display= "none";
        document.getElementById("trapesium").style.display= "none";
        document.getElementById("jajargenjang").style.display= "none";
    }
    else{
        document.getElementById("lingkaran").style.display= "none";
        document.getElementById("segitiga").style.display= "none";
        document.getElementById("segiempat").style.display= "none";
        document.getElementById("trapesium").style.display= "none";
        document.getElementById("jajargenjang").style.display= "none";
    }
}


function hasil(){
    var a = parseInt(document.getElementById("ss1").value);
    var b = parseInt(document.getElementById("ss2").value);
    var c = parseInt(document.getElementById("ss3").value);
    var d = parseInt(document.getElementById("p").value);
    var e = parseInt(document.getElementById("l").value);
    var f = parseInt(document.getElementById("st1").value);
    var g = parseInt(document.getElementById("st2").value);
    var h = parseInt(document.getElementById("st3").value);
    var i = parseInt(document.getElementById("st4").value);
    var j = parseInt(document.getElementById("a").value);
    var k = parseInt(document.getElementById("t").value);
    var l = parseInt(document.getElementById("m").value);
    var m = parseInt(document.getElementById("j").value);



    luas_s3 = a * b / 2;
    keliling_s3 = a + b + c;
    luas_s4 = d * e;
    keliling_s4 = (d + e)*2;
    luas_t= (f + g)/2 * i;
    keliling_t = f + g + h + i;
    luas_jg= j * k;
    keliling_jg = (j + l)*2;
    luas_l= 22 * m * m /7;
    keliling_l= 2 * 22 * m / 7; 


    document.getElementById("luas_segitiga").value=luas_s3;
    document.getElementById("keliling_segitiga").value=keliling_s3;
    document.getElementById("luas_segiempat").value=luas_s4;
    document.getElementById("keliling_segiempat").value=keliling_s4;
    document.getElementById("luas_trapesium").value=luas_t;
    document.getElementById("keliling_trapesium").value=keliling_t;
    document.getElementById("luas_jajargenjang").value=luas_jg;
    document.getElementById("keliling_jajargenjang").value=keliling_jg;
    document.getElementById("luas_lingkaran").value=luas_l;
    document.getElementById("keliling_lingkaran").value=keliling_l;


    if (a > 0){
        document.getElementById("segitiga_hasil").style.display="block";
        document.getElementById("segiempat_hasil").style.display="none";
        document.getElementById("trapesium_hasil").style.display="none";
        document.getElementById("jajargenjang_hasil").style.display="none";
        document.getElementById("lingkaran_hasil").style.display="none";
    }

    else if (d > 0){
        document.getElementById("segitiga_hasil").style.display="none";
        document.getElementById("segiempat_hasil").style.display="block";
        document.getElementById("trapesium_hasil").style.display="none";
        document.getElementById("jajargenjang_hasil").style.display="none";
        document.getElementById("lingkaran_hasil").style.display="none";
    }

    else if (f > 0){
        document.getElementById("segitiga_hasil").style.display="none";
        document.getElementById("segiempat_hasil").style.display="none";
        document.getElementById("trapesium_hasil").style.display="block";
        document.getElementById("jajargenjang_hasil").style.display="none";
        document.getElementById("lingkaran_hasil").style.display="none";
    }

    else if (j > 0){
        document.getElementById("segitiga_hasil").style.display="none";
        document.getElementById("segiempat_hasil").style.display="none";
        document.getElementById("trapesium_hasil").style.display="none";
        document.getElementById("jajargenjang_hasil").style.display="block";
        document.getElementById("lingkaran_hasil").style.display="none";
    }

    else if (m > 0){
        document.getElementById("segitiga_hasil").style.display="none";
        document.getElementById("segiempat_hasil").style.display="none";
        document.getElementById("trapesium_hasil").style.display="none";
        document.getElementById("jajargenjang_hasil").style.display="none";
        document.getElementById("lingkaran_hasil").style.display="block";
    }

    
    
    document.getElementById("gambar_s3").style.width=a+"mm";
    document.getElementById("gambar_s3").style.height=b+"mm";
    document.getElementById("gambar_s4").style.width=d+"mm";
    document.getElementById("gambar_s4").style.height=e+"mm";
    document.getElementById("gambar_t").style.width=g+"mm";
    document.getElementById("gambar_t").style.height=i+"mm";
    document.getElementById("gambar_j").style.width=j+"mm";
    document.getElementById("gambar_j").style.height=k+"mm";
    document.getElementById("gambar_l").style.width=m*2+"mm";
}


