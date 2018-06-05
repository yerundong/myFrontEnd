//先引入1_1.js
document.write('<script src="1_1.js"></script>');

function inpAlert (id1,id2) {
	var targObj1 = document.getElementById(id1);
	var targObj2 = document.getElementById(id2);
	var sum = count(targObj1,targObj2);
	alert(sum)
}