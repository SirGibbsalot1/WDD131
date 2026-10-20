// arrays in Javascript
let courses = ["WDD131", "WDD130", "CSE110", "CSE210"];

// display  the first course
console.log(courses[0]);

// These select the same item from this array
console.log(courses[3]);
console.log(courses[courses.length - 1]);

// normal for i loop. This does the same as below. (i++ is short hand for i + 1)
for(let i = 0; i < courses.length; i++){
    console.log(courses[i])
}

// // array methods/functions. If you need to know the index you're at in the array, above is better.
// array.forEach(item => {
//     console.log(item)
// });

//Objects use curly braces {}
let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
}
//course is the objecy variable, .instructor selects the data at key "instructor"
console.log(course.instructor);

//don't forget to separate objects in the array with a comma!
let coursesArrayOfObjects = [
    {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
    }, 
    {
    name: "Intro To Programming",
    code: "CSE110",
    credits: 3,
    instructor: "Brother Crosby"
    }
]

console.log(coursesArrayOfObjects[1].name);

let body = document.querySelector('body');

coursesArrayOfObjects.forEach(course => {
    // build put an HTML div with course contents
    let courseDiv = `
    <div>
        <h2>${course.name}</h2>
        <p>Code: ${course.code}</p>
        <p>Credits: ${course.credits}</p>
        <p>Instructor: ${course.instructor} </p>
    </div>
    `
    //add that div to the body
    body.innerHTML += courseDiv;
});