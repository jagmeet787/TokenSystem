
var j = 0;

function main() {
	j=0;
	for (var i=0; i<4 ; i++) {
	    document.getElementById('d'+i).innerHTML = data.tokens[j].name;
	    document.getElementById('c'+i).innerHTML = data.tokens[j].tnum[0];
	    j++;
	}
	// alert(j);
	// alert(j);
	// document.getElementById('va').innerHTML = j;
	setTimeout(main1,3000);
}

function main1() {
	for (var i=0; i<4 ; i++) {
	    document.getElementById('d'+i).innerHTML = data.tokens[j].name;
	    document.getElementById('c'+i).innerHTML = data.tokens[j].tnum[0];
	    j++;
	}
	j = 0;
	// document.getElementById('va').innerHTML = j;
	setTimeout(main,3000);
}