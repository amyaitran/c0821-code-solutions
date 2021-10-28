function graduate(credential) {
  return function zz(fullName) {
    console.log(`${fullName}, ${credential}`);
  };
}

var medicalSchool = graduate('M.D.');
var lawSchool = graduate('Esq.');

medicalSchool('Amy Tran');
lawSchool('Amy Tran');
