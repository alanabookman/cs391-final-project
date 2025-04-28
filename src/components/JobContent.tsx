import JobFacts from "./JobFacts.tsx";
import { useEffect, useState } from "react";
import { Job } from "../interfaces/Job.ts";
import BackToTop from "./BackToTop.tsx";
import Filter from "./Filter.tsx";
import { styled } from "styled-components";
import Footer from "./Footer.tsx";
import { lightTheme, darkTheme } from "./Themes.ts";
import { GlobalStyles } from "./globalStyles.ts";
import {ThemeProvider} from 'styled-components'
import ThemeButton from "./ThemeButton.tsx";

const StyledDiv = styled.div`
    background-color: whitesmoke;
`;


export default function App() {
    const [darkMode, setDarkMode]= useState(false); // set w/ lightmode
    const themetoggle = () => { // helper function that switches between the states
        darkMode== false ? setDarkMode(true) : setDarkMode(false)
    };

    const [data, setData] = useState<Job[]>([]);
    const [numJobs, setNumJobs] = useState<number>(3);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            // https://jobicy.com/api/v2/remote-jobs?count=${numJobs}&geo=usa&industry=marketing&tag=seo this one only returns 3 jobs total
            // I removed the extra filters so the search option can display up to 50 jobs now (Let me know if a change is needed)
            // -James (https://rapidapi.com/jobicy-jobicy-default/api/jobicy for documentation)
            const rawData = await fetch(`https://jobicy.com/api/v2/remote-jobs?count=${numJobs}`);
            const { jobs }: { jobs: Job[] } = await rawData.json();
            setData(jobs);
        }

        fetchData()
            .then(() => console.log("Job data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));
    }, [numJobs]);

    return (
        <ThemeProvider theme = {darkMode ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <ThemeButton themetoggle={themetoggle} darkMode = {darkMode}/>
                <StyledDiv>
                    <BackToTop/>
                    <Filter numJobs={numJobs} setNumJobs={setNumJobs} />
                    <JobFacts data={data} />
                    <BackToTop/>
                    <Footer />
                </StyledDiv>
        </ThemeProvider>
    );
}


