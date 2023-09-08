import Layout from "../components/layout";
import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";
import { useEffect } from "react";

const Skills: React.FC = () => {
    useEffect(() => {
        // // Load the pyodide.js script dynamically
        // const pyodideScript = document.createElement("script");
        // pyodideScript.src = "https://cdn.jsdelivr.net/pyodide/v0.21.0/full/pyodide.js";
        // pyodideScript.async = true;
        // document.head.appendChild(pyodideScript);

        // // Load the script.js script dynamically
        // const scriptScript = document.createElement("script");
        // scriptScript.src = "../components/script.js"; // Make sure the path is correct
        // scriptScript.async = true;
        // document.head.appendChild(scriptScript);
    }, []);

    return (
        <Layout home>
            {/* <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
                <script defer src="https://pyscript.net/latest/pyscript.js"></script> 
            </head>
            <body>
                <h1>Spacy Pyodide</h1>
                <form
                    id="form"
                    action=""
                    className="flex flex-col justify-center align-center gap-1rem"
                >
                    <textarea id="input" className="min-height: 200px; min-width: 70%" defaultValue={"Add text to analyze..."}></textarea>
                    <button
                        type="submit"
                        className="font-size: large; padding: 0.5rem 1rem"
                        id="submit"
                        disabled
                    >
                        Model is loading...
                    </button>
                </form>
                <div id="output"></div>
            </body> */}
        </Layout>
    );
};

export default Skills;