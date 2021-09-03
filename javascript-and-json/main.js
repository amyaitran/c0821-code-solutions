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

var String = JSON.stringify({ 'Number id': 12, 'String name': 'toad' });
console.log('String:', String);
console.log('typeof String:', typeof String);

var Object = JSON.parse(String);
console.log('Object:', Object);
console.log('typeof Object:', typeof Object);
