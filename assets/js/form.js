// this is the form submission it will connect to the google sheet and post the form data to it through the google sheet api
const scriptURL = 'https://script.google.com/macros/s/AKfycbxKsfIj1rg8sy73Sp08BkOJJRMa0RRqt_lMPlc5aHx_3PoDJvCzG1My7600GWjna6gUpA/exec';
            const form = document.forms['google-sheet'];
            form.addEventListener('submit', e => {
              e.preventDefault();
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => setTimeout(function(){ document.getElementById('reply').classList.remove("hidden"); document.getElementById('myForm').classList.add("hidden");}, 1))
                .catch(error => console.error('Error!', error.message));
            });
