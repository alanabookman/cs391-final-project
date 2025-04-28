import styled from "styled-components";

const SearchInput = styled.input`
    padding: 2%;
    font-size: calc(2vh + 10%);
    background-color: whitesmoke;
    border: 3px black solid;
`;

export default function Filter({ numJobs, setNumJobs }: { numJobs: number, setNumJobs: (num: number) => void }) {
    return (
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
    );
}