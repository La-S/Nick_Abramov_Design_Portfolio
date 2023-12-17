import { Project, ProjectGalleryRow } from '../types/data/project';
// TODO: Hardcoded for the duration of UI development. Replace with dynamic data later.
import Project1MainImg from '../assets/images/projects/project1.jpeg';
import Project2MainImg from '../assets/images/projects/project2.jpeg';
import Project3MainImg from '../assets/images/projects/project3.jpeg';
import ProjectImg1 from '../assets/images/projects/generic_project_folder/1.png';
import ProjectImg2 from '../assets/images/projects/generic_project_folder/2.png';
import ProjectGif3 from '../assets/images/projects/generic_project_folder/3.gif';
import ProjectImg4 from '../assets/images/projects/generic_project_folder/4.png';
import ProjectImg6 from '../assets/images/projects/generic_project_folder/6.png';
import ProjectLazyImg1 from '../assets/images/projects/generic_project_folder/1_compressed.jpg';
import ProjectLazyImg2 from '../assets/images/projects/generic_project_folder/2_compressed.jpg';
import ProjectLazyGif3 from '../assets/images/projects/generic_project_folder/3_compressed.jpg';
import ProjectLazyImg4 from '../assets/images/projects/generic_project_folder/4_compressed.jpg';
import ProjectLazyImg6 from '../assets/images/projects/generic_project_folder/6_compressed.jpg';

const GALLERY: Array<ProjectGalleryRow> = [
  {
    cellAmount: 1,
    cells: [
      {
        type: 'image',
        path: ProjectImg1,
        lazyPath: ProjectLazyImg1,
      },
    ],
  },
  {
    cellAmount: 1,
    cells: [
      {
        type: 'image',
        path: ProjectImg2,
        lazyPath: ProjectLazyImg2,
      },
    ],
  },
  {
    cellAmount: 1,
    cells: [
      {
        type: 'image',
        path: ProjectGif3,
        lazyPath: ProjectLazyGif3,
      },
    ],
  },
  {
    cellAmount: 1,
    cells: [
      {
        type: 'image',
        path: ProjectImg4,
        lazyPath: ProjectLazyImg4,
      },
    ],
  },
  {
    cellAmount: 1,
    cells: [
      {
        type: 'embedded video link',
        path: 'https://www.youtube.com/embed/-cofUNXbk8Q?si=hRpgi3eLXQ7UbAg4',
      },
    ],
  },
  {
    cellAmount: 1,
    cells: [
      {
        type: 'direct video link',
        path: 'https://media.istockphoto.com/id/1757914655/video/business-man-in-office-space.mp4?s=mp4-640x640-is&k=20&c=0aJtyQPiesfJCxt7Pu4WmF9cSczCvSE6Z84Bvr11kzY=',
      },
    ],
  },
  {
    cellAmount: 3,
    cells: [
      {
        type: 'image',
        path: ProjectImg6,
        lazyPath: ProjectLazyImg6,
      },
    ],
  },
];

const PROJECTS: Array<Project> = [
  {
    id: '1',
    name: 'The Great Gatsby',
    category: 'Web design',
    mainImagePath: Project1MainImg,
    dateCreated: 1617140584,
    descriptionBulletPoints: [
      'The Great Gatsby - website that I built using GatsbyJS. It is a personal website that I created to showcase my skills and experience.',
      'A classic novel turned into a visually stunning website.',
      'A website that is both aesthetically pleasing and informative.',
      'A website that is a testament to the power of GatsbyJS.',
    ],
    gallery: [...GALLERY],
  },
  {
    id: '2',
    name: 'The Hunger Games',
    category: 'Branding',
    mainImagePath: Project2MainImg,
    dateCreated: 1677140584,
    descriptionBulletPoints: [
      'The Hunger Games - a branding project that I created for a fictional company.',
      'A project that demonstrates my ability to create a cohesive brand identity.',
      'A project that showcases my creativity and attention to detail.',
      'A project that demonstrates my knowledge of design principles and best practices.',
    ],
    gallery: [...GALLERY],
  },
  {
    id: '3',
    name: 'The Adventures of Sherlock Holmes',
    category: 'Illustration',
    mainImagePath: Project3MainImg,
    dateCreated: 1687140584,
    descriptionBulletPoints: [
      'The Adventures of Sherlock Holmes - an illustration project that I created for a fictional book series.',
      'A project that demonstrates my ability to create compelling visuals.',
      'A project that showcases my creativity and attention to detail.',
      'A project that demonstrates my knowledge of design principles and best practices.',
    ],
    gallery: [...GALLERY],
  },
  {
    id: '4',
    name: 'The Lord of the Rings',
    category: 'Web design',
    mainImagePath: Project2MainImg,
    dateCreated: 1637140584,
    descriptionBulletPoints: [
      'The Lord of the Rings - a website that I built using GatsbyJS. It is a personal website that I created to showcase my skills and experience.',
      'A website that is both aesthetically pleasing and informative.',
      'A website that is a testament to the power of GatsbyJS.',
      'A website that is a tribute to one of the most popular book series of all time.',
    ],
    gallery: [...GALLERY],
  },
  {
    id: '5',
    name: 'The Hobbit',
    category: 'Branding',
    mainImagePath: Project1MainImg,
    dateCreated: 1657140584,
    descriptionBulletPoints: [
      'The Hobbit - a branding project that I created for a fictional company.',
      'A project that demonstrates my ability to create a cohesive brand identity.',
      'A project that showcases my creativity and attention to detail.',
      'A project that demonstrates my knowledge of design principles and best practices.',
    ],
    gallery: [...GALLERY],
  },
  {
    id: '6',
    name: 'The Da Vinci Code',
    category: 'Web design',
    mainImagePath: Project2MainImg,
    dateCreated: 1587140584,
    descriptionBulletPoints: [
      'The Da Vinci Code - a website that I built using GatsbyJS. It is a personal website that I created to showcase my skills and experience.',
      'A website that is both aesthetically pleasing and informative.',
      'A website that is a testament to the power of GatsbyJS.',
      'A website that is a thought-provoking exploration of the mysteries surrounding the life of Leonardo da Vinci.',
    ],
    gallery: [...GALLERY],
  },
  {
    id: '7',
    name: 'The Alchemist',
    category: 'Web design',
    mainImagePath: Project1MainImg,
    dateCreated: 1547140584,
    descriptionBulletPoints: [
      'The Alchemist - a website that I built using GatsbyJS. It is a personal website that I created to showcase my skills and experience.',
      'A website that is both aesthetically pleasing and informative.',
      'A website that is a testament to the power of GatsbyJS.',
      'A website that is a reflection of the themes and lessons in the book.',
    ],
    gallery: [...GALLERY],
  },
  {
    id: '8',
    name: 'The Pillars of the Earth',
    category: 'Web design',
    mainImagePath: Project3MainImg,
    dateCreated: 1697140584,
    descriptionBulletPoints: [
      'The Pillars of the Earth - a website that I built using GatsbyJS. It is a personal website that I created to showcase my skills and experience.',
      'A website that is both aesthetically pleasing and informative.',
      'A website that is a testament to the power of GatsbyJS.',
      'A website that is a tribute to one of the most acclaimed novels of all time.',
    ],
    gallery: [...GALLERY],
  },
];

export default PROJECTS;
