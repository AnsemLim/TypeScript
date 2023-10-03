enum Role { ADMIN, READ_ONLY, AUTHOR }; //typescript will convert enum to numbers, starting from 0

const person:{
    name: string,
    age: number,
    hobbies: string[]
    role: number
    }={
    name: 'Todd',
    age: 27,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN
};	

if (person.role === 0) {
    console.log('is admin');
}