var A = new Array();
A[0] = document.getElementById("playppvod").innerHTML;
A[1] = 'Website: ' + window.location.host;
function getRandomNum(lbound, ubound) {
	return (Math.floor(Math.random() * (ubound - lbound)) + lbound)
};
function cscmstips() {
	var id = getRandomNum(0, 2);
	document.getElementById("playppvod").innerHTML = A[id]
};
setInterval('cscmstips()', 10000);
if(play!='bdhd'){
    document.getElementById("buffer").src = 'http://khanhthoa.byethost24.com/loading.html?'+ new Date();
}
