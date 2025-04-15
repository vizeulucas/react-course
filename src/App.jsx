import reactImg from './assets/react-core-concepts.png'; // import images so it can be handle better in production and optimized.
import { CORE_CONCEPTS } from "./data"; // importing like that cause CORE_CONCEPTS is not a default export from the file

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Components are functions that start with a capital letter and return a JSX block of code;
function Header() {
    const description = reactDescriptions[genRandomInt(2)]; // good practice to keep the code leaner

    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

// using object destructuring to get a more readable code
function CoreConcepts({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id='core-concepts'>
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
