import Header from "./components/Header/Header.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection.jsx";
import ExamplesSection from "./components/ExamplesSection.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsSection/>
        <ExamplesSection/>
      </main>
    </div>
  );
}

export default App;
