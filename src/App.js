import "./App.css";
import "./_base.scss";
import Button from "./components/Button/Button";

function App() {
    return (
        <div className="App">
            <div className=" heading-l">App</div>
            <Button
                text="Apply for access"
                onClick={() => console.log("hola")}
            />
        </div>
    );
}

export default App;
