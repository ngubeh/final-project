let users = {}; // Stores registered users
    let currentUser = null; // Track the logged-in user

    // Show the selected page
    function showPage(page) {
      if (page === 'home' || page === 'about' || page === 'services' || page === 'contact') {
        if (!currentUser) {
          alert('Please log in or sign up first.');
          showPage('login'); // Redirect to login page if not logged in
          return;
        }
      }

      // Hide all pages
      const pages = ['home', 'about', 'services', 'contact', 'login', 'signup'];
      pages.forEach(p => document.getElementById(p).style.display = 'none');

      // Show the selected page
      document.getElementById(page).style.display = 'block';
    }

    // Signup function
    function signup() {
      const username = document.getElementById('signup-username').value;
      const password = document.getElementById('signup-password').value;

      if (username.length >= 4 && password.length >= 4) {
        if (users[username]) {
          alert('Username already taken. Please choose a different one.');
        } else {
          users[username] = password; // Store user credentials
          alert('Signup successful! Now you can log in.');
          showPage('login'); // Redirect to login page after successful signup
        }
      } else {
        alert('Username and password must be at least 4 characters long.');
      }
    }

    // Login function
    function login() {
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      if (users[username] && users[username] === password) {
        currentUser = username; // Set the current user
        alert('Login successful!');
        showPage('home'); // Redirect to home page after successful login
      } else {
        alert('Invalid username or password. Please try again.');
      }
    }

    // Read More function
    function readMore(articleId) {
      const articles = [
        "A serious maritime incident unfolded off the coast of East Yorkshire, UK, as an oil tanker collided with a cargo vessel, igniting urgent environmental concerns. Initial reports indicate that the tanker was carrying 'highly toxic chemicals,' and significant amounts of jet fuel have leaked into the surrounding waters. Coastal communities and environmental organizations are on high alert, monitoring the potential long-term damage to marine life and coastal ecosystems. Authorities have deployed specialized teams to contain the spill and are working to assess the full extent of the environmental impact. This incident has reignited debates about the safety protocols for transporting hazardous materials through busy shipping lanes.",
        "The US stock markets have experienced a notable downturn, reflecting growing anxieties about the nation's economic stability. This decline comes against a backdrop of global economic fluctuations, rising inflation, and uncertainties surrounding future interest rate adjustments. Analysts are closely examining the factors contributing to this market volatility, with many pointing to concerns about potential recessions. Investors are urged to exercise caution and diversify their portfolios in this uncertain economic climate. This market fluctuation has caused many to re-evaluate their retirement portfolios",
        "The social media platform X, formerly known as Twitter, has reported a massive cyberattack that resulted in users being unable to login. Elon Musk has made statements regarding the attack, and that security experts are working around the clock to mitigate the damage and identify the perpetrators. This incident highlights the increasing vulnerability of online platforms to sophisticated cyber threats. Experts are warning users to be vigilant about their online security and to take precautions to protect their personal information. This attack has raised many questions regarding the overall security of large social media platforms",
        "The situation in Ukraine continues to be a source of significant international concern, with reports of ongoing conflict and escalating tensions. International efforts to broker a peaceful resolution are ongoing, but progress remains slow. The humanitarian crisis resulting from the conflict continues to worsen, with millions of people displaced and in need of aid. Global leaders are calling for renewed diplomatic efforts to de-escalate the situation and prevent further loss of life. The effects of the conflict are being felt globally, with impacts on energy prices and food security",
        "Full content of Article 5...",
        "Full content of Article 6...",
        "Full content of Article 7...",
        "Full content of Article 8...",
        "Full content of Article 9...",
        "Full content of Article 10..."
      ];
      document.getElementById('modal-title').innerText = `Article Title ${articleId}`;
      document.getElementById('modal-content').innerText = articles[articleId - 1];
      document.getElementById('myModal').style.display = "block";
    }

    // Close the modal
    function closeModal() {
      document.getElementById('myModal').style.display = "none";
    }

    // Initialize the homepage to be displayed
    showPage('home');