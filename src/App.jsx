import reactImg from './assets/react-core-concepts.png'; // import images so it can be handle better in production and optimized.

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

function App() {
    return (
        <div>
            <Header/>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
