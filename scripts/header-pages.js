document.addEventListener('DOMContentLoaded', () => {
    const userType = localStorage.getItem('userType');
    const userName = localStorage.getItem('loggedInUser');

    const dropdownfirst = document.getElementById('dropdown-first');
    const dropdownsecond = document.getElementById('dropdown-second');
    const idUserGreeting = document.getElementById('user-greeting');
    const greetingElement = document.getElementById('greeting');
    const loginText = document.getElementById('login-header');
    
    const settingHeader = (accountUrl, logoutUrl) => {
      dropdownfirst.style.display = 'none';
      dropdownsecond.style.display = 'none';
      idUserGreeting.style.display = 'block';
      greetingElement.innerHTML = 'Hey <span class="user">' + userName + '!</span>';
      loginText.innerHTML = `
          <a href="${accountUrl}">My Account</a>
          <a href="${logoutUrl}" id="logout-link">Logout</a>
      `;
    };

    if (userType === 'student') {
      settingHeader('./profile_student.html', './login_student.html');
    } else if (userType === 'company') {
      settingHeader('./profile_employer.html', './login_employer.html');
    }

    loginText.addEventListener('click', (event) => {
      if (event.target && event.target.id === 'logout-link') {
          localStorage.removeItem('userType');
          localStorage.removeItem('loggedInUser');
          localStorage.removeItem('userEmail');
      }
    });
});

