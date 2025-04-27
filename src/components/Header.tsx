import styled from "styled-components";

const HeaderDiv = styled.div`
    width: 100%;
    padding: 5%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    text-align: center;
    height: 0;
`;

const SearchInput = styled.input`
    padding: 2%;
    font-size: calc(2vh + 10%);
`;

export default function Header({ numJobs, setNumJobs }: { numJobs: number, setNumJobs: (num: number) => void }) {
    return (
        <HeaderDiv>
            <h1>Jobicy Jobs</h1>
            <SearchInput
                type="number"
                placeholder="Number of Jobs"
                min={1}
                value={numJobs}
                onChange={(e) => {
                    const value = Math.max(1, Number(e.target.value)); // Stops site from crashing if 0 or backspace is clicked
                    setNumJobs(value);
                }}
            />
        </HeaderDiv>
    );
}
