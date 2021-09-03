var arr = [
  {
    isbn: 123,
    title: 'Title A',
    author: 'Author A'
  },

  {
    isbn: 124,
    title: 'Title B',
    author: 'Author B'
  },

  {
    isbn: 125,
    title: 'Title C',
    author: 'Author C'
  }
];
console.log('arr:', arr);
console.log('typeof arr:', typeof arr);

var arrJSON = JSON.stringify(arr);
console.log('arrJSON:', arrJSON);
console.log('typeof arrJSON:', typeof arrJSON);

var studentJSON = '{"id":12,"name":"toad"}';
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

var student = JSON.parse(studentJSON);
console.log('student:', student);
console.log('typeof student:', typeof student);
