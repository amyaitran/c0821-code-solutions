/* exported getStudentNames */
// function getStudentNames(students) {
//   var arr = [];
//   for (var names in students) {
//     arr.push(names[name]);
//   }
//   return arr;
// }

function getStudentNames(students) {
  var arr = [];
  for (var i = 0; i < students.length; i++) {
    arr.push(students[i].name);
  }
  return arr;
}
