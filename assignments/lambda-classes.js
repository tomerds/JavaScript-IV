// CODE here for your Lambda Classes

class Person {
    constructor(att) {
        this.name = att.name;
        this.age = att.age;
        this.location = att.location;
    };
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
};

class Instructor extends Person {
    constructor(att) {
        super(att);
        this.speciality = att.speciality;
        this.favLanguage = att.favLanguage;
        this.catchPhrase = att.catchPhrase;
    };
    demo(subject) {
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    };
};

class Student extends Person {
    constructor(att) {
        super(att);
        this.prevBG = att.previousBackground;
        this.className = att.className;
        this.favSubjects = att.favSubjects;
    };
    listSubjects() {
        this.favSubjects.forEach(e => console.log(e));
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has submitted a sprint for ${subject}`);
    };
};

class ProjectManager extends Instructor {
    constructor(att) {
        super(att);
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    };
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times`);
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
};

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

console.log(fred.demo('carago'));

const miranda = new ProjectManager({
    name: 'Miranda',
    location: 'CDMX',
    age: 23,
    favLanguage: 'French',
    specialty: 'Crotchet',
    catchPhrase: `Who fucking cares`,
    gradClassName: 'CS-Tomer'
});

miranda.standUp('Me');

miranda.debugsCode({ name: 'Tomer' }, 'Maths');
