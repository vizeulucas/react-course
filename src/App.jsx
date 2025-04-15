import reactImg from './assets/react-core-concepts.png'; // import images so it can be handle better in production and optimized.
import componentsImg from './assets/components.png';

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

function CoreConcepts(props) {


    return (
        <li>
            <img src="" alt=""/>
            <h3>TITLE</h3>
            <p>DESCRIPTION</p>
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
                    <CoreConcepts
                        title="Components"
                        description="The core UI building block"
                        image={componentsImg}
                    />
                    <CoreConcepts />
                    <CoreConcepts />
                    <CoreConcepts />
                </section>
            </main>
        </div>
    );
}

export default App;
