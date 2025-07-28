document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  // Create the main structure
  root.innerHTML = `
    <header>
      <div class="container header-container">
        <a href="#" class="logo">Prasetyo</a>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button class="mobile-menu-btn">☰</button>
      </div>
    </header>
    
    <main>
      <!-- About Section -->
      <section id="about">
        <div class="container">
          <h2 class="section-title">About Me</h2>
          <div class="about-content">
            <img src="https://via.placeholder.com/200" alt="Prasetyo" class="avatar">
            <p>Hello! I'm Prasetyo, a passionate professional with expertise in design and development. With over 5 years of experience in the industry, I specialize in creating clean, functional, and visually appealing solutions. I believe in the power of minimalist design and user-centered approaches to solve complex problems.</p>
          </div>
        </div>
      </section>
      
      <!-- Portfolio Section -->
      <section id="portfolio" style="background-color: #f8fafc;">
        <div class="container">
          <h2 class="section-title">Portfolio</h2>
          <div class="portfolio-grid">
            ${generatePortfolioItems()}
          </div>
        </div>
      </section>
      
      <!-- Blog Section -->
      <section id="blog">
        <div class="container">
          <h2 class="section-title">Blog</h2>
          <div class="blog-list">
            ${generateBlogItems()}
          </div>
        </div>
      </section>
      
      <!-- Testimonials Section -->
      <section id="testimonials" style="background-color: #f8fafc;">
        <div class="container">
          <h2 class="section-title">Testimonials</h2>
          <div class="testimonials-container">
            ${generateTestimonials()}
          </div>
        </div>
      </section>
      
      <!-- Contact Section -->
      <section id="contact">
        <div class="container">
          <h2 class="section-title">Contact Me</h2>
          <div class="contact-container">
            <div class="contact-info">
              <h3>Get In Touch</h3>
              <div class="contact-item">
                <span>📧</span>
                <span>prasetyo@example.com</span>
              </div>
              <div class="contact-item">
                <span>📱</span>
                <span>+62 123 456 7890</span>
              </div>
              <div class="contact-item">
                <span>📍</span>
                <span>Jakarta, Indonesia</span>
              </div>
              <div class="social-links">
                <a href="#" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
            <form class="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" class="form-input" placeholder="Your name">
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" class="form-input" placeholder="Your email">
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" class="form-textarea" placeholder="Your message"></textarea>
              </div>
              <button type="submit" class="btn">Contact Us</button>
            </form>
          </div>
        </div>
      </section>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} Prasetyo. All rights reserved.</p>
      </div>
    </footer>
  `;
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const header = document.querySelector('header');
  
  mobileMenuBtn.addEventListener('click', () => {
    header.classList.toggle('mobile-menu-open');
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      header.classList.remove('mobile-menu-open');
    });
  });
  
  // Form submission
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Reset form
    contactForm.reset();
    
    // Show success message (in a real app)
    alert('Thank you for your message! I will get back to you soon.');
  });
});

// Helper functions to generate content
function generatePortfolioItems() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with advanced filtering and payment integration.',
      image: 'https://via.placeholder.com/300x200?text=E-Commerce'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure and user-friendly mobile banking application with biometric authentication.',
      image: 'https://via.placeholder.com/300x200?text=Banking+App'
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Interactive dashboard for healthcare professionals to monitor patient data.',
      image: 'https://via.placeholder.com/300x200?text=Healthcare'
    },
    {
      title: 'Travel Booking System',
      description: 'Comprehensive travel booking platform with real-time availability checking.',
      image: 'https://via.placeholder.com/300x200?text=Travel'
    },
    {
      title: 'Educational Platform',
      description: 'Online learning platform with interactive courses and progress tracking.',
      image: 'https://via.placeholder.com/300x200?text=Education'
    },
    {
      title: 'Smart Home Control',
      description: 'IoT-based solution for controlling and monitoring smart home devices.',
      image: 'https://via.placeholder.com/300x200?text=Smart+Home'
    }
  ];
  
  return projects.map(project => `
    <div class="card">
      <img src="${project.image}" alt="${project.title}" class="card-img">
      <div class="card-content">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.description}</p>
        <a href="#" class="card-link">View Project</a>
      </div>
    </div>
  `).join('');
}

function generateBlogItems() {
  const posts = [
    {
      title: 'The Future of Web Development',
      date: 'July 10, 2025',
      excerpt: 'Exploring emerging technologies and trends that will shape the future of web development.'
    },
    {
      title: 'Designing for Accessibility',
      date: 'June 25, 2025',
      excerpt: 'Best practices for creating inclusive digital experiences that work for everyone.'
    },
    {
      title: 'Optimizing Performance in Modern Applications',
      date: 'June 12, 2025',
      excerpt: 'Techniques and strategies to improve the performance of your web and mobile applications.'
    }
  ];
  
  return posts.map(post => `
    <div class="card">
      <div class="card-content">
        <p class="blog-date">${post.date}</p>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-description">${post.excerpt}</p>
        <a href="#" class="card-link">Read More</a>
      </div>
    </div>
  `).join('');
}

function generateTestimonials() {
  const testimonials = [
    {
      text: "Working with Prasetyo was an absolute pleasure. Their attention to detail and creative problem-solving skills resulted in a product that exceeded our expectations.",
      author: "Sarah Johnson, CEO at TechInnovate"
    },
    {
      text: "Prasetyo delivered our project on time and with exceptional quality. Their ability to understand our requirements and translate them into a functional solution was impressive.",
      author: "Michael Chen, Product Manager at GlobalSoft"
    },
    {
      text: "I've worked with many developers, but Prasetyo stands out for their technical expertise and communication skills. They're not just a developer but a valuable partner in our success.",
      author: "Aisha Patel, Founder of StartupHub"
    }
  ];
  
  return testimonials.map(testimonial => `
    <div class="testimonial">
      <p class="testimonial-text">"${testimonial.text}"</p>
      <p class="testimonial-author">— ${testimonial.author}</p>
    </div>
  `).join('');
}