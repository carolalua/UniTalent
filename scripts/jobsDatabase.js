const jobDatabase = [
  {
      id: 1,
      postingTime: "10 mins ago",
      company: {
          name: "Deutsche Bank AG",
          logo: "../images/DB.png",
      },
      summary: {
          category: "Commerce",
          jobType: "Internship",
          location: "Berlin",
      },
      description: {
          title: "Job Description",
          details: `The Deutsche Bank Internship Programme is designed to help you develop your skills through formal training and continuous support. You’ll quickly gain the confidence to take on real projects by learning first-hand how and what we deliver for clients worldwide. You’ll feel supported by colleagues from across our business and start to develop your professional network.<br>

          <strong>About Technology, Data & Innovation:</strong>
            
          <p>Technology underpins Deutsche Bank’s entire business and is changing and shaping the way we engage, interact and transact with our stakeholders, internally and externally. Our Technology, Data and Innovation (TDI) strategy is strengthening our engineering expertise, introducing an agile delivery model, and is modernising the bank's IT infrastructure with long-term investments and taking advantage of cloud computing. We are building a team of visionary technology talent that will ensure that we thrive in this period of unprecedented change for the industry. That means hiring the right people and giving them the training, freedom and opportunity, they need to do pioneering work.</p>
          `,
      },
      responsibilities: {
          title: "Key Responsibilities",
          details: `Our Berlin Technology Centre has a strong focus on promoting technical excellence – our engineers work at the forefront of financial services innovation using cutting-edge technologies. You will work alongside the brightest minds in the business, as you develop your digital skills and explore where you can apply them to make the greatest impact on our industry and clients across the world. If you are interested in working on agile projects, learning programming languages and want to design and develop innovative products and technical solutions using state-of-the-art software and hardware, this is the role for you. Your manager and team will support you in developing your skills and you will be part of a wider team implementing our core strategic systems underpinning our businesses. Your specific assignments and tasks will depend on which of our teams you join and how long your internship with us lasts. You can explore Backend, Frontend, Fullstack, DevOps, QA & Automaton, Product Design (UX/UI) and Business Analysis Roles.`,
          list:[],
      },
      requirements: {
          title: "Professional Requirements",
          details: `Our internship will give you the professional skills you need to start your career. For us, creativity and flexibility are key. That's why we are looking for technical talents who are able to thrive in our diverse culture.`,
          list:[
            "Are you studying computer science, mathematics, industrial engineering or a comparable scientific discipline with a strong IT focus?",
            "Are you interested in innovative technology and financial issues?",
            "Have you already gained some practical experience, especially in programming?",
            "Are your communication skills well-developed, and are you fluent in English?",
            "Are you a responsible, committed team player with excellent analytical skills and a quick grasp?",
          ],
      },
      tags: ["Full time", "Commerce", "Berlin", "Corporate", "Location"],
      overview: {
          jobTitle: "Internship Program Technology, Data & Innovation",
          jobType: "Internship",
          category: "Commerce",
          experience: "Entry level",
          degree: "Bachelor/Master",
          gender: "All",
          location: "Berlin",
          mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.062090126227!2d13.3198062!3d52.514215400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8511c6b917335%3A0x69a52e9e2f7d65d3!2sDeutsche%20Bank!5e0!3m2!1sen!2sde!4v1732224638968!5m2!1sen!2sde",
      },
  },
  // Add more jobs here...
  {
    id: 2,
    postingTime: "45 mins ago",
    company: {
        name: "SAP",
        logo: "../images/SAP.png",
    },
    summary: {
        category: "IT",
        jobType: "Internship",
        location: "Walldorf",
    },
    description: {
        title: "Job Description",
        details: `The SAP Internship Experience Program is SAP’s global, strategic, paid internship program that provides university students with opportunities to find purpose in their careers.
        
        <br>
        <strong>Three reasons to intern at SAP</strong>
        <p>
        <ol>
        <li>
            Culture of collaboration: meet with mentors, make new friends across the globe and create a thriving personal network.
        </li>
        <li>
            Project-driven experience: gain cross-functional skills from our virtual and in-person learning sessions, diverse subject matter experts, and project deliverables. 
        </li>
        <li>
            Gain visibility: with SAP Internship Experience Program in your title, you’ll have a global network of SAP leaders, entrepreneurs and career development opportunities at your fingertips. 
        </li>
        </ol>

        <strong>About the team</strong>
          
        <p>The Customer Innovation Services (CIS) team at SAP is seeking a proactive and motivated intern to assist in execution of the Custom AI Adoption (CAIA) program. This position offers the opportunity to work on strategic customer engagements and gain hands-on experience in driving Custom AI adoption. The successful candidate will be part of a dynamic team focused on delivering key customer-specific enhancements on the BTP, honing strategic project management skills, and gaining exposure to transformative initiatives at the forefront of AI innovation within SAP.</p>
        `,
    },
    responsibilities: {
        title: "Key Responsibilities",
        details: `What you’ll do`,
        list:[
            "Contribute to strategic initiatives and projects with a focus on customer value and business transformation",
            "Support the creation of customer and C-level presentations as well as concept proposals",
            "Create communication artifacts for CAIA-relevant topics",
            "Define and implement concepts for CAIA communication channels",
            "Assist in the coordination and management of CAIA use cases activities across various areas and teams",
            "Support experts in preparing and hosting CAIA events",
            "Define and build artifacts in the area of knowledge management and best practices",
          ]
    },
    requirements: {
        title: "Professional Requirements",
        details: `You are a student (f/m/d) at a university or a university of applied sciences. We’re looking for someone who takes initiative, perseveres, and stays curious. You like to work on meaningful innovative projects and are energized by lifelong learning.`,
        list:[
          "Preferred fields of study: Business Administration, Business Informatics, Business Psychology, or related fields",
          "Computer skills: Proficiency in Microsoft Office Suite and SharePoint",
          "Language skills: Excellent written and verbal communication in English; knowledge of German is advantageous",
          "Soft skills: Strategic thinker, creative, curious, team player, strong communication and presentation skills, self-driven, and solution-oriented",
          "Others: Highly motivated, ability to work independently",
          "Work experience in innovation, strategy, or consulting-related areas is a plus",
        ],
    },
    tags: ["Full time", "IT", "Walldorf", "Corporate", "Location"],
    overview: {
        jobTitle: "SAP iXp Intern (f/m/d) - Customer Innovation Services",
        jobType: "Internship",
        category: "IT",
        experience: "Entry level",
        degree: "Bachelor/Master",
        gender: "All",
        location: "Walldorf",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.048324609701!2d8.636825600000002!3d49.2944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797beac4fc96d5f%3A0x909f3de31b1264b!2sSAP%20SE%20(WDF21)!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
},
];
