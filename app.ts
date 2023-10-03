const person:{
    name: string,
    age: number,
    hobbies: string[]
    role: [string, number]
    }={
    name: 'Todd',
    age: 27,
    hobbies: ['Sports','Cooking'],
    role: ['number', 2]
};	
/* tupple role 
    as we can see the role have been declare as string and number
    so it will validate is the input of role is number and string.
    note: it must be under same line.
*/

let favoruteActivities: string[];
favoruteActivities = ['Sport,Cooking']

console.log(person.name + ' ' + person.age + ' ' + person.hobbies + favoruteActivities);