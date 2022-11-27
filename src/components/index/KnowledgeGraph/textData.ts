const data = {
  nodes: [
    {
      id: "Python",
      group: 1,
    },
    {
      id: "TypeScript",
      group: 1,
    },
    {
      id: "Rust",
      group: 1,
    },
    {
      id: "SQL",
      group: 1,
    },
    {
      id: "PyTorch",
      group: 1,
    },
    {
      id: "scikit-learn",
      group: 1,
    },
    {
      id: "NumPy",
      group: 1,
    },
    {
      id: "SciPy",
      group: 1,
    },
    {
      id: "Matplotlib",
      group: 1,
    },
    {
      id: "Elasticsearch",
      group: 1,
    },
    {
      id: "Computer Science",
      group: 2,
    },
    {
      id: "Signal Processing",
      group: 2,
    },
    {
      id: "Computer Vision",
      group: 3,
    },
    {
      id: "AWS",
      group: 2,
    },
    {
      id: "Linux",
      group: 2,
    },
    {
      id: "Django REST Framework",
      group: 2,
    },
    {
      id: "Docker",
      group: 3,
    },
    {
      id: "Django",
      group: 3,
    },
    {
      id: "Next.js",
      group: 3,
    },
    {
      id: "React.js",
      group: 3,
    },
    {
      id: "JavaScript",
      group: 3,
    },
    {
      id: "Pandas",
      group: 3,
    },
    {
      id: "Speech Recognition",
      group: 3,
    },
    {
      id: "Natural Language Processing",
      group: 3,
    },
    {
      id: "OCR",
      group: 4,
    },
    {
      id: "Vim",
      group: 4,
    },
    {
      id: "FastAPI",
      group: 5,
    },
    {
      id: "Kubernetes",
      group: 4,
    },
    {
      id: "OpenAPI",
      group: 0,
    },
    {
      id: "HuggingFace",
      group: 2,
    },
    {
      id: "Programming Language",
      group: 3,
    },
    {
      id: "Tool",
      group: 2,
    },
    {
      id: "Category",
      group: 2,
    },
    {
      id: "OS",
      group: 2,
    },
    {
      id: "Windows",
      group: 2,
    },
    {
      id: "macOS",
      group: 2,
    },
    {
      id: "Project",
      group: 2,
    },
    {
      id: "Github",
      group: 2,
    },
    {
      id: "Excellent",
      group: 2,
    },
    {
      id: "Very Good",
      group: 4,
    },
    {
      id: "Good",
      group: 6,
    },
    {
      id: "Average",
      group: 4,
    },
    {
      id: "Not bad",
      group: 4,
    },
    {
      id: "Blog",
      group: 5,
    },
    {
      id: "Company",
      group: 0,
    },
    {
      id: "FRAIM",
      group: 0,
    },
    {
      id: "Pixie Dust Technologies",
      group: 7,
    },
    {
      id: "Mme.Burgon",
      group: 7,
    },
    {
      id: "Gavroche",
      group: 8,
    },
    {
      id: "Gillenormand",
      group: 5,
    },
    {
      id: "Mlle.Gillenormand",
      group: 5,
    },
    {
      id: "Mme.Very Good",
      group: 5,
    },
    {
      id: "Mlle.Vaubois",
      group: 5,
    },
    {
      id: "Lt.Gillenormand",
      group: 5,
    },
    {
      id: "Marius",
      group: 8,
    },
    {
      id: "BaronessT",
      group: 5,
    },
    {
      id: "Mabeuf",
      group: 8,
    },
    {
      id: "Enjolras",
      group: 8,
    },
    {
      id: "Combeferre",
      group: 8,
    },
    {
      id: "Prouvaire",
      group: 8,
    },
    {
      id: "Feuilly",
      group: 8,
    },
    {
      id: "Courfeyrac",
      group: 8,
    },
    {
      id: "Bahorel",
      group: 8,
    },
    {
      id: "Bossuet",
      group: 8,
    },
    {
      id: "Joly",
      group: 8,
    },
    {
      id: "Grantaire",
      group: 8,
    },
    {
      id: "MotherPlutarch",
      group: 9,
    },
    {
      id: "Gueulemer",
      group: 4,
    },
    {
      id: "Babet",
      group: 4,
    },
    {
      id: "Claquesous",
      group: 4,
    },
    {
      id: "Montparnasse",
      group: 4,
    },
    {
      id: "Toussaint",
      group: 5,
    },
    {
      id: "Child1",
      group: 10,
    },
    {
      id: "Child2",
      group: 10,
    },
    {
      id: "Brujon",
      group: 4,
    },
    {
      id: "Mme.Hucheloup",
      group: 8,
    },
  ],
  links: [
    {
      source: "Python",
      target: "PyTorch",
      value: 1,
    },
    {
      source: "Python",
      target: "scikit-learn",
      value: 8,
    },
    {
      source: "Python",
      target: "NumPy",
      value: 10,
    },
    {
      source: "Python",
      target: "SciPy",
      value: 6,
    },
    {
      source: "TypeScript",
      target: "Python",
      value: 1,
    },
    {
      source: "Rust",
      target: "Python",
      value: 2,
    },
    {
      source: "Elasticsearch",
      target: "Python",
      value: 1,
    },
    {
      source: "Signal Processing",
      target: "Computer Science",
      value: 1,
    },
    {
      source: "Signal Processing",
      target: "SQL",
      value: 3,
    },
    {
      source: "Signal Processing",
      target: "Python",
      value: 5,
    },
    {
      source: "Computer Vision",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "AWS",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Linux",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Django REST Framework",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Django",
      target: "Docker",
      value: 4,
    },
    {
      source: "Next.js",
      target: "Docker",
      value: 4,
    },
    {
      source: "Next.js",
      target: "Django",
      value: 4,
    },
    {
      source: "React.js",
      target: "Docker",
      value: 4,
    },
    {
      source: "React.js",
      target: "Django",
      value: 4,
    },
    {
      source: "React.js",
      target: "Next.js",
      value: 4,
    },
    {
      source: "JavaScript",
      target: "Docker",
      value: 3,
    },
    {
      source: "JavaScript",
      target: "Django",
      value: 3,
    },
    {
      source: "JavaScript",
      target: "Next.js",
      value: 3,
    },
    {
      source: "JavaScript",
      target: "React.js",
      value: 4,
    },
    {
      source: "Pandas",
      target: "Docker",
      value: 3,
    },
    {
      source: "Pandas",
      target: "Django",
      value: 3,
    },
    {
      source: "Pandas",
      target: "Next.js",
      value: 3,
    },
    {
      source: "Pandas",
      target: "React.js",
      value: 3,
    },
    {
      source: "Pandas",
      target: "JavaScript",
      value: 5,
    },
    {
      source: "Speech Recognition",
      target: "Docker",
      value: 3,
    },
    {
      source: "Speech Recognition",
      target: "Django",
      value: 3,
    },
    {
      source: "Speech Recognition",
      target: "Next.js",
      value: 3,
    },
    {
      source: "Speech Recognition",
      target: "React.js",
      value: 3,
    },
    {
      source: "Speech Recognition",
      target: "JavaScript",
      value: 4,
    },
    {
      source: "Speech Recognition",
      target: "Pandas",
      value: 4,
    },
    {
      source: "Natural Language Processing",
      target: "Docker",
      value: 3,
    },
    {
      source: "Natural Language Processing",
      target: "Django",
      value: 3,
    },
    {
      source: "Natural Language Processing",
      target: "Next.js",
      value: 3,
    },
    {
      source: "Natural Language Processing",
      target: "React.js",
      value: 3,
    },
    {
      source: "Natural Language Processing",
      target: "JavaScript",
      value: 4,
    },
    {
      source: "Natural Language Processing",
      target: "Pandas",
      value: 4,
    },
    {
      source: "Natural Language Processing",
      target: "Speech Recognition",
      value: 4,
    },
    {
      source: "Natural Language Processing",
      target: "Computer Vision",
      value: 2,
    },
    {
      source: "Natural Language Processing",
      target: "Signal Processing",
      value: 9,
    },
    {
      source: "OCR",
      target: "Natural Language Processing",
      value: 2,
    },
    {
      source: "OCR",
      target: "Signal Processing",
      value: 7,
    },
    {
      source: "Vim",
      target: "OCR",
      value: 13,
    },
    {
      source: "Vim",
      target: "Natural Language Processing",
      value: 1,
    },
    {
      source: "Vim",
      target: "Signal Processing",
      value: 12,
    },
    {
      source: "FastAPI",
      target: "OCR",
      value: 4,
    },
    {
      source: "FastAPI",
      target: "Signal Processing",
      value: 31,
    },
    {
      source: "FastAPI",
      target: "Docker",
      value: 1,
    },
    {
      source: "FastAPI",
      target: "Vim",
      value: 1,
    },
    {
      source: "Kubernetes",
      target: "Signal Processing",
      value: 17,
    },
    {
      source: "Kubernetes",
      target: "Natural Language Processing",
      value: 5,
    },
    {
      source: "Kubernetes",
      target: "Vim",
      value: 5,
    },
    {
      source: "Kubernetes",
      target: "OCR",
      value: 1,
    },
    {
      source: "Kubernetes",
      target: "FastAPI",
      value: 1,
    },
    {
      source: "OpenAPI",
      target: "Signal Processing",
      value: 8,
    },
    {
      source: "OpenAPI",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "HuggingFace",
      target: "Natural Language Processing",
      value: 1,
    },
    {
      source: "HuggingFace",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "HuggingFace",
      target: "Signal Processing",
      value: 2,
    },
    {
      source: "Programming Language",
      target: "Natural Language Processing",
      value: 1,
    },
    {
      source: "Tool",
      target: "Signal Processing",
      value: 3,
    },
    {
      source: "Tool",
      target: "Natural Language Processing",
      value: 2,
    },
    {
      source: "Tool",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "Category",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "OS",
      target: "Signal Processing",
      value: 2,
    },
    {
      source: "OS",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "Windows",
      target: "Signal Processing",
      value: 3,
    },
    {
      source: "Windows",
      target: "HuggingFace",
      value: 2,
    },
    {
      source: "macOS",
      target: "Signal Processing",
      value: 3,
    },
    {
      source: "macOS",
      target: "Windows",
      value: 3,
    },
    {
      source: "macOS",
      target: "HuggingFace",
      value: 2,
    },
    {
      source: "Project",
      target: "Windows",
      value: 2,
    },
    {
      source: "Project",
      target: "macOS",
      value: 2,
    },
    {
      source: "Project",
      target: "Signal Processing",
      value: 2,
    },
    {
      source: "Project",
      target: "HuggingFace",
      value: 1,
    },
    {
      source: "Github",
      target: "Windows",
      value: 2,
    },
    {
      source: "Github",
      target: "macOS",
      value: 2,
    },
    {
      source: "Github",
      target: "Project",
      value: 2,
    },
    {
      source: "Github",
      target: "Signal Processing",
      value: 2,
    },
    {
      source: "Github",
      target: "HuggingFace",
      value: 1,
    },
    {
      source: "Excellent",
      target: "Windows",
      value: 2,
    },
    {
      source: "Excellent",
      target: "macOS",
      value: 2,
    },
    {
      source: "Excellent",
      target: "Project",
      value: 2,
    },
    {
      source: "Excellent",
      target: "Github",
      value: 2,
    },
    {
      source: "Excellent",
      target: "Signal Processing",
      value: 2,
    },
    {
      source: "Excellent",
      target: "HuggingFace",
      value: 1,
    },
    {
      source: "Very Good",
      target: "Vim",
      value: 1,
    },
    {
      source: "Good",
      target: "Vim",
      value: 1,
    },
    {
      source: "Average",
      target: "OCR",
      value: 2,
    },
    {
      source: "Average",
      target: "Vim",
      value: 3,
    },
    {
      source: "Not bad",
      target: "Average",
      value: 2,
    },
    {
      source: "Not bad",
      target: "Vim",
      value: 2,
    },
    {
      source: "Not bad",
      target: "OCR",
      value: 1,
    },
    {
      source: "Blog",
      target: "Signal Processing",
      value: 3,
    },
    {
      source: "Blog",
      target: "FastAPI",
      value: 1,
    },
    {
      source: "Blog",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "Company",
      target: "OpenAPI",
      value: 3,
    },
    {
      source: "Company",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "FRAIM",
      target: "OpenAPI",
      value: 2,
    },
    {
      source: "Mme.Burgon",
      target: "Pixie Dust Technologies",
      value: 1,
    },
    {
      source: "Gavroche",
      target: "Mme.Burgon",
      value: 2,
    },
    {
      source: "Gavroche",
      target: "Vim",
      value: 1,
    },
    {
      source: "Gavroche",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "Gavroche",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Gillenormand",
      target: "FastAPI",
      value: 3,
    },
    {
      source: "Gillenormand",
      target: "Signal Processing",
      value: 2,
    },
    {
      source: "Mlle.Gillenormand",
      target: "Gillenormand",
      value: 9,
    },
    {
      source: "Mlle.Gillenormand",
      target: "FastAPI",
      value: 2,
    },
    {
      source: "Mlle.Gillenormand",
      target: "Signal Processing",
      value: 2,
    },
    {
      source: "Mme.Very Good",
      target: "Mlle.Gillenormand",
      value: 1,
    },
    {
      source: "Mme.Very Good",
      target: "Very Good",
      value: 1,
    },
    {
      source: "Mlle.Vaubois",
      target: "Mlle.Gillenormand",
      value: 1,
    },
    {
      source: "Lt.Gillenormand",
      target: "Mlle.Gillenormand",
      value: 2,
    },
    {
      source: "Lt.Gillenormand",
      target: "Gillenormand",
      value: 1,
    },
    {
      source: "Lt.Gillenormand",
      target: "FastAPI",
      value: 1,
    },
    {
      source: "Marius",
      target: "Mlle.Gillenormand",
      value: 6,
    },
    {
      source: "Marius",
      target: "Gillenormand",
      value: 12,
    },
    {
      source: "Marius",
      target: "Very Good",
      value: 1,
    },
    {
      source: "Marius",
      target: "Lt.Gillenormand",
      value: 1,
    },
    {
      source: "Marius",
      target: "FastAPI",
      value: 21,
    },
    {
      source: "Marius",
      target: "Signal Processing",
      value: 19,
    },
    {
      source: "Marius",
      target: "Docker",
      value: 1,
    },
    {
      source: "Marius",
      target: "Vim",
      value: 2,
    },
    {
      source: "Marius",
      target: "Average",
      value: 5,
    },
    {
      source: "Marius",
      target: "Gavroche",
      value: 4,
    },
    {
      source: "BaronessT",
      target: "Gillenormand",
      value: 1,
    },
    {
      source: "BaronessT",
      target: "Marius",
      value: 1,
    },
    {
      source: "Mabeuf",
      target: "Marius",
      value: 1,
    },
    {
      source: "Mabeuf",
      target: "Average",
      value: 1,
    },
    {
      source: "Mabeuf",
      target: "Gavroche",
      value: 1,
    },
    {
      source: "Enjolras",
      target: "Marius",
      value: 7,
    },
    {
      source: "Enjolras",
      target: "Gavroche",
      value: 7,
    },
    {
      source: "Enjolras",
      target: "Kubernetes",
      value: 6,
    },
    {
      source: "Enjolras",
      target: "Mabeuf",
      value: 1,
    },
    {
      source: "Enjolras",
      target: "Signal Processing",
      value: 4,
    },
    {
      source: "Combeferre",
      target: "Enjolras",
      value: 15,
    },
    {
      source: "Combeferre",
      target: "Marius",
      value: 5,
    },
    {
      source: "Combeferre",
      target: "Gavroche",
      value: 6,
    },
    {
      source: "Combeferre",
      target: "Mabeuf",
      value: 2,
    },
    {
      source: "Prouvaire",
      target: "Gavroche",
      value: 1,
    },
    {
      source: "Prouvaire",
      target: "Enjolras",
      value: 4,
    },
    {
      source: "Prouvaire",
      target: "Combeferre",
      value: 2,
    },
    {
      source: "Feuilly",
      target: "Gavroche",
      value: 2,
    },
    {
      source: "Feuilly",
      target: "Enjolras",
      value: 6,
    },
    {
      source: "Feuilly",
      target: "Prouvaire",
      value: 2,
    },
    {
      source: "Feuilly",
      target: "Combeferre",
      value: 5,
    },
    {
      source: "Feuilly",
      target: "Mabeuf",
      value: 1,
    },
    {
      source: "Feuilly",
      target: "Marius",
      value: 1,
    },
    {
      source: "Courfeyrac",
      target: "Marius",
      value: 9,
    },
    {
      source: "Courfeyrac",
      target: "Enjolras",
      value: 17,
    },
    {
      source: "Courfeyrac",
      target: "Combeferre",
      value: 13,
    },
    {
      source: "Courfeyrac",
      target: "Gavroche",
      value: 7,
    },
    {
      source: "Courfeyrac",
      target: "Mabeuf",
      value: 2,
    },
    {
      source: "Courfeyrac",
      target: "Average",
      value: 1,
    },
    {
      source: "Courfeyrac",
      target: "Feuilly",
      value: 6,
    },
    {
      source: "Courfeyrac",
      target: "Prouvaire",
      value: 3,
    },
    {
      source: "Bahorel",
      target: "Combeferre",
      value: 5,
    },
    {
      source: "Bahorel",
      target: "Gavroche",
      value: 5,
    },
    {
      source: "Bahorel",
      target: "Courfeyrac",
      value: 6,
    },
    {
      source: "Bahorel",
      target: "Mabeuf",
      value: 2,
    },
    {
      source: "Bahorel",
      target: "Enjolras",
      value: 4,
    },
    {
      source: "Bahorel",
      target: "Feuilly",
      value: 3,
    },
    {
      source: "Bahorel",
      target: "Prouvaire",
      value: 2,
    },
    {
      source: "Bahorel",
      target: "Marius",
      value: 1,
    },
    {
      source: "Bossuet",
      target: "Marius",
      value: 5,
    },
    {
      source: "Bossuet",
      target: "Courfeyrac",
      value: 12,
    },
    {
      source: "Bossuet",
      target: "Gavroche",
      value: 5,
    },
    {
      source: "Bossuet",
      target: "Bahorel",
      value: 4,
    },
    {
      source: "Bossuet",
      target: "Enjolras",
      value: 10,
    },
    {
      source: "Bossuet",
      target: "Feuilly",
      value: 6,
    },
    {
      source: "Bossuet",
      target: "Prouvaire",
      value: 2,
    },
    {
      source: "Bossuet",
      target: "Combeferre",
      value: 9,
    },
    {
      source: "Bossuet",
      target: "Mabeuf",
      value: 1,
    },
    {
      source: "Bossuet",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Joly",
      target: "Bahorel",
      value: 5,
    },
    {
      source: "Joly",
      target: "Bossuet",
      value: 7,
    },
    {
      source: "Joly",
      target: "Gavroche",
      value: 3,
    },
    {
      source: "Joly",
      target: "Courfeyrac",
      value: 5,
    },
    {
      source: "Joly",
      target: "Enjolras",
      value: 5,
    },
    {
      source: "Joly",
      target: "Feuilly",
      value: 5,
    },
    {
      source: "Joly",
      target: "Prouvaire",
      value: 2,
    },
    {
      source: "Joly",
      target: "Combeferre",
      value: 5,
    },
    {
      source: "Joly",
      target: "Mabeuf",
      value: 1,
    },
    {
      source: "Joly",
      target: "Marius",
      value: 2,
    },
    {
      source: "Grantaire",
      target: "Bossuet",
      value: 3,
    },
    {
      source: "Grantaire",
      target: "Enjolras",
      value: 3,
    },
    {
      source: "Grantaire",
      target: "Combeferre",
      value: 1,
    },
    {
      source: "Grantaire",
      target: "Courfeyrac",
      value: 2,
    },
    {
      source: "Grantaire",
      target: "Joly",
      value: 2,
    },
    {
      source: "Grantaire",
      target: "Gavroche",
      value: 1,
    },
    {
      source: "Grantaire",
      target: "Bahorel",
      value: 1,
    },
    {
      source: "Grantaire",
      target: "Feuilly",
      value: 1,
    },
    {
      source: "Grantaire",
      target: "Prouvaire",
      value: 1,
    },
    {
      source: "MotherPlutarch",
      target: "Mabeuf",
      value: 3,
    },
    {
      source: "Gueulemer",
      target: "Vim",
      value: 5,
    },
    {
      source: "Gueulemer",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Gueulemer",
      target: "OCR",
      value: 1,
    },
    {
      source: "Gueulemer",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "Gueulemer",
      target: "Gavroche",
      value: 1,
    },
    {
      source: "Gueulemer",
      target: "Average",
      value: 1,
    },
    {
      source: "Babet",
      target: "Vim",
      value: 6,
    },
    {
      source: "Babet",
      target: "Gueulemer",
      value: 6,
    },
    {
      source: "Babet",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Babet",
      target: "OCR",
      value: 1,
    },
    {
      source: "Babet",
      target: "Kubernetes",
      value: 2,
    },
    {
      source: "Babet",
      target: "Gavroche",
      value: 1,
    },
    {
      source: "Babet",
      target: "Average",
      value: 1,
    },
    {
      source: "Claquesous",
      target: "Vim",
      value: 4,
    },
    {
      source: "Claquesous",
      target: "Babet",
      value: 4,
    },
    {
      source: "Claquesous",
      target: "Gueulemer",
      value: 4,
    },
    {
      source: "Claquesous",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Claquesous",
      target: "OCR",
      value: 1,
    },
    {
      source: "Claquesous",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "Claquesous",
      target: "Average",
      value: 1,
    },
    {
      source: "Claquesous",
      target: "Enjolras",
      value: 1,
    },
    {
      source: "Montparnasse",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "Montparnasse",
      target: "Babet",
      value: 2,
    },
    {
      source: "Montparnasse",
      target: "Gueulemer",
      value: 2,
    },
    {
      source: "Montparnasse",
      target: "Claquesous",
      value: 2,
    },
    {
      source: "Montparnasse",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Montparnasse",
      target: "Gavroche",
      value: 1,
    },
    {
      source: "Montparnasse",
      target: "Average",
      value: 1,
    },
    {
      source: "Montparnasse",
      target: "Vim",
      value: 1,
    },
    {
      source: "Toussaint",
      target: "FastAPI",
      value: 2,
    },
    {
      source: "Toussaint",
      target: "Kubernetes",
      value: 1,
    },
    {
      source: "Toussaint",
      target: "Signal Processing",
      value: 1,
    },
    {
      source: "Child1",
      target: "Gavroche",
      value: 2,
    },
    {
      source: "Child2",
      target: "Gavroche",
      value: 2,
    },
    {
      source: "Child2",
      target: "Child1",
      value: 3,
    },
    {
      source: "Matplotlib",
      target: "Babet",
      value: 3,
    },
    {
      source: "Brujon",
      target: "Gueulemer",
      value: 3,
    },
    {
      source: "Brujon",
      target: "Vim",
      value: 3,
    },
    {
      source: "Brujon",
      target: "Gavroche",
      value: 1,
    },
    {
      source: "Brujon",
      target: "Average",
      value: 1,
    },
    {
      source: "Brujon",
      target: "Claquesous",
      value: 1,
    },
    {
      source: "Brujon",
      target: "Montparnasse",
      value: 1,
    },
    {
      source: "Mme.Hucheloup",
      target: "Bossuet",
      value: 1,
    },
    {
      source: "Mme.Hucheloup",
      target: "Joly",
      value: 1,
    },
    {
      source: "Mme.Hucheloup",
      target: "Grantaire",
      value: 1,
    },
    {
      source: "Programming Language",
      target: "Rust",
      value: 1,
    },
    {
      source: "Programming Language",
      target: "TypeScript",
      value: 1,
    },
    {
      source: "Programming Language",
      target: "SQL",
      value: 1,
    },
    {
      source: "Programming Language",
      target: "Python",
      value: 1,
    },
  ],
};

export default data;
