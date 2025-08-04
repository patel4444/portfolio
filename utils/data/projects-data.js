import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Bloggy-Ji - [blog Managment System]',
        description: " Bloggyji is a responsive blog management system built with Python and Django, incorporating Gemini AI for content suggestions and analysis. It features user authentication, a rich-text editor, and advanced search functionality. The platform uses SQLite for its database and ensures a seamless experience across all devices.",
        tools: ['Sqlite', 'gemini API', 'django', 'tinyMCE',],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },

     {
        id: 2,
        name: 'QR Code Generator Website',
        description: "A fully functional QR code generator web application using HTML, CSS, Python (Flask), and Pyqrcode. Users can input a URL or text to generate QR codes automatically. Data is also stored in a MySQL database for history and retrieval.",
        tools: ['HTML', 'CSS', 'Python', 'Pyqrcode', 'MySQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
       // image: qr,
    },
    {
        id: 3,
        name: 'Hand Gesture & Motion Detection System',
        description: "This AI-based project uses TensorFlow and OpenCV to recognize hand gestures and basic motions for controlling applications. Designed for accessibility and touchless interface use cases. Trained on custom dataset with real-time webcam input.",
        tools: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe'],
        role: 'AI Developer',
        code: '',
        demo: '',
       // image: hand,
    },
    {
        id: 4,
        name: 'Image Gallery Website',
        description: "A simple and clean image gallery website built using HTML and CSS. It supports responsive layouts and includes hover animations and a category-based grid structure for better image organization. Designed to be lightweight and visually engaging.",
        tools: ['HTML', 'CSS', 'Responsive Design'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
       // image: realEstate,
    },
    {
        id: 5,
        name: 'Online Voting System',
        description: "A basic online voting system built using HTML, CSS, and MySQL. The platform allows users to cast their votes securely and displays real-time voting results. Tailwind CSS was integrated for modern UI styling and responsiveness.",
        tools: ['HTML', 'CSS', 'MySQL', 'Tailwind CSS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
       image: travel,
    },
   
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },