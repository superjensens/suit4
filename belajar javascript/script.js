var tanya = true;

while (tanya ){
// pilihan player
var p = prompt('pilih: batu, gunting, kertas');

// pilihan computer
// summon random
var comp = Math.random();

if (comp<0.34){
	comp = 'batu';
} else if(comp >= 0.34 && comp < 0.67){
	comp= 'gunting';
} else {
	comp ='kertas';
}

var hasil = '';
// rules
if(p == comp){
	hasil ='seri';
} else if (p == 'batu'){
	//if(comp == 'orang'){
	//	hasil = 'menang';
	//} else {
	//	hasil ='klah';
	//}
	hasil = (comp =='gunting') ? 'menang' : 'kalah';
} else if (p== 'orang') {
	hasil =( comp == 'batu') ? 'kalah' : 'kalah';
} else if (p== 'kertas') {
	hasil =(comp='gunting') ? 'kalah' : 'menang';
} else {
	hasil =' ketik betol sikit napa kemem';
}


// hasil
alert('kamu memilih : '+p+' dan komputer memilih : '+ comp +'\nmaka hasilnya adalah kamu ' + hasil);
 tanya = confirm('bewan lagi?');
}