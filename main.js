//variable j for keeping track of overall index of tokens array in json file
var j = 0;
var maxLength = data.tokens.length;

/*!
 * @brief This method is invoked on loading of page and populate Tokens on screen.
 * After 4 second then main1 method is called to repeat this procedure for next elements recursively.
 *
 * json structure
 * data={
 * 	"tokens":["name":"Name Data", "tnum":["","",""]],... 
 * }
 * We are just using first value of tnum(token number) array
 */
function main() {
	for (var i=0; i<3 ; i++) {
	    document.getElementById('d'+i).innerHTML = data.tokens[j].name;
	    document.getElementById('c'+i).innerHTML = data.tokens[j].tnum[0];
	    j = parseInt((j+1) % maxLength);
	}
	setTimeout(main1,4000);
}

function main1() {
	for (var i=0; i<3 ; i++) {
	    document.getElementById('d'+i).innerHTML = data.tokens[j].name;
	    document.getElementById('c'+i).innerHTML = data.tokens[j].tnum[0];
	    j = parseInt((j+1)% maxLength);
	}
	setTimeout(main1,4000);
}
