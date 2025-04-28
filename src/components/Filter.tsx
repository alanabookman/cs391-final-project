import styled from "styled-components";

const SearchInput = styled.input`
    padding: 2%;
    font-size: calc(2vh + 10%);
    background-color: whitesmoke;
    border: 2px black solid;
`;

const StyledH3 = styled.h3`
    font-size: calc(2px + 2vw);
    padding: 0% 2%;    
    color: black;
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-directin: row;
`;

export default function Filter({ numJobs, setNumJobs }: { numJobs: number, setNumJobs: (num: number) => void }) {
    return (
        <FilterWrapper>
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
            <StyledH3>Filter Number of Jobs to Display</StyledH3>
        </FilterWrapper>
    );
}