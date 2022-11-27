export type Node = {
  name: string;
  relations: (Node | string)[];
};

export type Data = (Node | string)[];

const data: Data = [
  {
    name: "Programming Language",
    relations: [
      {
        name: "Python",
        relations: [
          "PyTorch",
          "NumPy",
          "SciPy",
          "Matplotlib",
          "scikit-learn",
          "HuggingFace",
          "gensim",
          "FastAPI",
          "Django",
          "Django REST Framework",
          "pytest",
          "Ray",
          "boto3",
          "elasticsearch-py",
          "Pandas",
          "Tensorflow",
          "Scrapy",
          "Excellent",
        ],
      },
      {
        name: "Rust",
        relations: [],
      },
      {
        name: "TypeScript",
        relations: [
          {
            name: "Next.js",
            relations: [
              "Excellent",
              "SWR",
              "React Hook Form",
              "aspida",
              "pathpida",
              "Material UI",
              "React Query",
              "Jest",
              "Storybook",
              "Redux",
              "redux/toolkit",
              "msw",
              "zod",
              "Recharts",
            ],
          },
          {
            name: "React",
            relations: [
              "Excellent",
              "SWR",
              "React Hook Form",
              "aspida",
              "pathpida",
              "Material UI",
              "React Query",
              "Jest",
              "Storybook",
              "Redux",
              "redux/toolkit",
              "msw",
              "zod",
              "Recharts",
            ],
          },
          "SWR",
          "React Hook Form",
          "aspida",
          "pathpida",
          "Material UI",
          "React Query",
          "Jest",
          "Storybook",
          "Redux",
          "redux/toolkit",
          "msw",
          "zod",
          "Recharts",
        ],
      },
      {
        name: "SQL",
        relations: [],
      },
    ],
  },
  {
    name: "Tool",
    relations: [
      "Elasticsearch",
      "AWS",
      "Lambda",
      "EKS",
      "ECR",
      "ECS",
      "EC2",
      "DynamoDB",
      "Sagemaker",
      "RDS",
      "S3",
      "CloudFront",
      "Kubernetes",
    ],
  },
  {
    name: "Category",
    relations: [
      {
        name: "Signal Processing",
        relations: ["9DW Corp"],
      },
      {
        name: "Computer Vision",
        relations: [
          "Pixie Dust Technologies, Inc.",
          "9DW Corp",
          "AI-dea, Inc.",
          "FRAIM, Inc.",
        ],
      },
      "Natural Language Processing",
      "Search",
      "Recommendation",
      "Github",
      "Gitlab",
    ],
  },
  {
    name: "Text Editor",
    relations: ["Vim"],
  },
  {
    name: "OS",
    relations: ["Linux", "Ubuntu", "Arch Linux", "Windows", "macOS"],
  },
  {
    name: "Assessment",
    relations: ["Excellent", "Very Good", "Average", "Good", "Not Bad"],
  },
  {
    name: "Company",
    relations: [
      "FRAIM, Inc.",
      "Pixie Dust Technologies, Inc.",
      "AI-dea, Inc",
      "9DW Corp",
      "Todoker, Inc.",
      "Klavis",
    ],
  },
  {
    name: "Type of Contract",
    relations: [
      {
        name: "Full-time",
        relations: [
          "FRAIM, Inc.",
          "Pixie Dust Technologies, Inc.",
          "9DW Corp",
          "AI-dea, Inc.",
        ],
      },
      {
        name: "Subcontracting",
        relations: ["AI-dea, Inc", "Todoker, Inc.", "Klavis"],
      },
    ],
  },
  {
    name: "AWS",
    relations: [
      "Lambda",
      "EKS",
      "ECR",
      "ECS",
      "EC2",
      "DynamoDB",
      "Sagemaker",
      "RDS",
      "S3",
      "CloudFront",
    ],
  },
];

const nodes = null;

const parseNode = (node: Node) => {};

Object.entries(data).map(([key, value]) => {});

export default data;
