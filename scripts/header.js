document.addEventListener('DOMContentLoaded', () => {
    const userType = localStorage.getItem('userType'); // Or use any other method to retrieve user role

    const dropdownfirst = document.getElementById('dropdown-first');
    const dropdownsecond = document.getElementById('dropdown-second');
    const idUserGreeting = document.getElementById('user-greeting');
    const greetingElement = document.getElementById('greeting');

    if (userType === 'student') {          
      dropdownfirst.style.display = 'none';
      dropdownsecond.style.display = 'none';
      idUserGreeting.style.display = 'block';
      greetingElement.textContent = 'Hey ' + localStorage.getItem('loggedInUser') + '!';
    } else if (userType === 'company') {
      userGreeting.innerHTML = '<p>Hey ' + localStorage.getItem('loggedInUser') + '!</p>';
      dropdownfirst.style.display = 'none';
      dropdownsecond.style.display = 'none';
      idUserGreeting.style.display = 'block !important';
    } else {
      userGreeting.innerHTML = '';
      dropdownfirst.style.display = 'block';
      dropdownsecond.style.display = 'block';
    }
});

const logoutLink = document.getElementById('logout-link');
logoutLink.addEventListener('click', (event) => {
    event.preventDefault();  
    localStorage.removeItem('userType');
    localStorage.removeItem('loggedInUser');
  });
  
