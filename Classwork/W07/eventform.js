const type = document.querySelector("#type");
const form = document.querySelector("#event-ticket");

const output = document.querySelector("#output")
function updateNotesField() {
    const value = type.value;
    if (type.value=="student") {
        document.querySelector(".type-box").style.display = "block";
        document.querySelector(".type-box").innerHTML = `
        
                <div class="full">
                    <label for="student-num">BYU-I Number</label>
                    <input id="student-num" name="student-num" type="text"/>
                </div>
                `
    };

    if (type.value=="guest") {
        document.querySelector(".type-box").style.display = "block";
        document.querySelector(".type-box").innerHTML = `
        
                <div class="full">
                    <label for="access-code">Access code</label>
                    <input id="access-code" name="access-code" type="text" placeholder="Access code:"/>
                </div>
        
        `

    };



};

function studentNumInvalid() {
  const studentNum = document.querySelector("#student-num");
  return !studentNum || !/^\d{9}$/.test(studentNum.value);
}

// function guestCodeInvalid(){

// };

type.addEventListener("change", updateNotesField);


updateNotesField();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.type.value === "student" && studentNumInvalid()) {
    output.textContent = "Error: please enter exactly 9 digits for a student ID.";
    return;
  }

    const guestCode = document.querySelector("#access-code");
    if (guestCode.value != "EVENT131") {
        output.textContent = "Error: not a valid access code"
        return;
    }

  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const ticketType = form.type.value;
  const eventDate = form["event-date"].value;

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>Date: ${eventDate}</p>
    <p>Type: ${ticketType}</p>
  `;

  form.reset();
  updateNotesField();
});