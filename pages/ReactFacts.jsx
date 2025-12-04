export default function ReactFacts(){
    return (
        <Page />
    )
}

function TemporaryName(){
    return (
        <main className="react react-facts">
            <img src="react-logo.svg" alt="react logo" width="40px"/>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walker</li>
                <li>Has well over 200k stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

function Page(){
    return (
        <div className="facts">
            <header>
                <img src="react-logo.svg" alt="" width="40px" />
            </header>
            <main>
                <h1>Reason I am excited to learn React</h1>
                <ol className>
                    <li>React is a popular library, so I will be more likely to
                        fit in with all the coolest devs out there!
                    </li>
                    <li>I am more likely to get a job as a front end developer if I know react.</li>
                </ol>
            </main>
            <footer>
                <small>&copy; 2024 ziroll development. All rights reserved</small>
            </footer>
        </div>
    )
}