const students = [
  {
    id: 'student1',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Gabe',
    lastName: 'Seals',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Jasmine',
    lastName: 'Williams',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
  },
  {
    id: 'student22',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
  },
];

const getStudents = () => students;

const livingStudents = () => students.filter((student) => !student.isDead);
const dearlyBeloved = () => students.filter((student) => student.isDead);
const randomVictims = () => {
  const randomVictim = livingStudents()[Math.floor(Math.random() * livingStudents().length)];
  randomVictim.isDead = true;
};

export default {
  getStudents,
  livingStudents,
  dearlyBeloved,
  randomVictims,
};
