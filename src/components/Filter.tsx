import styled from "styled-components";

const SearchInput = styled.input`
    padding: 2%;
    font-size: calc(2vh + 10%);
    background-color: whitesmoke;
    border: 2px black solid;
    margin-left: 2vw;
`;

const StyledH3 = styled.h3`
    font-size: calc(2px + 2vw);
    padding: 0 2%;    
    color: black;
    font-weight: bold;
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function Filter({ numJobs, setNumJobs }: { numJobs: number, setNumJobs: (num: number) => void }) {
    return (
        <FilterWrapper>
            <SearchInput
                type="number"
                placeholder="Number of Jobs"
                min={1}
                max={50}
                value={numJobs}
                // Prevents the user from crashing the site by picking number of jobs outside 1-50
                onChange={(e) => {
                    const rawValue = Number(e.target.value);
                    const value = Math.min(50, Math.max(1, rawValue));
                    setNumJobs(value);
                }}
            />
            <StyledH3>Filter Number of Jobs to Display (Max: 50)</StyledH3>
        </FilterWrapper>
    );
}