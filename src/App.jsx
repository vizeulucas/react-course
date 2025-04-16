import { CORE_CONCEPTS } from "./data"; // importing like that cause CORE_CONCEPTS is not a default export from the file
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcept";
import TabButton from "./components/tabButton";

function App() {
    const handleClick = () => {
        console.log("hello world")
    }


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
                <section id="examples">
                    <menu>
                        <TabButton onSelect={handleClick}>Components</TabButton>
                        <TabButton onSelect={handleClick}>JSX</TabButton>
                        <TabButton onSelect={handleClick}>Props</TabButton>
                        <TabButton onSelect={handleClick}>State</TabButton>
                    </menu>

                </section>
            </main>
        </div>
    );
}

export default App;
