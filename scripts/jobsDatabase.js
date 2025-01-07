const jobDatabase = [
  {
    id: 1,
    postingTime: "2024-12-12T16:45",
    company: {
      name: "Deutsche Bank AG",
      logo: "DB.png",
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
      list: [],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Our internship will give you the professional skills you need to start your career. For us, creativity and flexibility are key. That's why we are looking for technical talents who are able to thrive in our diverse culture.`,
      list: [
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
        proficiency: "Advanced", // "Beginner", "Intermediate", or "Advanced"
      },
      German: {
        required: true,
        proficiency: "Beginner", // Can be null if not required
      },
    },
    educationLevel: ["Master"],
    experienceLevel: ["Junior"],
    locationType: ["onsite", "remote", "hybrid"],
    overview: {
      jobTitle: "Internship Program Technology, Data & Innovation",
      jobType: "Internship",
      category: "Commerce",
      experience: "Junior level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.062090126227!2d13.3198062!3d52.514215400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8511c6b917335%3A0x69a52e9e2f7d65d3!2sDeutsche%20Bank!5e0!3m2!1sen!2sde!4v1732224638968!5m2!1sen!2sde",
    },
  },

  {
    id: 2,
    postingTime: "2024-12-10T15:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
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
      list: [
        "Contribute to strategic initiatives and projects with a focus on customer value and business transformation",
        "Support the creation of customer and C-level presentations as well as concept proposals",
        "Create communication artifacts for CAIA-relevant topics",
        "Define and implement concepts for CAIA communication channels",
        "Assist in the coordination and management of CAIA use cases activities across various areas and teams",
        "Support experts in preparing and hosting CAIA events",
        "Define and build artifacts in the area of knowledge management and best practices",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `You are a student (f/m/d) at a university or a university of applied sciences. We’re looking for someone who takes initiative, perseveres, and stays curious. You like to work on meaningful innovative projects and are energized by lifelong learning.`,
      list: [
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
    educationLevel: ["Bachelor", "Master"],
    experienceLevel: ["Entry"],
    locationType: ["onsite", "hybrid"],
    overview: {
      jobTitle: "SAP iXp Intern (f/m/d) - Customer Innovation Services",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Walldorf",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.048324609701!2d8.636825600000002!3d49.2944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797beac4fc96d5f%3A0x909f3de31b1264b!2sSAP%20SE%20(WDF21)!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 3,
    postingTime: "2024-12-10T12:00",
    company: {
      name: "SICK AG",
      logo: "SICK.png",
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
      list: [
        "Support the Finance Service Center in international daily operations, especially during monthly and quarterly closings",
        "Assist with internal service and group cost allocations",
        "Take on comprehensive project tasks in project controlling",
        "Support investment controlling and planning processes",
        "Maintain master data in SAP",
        "Contribute to the optimization (digitalization) of accounting processes as well as cost calculations and inventory valuations",
        "Prepare ad-hoc analyses in SAP",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: ``,
      list: [
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
    educationLevel: ["Bachelor", "Master"],
    experienceLevel: ["Entry"],
    locationType: ["onsite"],
    overview: {
      jobTitle: "Mandatory Internship in Management Accounting & Controlling",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Waldkirch",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.104216248861!2d7.9494439!3d48.0889312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911fcbe5168d7b%3A0xb85b8eeab595e5e3!2sSICK%20AG!5e0!3m2!1sen!2sde!4v1733427867597!5m2!1sen!2sde",
    },
  },
  {
    id: 4,
    postingTime: "2024-12-10T13:20",
    company: {
      name: "HUGO BOSS AG",
      logo: "Hugo_Boss.png",
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
      list: [
        "Support the IT program/project management in international and cross-functional projects with operational project management tasks.",
        "Establish standards and methodologies in complex projects.",
        "Participate in the creation and execution of analyses, presentations, and workshops.",
        "The opportunity to make a noticeable contribution to the success of the project through your commitment and to participate in real problem-solving.",
        "Comprehensive insights into the entire value chain of HUGO BOSS AG.",
        "The chance to work in a team and develop in a communicative environment with initiative.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
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
    educationLevel: ["Bachelor", "Master"],
    experienceLevel: ["Entry"],
    locationType: ["onsite", "hybrid"],
    overview: {
      jobTitle: "Internship IT Project Management - Focus PMO (m/f/d)",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Metzingen",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5282.494726152205!2d9.2694031!3d48.5476538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799ecfd8112dec5%3A0xaf7f8f902f9bea2b!2sHUGO%20BOSS%20Headquarters!5e0!3m2!1sen!2sde!4v1733428643607!5m2!1sen!2sde",
    },
  },
  {
    id: 5,
    postingTime: "2024-12-10T13:00",
    company: {
      name: "PORSCHE",
      logo: "Porsche.png",
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
      list: [
        "Drive the product vision",
        "Derive new features from data and stakeholder requirements",
        "Analyse product & feature-performance and derive optimization potential",
        "Maintain and prioritize the product backlog",
        "Optimize processes in and around the product team",
        "Prepare management presentations",
        "Prepare and follow up workshops including the translation of the findings into concrete to-do's",
        "Act as a respected team member in a scaled agile system.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Are you enthusiastic, curious and think outside the box? Just because you've never done something it doesn’t mean you give up, but gets you excited to learn something new and broaden your horizon? Then you’re the right fit if you furthermore bring along the following:`,
      list: [
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
    experienceLevel: ["Entry", "Junior"],
    locationType: ["onsite", "hybrid"],
    overview: {
      jobTitle: "Werkstudent/in | Working Student (F/M/D) Product Owner",
      jobType: "Working Student",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Ludwigsburg",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.8721996638264!2d9.150257199999999!3d48.9178271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da80ce5ea025%3A0x282d45223872c4ac!2sPorsche%20Pforte%20Werk%207!5e0!3m2!1sen!2sde!4v1733429318349!5m2!1sen!2sde",
    },
  },
  {
    id: 6,
    postingTime: "2024-12-09T20:00",
    company: {
      name: "Inkitt",
      logo: "Inkitt.png",
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
      list: [
        "Organize office supplies and maintain stock levels to keep the office well-equipped.",
        "Oversee office meal management, including coordinating daily meal orders and ensuring efficient meal setup for a positive office experience.",
        "Coordinate snacks, drinks orders, and assist with meal provider logistics to support a positive office environment.",
        "Assist with budget forecasting, budget management, and manage invoice processing for efficient financial operations.",
        "Assist in organizing larger office events and managing vendor relationships to ensure seamless event experiences.",
        "Provide general administrative support, including document preparation, managing incoming requests, and vendor communications.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
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
    experienceLevel: ["Entry", "Junior", "Senior"],
    locationType: ["onsite"],
    overview: {
      jobTitle: "Office Assistant - Working Student / Mini Job (m/f/d)",
      jobType: "Working Student",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.2483812586374!2d13.4157531!3d52.52894009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8504aac6e564f%3A0xe1b0e245b7d2e423!2sInkitt%20GmbH!5e0!3m2!1sen!2sde!4v1733848914972!5m2!1sen!2sde",
    },
  },
  {
    id: 7,
    postingTime: "2024-12-09T06:00",
    company: {
      name: "Obton",
      logo: "Obton.png",
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
      list: [
        "Organizing and maintaining document management systems.",
        "Handling internal workflows and ensuring compliance with standard procedures.",
        "Updating and managing data in Obton’s internal management system.",
        "Overseeing practical office tasks, such as managing office supplies and logistics.",
        "Handling incoming and outgoing mail (including group email addresses).",
        "Supporting colleagues with ad-hoc administrative and operational tasks.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
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
    experienceLevel: ["Entry", "Junior", "Senior"],
    locationType: ["onsite"],
    overview: {
      jobTitle: "Student Assistant",
      jobType: "Working Student",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Hamburg",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6796031559475!2d7.1079626!3d51.50074679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e719c47a4d59%3A0x2c9c860d7c928e14!2sObton!5e0!3m2!1sen!2sde!4v1733919845665!5m2!1sen!2sde",
    },
  },
  {
    id: 8,
    postingTime: "2024-12-09T07:00",
    company: {
      name: "Boston Consulting Group",
      logo: "BCG.png",
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
      list: [
        "You’ll be part of a small team, but work with many people and have numerous connections to different departments in the Düsseldorf office.",
        "As an important point of contact at BCG, you are always reliable and polite.",
        "You have good organizational skills and attention to detail, and you enjoy working in a service role.",
        "You are highly flexible and think independently.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
        "You are studying for a bachelor's or master's degree (with at least two years of study remaining at your start date and no mandatory internships planned).",
        "You communicate competently and professionally in German and English and work proficiently with the MS Office programs.",
        "You’re known for your organizational talent and conscientious work style.",
      ],
    },
    tags: [
      "Part-Time",
      "Administration",
      "Düsseldorf",
      "Corporate",
      "Location",
    ],
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
    experienceLevel: ["Entry", "Junior"],
    locationType: ["remote"],
    overview: {
      jobTitle: "Working Student—Copy Center & Internal Services Team",
      jobType: "Working Student",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Düsseldorf",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.591439580367!2d6.779691!3d51.226601599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171beb8c2314c81%3A0x25546bd43be74743!2sBoston%20Consulting%20Group!5e0!3m2!1sen!2sde!4v1733919880837!5m2!1sen!2sde",
    },
  },
  {
    id: 9,
    postingTime: "2024-12-09T09:30",
    company: {
      name: "Canon Production Printing",
      logo: "Canon.png",
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
      list: [
        "You will support your team in the area of testing/developing new high-performance printing systems.",
        "After being trained by your mentor, you will understand the development/test objectives, plan tests/trials and carry them out",
        "Independently apply test/measurement methods, evaluate (measurement) results and interpret them",
        "Supervision of smaller projects may also be part of your tasks",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
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
    experienceLevel: ["Entry", "Junior"],
    locationType: ["onsite", "hybrid"],
    overview: {
      jobTitle: "Working Student (m/f/d) as Development Assistant",
      jobType: "Working Student",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Germany",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.591439580367!2d6.779691!3d51.226601599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171beb8c2314c81%3A0x25546bd43be74743!2sBoston%20Consulting%20Group!5e0!3m2!1sen!2sde!4v1733919880837!5m2!1sen!2sde",
    },
  },
  {
    id: 10,
    postingTime: "2024-12-09T10:00",
    company: {
      name: "MBition GmbH",
      logo: "MBition.png",
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
      list: [
        "As a Working Student for Mercedes-Benz Voice Assistant NLU Analysis, you will be part of a cross-functional support team that provides internal customer-facing development teams with empirical insights about the interactions between the MBUX Voice Assistant in Mercedes-Benz cars and its users.",
        "You will be embedded in a team with backgrounds mainly in the areas of Data Analytics, Data Engineering and Test Automation and will interact with people in other teams working on Voice Interaction Design and Product Management.",
        "Your main focus areas will be the analysis and annotation of natural language corpora as well as the co-creation and co-refinement of annotation schemas.",
        "Occasionally, we might also need your assistance in interactively testing the actual system or assisting with user research.",
        "By working on these topics, you gain practical experiences in topics you’re learning in your studies and have real impact on the user experience in Mercedes-Benz cars.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
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
    experienceLevel: ["Entry", "Junior", "Senior"],
    locationType: ["onsite"],
    overview: {
      jobTitle:
        "Working Student – Mercedes-Benz Voice Assistant NLU Analysis (all genders)",
      jobType: "Working Student",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.7455824160684!2d13.319517999999997!3d52.51994319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d0e1d06b77%3A0xb539082293932cdc!2sMBition%20GmbH!5e0!3m2!1sen!2sde!4v1733920383048!5m2!1sen!2sde",
    },
  },
  {
    id: 11,
    postingTime: "2024-12-09T11:00",
    company: {
      name: "VeeCollective GmbH",
      logo: "VeeCollective.png",
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
      list: [
        "With a focus on marketing, you will extensively support the team in areas such as sales, e-commerce, and office management",
        "Assist in developing and implementing marketing concepts across all our channels.",
        "Assist in identifying and collaborating with influencers to create content and promote brand visibility and contribute to the team by effectively supporting order management.",
        "Support the Store Manager in ensuring smooth operations for our sales activities in the store.",
        "Support our content creator with content production and conduct market analysis and report on trends.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
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
    experienceLevel: ["Entry", "Junior"],
    locationType: ["onsite"],
    overview: {
      jobTitle: "MARKETING INTERNSHIP",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.3207968883085!2d13.3995267!3d52.5276298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8514de91280ff%3A0xc589daf04225305a!2sVEE%20COLLECTIVE!5e0!3m2!1sen!2sde!4v1733920427328!5m2!1sen!2sde",
    },
  },
  {
    id: 12,
    postingTime: "2024-12-09T12:00",
    company: {
      name: "LionsHome GmbH",
      logo: "Lionshome.png",
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
      list: [
        "You will be responsible for the sales in the UK market in close coordination with the management.",
        "You will be responsible for cold-calling potential partners to pitch a collaboration that best fits their needs.",
        "You will be responsible for managing relationships with current customers.",
        "Independent research for suitable cooperation partners.",
        "You will learn and work with important key tools in online marketing.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
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
    experienceLevel: ["Entry", "Junior"],
    locationType: ["onsite", "remote", "hybrid"],
    overview: {
      jobTitle:
        "Internship Business Development & Sales UK Native English speaker",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.434786896439!2d13.401690400000001!3d52.5255672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e134366839%3A0xae01b8852983149b!2sLionsHome%20GmbH!5e0!3m2!1sen!2sde!4v1733920466576!5m2!1sen!2sde",
    },
  },
  {
    id: 13,
    postingTime: "2024-12-09T12:45",
    company: {
      name: "Hive Technologies GmbH",
      logo: "Hive.png",
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
      list: [
        "Be part of the largest and most challenging projects contributing to Hive’s growth across new customer segments and business verticals.",
        "Work closely with our partner manager on both day-to-day operations and strategic planning, gaining insights into the decisions that help us grow and improve our fulfillment center network.",
        "Collaborate with our fulfillment partners both on-site and remotely, assisting in resolving operational challenges.",
        "Measure the performance of our fulfillment sites & suggest improvement points to our operational KPIs and metrics (e.g. throughput, punctuality)",
        "Become an essential part of the Hive Operations team by working closely with the Head of Fulfillment and Expansion, alongside stakeholders and teams across the organization.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
        "Interest in logistics and ready to dive into the fast-paced world of a VC-backed startup, helping to shape the future of e-commerce operations.",
        "Natural problem-solver, ready to roll up your sleeves and hit the ground running with exciting expansion projects.",
        "Eager to work with Hive’s proprietary WMS (Warehouse Management System) and other cutting-edge software at the pulse of logistics & e-commerce trends.",
        "You want to join as a working student for ca. 20 hours/week or for a full-time internship for 5-6 months.",
        "You are business fluent in English (bonus points if you speak German/ Polish!), with strong communication skills to rally internal and external teams.",
      ],
    },
    tags: [
      "Part-Time",
      "Full-Time",
      "Commerce",
      "Berlin",
      "Corporate",
      "Location",
    ],
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
    educationLevel: ["Bachelor", "Master", "PhD"],
    experienceLevel: ["Senior", "Professional"],
    locationType: ["onsite"],
    overview: {
      jobTitle: "Operations Intern (Expansion) (f/m/d)",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.670051972185!2d13.405460000000001!3d52.52131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8510eeaffc8b3%3A0xd29744ecb100f639!2sHive%20Technologies%20GmbH%20HQ!5e0!3m2!1sen!2sde!4v1733920507615!5m2!1sen!2sde",
    },
  },
  {
    id: 14,
    postingTime: "2024-12-05T12:45",
    company: {
      name: "home24 SE",
      logo: "Home24.png",
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
      list: [
        "You plan, coordinate, and execute CRM campaigns (e-mail & app marketing).",
        "You assist in the optimization of our overall CRM activities.",
        "You analyze and monitor the performance of CRM activities and set up new reports.",
        "You support the coordination between other marketing channels, art direction, and content teams.",
        "You have the chance to gain insights into different leading tools like Emarsys, Tableau, Dynamic Yield, and Google Analytics.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
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
    experienceLevel: ["Entry", "Junior"],
    locationType: ["onsite", "remote", "hybrid"],
    overview: {
      jobTitle: "Mandatory Intern - Online Marketing CRM (m/f/d)",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4854.679340345003!2d13.455248500000001!3d52.527288299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851db2f8a90d9%3A0x8701be09518a9478!2shome24%20Showroom%20-%20Berlin%20Prenzlauer%20Berg!5e0!3m2!1sen!2sde!4v1733920544559!5m2!1sen!2sde",
    },
  },
  {
    id: 15,
    postingTime: "2024-12-05T17:30",
    company: {
      name: "Amazon Deutschland Services GmbH",
      logo: "Amazon.png",
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
      list: [
        "Work alongside a Vendor Manager to help provide a suite of services designed to maximize business performance and grow sales. Vendor Managers build relationships with Amazon Retail Vendors who sell products wholesale to Amazon and are one of our key business partners in the Retail organization.",
        "Support in the definition, conceptualization, implementation, and growth of strategic programs and products aiming at digitizing the procurement landscape.",
        "Dive deep into large data sets to analyze trends, identify new customer insights, and turn these insights into action.",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: `Your profile:`,
      list: [
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
    educationLevel: ["Bachelor", "Master", "PhD"],
    experienceLevel: ["Entry", "Junior"],
    locationType: ["onsite"],
    overview: {
      jobTitle: "Program/Product Manager Intern",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.4114352263596!2d13.373919299999999!3d52.4354613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a845c8cd1e4113%3A0x47037c39b318bf64!2sAmazon%20DBE2!5e0!3m2!1sen!2sde!4v1733920584855!5m2!1sen!2sde",
    },
  },

  {
    id: 16,
    postingTime: "2024-12-14T00:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Working Student",
      location: "Walldorf",
    },
    description: {
      title: "Job Description",
      details: `Join SAP as a Working Student and help with communication channels for a dynamic and motivated team. You'll assist with cloud and native applications using technologies such as SAP Cloud Platform and React/React-Native. Be involved in all phases of software development from design to implementation.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support product experts in daily operations",
        "Engage in workshops to gather and analyze user requirements",
        "Assist with project tasks and presentation preparation",
        "Collaborate with development teams to clarify and define requirements",
        "Prepare reports and present results to team leads",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in technical communication and documentation.",
      list: [
        "Fields of study: Technical Documentation, Communication, Media Management, or related fields",
        "Knowledge of DITA, Markdown, and video creation tools is a plus",
        "Strong communication and writing skills",
        "Fluent in both English and German",
        "Interest in IT and emerging technologies",
        "Proficiency with GitHub and content management systems is beneficial",
      ],
    },
    tags: [
      "Part-time",
      "IT",
      "Walldorf",
      "Student",
      "Technical Documentation",
      "GitHub",
      "Markdown",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 8,
    overview: {
      jobTitle:
        "Working Student (f/m/d) - For Communications And Experience Building",
      jobType: "Working Student",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Walldorf",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.048324609701!2d8.636825600000002!3d49.2944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797beac4fc96d5f%3A0x909f3de31b1264b!2sSAP%20SE%20(WDF21)!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 17,
    postingTime: "2024-11-13T07:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Working Student",
      location: "Walldorf",
    },
    description: {
      title: "Job Description",
      details: `Enhance SAP’s documentation team efforts, assist in crafting user interface texts and software documentation, and collaborate with UX designers and product managers to align content.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Collaborate on the design of innovative software solutions",
        "Assist in user experience research",
        "Support the creation of new software design concepts",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with a passion for design and user experience.",
      list: [
        "Fields of study: Media Informatics or similar",
        "Fluent in English and German",
        "A background in art is helpful",
      ],
    },
    tags: [
      "Full-time",
      "IT",
      "Walldorf",
      "Student",
      "User Experience",
      "Design",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle:
        "SAP Industry Product Engineering Intern (f/m/d) - User Experience",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "St. Ingbert",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.679557750344!2d8.6752325!3d49.3122688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797a58ff55f1a4b%3A0x11b4173ad80f26b9!2sSAP%20SE!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 18,
    postingTime: "2024-11-10T00:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Working Student",
      location: "Walldorf",
    },
    description: {
      title: "Job Description",
      details: `Assist the project management team in planning, tracking, and reporting on various projects. Support project coordination, documentation, communication, and data management.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with project coordination and scheduling",
        "Help prepare project briefs and track progress",
        "Facilitate communication across project teams",
        "Update and maintain project tracking tools",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student interested in project management and business operations.",
      list: [
        "Fields of study: Business Administration, Project Management, or related fields",
        "Proficiency in MS Office (Excel, PowerPoint, Word)",
        "Basic understanding of project management principles",
        "Fluent in English, German is a plus",
        "Strong communication, organizational, and multitasking skills",
      ],
    },
    tags: ["Full-time", "IT", "Walldorf", "Internship", "Project Management"],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 5,
    overview: {
      jobTitle: "SAP PE&A Intern (f/m/d) - Project Management Support",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Walldorf",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.048324609701!2d8.636825600000002!3d49.2944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797beac4fc96d5f%3A0x909f3de31b1264b!2sSAP%20SE%20(WDF21)!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },

  {
    id: 19,
    postingTime: "2024-11-15T09:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Working Student",
      location: "St. Leon-Rot",
    },
    description: {
      title: "Job Description",
      details: `Maintain the Enable Now Document Management System, improve documentation structure, create process flows, and participate in process improvement initiatives.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Maintain and improve the Enable Now Document Management System",
        "Create and update process flows",
        "Assist in documentation improvements for various topics",
        "Support Change Advisory Board calls with documentation updates",
        "Participate in process improvement initiatives",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in process governance and documentation.",
      list: [
        "Fields of study: Business Informatics or related fields",
        "Knowledge of MS Office, Confluence, Jira, Signavio, LeanIX",
        "Fluent in English, German is a plus",
        "Strong organizational and analytical skills",
        "Ability to work independently and in cross-cultural teams",
      ],
    },
    tags: ["Part-time", "IT", "St. Leon-Rot", "Student", "Process Governance"],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 10,
    overview: {
      jobTitle:
        "Working Student (f/m/d) - GCID DLS Global Shared Services Focus Area Process Governance",
      jobType: "Working Student",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "St. Leon-Rot",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.857044651467!2d8.6405161!3d49.2411995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797bcf45f5e5b99%3A0xb1d5855bfc269224!2sSAP%20SE%20(ROT22)!5e0!3m2!1sen!2sde!4v1734174591724!5m2!1sen!2sde",
    },
  },
  {
    id: 20,
    postingTime: "2024-12-08T14:30",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "Walldorf",
    },
    description: {
      title: "Job Description",
      details: `Join SAP’s MTT Innovation & Business Services Team, support product managers, assist in creating roll-out strategies, and help with marketing events to drive the adoption of SAP's applications.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with roll-out strategy and documentation",
        "Support marketing and sales teams globally",
        "Create communication content and guides for applications",
        "Engage with users and gather feedback to improve applications",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in communication and marketing for tech applications.",
      list: [
        "Fields of study: Business Administration, Communications, Sociology, or similar",
        "Strong communication and organizational skills",
        "Fluency in English and German",
        "Proficiency in content creation and social media",
        "Creative mindset with a proactive attitude",
      ],
    },
    tags: [
      "Full-time",
      "IT",
      "Walldorf",
      "Internship",
      "Communication",
      "Marketing",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 12,
    overview: {
      jobTitle: "Intern (f/m/d) - Communication and Global Roll-Out Management",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Walldorf",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.048324609701!2d8.636825600000002!3d49.2944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797beac4fc96d5f%3A0x909f3de31b1264b!2sSAP%20SE%20(WDF21)!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 21,
    postingTime: "2024-12-06T11:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "Walldorf",
    },
    description: {
      title: "Job Description",
      details: `Join the Digital Governance Team and assist in maintaining the SAP Domain Inventory Dashboard, monitor compliance, and supervise sunset processes for SAP's web presences.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Maintain the SAP Domain Inventory Dashboard",
        "Track and ensure compliance across SAP web presences",
        "Assist with sunset processes for web presences",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in digital governance and web management.",
      list: [
        "Fields of study: IT, Business Informatics, or related fields",
        "Fluent in English and German",
        "Proficient in MS Office",
        "Strong communication and organizational skills",
      ],
    },
    tags: ["Full-time", "IT", "Walldorf", "Internship", "Digital Governance"],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 7,
    overview: {
      jobTitle: "SAP iXp Intern (f/m/d) - Digital Governance Team",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Walldorf",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.048324609701!2d8.636825600000002!3d49.2944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797beac4fc96d5f%3A0x909f3de31b1264b!2sSAP%20SE%20(WDF21)!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 22,
    postingTime: "2024-12-05T16:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "Walldorf",
    },
    description: {
      title: "Job Description",
      details: `Support the Software Asset Management team with various tasks in the Program Management Office, contribute to communication, project management, and skill management.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in managing projects and internal communications",
        "Support in the development of SAM strategies",
        "Help streamline processes and document workflows",
        "Collaborate with stakeholders to ensure successful project execution",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in project management and business operations.",
      list: [
        "Fields of study: Business Administration, Communications, Management, or related fields",
        "Proficiency in MS Office",
        "Fluency in English",
        "Strong communication, organizational, and problem-solving skills",
      ],
    },
    tags: ["Full-time", "IT", "Walldorf", "Internship", "Project Management"],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 6,
    overview: {
      jobTitle:
        "Intern (f/m/d) - Program Management Office (PMO) in Software Asset Management (SAM)",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Walldorf",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.048324609701!2d8.636825600000002!3d49.2944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797beac4fc96d5f%3A0x909f3de31b1264b!2sSAP%20SE%20(WDF21)!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 23,
    postingTime: "2024-11-29T10:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "Walldorf",
    },
    description: {
      title: "Job Description",
      details: `Assist the project management team in planning, tracking, and reporting on various projects. Support project coordination, documentation, communication, and data management.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with project coordination and scheduling",
        "Help prepare project briefs and track progress",
        "Facilitate communication across project teams",
        "Update and maintain project tracking tools",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student interested in project management and business operations.",
      list: [
        "Fields of study: Business Administration, Project Management, or related fields",
        "Proficiency in MS Office (Excel, PowerPoint, Word)",
        "Basic understanding of project management principles",
        "Fluent in English, German is a plus",
        "Strong communication, organizational, and multitasking skills",
      ],
    },
    tags: ["Full-time", "IT", "Walldorf", "Internship", "Project Management"],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 9,
    overview: {
      jobTitle: "SAP PE&A Intern (f/m/d) - Project Management Support",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Walldorf",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.048324609701!2d8.636825600000002!3d49.2944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797beac4fc96d5f%3A0x909f3de31b1264b!2sSAP%20SE%20(WDF21)!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 24,
    postingTime: "2024-11-26T12:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "St. Ingbert",
    },
    description: {
      title: "Job Description",
      details: `Join the SAP Industry Product Engineering team as an intern, collaborate on visual design, create software design concepts, and support user experience research.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Collaborate on the design of innovative software solutions",
        "Assist in user experience research",
        "Support the creation of new software design concepts",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with a passion for design and user experience.",
      list: [
        "Fields of study: Media Informatics or similar",
        "Fluent in English and German",
        "A background in art is helpful",
      ],
    },
    tags: [
      "Full-time",
      "IT",
      "St. Ingbert",
      "Internship",
      "User Experience",
      "Design",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle:
        "SAP Industry Product Engineering Intern (f/m/d) - User Experience",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "St. Ingbert",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.201693402248!2d7.1110638999999995!3d49.2725753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795c836acb81c2d%3A0x99abd2d276504869!2sSAP%20Deutschland%20SE%20%26%20Co.%20KG!5e0!3m2!1sen!2sde!4v1734175119937!5m2!1sen!2sde",
    },
  },

  {
    id: 25,
    postingTime: "2024-12-01T13:00",
    company: {
      name: "SAP",
      logo: "SAP.png",
    },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "Walldorf",
    },
    description: {
      title: "Job Description",
      details: `Join SAP's CPIT Security Risk and Architecture team to assist in the design, implementation, and monitoring of security frameworks. Support risk assessments and the implementation of security measures.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with risk assessments and security documentation",
        "Collaborate on security measures and framework implementation",
        "Support security policy review and architecture",
        "Work with cross-functional teams to ensure security compliance",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student interested in cybersecurity, risk management, and IT architecture.",
      list: [
        "Fields of study: Computer Science, Cybersecurity, Information Security, or related fields",
        "Proficiency in security frameworks and risk assessments",
        "Familiarity with security tools and platforms",
        "Fluent in English",
        "Strong problem-solving and analytical skills",
      ],
    },
    tags: [
      "Full-time",
      "IT",
      "Walldorf",
      "Internship",
      "Cybersecurity",
      "Risk Management",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 4,
    overview: {
      jobTitle:
        "Working Student / Intern (f/m/d) - CPIT Security Risk and Architecture Team",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Walldorf",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.048324609701!2d8.636825600000002!3d49.2944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797beac4fc96d5f%3A0x909f3de31b1264b!2sSAP%20SE%20(WDF21)!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 26,
    postingTime: "2024-12-10T17:00",
    company: {
      name: "TeamViewer",
      logo: "TeamViewer.png",
    },
    summary: {
      category: "Administration",
      jobType: "Internship",
      location: "Göppingen",
    },
    description: {
      title: "Job Description",
      details: `Join TeamViewer's Talent Acquisition team to assist in recruiting and employer branding activities. Support the team in sourcing candidates, scheduling interviews, and managing communication with applicants.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with candidate sourcing and recruiting activities",
        "Help with interview scheduling and communication",
        "Coordinate recruitment events and job fairs",
        "Manage recruitment project tasks and documentation",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student interested in recruitment, human resources, and employer branding.",
      list: [
        "Fields of study: Human Resources, Business Administration, Psychology, or related fields",
        "Proficiency in Microsoft Office",
        "Fluency in English and German",
        "Strong organizational and communication skills",
      ],
    },
    tags: [
      "Part-time",
      "Administration",
      "Göppingen",
      "Internship",
      "Recruiting",
      "Employer Branding",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 2,
    overview: {
      jobTitle: "Intern, Recruiting & Employer Branding (all genders)",
      jobType: "Internship",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Göppingen",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.463244756495!2d9.2639283!3d48.7013144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799a190e19c6691%3A0xee09b1e1257a27dd!2sTeamViewer!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 27,
    postingTime: "2024-12-14T09:00",
    company: {
      name: "TeamViewer",
      logo: "TeamViewer.png",
    },
    summary: {
      category: "Administration",
      jobType: "Internship",
      location: "Göppingen",
    },
    description: {
      title: "Job Description",
      details: `Join TeamViewer as an Intern in the Controlling team, where you will assist with financial planning, reporting, and data analysis. You will support the team in creating management reports, monitoring budgets, and evaluating financial performance.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with financial reporting and analysis",
        "Support the budgeting and forecasting processes",
        "Help evaluate financial performance across teams",
        "Participate in meetings and presentations related to finance and planning",
        "Provide general administrative support to the controlling department",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student with an interest in finance and controlling.",
      list: [
        "Fields of study: Business Administration, Accounting, Finance, or related fields",
        "Proficiency in Microsoft Excel and financial software",
        "Fluency in English, German is a plus",
        "Strong analytical skills and attention to detail",
        "Ability to work independently and as part of a team",
      ],
    },
    tags: [
      "Full-time",
      "Administration",
      "Göppingen",
      "Internship",
      "Finance",
      "Controlling",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern, Controlling (all genders)",
      jobType: "Internship",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Göppingen",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.463244756495!2d9.2639283!3d48.7013144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799a190e19c6691%3A0xee09b1e1257a27dd!2sTeamViewer!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 28,
    postingTime: "2024-12-01T09:00",
    company: {
      name: "TeamViewer",
      logo: "TeamViewer.png",
    },
    summary: {
      category: "IT",
      jobType: "Working Student",
      location: "Stuttgart",
    },
    description: {
      title: "Job Description",
      details: `Join TeamViewer's Software Development team, collaborate with experienced engineers, and help restructure and refactor our C++ codebase to improve code quality and efficiency.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Collaborate on software projects with experienced engineers",
        "Assist in improving C++ code quality and efficiency",
        "Support the development of scripts for automation tasks",
        "Maintain and enhance scripts for provisioning, clean-up, and monitoring",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student with an interest in software development.",
      list: [
        "Currently enrolled in a university program in Computer Science, Software Engineering, or related fields",
        "Basic understanding of software development principles, including build processes and version control",
        "Proficiency in C++ and familiarity with object-oriented programming design patterns",
        "Basic experience with shell scripting (bash, PowerShell, or similar)",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and take initiative",
        "Fluency in English is required; German proficiency is a plus",
      ],
    },
    tags: [
      "Part-time",
      "IT",
      "Stuttgart",
      "Student",
      "Software Development",
      "C++",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 4,
    overview: {
      jobTitle: "Work Student, Software Development (all genders)",
      jobType: "Working Student",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Stuttgart",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.7411122425497!2d9.1115635!3d48.7386925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dc5c33b6c8ab%3A0x5d8cdbfcff5f3b23!2sTeamViewer!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 29,
    postingTime: "2024-12-13T10:00",
    company: {
      name: "TeamViewer",
      logo: "TeamViewer.png",
    },
    summary: {
      category: "Commerce",
      jobType: "Internship",
      location: "Berlin",
    },
    description: {
      title: "Job Description",
      details: `Join TeamViewer’s Pricing & Retention team to assist with strategies to increase customer loyalty and lifetime value. You will support data analysis, pricing strategies, and market research.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in the development and execution of pricing and retention strategies",
        "Conduct data analysis and market research",
        "Prepare and present reports on key performance metrics",
        "Support the Global Retention Team in both operational and strategic initiatives",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in pricing, retention, and data analysis.",
      list: [
        "Fields of study: Business Management, Economics, Marketing, or related fields",
        "Fluent in English, German is a plus",
        "Proficiency in Microsoft Office applications, particularly Excel and PowerPoint",
        "Good communication and presentation skills",
        "Previous experience in marketing or data analysis is a plus",
        "Basic knowledge of Tableau, SQL, and Power BI is a plus",
      ],
    },
    tags: [
      "Full-time",
      "Marketing",
      "Berlin",
      "Internship",
      "Pricing",
      "Retention",
      "Commerce",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 5,
    overview: {
      jobTitle: "Intern, Pricing & Retention (all genders)",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Berlin",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.463244756495!2d9.2639283!3d48.7013144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f2302e6060b%3A0x5e64dbf60929ff01!2sTeamViewer%20Germany%20GmbH!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },

  {
    id: 30,
    postingTime: "2024-12-10T11:00",
    company: {
      name: "TeamViewer",
      logo: "TeamViewer.png",
    },
    summary: {
      category: "Administration",
      jobType: "Working Student",
      location: "Göppingen",
    },
    description: {
      title: "Job Description",
      details: `Join TeamViewer as a Working Student in Data Protection. Support the team with GDPR compliance, assist in the implementation of data protection processes, and help maintain related documentation.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in implementing GDPR-compliant processes",
        "Help maintain data protection documentation (e.g., RoPA, TOM)",
        "Collaborate with cross-functional teams for data protection-related tasks",
        "Support data protection experts with administrative duties",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student with an interest in data protection law.",
      list: [
        "Fields of study: Business Administration, Law, Business Law, or related fields with a focus on data protection law",
        "Fluent in English and German",
        "Interest in data protection topics and GDPR compliance",
        "Proficiency in Microsoft Office (Excel, Word, PowerPoint, Outlook)",
      ],
    },
    tags: [
      "Part-time",
      "Administration",
      "Göppingen",
      "Internship",
      "Data Protection",
      "GDPR",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 6,
    overview: {
      jobTitle: "Work Student, Data Protection (all genders)",
      jobType: "Working Student",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Göppingen",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.463244756495!2d9.2639283!3d48.7013144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799a190e19c6691%3A0xee09b1e1257a27dd!2sTeamViewer!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 31,
    postingTime: "2024-12-01T11:00",
    company: {
      name: "TeamViewer",
      logo: "TeamViewer.png",
    },
    summary: {
      category: "Commerce",
      jobType: "Internship",
      location: "Stuttgart",
    },
    description: {
      title: "Job Description",
      details: `Join TeamViewer as an Intern in the Inside Sales MEA team. Assist with selling software licenses, creating offers, and managing customer inquiries.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Sell software licenses to customers via phone and email",
        "Create and manage offers for customers",
        "Support customers with questions regarding software functionality",
        "Work closely with other departments to meet customer needs",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in sales and customer support.",
      list: [
        "Enrolled in a program related to Business Administration, Marketing, or similar fields",
        "Fluency in English, additional languages (e.g., Arabic) are a plus",
        "Strong communication skills",
        "Proficiency in Microsoft Office",
      ],
    },
    tags: ["Part-time", "Sales", "Stuttgart", "Internship", "Commerce"],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      Arabic: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 5,
    overview: {
      jobTitle: "Intern, Inside Sales MEA (all genders)",
      jobType: "Internship",
      category: "Commerce",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Stuttgart",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.7411122425497!2d9.1115635!3d48.7386925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dc5c33b6c8ab%3A0x5d8cdbfcff5f3b23!2sTeamViewer!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 32,
    postingTime: "2024-12-01T15:00",
    company: {
      name: "TeamViewer",
      logo: "TeamViewer.png",
    },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "Stuttgart",
    },
    description: {
      title: "Job Description",
      details: `Join TeamViewer as an Intern/Work Student in Software Engineering to work with C++ on Linux Desktop Clients. Develop and enhance functionalities, while improving the quality and performance of the codebase.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Design and develop features for TeamViewer Linux Desktop Client using C++",
        "Collaborate with experienced developers on various software projects",
        "Enhance systems and codebase for better quality and performance",
        "Work independently on smaller coding tasks and projects",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student passionate about software engineering.",
      list: [
        "Enrolled in university or college in Software Development, Engineering, Computer Science, or related fields",
        "Proficiency in C++",
        "Experience with Linux development is a plus",
        "Experience with Qt and QML is a plus but not required",
        "Fluency in English is mandatory, German is an advantage",
        "Open-minded approach to learning new technologies and frameworks",
      ],
    },
    tags: [
      "Full-time",
      "IT",
      "Stuttgart",
      "Internship",
      "Software Engineering",
      "C++",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 4,
    overview: {
      jobTitle: "Intern/Work Student, Software Engineering C++ (all genders)",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Stuttgart",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.7411122425497!2d9.1115635!3d48.7386925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dc5c33b6c8ab%3A0x5d8cdbfcff5f3b23!2sTeamViewer!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 33,
    postingTime: "2024-12-14T11:00",
    company: {
      name: "TeamViewer",
      logo: "TeamViewer.png",
    },
    summary: {
      category: "Administration",
      jobType: "Internship",
      location: "Stuttgart",
    },
    description: {
      title: "Job Description",
      details: `Join TeamViewer as an Intern in the Customer Renewal team. Assist in the customer renewal process, contribute to strategies to enhance customer retention, and work on creating reports for key performance indicators.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in managing customer renewal processes",
        "Support data analysis and feedback collection",
        "Prepare reports and dashboards for key performance metrics",
        "Contribute to strategies to improve customer retention and satisfaction",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in customer support and data analysis.",
      list: [
        "Enrolled in a university program in Business Administration, Marketing, or related fields",
        "Fluent in English, additional languages are a plus",
        "Strong communication skills and analytical thinking",
        "Proficiency in Microsoft Office (especially Excel) is a plus",
      ],
    },
    tags: [
      "Full-time",
      "Customer Support",
      "Stuttgart",
      "Internship",
      "Customer Retention",
      "Administration",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 4,
    overview: {
      jobTitle: "Intern, Customer Renewal (all genders)",
      jobType: "Internship",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Stuttgart",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.7411122425497!2d9.1115635!3d48.7386925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dc5c33b6c8ab%3A0x5d8cdbfcff5f3b23!2sTeamViewer!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },
  {
    id: 34,
    postingTime: "2024-12-12T17:00",
    company: {
      name: "TeamViewer",
      logo: "TeamViewer.png",
    },
    summary: {
      category: "Administration",
      jobType: "Internship",
      location: "Stuttgart",
    },
    description: {
      title: "Job Description",
      details: `Join TeamViewer as an Intern/Work Student in HR IT Project Management. Assist in project management activities, document management, reporting, and team events.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with project management tasks in HR IT",
        "Prepare presentations and manage documentation",
        "Support project reporting and updates",
        "Assist with organizing team events and administrative duties",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in project management and IT.",
      list: [
        "Enrolled in university in Business Administration, Economics, or a related field",
        "Strong knowledge of MS Office",
        "Knowledge of project management is a plus",
        "Strong organizational and communication skills",
        "Fluency in English is mandatory, German is a plus",
      ],
    },
    tags: [
      "Full-time",
      "Administration",
      "Stuttgart",
      "Internship",
      "HR IT",
      "Project Management",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern/Work Student, HR IT Project Management (all genders)",
      jobType: "Internship",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Stuttgart",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.7411122425497!2d9.1115635!3d48.7386925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dc5c33b6c8ab%3A0x5d8cdbfcff5f3b23!2sTeamViewer!5e0!3m2!1sen!2sde!4v1733410016127!5m2!1sen!2sde",
    },
  },

  {
    id: 35,
    postingTime: "2024-12-09T18:00",
    company: {
      name: "Allianz",
      logo: "Allianz.png",
    },
    summary: {
      category: "Administration",
      jobType: "Internship",
      location: "Frankfurt",
    },
    description: {
      title: "Job Description",
      details: `Join Allianz as a Working Student in Regulatory Reporting Services. Support the team in preparing regulatory reports, ensuring compliance with financial regulations, and assisting with internal and external audits.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support regulatory report preparation",
        "Ensure compliance with relevant financial regulations",
        "Assist with internal and external audits",
        "Collaborate across teams to verify and report data",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in finance and regulatory reporting.",
      list: [
        "Fields of study: Business Administration, Finance, Accounting, or related fields",
        "Proficiency in Microsoft Office, particularly Excel",
        "Fluency in English and German",
        "Strong analytical and organizational skills",
        "Interest in financial regulations and reporting processes",
      ],
    },
    tags: [
      "Part-time",
      "Administration",
      "Frankfurt",
      "Internship",
      "Regulatory Reporting",
      "Finance",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student (m/f/d) - Regulatory Reporting Services",
      jobType: "Internship",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Frankfurt",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.3106936500453!2d8.6670374!3d50.0991913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0c07ab02ed11%3A0x1c3ebf17ef67b88e!2sAllianz%20Beratungs-%20und%20Vertriebs-AG%20Frankfurt!5e0!3m2!1sen!2sde!4v1734178631338!5m2!1sen!2sde",
    },
  },
  {
    id: 36,
    postingTime: "2024-12-13T18:00",
    company: {
      name: "Allianz",
      logo: "Allianz.png",
    },
    summary: {
      category: "IT",
      jobType: "Internship",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Allianz as an Intern/Work Student in Global IT Management, focusing on IT Governance, Risk, and Compliance. Assist in ensuring the company meets regulatory and risk compliance requirements and supports internal audits.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Analyze and support compliance data and documentation",
        "Assist with the preparation of training materials and management presentations",
        "Help design and review communication documents",
        "Support project management tasks, including organizing meetings and tracking milestones",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in IT governance and compliance.",
      list: [
        "Enrolled in Business IT, Information Systems, Management, Economics, or Computer Science (Master level preferred)",
        "Very good MS Office skills (Excel, PowerPoint, Word)",
        "Strong oral and written communication skills in English; German is a plus",
        "Proactive with analytical and solution-oriented thinking skills",
        "Reliable organizational talent with the ability to provide best results under time pressure",
        "Previous experience in business-related functions is a plus",
      ],
    },
    tags: [
      "Full-time",
      "IT",
      "Munich",
      "Internship",
      "Governance",
      "Compliance",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle:
        "Intern/Working Student in Global IT Management (Governance, Risk & Compliance)",
      jobType: "Internship",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.9666060995264!2d11.647786700000001!3d48.1879949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479de0745e9fb99f%3A0x1682190ee17100d7!2sAllianz%20Commercial%20(Allianz%20Global%20Corporate%20%26%20Specialty%20SE)!5e0!3m2!1sen!2sde!4v1734178724185!5m2!1sen!2sde",
    },
  },
  {
    id: 37,
    postingTime: "2024-12-11T19:30",
    company: {
      name: "Allianz",
      logo: "Allianz.png",
    },
    summary: {
      category: "Financial",
      jobType: "Internship",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Allianz as an Intern in Investment Controlling and Valuation. Assist with the quarterly planning & reporting process, and monitor Allianz Capital Partners' portfolio in direct infrastructure equity, renewables, and private equity fund investments.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in the investment controlling process for infrastructure equity and private equity funds",
        "Support planning and reporting for the indirect portfolio (Private Equity, Infrastructure Funds)",
        "Prepare forecasting reports on investment performance",
        "Contribute to ad-hoc projects related to accounting and reporting",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in investment controlling and finance.",
      list: [
        "Enrolled in Business Administration, Finance, Accounting, Economics, or a related program (preferably with a focus on corporate finance)",
        "First internship experience in corporate finance, accounting, or investment controlling",
        "Proficient in MS Office (Excel, PowerPoint); PowerBI knowledge is a plus",
        "Strong analytical and organizational skills",
        "Fluent in English, with German being a plus",
      ],
    },
    tags: [
      "Full-time",
      "Finance",
      "Munich",
      "Internship",
      "Investment Management",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern (f/m/d) - Investment Controlling and Valuation",
      jobType: "Internship",
      category: "Finance",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.9666060995264!2d11.647786700000001!3d48.1879949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479de0745e9fb99f%3A0x1682190ee17100d7!2sAllianz%20Commercial%20(Allianz%20Global%20Corporate%20%26%20Specialty%20SE)!5e0!3m2!1sen!2sde!4v1734178724185!5m2!1sen!2sde",
    },
  },
  {
    id: 38,
    postingTime: "2024-12-10T20:00",
    company: {
      name: "Allianz",
      logo: "Allianz.png",
    },
    summary: {
      category: "Administration",
      jobType: "Part-Time",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Allianz as a Working Student in Travel Portfolio Analysis. Work closely with the Head of Portfolio Monitoring and Remediation to develop tools, improve data quality, and help drive financial planning for the global travel portfolio.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with developing tools and databases for portfolio monitoring",
        "Support quarterly reporting and improve automation and data quality",
        "Enhance portfolio monitoring with advanced analytics and predictive modeling",
        "Collaborate with cross-functional teams to address underperforming areas",
        "Prepare presentations and dashboards for the management team",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in data analytics and financial modeling.",
      list: [
        "Excellent degree or equivalent experience in Economics, Finance, Business Administration, or related fields",
        "Experience in data analytics, modeling, and dashboard creation",
        "Strong MS Office skills (PowerPoint, Excel)",
        "Experience with BI tools (e.g., MicroStrategy, Tableau, Power BI, Business Objects)",
        "Experience with coding (Python, VBA) and SQL database management is a plus",
        "Sharp analytical skills and attention to detail",
        "Fluent in English; additional languages (e.g., French, German) are a plus",
      ],
    },
    tags: [
      "Part-time",
      "Administration",
      "Munich",
      "Internship",
      "Data Analytics",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 2,
    overview: {
      jobTitle: "Working Student Travel Portfolio Analyst",
      jobType: "Part-Time",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.9666060995264!2d11.647786700000001!3d48.1879949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479de0745e9fb99f%3A0x1682190ee17100d7!2sAllianz%20Commercial%20(Allianz%20Global%20Corporate%20%26%20Specialty%20SE)!5e0!3m2!1sen!2sde!4v1734178724185!5m2!1sen!2sde",
    },
  },
  {
    id: 39,
    postingTime: "2024-12-07T20:30",
    company: {
      name: "Allianz",
      logo: "Allianz.png",
    },
    summary: {
      category: "Administration",
      jobType: "Part-Time",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Allianz as a Working Student in Project Management for New Mobility & Fleet. Support the team in analyzing performance, researching market trends, and developing new business models in the mobility insurance industry.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in the execution of New Mobility and Fleet projects with partners",
        "Analyze and report on the performance of existing partnerships",
        "Study trends in the mobility industry and evaluate their impact on insurance",
        "Support the creation of new business models in mobility insurance",
        "Prepare market analysis and information for management presentations",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student with an interest in mobility and insurance.",
      list: [
        "Enrolled in Economics, Insurance, Engineering, or related fields",
        "High interest in the mobility or insurance industry",
        "Previous experience in the insurance, automotive, or mobility services sectors is a plus",
        "Excellent communication skills and ability to work in international teams",
        "Proficient in MS Office (Excel, PowerPoint, Word)",
        "Fluent in English, with German or French as a plus",
      ],
    },
    tags: [
      "Part-time",
      "Project Management",
      "Munich",
      "Internship",
      "New Mobility",
      "Insurance",
      "Administration",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle:
        "Working Student (m/f/d) - Project Management New Mobility & Fleet",
      jobType: "Part-Time",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.9666060995264!2d11.647786700000001!3d48.1879949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479de0745e9fb99f%3A0x1682190ee17100d7!2sAllianz%20Commercial%20(Allianz%20Global%20Corporate%20%26%20Specialty%20SE)!5e0!3m2!1sen!2sde!4v1734178724185!5m2!1sen!2sde",
    },
  },
  {
    id: 40,
    postingTime: "2024-12-12T21:00",
    company: {
      name: "Allianz Global Investors",
      logo: "Allianz.png",
    },
    summary: {
      category: "Financial",
      jobType: "Full-Time",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Allianz Global Investors as an Intern in the Infrastructure Fund & Co-Investments team. Assist with the research and analysis of global infrastructure funds, support the due diligence process, and work on financial modeling.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Research and map the global infrastructure fund market",
        "Assist in the due diligence process for funds and co-investments",
        "Analyze the operational and financial performance of portfolio companies",
        "Support financial modeling of infrastructure funds",
        "Contribute to macro-economic analysis and other ad-hoc projects",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in infrastructure fund management and financial analysis.",
      list: [
        "Enrolled in a degree program in Finance, Economics, Accounting, or related fields",
        "Completed bachelor’s degree",
        "Experience in financial services, especially in infrastructure or investment management, is a plus",
        "Excellent MS Office skills (Excel, PowerPoint, Word)",
        "Proficiency in English, and ideally also in German",
        "Strong analytical skills and attention to detail",
        "Independent, self-motivated, and able to quickly grasp new concepts",
      ],
    },
    tags: [
      "Full-time",
      "Finance",
      "Munich",
      "Internship",
      "Infrastructure Funds",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern (f/m/d) - Infrastructure Fund & Co-Investments",
      jobType: "Full-Time",
      category: "Financial",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.9666060995264!2d11.647786700000001!3d48.1879949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479de0745e9fb99f%3A0x1682190ee17100d7!2sAllianz%20Commercial%20(Allianz%20Global%20Corporate%20%26%20Specialty%20SE)!5e0!3m2!1sen!2sde!4v1734178724185!5m2!1sen!2sde",
    },
  },
  {
    id: 41,
    postingTime: "2024-12-13T21:30",
    company: {
      name: "Siemens",
      logo: "Siemens.png",
    },
    summary: {
      category: "Administration",
      jobType: "Part-Time",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Siemens Mobility as a Working Student in the Portfolio and Strategy Support team. Support in analyzing long-term trends, strategic concepts, and organizational direction, while assisting with the monitoring and mapping of the rolling stock and rail infrastructure market.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Research and monitor the global rolling stock and rail infrastructure market",
        "Track competitive and customer information using various tools",
        "Prepare presentations and reports for management",
        "Assist in strategic analysis and new business model development",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in strategy, mobility, and market analysis.",
      list: [
        "Enrolled in a Bachelor’s or Master’s degree in Economics, Insurance, Engineering, or related fields",
        "Interest in mobility and strategy-related topics",
        "Strong communication skills, both in English and German",
        "Proficiency in Microsoft Office, particularly Excel and PowerPoint",
        "Ability to work independently and manage tasks effectively",
      ],
    },
    tags: [
      "Part-time",
      "Administration",
      "Munich",
      "Internship",
      "Strategy",
      "Mobility",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student (f/m/d) - Portfolio and Strategy Support",
      jobType: "Part-Time",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5324.465790026287!2d11.5750797!3d48.1443151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f291fdf32d%3A0x69160158a06c87c4!2sSiemens%20AG%20-%20Corporate%20Headquarters!5e0!3m2!1sen!2sde!4v1734180609672!5m2!1sen!2sde",
    },
  },
  {
    id: 42,
    postingTime: "2024-12-12T22:30",
    company: {
      name: "Siemens",
      logo: "Siemens.png",
    },
    summary: {
      category: "IT",
      jobType: "Part-Time",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Siemens as a Working Student in Technology Analysis. Support IT teams with technical proof of concepts, creating use cases, and providing innovative solutions to manage financial assets and risks.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in structuring and initiating proof of concepts for IT projects",
        "Define and create use cases for innovative IT solutions",
        "Ensure project requirements are met for new initiatives",
        "Support the spread of technical knowledge across the team",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in IT and technology analysis.",
      list: [
        "Currently enrolled in a Master's program in Computer Science, Information Technology, or related fields",
        "Experience with leading-edge technologies and full-stack development",
        "Willingness to analyze and expand existing code bases",
        "Strong problem-solving and analytical skills",
      ],
    },
    tags: ["Part-time", "IT", "Munich", "Internship", "Technology Analysis"],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student (f/m/d) - Technology Analysis",
      jobType: "Part-Time",
      category: "IT",
      experience: "Entry level",
      degree: "Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5324.465790026287!2d11.5750797!3d48.1443151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f291fdf32d%3A0x69160158a06c87c4!2sSiemens%20AG%20-%20Corporate%20Headquarters!5e0!3m2!1sen!2sde!4v1734180609672!5m2!1sen!2sde",
    },
  },
  {
    id: 43,
    postingTime: "2024-12-07T23:00",
    company: {
      name: "Siemens",
      logo: "Siemens.png",
    },
    summary: {
      category: "Administration",
      jobType: "Part-Time",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Siemens as a Working Student in Brand Communications for Digital Transformation. Support the conception and implementation of content and campaigns, assist with organizing events, and analyze key performance metrics.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in content and campaign conception and implementation across platforms",
        "Organize and manage events",
        "Support partner marketing efforts",
        "Analyze communication measures and key metrics",
        "Research trends in digital transformation to aid content creation and strategy",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with an interest in digital transformation, communications, and marketing.",
      list: [
        "Currently studying Communications, Business Administration (with a focus on marketing), Media Studies, or related fields",
        "Completed at least 3 months of relevant internships in communications, marketing, or media (B2B or B2C)",
        "Good understanding of digital transformation and technology trends",
        "Proficient in MS Office, particularly Teams and PowerPoint",
        "Familiar with the latest social media and content trends",
        "Fluent in English and German",
      ],
    },
    tags: [
      "Part-time",
      "Administration",
      "Munich",
      "Internship",
      "Brand Communications",
      "Digital Transformation",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle:
        "Working Student (f/m/d) - Brand Communications Digital Transformation",
      jobType: "Part-Time",
      category: "Administration",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5324.465790026287!2d11.5750797!3d48.1443151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f291fdf32d%3A0x69160158a06c87c4!2sSiemens%20AG%20-%20Corporate%20Headquarters!5e0!3m2!1sen!2sde!4v1734180609672!5m2!1sen!2sde",
    },
  },
  {
    id: 44,
    postingTime: "2024-12-11T23:30",
    company: {
      name: "Siemens Mobility GmbH",
      logo: "Siemens.png",
    },
    summary: {
      category: "IT",
      jobType: "Part-Time",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Siemens Mobility as a Working Student in Browser Extension Development. Contribute to the development of a browser extension for generative AI, learn state-of-the-art browser extension and React development, and help shape the product vision and strategy.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Contribute to browser extension development for generative AI",
        "Work with React/TypeScript, HTML, CSS, and GIT",
        "Help shape the product vision and strategy",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a student with a strong interest in IT development and browser extension development.",
      list: [
        "Currently studying Computer Science or a similar field",
        "Experience with IT development projects",
        "Skilled in React/TypeScript, HTML, CSS",
        "Ideally experienced in developing browser extensions",
        "Familiar with GIT",
        "Fluent in English",
      ],
    },
    tags: [
      "Part-time",
      "IT",
      "Munich",
      "Internship",
      "Browser Extension",
      "React",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor", "Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student (f/m/d) - Browser Extension Development",
      jobType: "Part-Time",
      category: "IT",
      experience: "Entry level",
      degree: "Bachelor/Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5324.465790026287!2d11.5750797!3d48.1443151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f291fdf32d%3A0x69160158a06c87c4!2sSiemens%20AG%20-%20Corporate%20Headquarters!5e0!3m2!1sen!2sde!4v1734180609672!5m2!1sen!2sde",
    },
  },

  {
    id: 45,
    postingTime: "2024-12-13T00:00",
    company: {
      name: "Siemens",
      logo: "Siemens.png",
    },
    summary: {
      category: "Administration",
      jobType: "Part-Time",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Siemens as a Working Student in Intelligence Researcher for Corporate Security. Assist the Situation and Intelligence Analysis team with research tasks, analyze global security situations, and support AI-driven monitoring tools.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Research global security situations and geopolitical developments",
        "Monitor and update security information and provide regular reports",
        "Support Social Media Intelligence (SOCMINT) tasks",
        "Use cutting-edge monitoring tools and AI-powered technologies",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a master's student with an interest in security analysis and geopolitical trends.",
      list: [
        "Currently studying in the field of political, social, security studies, or related fields",
        "Understanding of global geopolitical and security developments",
        "Proficient in MS Office applications",
        "Interest in AI and Machine Learning is a plus",
        "Fluent in English and German, additional languages are a plus",
        "Strong analytical skills and critical thinking",
      ],
    },
    tags: [
      "Part-time",
      "Administration",
      "Munich",
      "Internship",
      "Security",
      "AI",
      "Research",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: true,
        proficiency: "Fluent",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle:
        "Working Student (f/m/d) - Intelligence Researcher - Corporate Security",
      jobType: "Part-Time",
      category: "Administration",
      experience: "Entry level",
      degree: "Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5324.465790026287!2d11.5750797!3d48.1443151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f291fdf32d%3A0x69160158a06c87c4!2sSiemens%20AG%20-%20Corporate%20Headquarters!5e0!3m2!1sen!2sde!4v1734180609672!5m2!1sen!2sde",
    },
  },
  {
    id: 46,
    postingTime: "2024-12-12T00:30",
    company: {
      name: "Siemens",
      logo: "Siemens.png",
    },
    summary: {
      category: "IT",
      jobType: "Part-Time",
      location: "Munich",
    },
    description: {
      title: "Job Description",
      details: `Join Siemens Xcelerator as a Working Student in Digital Marketplace Analytics. Work in a cross-functional analytics team, develop KPI dashboards using Power BI, and help organize and transform large datasets for reporting.<br>`,
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Develop KPI dashboards using Power BI",
        "Organize and transform large datasets for reporting purposes",
        "Collaborate with data engineers to ensure data integrity",
        "Create automated workflows to improve business processes",
        "Manage user access to the report suite and provide support",
        "Translate data into insights for stakeholders",
        "Prepare presentations for management",
        "Write articles for the internal newsletter if required",
      ],
    },
    requirements: {
      title: "Professional Requirements",
      details:
        "You are a master's student with a strong background in data analysis and tools.",
      list: [
        "Currently studying Data Science, Computer Science, Engineering, or related fields",
        "Experience with SQL, Python, R, and Power BI or Tableau",
        "Strong Excel skills and ability to work with complex formulae",
        "Experience with Power Automate or PowerApps is a plus",
        "Fluent in English and ideally also in German, with the ability to present data clearly",
        "Strong problem-solving skills and proactive approach",
        "Good editorial skills for writing articles is a plus",
      ],
    },
    tags: [
      "Part-time",
      "IT",
      "Munich",
      "Internship",
      "Data Science",
      "Analytics",
      "Power BI",
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent",
      },
      German: {
        required: false,
        proficiency: "Basic",
      },
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Master"],
    locationType: ["onsite", "hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle:
        "Working Student (f/m/d) – Siemens Xcelerator – Digital Marketplace Analytics",
      jobType: "Part-Time",
      category: "IT",
      experience: "Entry level",
      degree: "Master",
      gender: "All",
      location: "Munich",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5324.465790026287!2d11.5750797!3d48.1443151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f291fdf32d%3A0x69160158a06c87c4!2sSiemens%20AG%20-%20Corporate%20Headquarters!5e0!3m2!1sen!2sde!4v1734180609672!5m2!1sen!2sde",
    },
  },
  {
    id: 47,
    postingTime: "2024-12-13T10:30",
    company: {
      name: "BauHaus AG",
      logo: "BauHaus.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Join BauHaus AG as an intern in construction management. Assist with planning, scheduling, and ensuring project deadlines are met."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in planning and organizing construction activities",
        "Coordinate with suppliers to ensure timely delivery of materials",
        "Monitor the progress of the project and report status",
        "Collaborate with project managers to resolve issues",
        "Ensure quality standards and safety protocols are maintained",
        "Help prepare project timelines and budgets",
        "Assist in reviewing construction contracts and documentation",
        "Attend site meetings and assist in preparation"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student eager to learn more about construction project management.",
      list: [
        "Currently studying Civil Engineering or Construction Management",
        "Good communication and organizational skills",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Berlin",
      "Project Management",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 2,
    overview: {
      jobTitle: "Intern – Construction Management",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 48,
    postingTime: "2024-12-14T09:45",
    company: {
      name: "Vogelbau Construction",
      logo: "Vogelbau.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Frankfurt"
    },
    description: {
      title: "Job Description",
      details: "Join Vogelbau Construction as a part-time project assistant. Help with site management, ensure quality control, and assist with planning and scheduling."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with construction site management and organization",
        "Coordinate with contractors and suppliers to maintain workflow",
        "Help track material inventory and monitor delivery schedules",
        "Ensure safety and quality standards are maintained",
        "Prepare reports and document progress",
        "Attend and participate in meetings with senior project managers",
        "Monitor budgets and assist in cost tracking",
        "Review and process invoices and payment claims"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student studying construction management or civil engineering.",
      list: [
        "Currently studying Civil Engineering, Construction Management, or related fields",
        "Proficient in MS Office and Excel",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Frankfurt",
      "Site Management",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Working Student – Project Assistant",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Frankfurt",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 49,
    postingTime: "2024-12-15T11:00",
    company: {
      name: "UrbanPlan Corp.",
      logo: "UrbanPlan.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Hamburg"
    },
    description: {
      title: "Job Description",
      details: "Join UrbanPlan Corp. as a part-time construction assistant. Help with site coordination, material management, and support the construction team."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with day-to-day construction site operations",
        "Monitor material usage and inventory",
        "Coordinate between contractors and the project team",
        "Ensure site safety and compliance with regulations",
        "Help prepare project documentation and reports",
        "Track project milestones and progress",
        "Assist in managing project timelines and schedules",
        "Provide administrative support for construction activities"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student in construction management or a related field.",
      list: [
        "Currently studying Construction Management or Civil Engineering",
        "Excellent communication and organizational skills",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Hamburg",
      "Site Coordination",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student – Site Assistant",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 50,
    postingTime: "2024-12-16T12:15",
    company: {
      name: "RedBrick Construction",
      logo: "RedBrick.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Cologne"
    },
    description: {
      title: "Job Description",
      details: "Assist with ongoing construction projects, help manage daily site activities, and assist in organizing materials and resources."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with daily site activities and task management",
        "Ensure the site is organized and materials are available",
        "Coordinate deliveries and communicate with suppliers",
        "Monitor safety procedures and site compliance",
        "Prepare site progress reports",
        "Help manage project budgets and costs",
        "Track project timelines and deadlines",
        "Assist in managing client expectations and communication"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student pursuing a degree in construction or civil engineering.",
      list: [
        "Currently studying Civil Engineering, Construction Management, or related fields",
        "Strong problem-solving skills",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Cologne",
      "Project Assistance",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Intern – Construction Project Assistance",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Cologne",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 51,
    postingTime: "2024-12-17T14:00",
    company: {
      name: "WestPoint Builders",
      logo: "WestPoint.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Stuttgart"
    },
    description: {
      title: "Job Description",
      details: "Join WestPoint Builders as a working student and assist with construction project documentation, scheduling, and material tracking."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with scheduling and planning of construction tasks",
        "Track project materials and equipment",
        "Help with documentation and reporting of project progress",
        "Ensure quality standards are followed on-site",
        "Collaborate with team members to ensure tasks are completed on time",
        "Monitor timelines and milestones",
        "Assist in managing construction budgets",
        "Coordinate with subcontractors and suppliers"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student pursuing a degree in construction management or civil engineering.",
      list: [
        "Currently studying Civil Engineering, Construction Management, or related fields",
        "Strong attention to detail and time management skills",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Stuttgart",
      "Documentation",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 2,
    overview: {
      jobTitle: "Working Student – Project Documentation",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Stuttgart",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 52,
    postingTime: "2024-12-18T16:15",
    company: {
      name: "TechBuild Ltd.",
      logo: "TechBuild.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Düsseldorf"
    },
    description: {
      title: "Job Description",
      details: "Support TechBuild Ltd. in project management tasks. Assist with construction planning, site supervision, and budget management."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with managing construction projects",
        "Help plan schedules, budgets, and resources",
        "Monitor the progress of various construction phases",
        "Track project spending and ensure compliance with budget",
        "Ensure all safety standards are met on-site",
        "Help coordinate with project stakeholders",
        "Assist with the preparation of reports and documentation",
        "Support project managers with day-to-day tasks"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student studying construction management or civil engineering.",
      list: [
        "Currently studying Civil Engineering or Construction Management",
        "Good communication and problem-solving skills",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Düsseldorf",
      "Project Management",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Project Management",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Düsseldorf",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 53,
    postingTime: "2024-12-12T00:30",
    company: {
      name: "Siemens",
      logo: "Siemens.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Munich"
    },
    description: {
      title: "Job Description",
      details: "Join Siemens as a Working Student in Construction Project Management. Assist with construction planning, help ensure material availability, and support the team in tracking project progress."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with project planning and scheduling",
        "Help ensure material availability for construction projects",
        "Track project progress and update reports",
        "Collaborate with contractors and subcontractors",
        "Ensure compliance with health and safety regulations",
        "Attend site meetings and assist in coordination",
        "Review construction documents and blueprints",
        "Prepare and distribute daily reports to management"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student pursuing a degree in construction or civil engineering.",
      list: [
        "Currently studying Civil Engineering, Construction Management, or related fields",
        "Strong organizational and communication skills",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Munich",
      "Project Management",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Working Student – Construction Project Management",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Munich",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 54,
    postingTime: "2024-12-13T08:45",
    company: {
      name: "TechBuild Ltd.",
      logo: "TechBuild.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Join TechBuild Ltd. as a Construction Intern. Help manage construction project documentation, assist with site inspections, and track progress and materials."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in managing construction project documentation",
        "Help with on-site inspections and supervision",
        "Track materials and equipment usage",
        "Collaborate with the construction team to monitor project progress",
        "Ensure all safety regulations are adhered to on-site",
        "Help prepare and organize reports for stakeholders",
        "Provide general administrative support",
        "Attend project meetings and take notes"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student studying construction or civil engineering.",
      list: [
        "Currently studying Civil Engineering or Construction Management",
        "Fluent in English, German is a plus",
        "Excellent organizational and communication skills"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Berlin",
      "Project Management",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Construction Project Documentation",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },

  {
    id: 55,
    postingTime: "2024-12-12T12:00",
    company: {
      name: "Hotel Royale",
      logo: "HotelRoyale.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Hamburg"
    },
    description: {
      title: "Job Description",
      details: "Join Hotel Royale as a working student in customer service. Assist guests with inquiries, help manage bookings, and ensure guest satisfaction."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist guests with check-in and check-out procedures",
        "Manage room bookings and reservations",
        "Provide information about hotel services and local attractions",
        "Ensure a high level of customer satisfaction",
        "Handle guest inquiries and complaints professionally",
        "Assist in managing daily operations of the hotel",
        "Prepare reports for the hotel management",
        "Support other hotel departments as needed"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student studying hospitality or tourism management.",
      list: [
        "Currently studying Hospitality Management or related fields",
        "Excellent communication skills in English, German is a plus",
        "Strong organizational and multitasking abilities"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Hamburg",
      "Customer Service",
      "Tourism"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 5,
    overview: {
      jobTitle: "Working Student – Customer Service",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 56,
    postingTime: "2024-12-13T09:00",
    company: {
      name: "Grand Plaza Hotel",
      logo: "GrandPlaza.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Join Grand Plaza Hotel as an Intern in the food and beverage department. Support the team in preparing orders, handling guest requests, and ensuring smooth service delivery."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in food and beverage preparation and service",
        "Ensure food safety and hygiene standards are maintained",
        "Handle guest requests and inquiries efficiently",
        "Ensure timely delivery of food orders",
        "Help maintain inventory levels and stock rooms",
        "Assist with event planning and execution",
        "Support restaurant staff during peak hours",
        "Monitor guest satisfaction and address issues when needed"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student studying hospitality, tourism, or food management.",
      list: [
        "Currently studying Hospitality Management, Food Service, or related fields",
        "Fluent in English, German is a plus",
        "Strong teamwork and communication skills"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Berlin",
      "Food & Beverage",
      "Customer Service"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Food & Beverage Department",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 57,
    postingTime: "2024-12-15T10:30",
    company: {
      name: "Builder's Corp",
      logo: "BuildersCorp.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Frankfurt"
    },
    description: {
      title: "Job Description",
      details: "Join Builder's Corp as a Working Student in Construction Supervision. Assist the team with site inspections, project tracking, and materials management."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with site inspections and ensuring compliance with plans",
        "Monitor material usage and manage inventories",
        "Prepare and distribute project reports",
        "Collaborate with contractors and internal teams",
        "Help with scheduling and tracking project timelines",
        "Attend site meetings and take notes",
        "Ensure safety protocols are followed",
        "Assist with quality control checks"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student studying construction or civil engineering.",
      list: [
        "Currently studying Civil Engineering, Construction Management, or related fields",
        "Fluent in English, German is a plus",
        "Strong communication and organizational skills"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Frankfurt",
      "Project Management",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Working Student – Construction Supervision",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Frankfurt",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 58,
    postingTime: "2024-12-16T08:00",
    company: {
      name: "BuildSmart",
      logo: "BuildSmart.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Hamburg"
    },
    description: {
      title: "Job Description",
      details: "Join BuildSmart as an intern in Construction Design. Assist in drafting designs, managing project documentation, and ensuring compliance with safety and building codes."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in drafting construction plans and designs",
        "Ensure compliance with building codes and safety regulations",
        "Help manage project documentation and reports",
        "Coordinate with contractors and suppliers",
        "Participate in design review meetings",
        "Help with cost estimation and project budgeting",
        "Track construction milestones and deliverables",
        "Assist in preparing presentations for clients"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student in construction design or civil engineering.",
      list: [
        "Currently studying Civil Engineering, Architecture, or Construction Design",
        "Fluent in English, German is a plus",
        "Knowledge of design software such as AutoCAD or Revit is a plus"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Hamburg",
      "Design",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Construction Design",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },

  {
    id: 59,
    postingTime: "2024-12-15T10:00",
    company: {
      name: "TravelWorld",
      logo: "TravelWorld.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Join TravelWorld as a Working Student in Tour Management. Assist in organizing travel packages, customer service, and supporting the team with logistical arrangements."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in creating and managing travel itineraries",
        "Handle customer inquiries and bookings",
        "Support the team with organizing tours and activities",
        "Prepare and send confirmations to customers",
        "Ensure customer satisfaction during travel experiences",
        "Assist in marketing travel packages",
        "Handle travel documents and bookings",
        "Collaborate with tour guides and service providers"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student in tourism or hospitality management.",
      list: [
        "Currently studying Tourism Management, Hospitality, or related fields",
        "Fluent in English, German is a plus",
        "Strong organizational skills and attention to detail"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Berlin",
      "Tourism Management",
      "Customer Service"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 5,
    overview: {
      jobTitle: "Working Student – Tour Management",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 60,
    postingTime: "2024-12-16T09:00",
    company: {
      name: "Elite Resorts",
      logo: "EliteResorts.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Hamburg"
    },
    description: {
      title: "Job Description",
      details: "Join Elite Resorts as an Intern in Event Planning. Assist with organizing and managing events, customer service, and handling reservations."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in organizing corporate and leisure events",
        "Help manage event logistics, including bookings and setups",
        "Provide customer service and handle reservations",
        "Coordinate with vendors and suppliers",
        "Help with marketing and promoting events",
        "Prepare event schedules and ensure smooth operations",
        "Attend client meetings and take notes",
        "Ensure high customer satisfaction during events"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student studying hospitality or event management.",
      list: [
        "Currently studying Event Management, Hospitality, or related fields",
        "Fluent in English, German is a plus",
        "Excellent communication and organizational skills"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Hamburg",
      "Event Planning",
      "Customer Service"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Intern – Event Planning",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=..." 
    },
  },
  {
    id: 61,
    postingTime: "2024-12-17T11:00",
    company: {
      name: "BuildTech Solutions",
      logo: "BuildTechSolutions.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Cologne"
    },
    description: {
      title: "Job Description",
      details: "Join BuildTech Solutions as a Working Student in Project Coordination. Assist the team with project scheduling, tracking construction activities, and coordinating with vendors."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in coordinating project schedules and timelines",
        "Help manage project resources and material orders",
        "Track progress and report project status",
        "Communicate with vendors and subcontractors",
        "Support the team in site visits and inspections",
        "Prepare reports and documentation",
        "Help with contract administration and procurement",
        "Maintain project documentation and ensure accuracy"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student with an interest in construction project management.",
      list: [
        "Currently studying Construction Management, Civil Engineering, or related fields",
        "Fluent in English, German is a plus",
        "Strong organizational skills and attention to detail"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Cologne",
      "Project Coordination",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Working Student – Project Coordination",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Cologne",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 62,
    postingTime: "2024-12-17T12:30",
    company: {
      name: "ConstructPro",
      logo: "ConstructPro.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Düsseldorf"
    },
    description: {
      title: "Job Description",
      details: "ConstructPro is looking for an Intern in Construction Planning. Help with the development of construction plans, material estimation, and logistics support."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with construction planning and scheduling",
        "Support the team in estimating material quantities",
        "Help with the preparation of construction drawings",
        "Maintain records of construction activities",
        "Liaise with suppliers and vendors for project materials",
        "Assist in tracking project progress and milestones",
        "Help with documentation and regulatory compliance",
        "Prepare cost estimations and project budgets"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student with a passion for construction and planning.",
      list: [
        "Currently studying Construction Engineering, Civil Engineering, or related fields",
        "Fluent in English, German is a plus",
        "Experience with AutoCAD or similar design software is a plus"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Düsseldorf",
      "Planning",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Construction Planning",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Düsseldorf",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },

  {
    id: 63,
    postingTime: "2024-12-17T09:00",
    company: {
      name: "LuxuryHotels",
      logo: "LuxuryHotels.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Munich"
    },
    description: {
      title: "Job Description",
      details: "Join LuxuryHotels as a Working Student in Guest Services. Assist in welcoming guests, answering queries, and providing support during their stay."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with guest check-ins and check-outs",
        "Answer guest inquiries and provide information about services",
        "Coordinate room service and other guest requests",
        "Ensure guest satisfaction during their stay",
        "Support the front desk team with administrative tasks",
        "Manage reservations and bookings",
        "Assist in handling complaints and feedback",
        "Help with event coordination and arrangements"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student passionate about hospitality and customer service.",
      list: [
        "Currently studying Hospitality Management, Tourism, or related fields",
        "Fluent in English, German is a plus",
        "Excellent communication and interpersonal skills"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Munich",
      "Guest Services",
      "Customer Service"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 5,
    overview: {
      jobTitle: "Working Student – Guest Services",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Munich",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 64,
    postingTime: "2024-12-18T08:30",
    company: {
      name: "HotelGlobe",
      logo: "HotelGlobe.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "HotelGlobe is seeking an Intern for Event Management. You’ll assist in organizing and coordinating hotel events, handling reservations, and liaising with clients."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with organizing and managing hotel events",
        "Help coordinate logistics for events and conferences",
        "Manage guest inquiries and bookings",
        "Collaborate with clients and event planners",
        "Ensure smooth event operations",
        "Assist with post-event feedback and reports",
        "Help with budgeting and cost estimation for events",
        "Ensure customer satisfaction throughout events"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student interested in event planning and hospitality.",
      list: [
        "Currently studying Event Management, Hospitality, or related fields",
        "Fluent in English, German is a plus",
        "Excellent organizational and communication skills"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Berlin",
      "Event Planning",
      "Hospitality"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Event Management",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 65,
    postingTime: "2024-12-18T10:00",
    company: {
      name: "Urban Builders",
      logo: "UrbanBuilders.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Stuttgart"
    },
    description: {
      title: "Job Description",
      details: "Urban Builders is looking for a Working Student in Structural Design. Assist the team with drafting designs, reviewing blueprints, and analyzing structural integrity."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Draft and revise structural designs using CAD software",
        "Analyze structural integrity for ongoing projects",
        "Assist in site inspections and safety checks",
        "Collaborate with senior engineers to optimize designs",
        "Support preparation of reports and documentation",
        "Help with cost estimation and budgeting",
        "Maintain accurate records of design changes",
        "Work on compliance with building codes and standards"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student interested in structural design and engineering.",
      list: [
        "Currently studying Civil Engineering, Architecture, or related fields",
        "Experience with AutoCAD or similar software is required",
        "Fluent in English, German is a plus",
        "Strong analytical and problem-solving skills"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Stuttgart",
      "Structural Design",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 2,
    overview: {
      jobTitle: "Working Student – Structural Design",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Stuttgart",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 66,
    postingTime: "2024-12-18T11:15",
    company: {
      name: "EcoBuild Innovators",
      logo: "EcoBuildInnovators.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Hamburg"
    },
    description: {
      title: "Job Description",
      details: "EcoBuild Innovators is seeking an Intern for Green Building Projects. Support sustainable construction initiatives, research eco-friendly materials, and assist in project management."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in researching and selecting sustainable materials",
        "Collaborate with architects and engineers on green building designs",
        "Support the team in managing green certifications",
        "Prepare presentations and reports on sustainability efforts",
        "Help with cost analysis for eco-friendly solutions",
        "Participate in workshops and seminars on sustainability",
        "Maintain project documentation and compliance records",
        "Support site inspections for green construction practices"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student passionate about sustainable construction.",
      list: [
        "Currently studying Civil Engineering, Environmental Science, or related fields",
        "Knowledge of sustainable building practices and certifications",
        "Fluent in English, German is a plus",
        "Proficient in MS Office and presentation tools"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Hamburg",
      "Sustainability",
      "Green Building"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Green Building Projects",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 67,
    postingTime: "2024-12-19T09:00",
    company: {
      name: "CityHotels Group",
      logo: "CityHotelsGroup.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Frankfurt"
    },
    description: {
      title: "Job Description",
      details: "CityHotels Group is hiring a Working Student for Front Office Operations. Support guest relations, handle check-ins/check-outs, and provide concierge services."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in handling guest check-ins and check-outs",
        "Provide concierge services and recommendations",
        "Respond to guest inquiries via phone and email",
        "Coordinate room bookings and manage cancellations",
        "Support front desk team with administrative tasks",
        "Assist in preparing guest bills and invoices",
        "Ensure customer satisfaction through personalized service",
        "Help with hotel promotions and loyalty programs"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student interested in hospitality and guest services.",
      list: [
        "Currently studying Hospitality, Tourism, or related fields",
        "Excellent communication and problem-solving skills",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Frankfurt",
      "Guest Relations",
      "Customer Service"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Working Student – Front Office Operations",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Frankfurt",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 68,
    postingTime: "2024-12-19T10:30",
    company: {
      name: "Global Travel Co.",
      logo: "GlobalTravelCo.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Munich"
    },
    description: {
      title: "Job Description",
      details: "Global Travel Co. is looking for an Intern for Tour Management. Assist with travel bookings, itinerary planning, and customer support for tours."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support the team in planning and organizing tours",
        "Handle travel bookings and accommodations",
        "Assist with creating detailed travel itineraries",
        "Provide customer support for tour inquiries",
        "Coordinate with local guides and tour operators",
        "Help with marketing campaigns for tours",
        "Prepare and maintain tour documentation",
        "Assist in resolving customer issues during tours"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student with an interest in tourism and travel management.",
      list: [
        "Currently studying Tourism, Hospitality, or related fields",
        "Fluent in English, German is a plus",
        "Proficient in MS Office and travel software is a bonus"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Munich",
      "Tour Management",
      "Customer Support"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Tour Management",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Munich",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 69,
    postingTime: "2024-12-20T09:00",
    company: {
      name: "Skyline Constructors",
      logo: "SkylineConstructors.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Skyline Constructors is seeking a Working Student for Site Coordination. Assist with project scheduling, monitoring site activities, and ensuring compliance with safety protocols."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support project managers in scheduling and planning",
        "Monitor site activities and report progress",
        "Ensure compliance with safety and environmental regulations",
        "Assist in preparing project documentation",
        "Coordinate between contractors and engineers",
        "Help manage resources and equipment on-site",
        "Prepare progress reports for stakeholders",
        "Participate in on-site meetings and provide updates"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student passionate about construction management.",
      list: [
        "Currently studying Civil Engineering, Construction Management, or related fields",
        "Basic knowledge of construction processes and safety standards",
        "Proficient in MS Project or similar tools",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Berlin",
      "Site Coordination",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 2,
    overview: {
      jobTitle: "Working Student – Site Coordination",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 70,
    postingTime: "2024-12-20T10:30",
    company: {
      name: "Modern Builders Inc.",
      logo: "ModernBuildersInc.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Cologne"
    },
    description: {
      title: "Job Description",
      details: "Modern Builders Inc. is hiring an Intern for Construction Quality Control. Assist in monitoring materials, inspecting site work, and maintaining quality standards."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Inspect materials and site work for quality assurance",
        "Assist in maintaining project compliance with standards",
        "Document quality issues and suggest improvements",
        "Work closely with project teams to resolve quality concerns",
        "Help prepare quality control reports",
        "Participate in site visits and evaluations",
        "Assist with training sessions on quality standards",
        "Support in improving construction workflows"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student with a keen interest in quality management.",
      list: [
        "Currently studying Civil Engineering, Quality Management, or related fields",
        "Basic knowledge of construction materials and processes",
        "Fluent in English, German is a plus",
        "Attention to detail and organizational skills"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Cologne",
      "Quality Control",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Construction Quality Control",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Cologne",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 71,
    postingTime: "2024-12-21T09:15",
    company: {
      name: "Elite Hotels Group",
      logo: "EliteHotelsGroup.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Elite Hotels Group is looking for a Working Student in Event Coordination. Assist with organizing and managing events at the hotel, ensuring guest satisfaction."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in planning and organizing events",
        "Coordinate with vendors and service providers",
        "Help set up event venues and ensure readiness",
        "Manage guest lists and RSVP processes",
        "Support event staff during functions",
        "Prepare post-event reports and feedback",
        "Ensure compliance with safety and hygiene standards",
        "Work on marketing campaigns for upcoming events"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student with an interest in event planning and hospitality.",
      list: [
        "Currently studying Hospitality, Event Management, or related fields",
        "Strong organizational and multitasking skills",
        "Fluent in English, German is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Berlin",
      "Event Coordination",
      "Hospitality"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student – Event Coordination",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 72,
    postingTime: "2024-12-21T11:30",
    company: {
      name: "ExploreWorld Travel",
      logo: "ExploreWorldTravel.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Dresden"
    },
    description: {
      title: "Job Description",
      details: "ExploreWorld Travel is hiring an Intern for Travel Coordination. Support the team in managing bookings, customer inquiries, and itinerary planning."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in managing customer bookings and inquiries",
        "Help with travel itinerary creation and updates",
        "Coordinate with travel partners and vendors",
        "Support marketing initiatives for travel packages",
        "Prepare travel documentation and ensure accuracy",
        "Respond to customer feedback and resolve issues",
        "Monitor travel trends and suggest new ideas",
        "Collaborate on presentations and reports"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student excited about travel and coordination.",
      list: [
        "Currently studying Tourism, Business, or related fields",
        "Strong communication and organizational skills",
        "Proficiency in MS Office, travel software is a plus",
        "Fluent in English, German is a bonus"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Dresden",
      "Travel Coordination",
      "Customer Support"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Travel Coordination",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Dresden",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 73,
    postingTime: "2024-12-22T09:00",
    company: {
      name: "UrbanBuild Co.",
      logo: "UrbanBuildCo.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Frankfurt"
    },
    description: {
      title: "Job Description",
      details: "UrbanBuild Co. is hiring a Working Student to assist in project planning and resource allocation. Gain hands-on experience in construction management and on-site operations."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in project planning and scheduling",
        "Manage and track resource allocation",
        "Monitor on-site progress and provide updates",
        "Support cost estimation and budgeting",
        "Collaborate with site engineers to address challenges",
        "Prepare and review technical documentation",
        "Ensure compliance with safety protocols",
        "Participate in project review meetings"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student interested in construction and project management.",
      list: [
        "Currently studying Civil Engineering or related fields",
        "Basic knowledge of project management tools",
        "Strong organizational skills and attention to detail",
        "Proficient in English, German is a bonus"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Frankfurt",
      "Project Planning",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student – Project Planning",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Frankfurt",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 74,
    postingTime: "2024-12-22T10:45",
    company: {
      name: "BuildTech Solutions",
      logo: "BuildTechSolutions.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Stuttgart"
    },
    description: {
      title: "Job Description",
      details: "BuildTech Solutions seeks an Intern for Construction Project Support. Gain insights into project coordination, documentation, and quality assurance processes."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in coordinating construction projects",
        "Support in preparing project documentation",
        "Monitor project timelines and deliverables",
        "Help ensure compliance with quality standards",
        "Participate in on-site inspections",
        "Communicate with contractors and suppliers",
        "Prepare project status reports",
        "Contribute to workflow optimization"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a motivated student eager to learn about construction.",
      list: [
        "Currently studying Civil Engineering or a related field",
        "Basic understanding of construction workflows",
        "Proficient in MS Office tools",
        "Fluent in English; German is a plus"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Stuttgart",
      "Project Support",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Intern – Construction Project Support",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Stuttgart",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 75,
    postingTime: "2024-12-23T09:30",
    company: {
      name: "Royal Stay Hotels",
      logo: "RoyalStayHotels.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Hamburg"
    },
    description: {
      title: "Job Description",
      details: "Royal Stay Hotels is hiring a Working Student for Front Office Support. Provide exceptional customer service while managing front-desk operations."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Greet and assist guests with check-ins and check-outs",
        "Handle customer inquiries and resolve issues",
        "Coordinate with housekeeping and maintenance teams",
        "Assist in managing room reservations and billing",
        "Provide recommendations for local attractions",
        "Maintain records of guest preferences",
        "Support promotional activities for hotel services",
        "Ensure front-desk operations run smoothly"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are passionate about customer service and hospitality.",
      list: [
        "Currently studying Hospitality, Tourism, or related fields",
        "Excellent communication and interpersonal skills",
        "Fluent in English, German proficiency is a plus",
        "Basic knowledge of hotel management systems"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Hamburg",
      "Front Office",
      "Customer Service"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student – Front Office Support",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 76,
    postingTime: "2024-12-23T11:00",
    company: {
      name: "TravelPro Experts",
      logo: "TravelProExperts.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Munich"
    },
    description: {
      title: "Job Description",
      details: "TravelPro Experts is seeking an Intern to support tour planning and customer management. Assist in organizing travel packages and ensuring customer satisfaction."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support the planning and execution of tour packages",
        "Assist in managing customer bookings and feedback",
        "Coordinate with local vendors and service providers",
        "Help maintain accurate travel documentation",
        "Monitor customer satisfaction and suggest improvements",
        "Prepare marketing materials for travel packages",
        "Provide support during customer issues",
        "Participate in team strategy meetings"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are a student interested in tourism and customer engagement.",
      list: [
        "Currently studying Tourism, Business, or related fields",
        "Strong organizational and time-management skills",
        "Fluent in English, additional languages are a bonus",
        "Proficient in MS Office and CRM tools"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Munich",
      "Tour Planning",
      "Customer Management"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 2,
    overview: {
      jobTitle: "Intern – Tour Planning & Customer Management",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Munich",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 77,
    postingTime: "2024-12-24T08:00",
    company: {
      name: "GreenBuild Engineers",
      logo: "GreenBuildEngineers.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Cologne"
    },
    description: {
      title: "Job Description",
      details: "GreenBuild Engineers is looking for a Working Student to assist in sustainable building projects. Gain experience in green technologies and project design."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in designing sustainable building solutions",
        "Conduct energy efficiency evaluations",
        "Collaborate with engineers on project requirements",
        "Support material selection and cost analysis",
        "Prepare technical reports and presentations",
        "Ensure compliance with environmental standards",
        "Monitor project milestones and progress",
        "Contribute to innovative design proposals"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are passionate about sustainable construction and innovation.",
      list: [
        "Currently studying Civil or Environmental Engineering",
        "Familiarity with CAD software and green technologies",
        "Proficient in English; German is an advantage",
        "Strong problem-solving and analytical skills"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Cologne",
      "Sustainability",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 5,
    overview: {
      jobTitle: "Working Student – Sustainable Construction",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Cologne",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 78,
    postingTime: "2024-12-24T10:30",
    company: {
      name: "Skyline Construction",
      logo: "SkylineConstruction.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Skyline Construction seeks an intern for construction project management support. Collaborate on large-scale projects and gain hands-on experience in site coordination."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist project managers in planning and execution",
        "Monitor construction progress and ensure timelines are met",
        "Support quality assurance processes on-site",
        "Coordinate with contractors and suppliers",
        "Help maintain accurate documentation and logs",
        "Prepare updates for stakeholders",
        "Analyze potential risks and propose mitigation plans",
        "Participate in strategy meetings and site visits"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are enthusiastic about learning construction project management.",
      list: [
        "Currently enrolled in Civil Engineering or Construction Management",
        "Proficient in project management tools and MS Office",
        "Fluent in English; German proficiency is a bonus",
        "Strong communication and organizational skills"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Berlin",
      "Project Management",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Construction Project Management",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 79,
    postingTime: "2024-12-24T12:00",
    company: {
      name: "Seaside Hotels",
      logo: "SeasideHotels.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Bremen"
    },
    description: {
      title: "Job Description",
      details: "Seaside Hotels is hiring a Working Student for event management support. Assist in organizing events and managing guest experiences."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in planning and executing hotel events",
        "Coordinate with vendors and service providers",
        "Help manage guest registrations and communications",
        "Ensure high-quality customer service during events",
        "Support promotional activities for events",
        "Prepare event feedback reports",
        "Collaborate with the marketing team for campaigns",
        "Maintain an inventory of event supplies"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are organized and enthusiastic about event management.",
      list: [
        "Currently studying Hospitality or Event Management",
        "Experience in customer service is a plus",
        "Fluent in English; German proficiency is advantageous",
        "Strong attention to detail and multitasking skills"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Bremen",
      "Event Management",
      "Customer Service"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 2,
    overview: {
      jobTitle: "Working Student – Event Management",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Bremen",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 80,
    postingTime: "2024-12-24T14:00",
    company: {
      name: "Holiday Bliss Tours",
      logo: "HolidayBlissTours.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Düsseldorf"
    },
    description: {
      title: "Job Description",
      details: "Holiday Bliss Tours seeks an Intern for travel coordination. Assist in itinerary planning and enhancing customer travel experiences."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Plan and coordinate travel itineraries",
        "Communicate with clients to understand preferences",
        "Research and book accommodations and activities",
        "Provide on-call support for travel issues",
        "Maintain records of travel bookings and feedback",
        "Assist in improving travel package offerings",
        "Collaborate with marketing to promote services",
        "Prepare reports on customer satisfaction metrics"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are passionate about tourism and creating memorable experiences.",
      list: [
        "Currently studying Tourism or related fields",
        "Strong organizational and communication skills",
        "Fluent in English; additional languages are a plus",
        "Experience in travel planning tools is beneficial"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Düsseldorf",
      "Travel Coordination",
      "Customer Support"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Travel Coordination",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Düsseldorf",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 81,
    postingTime: "2024-12-25T09:00",
    company: {
      name: "EcoBuilders Ltd.",
      logo: "EcoBuilders.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Hamburg"
    },
    description: {
      title: "Job Description",
      details: "EcoBuilders Ltd. is seeking a Working Student to assist with sustainable construction projects. Contribute to innovative eco-friendly designs."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support project planning for eco-friendly buildings",
        "Analyze energy efficiency of construction materials",
        "Assist in preparing sustainable design proposals",
        "Contribute to environmental compliance reviews",
        "Collaborate with architects and engineers on-site",
        "Perform quality checks on materials",
        "Prepare technical reports for stakeholders",
        "Participate in workshops on green construction"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are passionate about sustainability in construction.",
      list: [
        "Currently pursuing a degree in Civil Engineering or Architecture",
        "Basic knowledge of eco-friendly materials",
        "Proficient in AutoCAD and MS Excel",
        "Fluent in English; German proficiency is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Hamburg",
      "Sustainability",
      "Architecture"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Working Student – Sustainable Building Projects",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 82,
    postingTime: "2024-12-25T11:00",
    company: {
      name: "UrbanConstruct",
      logo: "UrbanConstruct.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Frankfurt"
    },
    description: {
      title: "Job Description",
      details: "UrbanConstruct is hiring an intern to assist with urban infrastructure projects. Gain experience in city planning and large-scale construction."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support planning and execution of urban infrastructure projects",
        "Conduct field assessments and site visits",
        "Assist in drafting blueprints and layouts",
        "Collaborate with surveyors and construction managers",
        "Prepare progress reports for project stakeholders",
        "Analyze project risks and propose mitigation strategies",
        "Maintain documentation for permits and inspections",
        "Contribute to design discussions for urban landscapes"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are interested in urban development and infrastructure.",
      list: [
        "Currently enrolled in Civil Engineering or Urban Planning",
        "Basic knowledge of GIS tools is advantageous",
        "Strong analytical and problem-solving skills",
        "Fluent in English; German is beneficial"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Frankfurt",
      "Urban Development",
      "Infrastructure"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 6,
    overview: {
      jobTitle: "Intern – Urban Infrastructure Projects",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Frankfurt",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 83,
    postingTime: "2024-12-25T13:00",
    company: {
      name: "Luxury Stays",
      logo: "LuxuryStays.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Leipzig"
    },
    description: {
      title: "Job Description",
      details: "Luxury Stays seeks a Working Student to support its guest relations team. Enhance customer experiences and ensure service excellence."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with check-ins and guest inquiries",
        "Coordinate room service requests",
        "Support promotional campaigns for holiday packages",
        "Monitor guest feedback and suggest improvements",
        "Maintain records of special guest requirements",
        "Prepare daily activity schedules for visitors",
        "Ensure seamless communication across departments",
        "Handle concierge tasks as needed"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You enjoy delivering exceptional guest services.",
      list: [
        "Currently pursuing a degree in Hospitality Management",
        "Strong interpersonal and communication skills",
        "Experience in a customer-facing role is a plus",
        "Proficient in English; additional languages are an advantage"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Leipzig",
      "Guest Relations",
      "Hospitality"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student – Guest Relations",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Leipzig",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 84,
    postingTime: "2024-12-25T15:00",
    company: {
      name: "Adventure Tours",
      logo: "AdventureTours.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Munich"
    },
    description: {
      title: "Job Description",
      details: "Adventure Tours is hiring an intern to assist with tour planning and execution. Contribute to creating unforgettable travel experiences."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Help create detailed tour itineraries",
        "Assist in handling customer bookings",
        "Provide support during tours and events",
        "Communicate with vendors for smooth operations",
        "Prepare promotional content for tours",
        "Maintain accurate records of tours and feedback",
        "Contribute ideas for new travel packages",
        "Provide administrative support for the travel team"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "You are passionate about travel and customer service.",
      list: [
        "Currently enrolled in Tourism or Hospitality Management",
        "Good communication and organization skills",
        "Experience with travel tools is beneficial",
        "Proficient in English; additional languages are a bonus"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Munich",
      "Tour Planning",
      "Travel"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 5,
    overview: {
      jobTitle: "Intern – Tour Planning",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Munich",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 84,
    postingTime: "2024-12-26T09:00",
    company: {
      name: "BuildWell Co.",
      logo: "BuildWell.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "BuildWell Co. is seeking a Working Student to assist in the preparation and execution of residential construction projects. Support site management and quality control efforts."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support site managers with daily activities",
        "Conduct inspections to ensure compliance with building codes",
        "Assist in preparing project schedules and progress reports",
        "Coordinate material deliveries and inventory",
        "Liaise with subcontractors to ensure timely completion",
        "Help manage on-site safety protocols",
        "Document construction progress with photos and notes",
        "Provide administrative support for project teams"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Ideal for students with a passion for construction management.",
      list: [
        "Currently enrolled in Civil Engineering or Construction Management",
        "Basic knowledge of construction processes and safety",
        "Proficient in MS Office tools, especially Excel",
        "Strong organizational and multitasking skills",
        "Fluent in English; German is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Berlin",
      "Residential",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 5,
    overview: {
      jobTitle: "Working Student – Residential Construction Projects",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 85,
    postingTime: "2024-12-26T11:00",
    company: {
      name: "Skyline Constructors",
      logo: "SkylineConstructors.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Stuttgart"
    },
    description: {
      title: "Job Description",
      details: "Skyline Constructors is looking for an intern to support its high-rise building projects. Gain hands-on experience in large-scale construction management."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with project planning and coordination",
        "Help monitor construction progress on-site",
        "Prepare blueprints and technical drawings under supervision",
        "Support risk assessment and safety measures",
        "Participate in team meetings to discuss project updates",
        "Organize and maintain project documentation",
        "Inspect construction materials for quality assurance",
        "Collaborate with engineers on technical issues"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "A hands-on role for aspiring civil engineers.",
      list: [
        "Currently studying Civil Engineering or a related field",
        "Familiarity with CAD tools and construction standards",
        "Ability to work effectively in a team setting",
        "Strong analytical and organizational skills",
        "Proficient in English; German is an asset"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Stuttgart",
      "High-rise",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 6,
    overview: {
      jobTitle: "Intern – High-Rise Construction Projects",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Stuttgart",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 86,
    postingTime: "2024-12-26T13:00",
    company: {
      name: "Elite Hotels",
      logo: "EliteHotels.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Munich"
    },
    description: {
      title: "Job Description",
      details: "Elite Hotels is hiring a Working Student to support its event management team. Play a role in planning and executing exclusive events."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in event planning and coordination",
        "Communicate with clients regarding event requirements",
        "Help prepare event schedules and budgets",
        "Ensure timely setup and teardown of events",
        "Monitor guest satisfaction during events",
        "Liaise with catering and technical teams",
        "Maintain event records and reports",
        "Promote upcoming events through social media"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Ideal for students passionate about event management.",
      list: [
        "Enrolled in Hospitality or Event Management programs",
        "Experience in organizing events is a plus",
        "Strong communication and problem-solving skills",
        "Proficient in English; other languages are an advantage"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Munich",
      "Event Management",
      "Hospitality"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student – Event Management",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Munich",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 87,
    postingTime: "2024-12-26T15:00",
    company: {
      name: "Explore Travel Agency",
      logo: "ExploreTravel.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Explore Travel Agency seeks an intern to assist in travel planning and customer engagement. Help clients plan unforgettable vacations."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Help plan custom travel itineraries for clients",
        "Respond to customer inquiries and bookings",
        "Coordinate with travel vendors and tour operators",
        "Promote travel packages via social media",
        "Assist in organizing group tours and activities",
        "Support customers with visa and travel requirements",
        "Maintain client records and feedback",
        "Provide on-site assistance during group tours"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Perfect for students passionate about travel.",
      list: [
        "Pursuing a degree in Tourism or Hospitality Management",
        "Customer service experience is a bonus",
        "Proficient in MS Office and booking platforms",
        "Fluent in English; knowledge of other languages is a plus"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Berlin",
      "Travel Planning",
      "Customer Service"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Intern – Travel Planning & Engagement",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 87,
    postingTime: "2024-12-27T08:00",
    company: {
      name: "BrickTech Ltd.",
      logo: "BrickTech.png"
    },
    summary: {
      category: "Construction",
      jobType: "Part-Time",
      location: "Frankfurt"
    },
    description: {
      title: "Job Description",
      details: "BrickTech Ltd. is hiring a Working Student to assist in infrastructure project planning and execution. Gain practical experience in large-scale urban development."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with infrastructure project designs",
        "Coordinate with city officials and consultants",
        "Support site inspections and quality checks",
        "Prepare technical reports and project schedules",
        "Track budget and resource allocations",
        "Help document project milestones",
        "Liaise with contractors and suppliers",
        "Promote safety and environmental standards"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "An opportunity to work on real-world infrastructure projects.",
      list: [
        "Currently pursuing Civil Engineering or Architecture",
        "Strong communication and teamwork skills",
        "Proficient in AutoCAD or similar software",
        "Experience in project management tools is a plus",
        "Fluent in English; knowledge of German preferred"
      ]
    },
    tags: [
      "Part-time",
      "Construction",
      "Infrastructure",
      "Frankfurt",
      "Engineering"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Working Student – Infrastructure Development",
      jobType: "Part-Time",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Frankfurt",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 88,
    postingTime: "2024-12-27T10:00",
    company: {
      name: "GreenBuild Solutions",
      logo: "GreenBuild.png"
    },
    summary: {
      category: "Construction",
      jobType: "Internship",
      location: "Düsseldorf"
    },
    description: {
      title: "Job Description",
      details: "GreenBuild Solutions seeks an intern to assist in sustainable construction projects. Help design eco-friendly buildings and monitor energy efficiency."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support eco-friendly building design processes",
        "Conduct research on sustainable construction materials",
        "Assist with energy audits and efficiency evaluations",
        "Help draft environmental impact assessments",
        "Collaborate with architects and environmental engineers",
        "Promote green certification processes",
        "Provide administrative support for project teams",
        "Organize workshops on sustainable practices"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Perfect for students passionate about green building.",
      list: [
        "Enrolled in Environmental Engineering, Architecture, or related fields",
        "Knowledge of sustainable design standards (e.g., LEED)",
        "Proficient in data analysis and reporting tools",
        "Strong organizational and research skills",
        "Fluent in English; German is an advantage"
      ]
    },
    tags: [
      "Internship",
      "Construction",
      "Düsseldorf",
      "Sustainability",
      "Architecture"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 6,
    overview: {
      jobTitle: "Intern – Sustainable Construction Projects",
      jobType: "Internship",
      category: "Construction",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Düsseldorf",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 89,
    postingTime: "2024-12-27T12:00",
    company: {
      name: "Luxury Stays",
      logo: "LuxuryStays.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Hamburg"
    },
    description: {
      title: "Job Description",
      details: "Luxury Stays is hiring a Working Student to provide concierge services for its guests. Deliver exceptional guest experiences in a luxury environment."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist guests with bookings and reservations",
        "Provide personalized travel recommendations",
        "Handle guest inquiries and requests promptly",
        "Coordinate transportation and other special services",
        "Support event planning for hotel events",
        "Assist with check-in and check-out processes",
        "Maintain updated records of guest preferences",
        "Promote hotel loyalty programs and services"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Ideal for students with a flair for customer service.",
      list: [
        "Currently enrolled in Hospitality or Tourism Management",
        "Strong interpersonal and problem-solving skills",
        "Fluent in English and another foreign language is a plus",
        "Ability to work in a fast-paced, luxury environment"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Hamburg",
      "Customer Service",
      "Hospitality"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Working Student – Guest Concierge Services",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 90,
    postingTime: "2024-12-27T14:00",
    company: {
      name: "Adventure Awaits Tours",
      logo: "AdventureAwaits.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Internship",
      location: "Munich"
    },
    description: {
      title: "Job Description",
      details: "Adventure Awaits Tours seeks an intern to manage guided tours and customer engagement. Inspire travelers to explore new destinations."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Help plan guided tour schedules",
        "Assist with group logistics and arrangements",
        "Engage with travelers to ensure satisfaction",
        "Promote tours through marketing channels",
        "Coordinate with local tour guides and agencies",
        "Help manage tour-related budgets and expenses",
        "Gather feedback and improve tour offerings",
        "Support on-site operations during tours"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Perfect for students with a passion for travel.",
      list: [
        "Currently studying Tourism or related fields",
        "Strong organizational and time management skills",
        "Proficient in social media marketing",
        "Fluent in English; additional languages are a bonus"
      ]
    },
    tags: [
      "Internship",
      "Hotels & Tourism",
      "Munich",
      "Travel Planning",
      "Customer Engagement"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 2,
    overview: {
      jobTitle: "Intern – Guided Tour Management",
      jobType: "Internship",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Munich",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 91,
    postingTime: "2024-12-27T16:00",
    company: {
      name: "Bright Minds Academy",
      logo: "BrightMinds.png"
    },
    summary: {
      category: "Education",
      jobType: "Part-Time",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Bright Minds Academy is looking for a Working Student to tutor high school students in mathematics and physics. Help shape young minds while improving your teaching skills."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Prepare lesson plans and teaching materials",
        "Provide one-on-one and group tutoring sessions",
        "Monitor student progress and adjust teaching methods",
        "Assist students with homework and exam preparation",
        "Collaborate with parents and teachers for progress updates",
        "Promote a positive and engaging learning environment",
        "Keep up-to-date with the school curriculum",
        "Organize educational activities and workshops"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Ideal for students passionate about education.",
      list: [
        "Enrolled in Education, Mathematics, or related fields",
        "Strong knowledge of mathematics and physics concepts",
        "Experience in tutoring or teaching is a plus",
        "Excellent communication and interpersonal skills",
        "Fluent in English; knowledge of German is beneficial"
      ]
    },
    tags: [
      "Part-time",
      "Education",
      "Tutoring",
      "Berlin",
      "Mathematics"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 5,
    overview: {
      jobTitle: "Working Student – High School Tutor (Math & Physics)",
      jobType: "Part-Time",
      category: "Education",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 92,
    postingTime: "2024-12-27T18:00",
    company: {
      name: "Language Connect",
      logo: "LanguageConnect.png"
    },
    summary: {
      category: "Education",
      jobType: "Internship",
      location: "Cologne"
    },
    description: {
      title: "Job Description",
      details: "Language Connect is seeking an intern to assist in designing online language courses. Gain hands-on experience in educational content creation."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Design engaging online language course materials",
        "Collaborate with instructors to create lesson plans",
        "Assist in testing and optimizing digital learning tools",
        "Provide support during virtual language classes",
        "Analyze student feedback for course improvements",
        "Help manage the online learning platform",
        "Create promotional content for new courses",
        "Monitor course participation and engagement rates"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Perfect for creative and tech-savvy individuals.",
      list: [
        "Currently studying Education, Linguistics, or related fields",
        "Experience with e-learning tools is a plus",
        "Strong organizational and technical skills",
        "Fluent in English; proficiency in other languages is beneficial"
      ]
    },
    tags: [
      "Internship",
      "Education",
      "E-learning",
      "Cologne",
      "Language Courses"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["hybrid"],
    applicantCount: 7,
    overview: {
      jobTitle: "Intern – Online Language Course Designer",
      jobType: "Internship",
      category: "Education",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Cologne",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 93,
    postingTime: "2024-12-27T20:00",
    company: {
      name: "WealthVision",
      logo: "WealthVision.png"
    },
    summary: {
      category: "Financial",
      jobType: "Part-Time",
      location: "Frankfurt"
    },
    description: {
      title: "Job Description",
      details: "WealthVision is looking for a Working Student to support its financial analysis team. Develop your financial modeling and reporting skills."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in financial data analysis and forecasting",
        "Develop financial models for investment scenarios",
        "Support preparation of client presentations",
        "Help track key financial metrics and reports",
        "Collaborate with team members on market research",
        "Monitor financial news and trends for insights",
        "Ensure data accuracy and compliance with regulations",
        "Provide administrative support for the finance team"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Great for finance enthusiasts looking to learn.",
      list: [
        "Enrolled in Finance, Economics, or related programs",
        "Strong analytical and quantitative skills",
        "Proficient in MS Excel and financial modeling tools",
        "Excellent communication and attention to detail",
        "Fluent in English; German is an advantage"
      ]
    },
    tags: [
      "Part-time",
      "Finance",
      "Frankfurt",
      "Financial Analysis",
      "Investment"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 6,
    overview: {
      jobTitle: "Working Student – Financial Analysis Support",
      jobType: "Part-Time",
      category: "Financial",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Frankfurt",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 94,
    postingTime: "2024-12-27T22:00",
    company: {
      name: "EuroBank Corp.",
      logo: "EuroBank.png"
    },
    summary: {
      category: "Financial",
      jobType: "Internship",
      location: "Munich"
    },
    description: {
      title: "Job Description",
      details: "EuroBank Corp. seeks an intern for its wealth management team. Gain insights into client portfolio management and market analysis."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in managing client portfolios",
        "Support market and risk analysis projects",
        "Prepare reports on investment strategies",
        "Help create marketing materials for clients",
        "Provide administrative support for the team",
        "Conduct research on financial products",
        "Ensure compliance with regulatory requirements",
        "Analyze trends for potential opportunities"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Ideal for aspiring wealth management professionals.",
      list: [
        "Currently studying Finance, Economics, or related fields",
        "Strong interest in investment strategies",
        "Proficient in financial software and tools",
        "Strong organizational and research skills",
        "Fluent in English; German preferred"
      ]
    },
    tags: [
      "Internship",
      "Finance",
      "Munich",
      "Wealth Management",
      "Market Analysis"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["hybrid"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Wealth Management Support",
      jobType: "Internship",
      category: "Financial",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Munich",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 95,
    postingTime: "2024-12-28T08:00",
    company: {
      name: "Deutsche Bahn",
      logo: "DeutscheBahn.png"
    },
    summary: {
      category: "Transport",
      jobType: "Part-Time",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Deutsche Bahn is hiring a Working Student to support their logistics team in managing rail freight operations and optimizing scheduling processes."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Monitor and optimize rail freight schedules",
        "Assist in managing customer bookings and updates",
        "Analyze logistics data to improve efficiency",
        "Support the team in coordinating freight operations",
        "Help troubleshoot operational issues",
        "Prepare performance reports for management",
        "Collaborate with other departments to streamline operations",
        "Participate in cross-functional logistics projects"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "For students with a passion for logistics.",
      list: [
        "Enrolled in Logistics, Business Administration, or related programs",
        "Strong analytical and problem-solving skills",
        "Knowledge of transportation systems is a plus",
        "Excellent communication and teamwork skills",
        "Fluent in German and English"
      ]
    },
    tags: [
      "Part-time",
      "Transport",
      "Logistics",
      "Berlin",
      "Rail Freight"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: true,
        proficiency: "Fluent"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 6,
    overview: {
      jobTitle: "Working Student – Rail Freight Logistics Support",
      jobType: "Part-Time",
      category: "Transport",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 96,
    postingTime: "2024-12-28T10:00",
    company: {
      name: "Lufthansa Group",
      logo: "Lufthansa.png"
    },
    summary: {
      category: "Transport",
      jobType: "Internship",
      location: "Frankfurt"
    },
    description: {
      title: "Job Description",
      details: "Lufthansa Group is seeking an intern to assist in managing airline route planning and performance analytics."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Analyze airline route performance metrics",
        "Support optimization of flight schedules",
        "Assist in strategic planning for new routes",
        "Collaborate on cost and revenue analysis",
        "Prepare presentations for leadership teams",
        "Conduct market research on airline competitors",
        "Provide administrative support to the route planning team",
        "Identify opportunities to improve operational efficiency"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Ideal for students interested in the aviation industry.",
      list: [
        "Currently studying Aviation Management, Economics, or related fields",
        "Strong analytical and data interpretation skills",
        "Proficient in MS Excel and data visualization tools",
        "Good organizational and multitasking abilities",
        "Fluent in English; German is advantageous"
      ]
    },
    tags: [
      "Internship",
      "Transport",
      "Aviation",
      "Frankfurt",
      "Route Planning"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Intern – Airline Route Planning and Analytics",
      jobType: "Internship",
      category: "Transport",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Frankfurt",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 97,
    postingTime: "2024-12-28T12:00",
    company: {
      name: "FlixBus",
      logo: "FlixBus.png"
    },
    summary: {
      category: "Transport",
      jobType: "Part-Time",
      location: "Munich"
    },
    description: {
      title: "Job Description",
      details: "FlixBus is hiring a Working Student to assist with network planning and customer demand analysis for their intercity bus services."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Analyze customer demand trends for route optimization",
        "Support network planning for new routes",
        "Collaborate with the operations team to improve services",
        "Assist in preparing performance reports",
        "Provide data for marketing campaigns",
        "Monitor competitor activities in the market",
        "Assist in capacity planning during peak seasons",
        "Participate in team meetings and brainstorming sessions"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Great for students passionate about public transport.",
      list: [
        "Enrolled in Transport Management, Data Analysis, or similar fields",
        "Strong data analysis and critical thinking skills",
        "Familiarity with transportation systems is an advantage",
        "Fluent in English; German is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Transport",
      "Munich",
      "Public Transport",
      "Network Planning"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Intermediate"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["hybrid"],
    applicantCount: 5,
    overview: {
      jobTitle: "Working Student – Network Planning and Demand Analysis",
      jobType: "Part-Time",
      category: "Transport",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Munich",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 98,
    postingTime: "2024-12-28T14:00",
    company: {
      name: "CargoLink Logistics",
      logo: "CargoLink.png"
    },
    summary: {
      category: "Transport",
      jobType: "Internship",
      location: "Hamburg"
    },
    description: {
      title: "Job Description",
      details: "CargoLink Logistics is looking for an intern to support the optimization of their supply chain processes and warehouse operations."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Support supply chain optimization projects",
        "Analyze warehouse workflows for efficiency improvements",
        "Assist in preparing logistics reports",
        "Collaborate with the warehouse team for daily operations",
        "Monitor delivery schedules and inventory levels",
        "Help implement new logistics software",
        "Identify cost-saving opportunities in supply chains",
        "Prepare presentations for internal stakeholders"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Perfect for students with a logistics mindset.",
      list: [
        "Currently studying Logistics, Industrial Engineering, or related fields",
        "Strong interest in supply chain and warehouse management",
        "Proficient in MS Office and logistics software",
        "Excellent problem-solving and organizational skills",
        "Fluent in English; knowledge of German is a bonus"
      ]
    },
    tags: [
      "Internship",
      "Transport",
      "Hamburg",
      "Supply Chain",
      "Logistics"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: false,
        proficiency: "Basic"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 3,
    overview: {
      jobTitle: "Intern – Supply Chain and Warehouse Optimization",
      jobType: "Internship",
      category: "Transport",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Hamburg",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
  {
    id: 99,
    postingTime: "2024-12-30T09:00",
    company: {
      name: "Hilton Hotels",
      logo: "Hilton.png"
    },
    summary: {
      category: "Hotels & Tourism",
      jobType: "Part-Time",
      location: "Berlin"
    },
    description: {
      title: "Job Description",
      details: "Join the Hilton team as a Working Student in Guest Services, supporting daily hotel operations and ensuring an outstanding guest experience."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist in managing guest check-ins and check-outs",
        "Help resolve guest complaints and concerns",
        "Support the front desk team in daily operations",
        "Ensure that all guest requests are handled in a timely manner",
        "Collaborate with other departments to improve guest services",
        "Handle reservations and booking inquiries",
        "Participate in hotel events and promotional activities",
        "Provide local recommendations and information to guests"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Perfect for students with a passion for hospitality.",
      list: [
        "Currently studying Hospitality Management, Tourism, or related fields",
        "Excellent communication and interpersonal skills",
        "Fluent in English and German",
        "Friendly and customer-oriented attitude",
        "Previous experience in the hotel industry is a plus"
      ]
    },
    tags: [
      "Part-time",
      "Hotels & Tourism",
      "Berlin",
      "Customer Service",
      "Hospitality"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: true,
        proficiency: "Fluent"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 2,
    overview: {
      jobTitle: "Working Student – Guest Services Support",
      jobType: "Part-Time",
      category: "Hotels & Tourism",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Berlin",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    }
  },
  {
    id: 100,
    postingTime: "2024-12-30T12:00",
    company: {
      name: "Accenture",
      logo: "Accenture.png"
    },
    summary: {
      category: "Financial",
      jobType: "Internship",
      location: "Frankfurt"
    },
    description: {
      title: "Job Description",
      details: "Accenture is looking for a finance intern to assist in financial modeling, data analysis, and creating client reports in the financial services sector."
    },
    responsibilities: {
      title: "Key Responsibilities",
      details: "What you’ll do",
      list: [
        "Assist with financial modeling and budgeting tasks",
        "Analyze financial data and generate reports for clients",
        "Support the team in preparing presentations and documentation",
        "Research industry trends and market data",
        "Collaborate with consultants on financial strategy",
        "Participate in client meetings and provide input",
        "Help improve financial processes and workflows",
        "Ensure accuracy of financial information and reports"
      ]
    },
    requirements: {
      title: "Professional Requirements",
      details: "Great for students interested in finance and consulting.",
      list: [
        "Currently studying Finance, Business Administration, Economics, or related fields",
        "Strong Excel skills and experience with financial analysis",
        "Excellent communication and analytical skills",
        "Fluent in English and German",
        "Interest in financial markets and consulting"
      ]
    },
    tags: [
      "Internship",
      "Financial",
      "Frankfurt",
      "Finance",
      "Consulting"
    ],
    languages: {
      English: {
        required: true,
        proficiency: "Fluent"
      },
      German: {
        required: true,
        proficiency: "Fluent"
      }
    },
    experienceLevel: ["Entry"],
    educationLevel: ["Bachelor"],
    locationType: ["onsite"],
    applicantCount: 4,
    overview: {
      jobTitle: "Finance Intern – Financial Services",
      jobType: "Internship",
      category: "Financial",
      experience: "Entry level",
      degree: "Bachelor",
      gender: "All",
      location: "Frankfurt",
      mapUrl: "https://www.google.com/maps/embed?pb=..."
    },
  },
];

//TODO: uncomment the condition when job database is done
//if (localStorage.getItem('jobDatabase') === null) {
localStorage.setItem("jobDatabase", JSON.stringify(jobDatabase));
//}
