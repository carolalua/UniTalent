const jobDatabase = [
  {
    id: 1,
    postingTime: "2024-12-02T16:45",
    company: {
      name: "Deutsche Bank AG",
      logo: "images/DB.png",
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
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",  // "Beginner", "Intermediate", or "Advanced"
      },
      German: {
          required: true,
          proficiency: "Beginner", // Can be null if not required
      },
    },
    educationLevel: ["Master"],
    experienceLevel:["Junior"],
    locationType:["onsite","remote","hybrid"],
    overview: {
      jobTitle: "Internship Program Technology, Data & Innovation",
      jobType: "Internship",
      category: "Commerce",
      experience: "Junior level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.062090126227!2d13.3198062!3d52.514215400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8511c6b917335%3A0x69a52e9e2f7d65d3!2sDeutsche%20Bank!5e0!3m2!1sen!2sde!4v1732224638968!5m2!1sen!2sde",
    },
  },

  {
    id: 2,
    postingTime: "2024-12-10T15:00",
    company: {
      name: "SAP",
      logo: "/images/SAP.png",
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
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: true,
          proficiency: null,
      },
    },
    educationLevel: ["Bachelor","Master"],
    experienceLevel:["Entry"],
    locationType:["onsite","hybrid"],
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
  {
    id: 3,
    postingTime: "2024-12-10T12:00",
    company: {
      name: "SICK AG",
      logo: "/images/SICK.png",
      },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "Waldkirch (bei Freiburg)",
      },
    description: {
      title: "Job Description",
      details: `
      SICK is one of the world’s leading solutions providers for sensor-based applications in the industrial sector. Founded in 1946 by Dr.-Ing. e. h. Erwin Sick, the company with headquarters in Waldkirch, Breisgau near Freiburg ranks among the technological market leaders. With more than 50 subsidiaries and equity investments as well as numerous agencies, SICK maintains a presence around the globe. SICK has more than 12,000 employees worldwide and generated a group revenue of around EUR 2.3 billion in the 2023 fiscal year.
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `Your tasks`,
      list:[
        "Support the Finance Service Center in international daily operations, especially during monthly and quarterly closings",
        "Assist with internal service and group cost allocations",
        "Take on comprehensive project tasks in project controlling",
        "Support investment controlling and planning processes",
        "Maintain master data in SAP",
        "Contribute to the optimization (digitalization) of accounting processes as well as cost calculations and inventory valuations",
        "Prepare ad-hoc analyses in SAP",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: ``,
      list:[
        "You are studying (international) business administration, business informatics, industrial engineering, or a comparable field",
        "You have good knowledge of MS Office, especially Excel",
        "Good command of English",
        "You are characterized by strong teamwork and communication skills",
        "You demonstrate an independent and structured way of working",
        "Your quick comprehension and organizational talent complete your profile",
        ],
      },
    tags: ["Full time", "IT", "Waldkirch", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Intermediate",
      },
      German: {
          required: false,
          proficiency: null,
      },
    },
    educationLevel: ["Bachelor","Master"],
    experienceLevel:["Entry"],
        locationType:["onsite"],
    overview: {
      jobTitle: "Mandatory Internship in Management Accounting & Controlling",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Waldkirch",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.104216248861!2d7.9494439!3d48.0889312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911fcbe5168d7b%3A0xb85b8eeab595e5e3!2sSICK%20AG!5e0!3m2!1sen!2sde!4v1733427867597!5m2!1sen!2sde",
      },
  },
  {
    id: 4,
    postingTime: "2024-12-10T13:20",
    company: {
      name: "HUGO BOSS AG",
      logo: "/images/Hugo_Boss.png",
      },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "Metzingen",
      },
    description: {
      title: "Job Description",
      details: `
      <p>Our vision is to establish HUGO BOSS as the leading premium tech-driven fashion platform worldwide and to be one of the top 100 global brands. At HUGO BOSS, we work as a team to apply our knowledge, skills and experience together and create a diversity of ideas and solutions. What unites us? We love fashion, we change fashion!</p>
      <p>At HUGO BOSS, you have the opportunity to contribute your personality, ideas and creativity — because only when we break new ground together can we create something unique. Become part of our team of more than 19.000 employees worldwide and shape your future at HUGO BOSS!</p>
      <p>We are looking for an intern (m/f/d) for our global S/4 program consisting of several sub-projects from February 2025 for a period of 6 months. For efficient and targeted management of IT projects, global IT project management plays a central operational and strategic role within IT. It provides tools, methods, and processes to steer IT projects.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What you can expect:`,
      list:[
        "Support the IT program/project management in international and cross-functional projects with operational project management tasks.",
        "Establish standards and methodologies in complex projects.",
        "Participate in the creation and execution of analyses, presentations, and workshops.",
        "The opportunity to make a noticeable contribution to the success of the project through your commitment and to participate in real problem-solving.",
        "Comprehensive insights into the entire value chain of HUGO BOSS AG.",
        "The chance to work in a team and develop in a communicative environment with initiative.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "You are pursuing a degree in business informatics, computer science, business administration, or a comparable field of study or have already successfully completed your studies.",
        "Interest in project management, process management, and change management with initial experience (e.g., seminars, modules, or practical experience).",
        "Sense of responsibility, organizational talent, and goal-oriented working style.",
        "Good skills in problem and cause analysis and a solution-oriented approach.",
        "Very good German language skills in spoken and written form as well as good English skills.",
        ],
      },
    tags: ["Full time", "IT", "Metzingen", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: true,
          proficiency: "Beginner",
      },
    },
    educationLevel: ["Bachelor","Master"],
    experienceLevel:["Entry"],
    locationType:["onsite","hybrid"],
    overview: {
      jobTitle: "Internship IT Project Management - Focus PMO (m/f/d)",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Metzingen",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5282.494726152205!2d9.2694031!3d48.5476538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799ecfd8112dec5%3A0xaf7f8f902f9bea2b!2sHUGO%20BOSS%20Headquarters!5e0!3m2!1sen!2sde!4v1733428643607!5m2!1sen!2sde",
      },
  },
  {
    id: 5,
    postingTime: "2024-12-10T13:00",
    company: {
      name: "PORSCHE",
      logo: "/images/Porsche.png",
      },
    summary: {
      category: "IT",
      jobType: "Working Student",
      location: "Ludwigsburg",
      },
    description: {
      title: "Job Description",
      details: `
      <p>As working student (F/M/D) you will work as an integral part of an international and agile product team, which is responsible for the development of one of the core elements of Porsche's international web presence.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `Within the cross-functional team, which consists of UX designers, developers and content specialists, you will in close collaboration with your product owner:`,
      list:[
        "Drive the product vision",
        "Derive new features from data and stakeholder requirements",
        "Analyse product & feature-performance and derive optimization potential",
        "Maintain and prioritize the product backlog",
        "Optimize processes in and around the product team",
        "Prepare management presentations",
        "Prepare and follow up workshops including the translation of the findings into concrete to-do's",
        "Act as a respected team member in a scaled agile system.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Are you enthusiastic, curious and think outside the box? Just because you've never done something it doesn’t mean you give up, but gets you excited to learn something new and broaden your horizon? Then you’re the right fit if you furthermore bring along the following:`,
      list:[
        "Matriculation at a college or university (basic studies completed)",
        "First practical experience in the corporate environment beneficial",
        "High degree of independence, proactivity, and flexibility",
        "Excellent analytical and conceptual skills combined with a quick grasp of complex issues",
        "Professional use of MS Office, especially PowerPoint and Excel",
        "Proficient in English & German",
        ],
      },
    tags: ["Full time", "IT", "Ludwigsburg", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: true,
          proficiency: "Advanced",
      },
    },
    educationLevel: ["Bachelor"],
    experienceLevel:["Entry","Junior"],
    locationType:["onsite","hybrid"],
    overview: {
      jobTitle: "Werkstudent/in | Working Student (F/M/D) Product Owner",
      jobType: "Working Student",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Ludwigsburg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.8721996638264!2d9.150257199999999!3d48.9178271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da80ce5ea025%3A0x282d45223872c4ac!2sPorsche%20Pforte%20Werk%207!5e0!3m2!1sen!2sde!4v1733429318349!5m2!1sen!2sde",
      },
  },
  {
    id: 6,
    postingTime: "2024-12-09T20:00",
    company: {
      name: "Inkitt",
      logo: "/images/Inkitt.png",
      },
    summary: {
      category: "Administration",
      jobType: "Working Student",
      location: "Berlin",
      },
    description: {
      title: "Job Description",
      details: `
      <p>Inkitt is building the Disney of the 21st Century, standing at the forefront of technology and entertainment. Leveraging AI and predictive algorithms, Inkitt discovers unknown stories and turns them into blockbuster hits, producing a new $1M ebook every 4 weeks and selling directly to consumers through its Galatea app.</p>
      <p>Inkitt has become the 11th most bestseller-generating publisher in the world, boasting a 40x higher hit-rate than traditional publishers. Recently raising a Series C and backed by some of the top VC’s such as: Khosla, Kleiner Perkins, and NEA Ventures, our recent expansion into GalateaTV is only the beginning of our journey to becoming the next-gen entertainment powerhouse.</p>
      <p>We are now looking for an Office Assistant (m/f/d) on a mini-job basis (10 hours/week) or as a working student (15 hours/week).</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "Organize office supplies and maintain stock levels to keep the office well-equipped.",
        "Oversee office meal management, including coordinating daily meal orders and ensuring efficient meal setup for a positive office experience.",
        "Coordinate snacks, drinks orders, and assist with meal provider logistics to support a positive office environment.",
        "Assist with budget forecasting, budget management, and manage invoice processing for efficient financial operations.",
        "Assist in organizing larger office events and managing vendor relationships to ensure seamless event experiences.",
        "Provide general administrative support, including document preparation, managing incoming requests, and vendor communications.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "Excellent organizational skills and a keen attention to detail.",
        "Strong ability to work independently, with a proactive approach to solving office-related challenges.",
        "Outstanding communication skills, both written and verbal, in English.",
        "Quick comprehension, an independent working style, and a goal-oriented mindset.",
        "Self-driven and proactive, with a strong ability to bring solutions rather than problems.",
        ],
      },
    tags: ["Full-Time", "Administration", "Berlin", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: false,
          proficiency: null,
      },
    },
    educationLevel: ["Bachelor", "Master"],
    experienceLevel:["Entry","Junior","Senior"],
    locationType:["onsite"],
    overview: {
      jobTitle: "Office Assistant - Working Student / Mini Job (m/f/d)",
      jobType: "Working Student",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.2483812586374!2d13.4157531!3d52.52894009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8504aac6e564f%3A0xe1b0e245b7d2e423!2sInkitt%20GmbH!5e0!3m2!1sen!2sde!4v1733848914972!5m2!1sen!2sde",},
  },
  {
    id: 7,
    postingTime: "2024-12-09T06:00",
    company: {
      name: "Obton",
      logo: "/images/Obton.png",
      },
    summary: {
      category: "Administration",
      jobType: "Working Student",
      location: "Hamburg",
      },
    description: {
      title: "Job Description",
      details: `
      <p>Are you pursuing your Bachelor’s or Master’s degree and eager to make an impact in the renewable energy sector? Do you thrive in a dynamic, international environment and enjoy taking on new challenges?</p>
      <p>If so, join Obton Germany as a Student Assistant (Werkstudent) and help shape the future of renewable energy.</p>
      <p>As a Student Assistant at our Hamburg office, you will work closely with our Asset Management team to support a portfolio of German PV and BESS projects. This role offers a unique opportunity to develop hands-on experience in renewable energy asset management while contributing to critical operational processes.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "Organizing and maintaining document management systems.",
        "Handling internal workflows and ensuring compliance with standard procedures.",
        "Updating and managing data in Obton’s internal management system.",
        "Overseeing practical office tasks, such as managing office supplies and logistics.",
        "Handling incoming and outgoing mail (including group email addresses).",
        "Supporting colleagues with ad-hoc administrative and operational tasks.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "Have a “can-do” attitude and a strong sense of ownership.",
        "Eager to learn and understand complex systems.",
        "Excellent communication skills and enjoy collaborating in an international context.",
        "Comfortable balancing routine tasks with independent initiatives.",
        "Continuously seek ways to improve processes and challenge the status quo.",
        ],
      },
    tags: ["Part-Time", "Administration", "Hamburg", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: false,
          proficiency: null,
      },
    },
    educationLevel: ["Bachelor", "Master"],
    experienceLevel:["Entry","Junior","Senior"],
    locationType:["onsite"],
    overview: {
      jobTitle: "Student Assistant",
      jobType: "Working Student",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6796031559475!2d7.1079626!3d51.50074679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e719c47a4d59%3A0x2c9c860d7c928e14!2sObton!5e0!3m2!1sen!2sde!4v1733919845665!5m2!1sen!2sde",
    },
  },
  {
    id: 8,
    postingTime: "2024-12-09T07:00",
    company: {
      name: "Boston Consulting Group",
      logo: "/images/BCG.png",
      },
    summary: {
      category: "Administration",
      jobType: "Working Student",
      location: "Düsseldorf",
      },
    description: {
      title: "Job Description",
      details: `
      <p>Our strategy? To be anything but typical strategy consultants! Our unconventional nature is embedded deep in our DNA. Sixty years ago, BCG shook up the world of strategy consulting. Now, it has grown to become one of the world leaders in the field. How do we manage to stay ahead of the pack? The answer is simple: by reinventing ourselves every day and providing a home with diverse career opportunities to the best talent and most creative minds all over the world.</p>
      <p>And by giving you the chance to make an impact in business and society. BCG stands for authenticity, exceptional work, and strong integrity. Once you’ve become part of the Group, we’ll help you find your path, unleash your potential, effect change, and advance the world.</p>
      <p>As a Working Student on our Copy Center & Internal Services Team, you will be an important point of contact for our employees, actively helping to ensure that day-to-day office life runs smoothly. Service-oriented and reliable, you will handle printing and copy requests, duplicate and bind presentations, and ensure that our offices are stocked with the supplies they need. You’ll also capably maintain databases and Excel lists and carry out minor research independently. Finally, you’ll support any office maintenance activities that arise in day-to-day operations.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "You’ll be part of a small team, but work with many people and have numerous connections to different departments in the Düsseldorf office.",
        "As an important point of contact at BCG, you are always reliable and polite.",
        "You have good organizational skills and attention to detail, and you enjoy working in a service role.",
        "You are highly flexible and think independently.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "You are studying for a bachelor's or master's degree (with at least two years of study remaining at your start date and no mandatory internships planned).",
        "You communicate competently and professionally in German and English and work proficiently with the MS Office programs.",
        "You’re known for your organizational talent and conscientious work style.",
        ],
      },
    tags: ["Part-Time", "Administration", "Düsseldorf", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: true,
          proficiency: "Advanced",
      },
    },
    educationLevel: ["Bachelor", "Master"],
    experienceLevel:["Entry","Junior"],
    locationType:["remote"],
    overview: {
      jobTitle: "Working Student—Copy Center & Internal Services Team",
      jobType: "Working Student",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Düsseldorf",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.591439580367!2d6.779691!3d51.226601599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171beb8c2314c81%3A0x25546bd43be74743!2sBoston%20Consulting%20Group!5e0!3m2!1sen!2sde!4v1733919880837!5m2!1sen!2sde",
    },
  },
  {
    id: 9,
    postingTime: "2024-12-09T09:30",
    company: {
      name: "Canon Production Printing",
      logo: "/images/Canon.png",
      },
    summary: {
      category: "Administration",
      jobType: "Working Student",
      location: "Germany",
      },
    description: {
      title: "Job Description",
      details: `
      <p>For our teams within Research and Development we are looking for working students (m/f/d) to support us with immediate effect.</p>
      <p>To be successful in this task, you will be coached by our experienced engineering team.</p>
      <p>As a Student Assistant you will have a challenging, interesting and responsible task at a future-oriented and international workplace.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "You will support your team in the area of testing/developing new high-performance printing systems.",
        "After being trained by your mentor, you will understand the development/test objectives, plan tests/trials and carry them out",
        "Independently apply test/measurement methods, evaluate (measurement) results and interpret them",
        "Supervision of smaller projects may also be part of your tasks",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "You are studying chemistry, electrical engineering, computer science, mechatronics, mechanical engineering, physical engineering, physics or a comparable, technical degree program",
        "You are committed, show initiative, innovative thinking and possess analytical skills.",
        "You are a team player with strong communication skills.",
        "Independent and careful work is a matter of course for you.",
        "Your good written and spoken English skills complete your profile.",
        ],
      },
    tags: ["Part-Time", "Administration", "Germany", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: false,
          proficiency: null,
      },
    },
    educationLevel: ["Bachelor", "Master"],
    experienceLevel:["Entry","Junior"],
    locationType:["onsite","hybrid"],
    overview: {
      jobTitle: "Working Student (m/f/d) as Development Assistant",
      jobType: "Working Student",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Germany",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.591439580367!2d6.779691!3d51.226601599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171beb8c2314c81%3A0x25546bd43be74743!2sBoston%20Consulting%20Group!5e0!3m2!1sen!2sde!4v1733919880837!5m2!1sen!2sde",
      },
  },
  {
    id: 10,
    postingTime: "2024-12-09T10:00",
    company: {
      name: "MBition GmbH",
      logo: "/images/MBition.png",
      },
    summary: {
      category: "Administration",
      jobType: "Working Student",
      location: "Berlin",
      },
    description: {
      title: "Job Description",
      details: `
      <p>A chance to work on a new generation of Infotainment Systems, which will power millions of cars.</p>
      <p>An international, interdisciplinary software hub, which is part of Mercedes Benz AG.</p>
      <p>Agile working methods and open feedback culture.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "As a Working Student for Mercedes-Benz Voice Assistant NLU Analysis, you will be part of a cross-functional support team that provides internal customer-facing development teams with empirical insights about the interactions between the MBUX Voice Assistant in Mercedes-Benz cars and its users.",
        "You will be embedded in a team with backgrounds mainly in the areas of Data Analytics, Data Engineering and Test Automation and will interact with people in other teams working on Voice Interaction Design and Product Management.",
        "Your main focus areas will be the analysis and annotation of natural language corpora as well as the co-creation and co-refinement of annotation schemas.",
        "Occasionally, we might also need your assistance in interactively testing the actual system or assisting with user research.",
        "By working on these topics, you gain practical experiences in topics you’re learning in your studies and have real impact on the user experience in Mercedes-Benz cars.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "Currently enrolled in a Bachelor’s or Master’s program in Computational Linguistics, Corpus Linguistics, or a comparable qualification.",
        "It is mandatory to be enrolled in a university for the whole employment time.",
        "Excellent communication skills and enjoy collaborating in an international context.",
        "Near-native language proficiency in German and English",
        "Experience with conversational systems/voice technology and experience in annotating natural language corpora.",
        ],
      },
    tags: ["Part-Time", "Administration", "Berlin", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: true,
          proficiency: "Advanced",
      },
    },
    educationLevel: ["Bachelor", "Master"],
    experienceLevel:["Entry","Junior","Senior"],
    locationType:["onsite"],
    overview: {
      jobTitle: "Working Student – Mercedes-Benz Voice Assistant NLU Analysis (all genders)",
      jobType: "Working Student",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.7455824160684!2d13.319517999999997!3d52.51994319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d0e1d06b77%3A0xb539082293932cdc!2sMBition%20GmbH!5e0!3m2!1sen!2sde!4v1733920383048!5m2!1sen!2sde",
      },
  },
  {
    id: 11,
    postingTime: "2024-12-09T11:00",
    company: {
      name: "VeeCollective GmbH",
      logo: "/images/VeeCollective.png",
      },
    summary: {
      category: "Commerce",
      jobType: "Internship",
      location: "Berlin",
      },
    description: {
      title: "Job Description",
      details: `
      <p>This is a mandatory internship and only intended for students.</p>
      <p>Applications from people who are currently not studying and/or not looking for a compulsory internship will not be considered.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "With a focus on marketing, you will extensively support the team in areas such as sales, e-commerce, and office management",
        "Assist in developing and implementing marketing concepts across all our channels.",
        "Assist in identifying and collaborating with influencers to create content and promote brand visibility and contribute to the team by effectively supporting order management.",
        "Support the Store Manager in ensuring smooth operations for our sales activities in the store.",
        "Support our content creator with content production and conduct market analysis and report on trends.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "Currently studying or recently completed studies in marketing, fashion management, or a related field.",
        "Available for at least 4-6 months (longer internships are accepted) as part of a mandatory internship.",
        "Strong passion for fashion and lifestyle topics, with an awareness and sense of international trends and brands.",
        "Organizational talent with an independent and structured way of working",
        "Excellent communication skills, both verbal and written in English, German is also preferred.",
        ],
      },
    tags: ["Part-Time", "Commerce", "Berlin", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: true,
          proficiency: "Advanced",
      },
    },
    educationLevel: ["Bachelor", "Master"],
    experienceLevel:["Entry","Junior"],
    locationType:["onsite"],
    overview: {
      jobTitle: "MARKETING INTERNSHIP",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.3207968883085!2d13.3995267!3d52.5276298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8514de91280ff%3A0xc589daf04225305a!2sVEE%20COLLECTIVE!5e0!3m2!1sen!2sde!4v1733920427328!5m2!1sen!2sde",
      },
  },
  {
    id: 12,
    postingTime: "2024-12-09T12:00",
    company: {
      name: "LionsHome GmbH",
      logo: "/images/Lionshome.png",
      },
    summary: {
      category: "Commerce",
      jobType: "Internship",
      location: "Berlin",
      },
    description: {
      title: "Job Description",
      details: `
      <p>We are looking for a full-time intern (40h/week) for our business development in the UK market who is an ENGLISH NATIVE SPEAKER and would be available for at least 3 months.</p>
      <p>You would work in our beautiful startup loft in Mitte at Hackescher Markt in the heart of Berlin.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "You will be responsible for the sales in the UK market in close coordination with the management.",
        "You will be responsible for cold-calling potential partners to pitch a collaboration that best fits their needs.",
        "You will be responsible for managing relationships with current customers.",
        "Independent research for suitable cooperation partners.",
        "You will learn and work with important key tools in online marketing.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "Native level of English.",
        "You are an enrolled student at any university (mandatory requirement).",
        "You can work in a structured and result-oriented way.",
        "You are an excellent communicator, both verbal and written.",
        "You are willing to work in an International work environment and you are willing to learn the e-commerce world.",
        ],
      },
    tags: ["Full-Time", "Commerce", "Berlin", "Corporate"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: false,
          proficiency: null,
      },
    },
    educationLevel: ["Bachelor", "Master"],
    experienceLevel:["Entry","Junior"],
    locationType:["onsite","remote","hybrid"],
    overview: {
      jobTitle: "Internship Business Development & Sales UK Native English speaker",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.434786896439!2d13.401690400000001!3d52.5255672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e134366839%3A0xae01b8852983149b!2sLionsHome%20GmbH!5e0!3m2!1sen!2sde!4v1733920466576!5m2!1sen!2sde",
      },
  },
  {
    id: 13,
    postingTime: "2024-12-09T12:45",
    company: {
      name: "Hive Technologies GmbH",
      logo: "/images/Hive.png",
      },
    summary: {
      category: "Commerce",
      jobType: "Internship",
      location: "Berlin",
      },
    description: {
      title: "Job Description",
      details: `
      <p>Ever wonder what happens behind the scenes after you click ‘Buy Now’?</p>
      <p>As an Operations Intern at Hive, you will get an insider’s view on the most dynamic parts of e-commerce logistics, where every day brings new challenges, fast-paced problem-solving, and a chance to shape the future of fulfillment.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "Be part of the largest and most challenging projects contributing to Hive’s growth across new customer segments and business verticals.",
        "Work closely with our partner manager on both day-to-day operations and strategic planning, gaining insights into the decisions that help us grow and improve our fulfillment center network.",
        "Collaborate with our fulfillment partners both on-site and remotely, assisting in resolving operational challenges.",
        "Measure the performance of our fulfillment sites & suggest improvement points to our operational KPIs and metrics (e.g. throughput, punctuality)",
        "Become an essential part of the Hive Operations team by working closely with the Head of Fulfillment and Expansion, alongside stakeholders and teams across the organization.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "Interest in logistics and ready to dive into the fast-paced world of a VC-backed startup, helping to shape the future of e-commerce operations.",
        "Natural problem-solver, ready to roll up your sleeves and hit the ground running with exciting expansion projects.",
        "Eager to work with Hive’s proprietary WMS (Warehouse Management System) and other cutting-edge software at the pulse of logistics & e-commerce trends.",
        "You want to join as a working student for ca. 20 hours/week or for a full-time internship for 5-6 months.",
        "You are business fluent in English (bonus points if you speak German/ Polish!), with strong communication skills to rally internal and external teams.",
        ],
      },
    tags: ["Part-Time","Full-Time","Commerce", "Berlin", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: false,
          proficiency: null,
      },
    },
    educationLevel: ["Bachelor", "Master","PhD"],
    experienceLevel:["Senior","Professional"],
    locationType:["onsite"],
    overview: {
      jobTitle: "Operations Intern (Expansion) (f/m/d)",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.670051972185!2d13.405460000000001!3d52.52131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8510eeaffc8b3%3A0xd29744ecb100f639!2sHive%20Technologies%20GmbH%20HQ!5e0!3m2!1sen!2sde!4v1733920507615!5m2!1sen!2sde",
      },
  },
  {
    id: 14,
    postingTime: "2024-12-05T12:45",
    company: {
      name: "home24 SE",
      logo: "/images/Home24.png",
      },
    summary: {
      category: "Commerce",
      jobType: "Internship",
      location: "Berlin",
      },
    description: {
      title: "Job Description",
      details: `
      <p>We are home24, a leading home & living e-commerce platform in continental Europe and Brazil. We are currently active in eight countries. Over 1,000 Homies work together towards a common goal: to create happy homes for everyone and every budget.</p>
      <p>At home24, we strive to deliver a superior assortment of products and the best service. To do this, we need fresh ideas, 100% motivation, and dedication to our company mission. We always have a space at our table for service-minded individuals who are passionate about digitization and modern living.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "You plan, coordinate, and execute CRM campaigns (e-mail & app marketing).",
        "You assist in the optimization of our overall CRM activities.",
        "You analyze and monitor the performance of CRM activities and set up new reports.",
        "You support the coordination between other marketing channels, art direction, and content teams.",
        "You have the chance to gain insights into different leading tools like Emarsys, Tableau, Dynamic Yield, and Google Analytics.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "You are currently an enrolled student in business administration or a related, relevant field and must complete an internship for your studies.",
        "You feel responsible for the quality of your work and you always try to find practical solutions.",
        "Working analytically and process-oriented with a strong attention to detail come naturally to you.",
        "You have a passion for digital marketing and e-commerce and you are comfortable with managing multiple campaigns and projects with creativity and organization.",
        "You are fluent in English (German is a plus).",
        ],
      },
    tags: ["Part-Time", "Commerce", "Berlin", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: false,
          proficiency: null,
      },
    },
    educationLevel: ["Bachelor"],
    experienceLevel:["Entry","Junior"],
        locationType:["onsite","remote","hybrid"],
    overview: {
      jobTitle: "Mandatory Intern - Online Marketing CRM (m/f/d)",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4854.679340345003!2d13.455248500000001!3d52.527288299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851db2f8a90d9%3A0x8701be09518a9478!2shome24%20Showroom%20-%20Berlin%20Prenzlauer%20Berg!5e0!3m2!1sen!2sde!4v1733920544559!5m2!1sen!2sde",
      },
  },
  {
    id: 15,
    postingTime: "2024-12-05T17:30",
    company: {
      name: "Amazon Deutschland Services GmbH",
      logo: "/images/Amazon.png",
      },
    summary: {
      category: "Commerce",
      jobType: "Internship",
      location: "Berlin",
      },
    description: {
      title: "Job Description",
      details: `
      <pOur primary purpose is to make our customer´s lives easier. You will contribute to that purpose by conducting data analysis and deep dives to generate insights into system behavior, on top of identifying performance gaps and improvement potentials for Amazon's most strategic brands.</p>
      <p>How often can you say that your work changes the world? At Amazon, you’ll say it often. Join us and define tomorrow’s innovations in e-commerce.</p>
      `,
      },
    responsibilities: {
      title: "Key Responsibilities",
      details: `What You’ll Do:`,
      list:[
        "Work alongside a Vendor Manager to help provide a suite of services designed to maximize business performance and grow sales. Vendor Managers build relationships with Amazon Retail Vendors who sell products wholesale to Amazon and are one of our key business partners in the Retail organization.",
        "Support in the definition, conceptualization, implementation, and growth of strategic programs and products aiming at digitizing the procurement landscape.",
        "Dive deep into large data sets to analyze trends, identify new customer insights, and turn these insights into action.",
        ]
      },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list:[
        "You should then be available between 3 and up to 6 months, full-time (40h/week). Internship length is subject to availability.",
        "Pursuing a Bachelor’s or Master’s Degree, with an anticipated graduation date after the completion of your internship.",
        "Fluent written and verbal communication in English (Level - C1 or higher).",
        "You will be based in Berlin for the duration of the internship. A relocation package may be offered, subject to an eligibility criterion.",
        ],
      },
    tags: ["Part-Time", "Commerce", "Berlin", "Corporate", "Location"],
    languages: {
      English: {
          required: true,
          proficiency: "Advanced",
      },
      German: {
          required: false,
          proficiency: null,
      },
    },
    educationLevel: ["Bachelor", "Master","PhD"],
    experienceLevel:["Entry","Junior"],
    locationType:["onsite"],
    overview: {
      jobTitle: "Program/Product Manager Intern",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.4114352263596!2d13.373919299999999!3d52.4354613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a845c8cd1e4113%3A0x47037c39b318bf64!2sAmazon%20DBE2!5e0!3m2!1sen!2sde!4v1733920584855!5m2!1sen!2sde",
      },
  },
];
