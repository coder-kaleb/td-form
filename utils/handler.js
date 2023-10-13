export const validationHandler = (userData, setError, name, value) => {
  const { grade, section, team, male, female } = userData;
  // console.log(grade);
  // console.log(firstName);
  // console.log(lastName);
  // console.log(grade);
  // console.log(section);
  // console.log(team);
  // console.log(male);
  // console.log(female);

  const regex = /^09\d{8}$/;
  const regexName = /^[a-zA-Z]{2,20}$/;
  // input validation
  if (name === "phoneNumber") {
    if (regex.test(value)) {
      setError((prev) => ({ ...prev, phoneNumber: false }));
    } else {
      setError((prev) => ({ ...prev, phoneNumber: true }));
    }
  }

  // first name validation
  if (name === "firstName") {
    if (regexName.test(value)) {
      setError((prev) => ({ ...prev, firstName: false }));
    } else {
      setError((prev) => ({ ...prev, firstName: true }));
    }
  }

  // last name validation
  if (name === "lastName") {
    if (regexName.test(value)) {
      setError((prev) => ({ ...prev, lastName: false }));
    } else {
      setError((prev) => ({ ...prev, lastName: true }));
    }
  }

  // list box grade validation
  if (grade.name === "Grade") {
    setError((prev) => ({ ...prev, grade: true }));
  } else {
    setError((prev) => ({ ...prev, grade: false }));
  }

  // list box validation
  if (section.name === "Section") {
    setError((prev) => ({ ...prev, section: true }));
  } else {
    setError((prev) => ({ ...prev, section: false }));
  }

  // list box team validation
  if (team.name === "Team") {
    setError((prev) => ({ ...prev, team: true }));
  } else {
    setError((prev) => ({ ...prev, team: false }));
  }

  // gender_________________
  if (male && female) {
    setError((prev) => ({ ...prev, gender: true }));
  } else if (male || female) {
    setError((prev) => ({ ...prev, gender: false }));
  } else if (!(male || female)) {
    setError((prev) => ({ ...prev, gender: true }));
  }
};
