function classAverage() {

	// Declare array
	var grades = new Array();
	var gradeTotal = 0;

	// Collect data
	while ((newGrade != 'DONE') || (newGrade == 'DONE')) {

		var newGrade = prompt('Enter a student grade for averaging.\nEnter DONE when you have finished.', '');

		if (newGrade != 'DONE') {
			grades.push(parseInt(newGrade));
		}

		if (newGrade == 'DONE') {
			break;
		}
	}

	// Tabulate total
	for (i=0;i<grades.length;i++) {
		gradeTotal = gradeTotal + grades[i]
	}

	// Calculate average
	var classAverage = gradeTotal / grades.length;

	document.write('<h4>Class average = '+classAverage+'</h4>');

} 

