import { useState } from "react";
import { CORE_CONCEPTS } from "./data"; // importing like that cause CORE_CONCEPTS is not a default export from the file
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcept";
import TabButton from "./components/tabButton";

function App() {
   const [selectedTopic, setSelectedTopic] = useState("initial value");

    const handleClick = (selected) => {
        setSelectedTopic(selected);
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
                        <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
