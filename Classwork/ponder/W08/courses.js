// This is a JavaScript object
const aCourse = {
    code: 'WDD131',
    name: 'Dynamic Web Fundamentals',
    sections: [
        {
        sectionNum: 1, 
        roomNum: 'STC 353', 
        enrolled: 26, 
        days: 'TTh', 
        instructor: 'Bro T',
        },

        {
        sectionNum: 2, 
        roomNum: 'STC 347', 
        enrolled: 28, 
        days: 'TTh', 
        instructor: 'Sis A'
        }
    ],

    
    enrollStudent: function(sectionNumber){
        // Find the correct section in array basd on sectionNumber passed in
        console.log("enrollStudent")

        // **keyword this. is for the object it is in**
        // "section" is just what we are calling what is being iterated through, which is the above object
        this.sections.forEach(section => {
            if (section.sectionNum == sectionNumber){
                section.enrolled ++;
            }
        })
        // increment enrollment of that section by 1
        // we updated enrollment, renderer

        renderSections(this.sections);
    }
};

// console log the second sections instructor: Sister A
console.log(aCourse.sections[1].instructor);


// pasted in from ponder

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
          