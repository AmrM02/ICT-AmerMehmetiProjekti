document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const birthdateInput = document.getElementById('birthdate');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from auto-submitting

    // Check for required fields
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    if (!username || !email || !password || !birthdateInput.value) {
      alert("Please fill in all fields.");
      return;
    }

    if (age < 15) {
      const ageModal = new bootstrap.Modal(document.getElementById('ageModal'));
      ageModal.show();
      return;
    }

    //Redirects to homepage
    window.location.href = "home.html";
  });
});


  