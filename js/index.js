//Coding Guidelines
// GET THE REFERENCES
const container = document.querySelector('.container');
const links = "";
let url = './partials/partial-1.html';
// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = "";


function loadData() {
	fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (data) {
			container.innerHTML = data;
		});
}

//
//function getAttributes()
//{
// var u = document.querySelector('nav div a').href;
// return u;
//}

   /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */

   // RUN THE fetch(urlFeed).then().then().catch()
// CLOSE YOUR FUNCTION loadContent HERE
// CALL loadContent WITH THE CURRENT VALUE OF url 

loadData();


// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
//const selectContent "";

   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   // CALL THE FUNCTION loadContent PROVIDING THE href VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER OF loadContent FUNCTION.
// CLOSE YOUR FUNCTION selectContent HERE
// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
button.addEventListener("click", () => {
    console.log("Button clicked.");
  });