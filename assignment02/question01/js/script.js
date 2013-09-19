// Put student grades into an array
var studentGrade = new Array(39,83,93,93,73,62,72,71);

var totalGrades = 0;
var totalStudents = studentGrade.length;

for (i=0;i<studentGrade.length;i++) {
	totalGrades = totalGrades + studentGrade[i];
}

var studentAverage = totalGrades / totalStudents;

document.write('The class average on the latest test is: '+studentAverage+' precent');


