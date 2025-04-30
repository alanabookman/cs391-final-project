import styled from "styled-components";

const SearchInput = styled.input`
    padding: 2%;
    font-size: calc(2vh + 10%);
    background-color: ${props => props.theme.cardBackground};
    color: ${props => props.theme.cardText};
    border: 2px solid ${props => props.theme.border};
    margin-left: 2vw;
    border-radius: 5px;

    &::placeholder {
        color: ${props => props.theme.cardText};
        opacity: 0.7;
    }
`;

const StyledH3 = styled.h3`
    font-size: calc(2px + 2vw);
    padding: 0 2%;    
    color: ${props => props.theme.text};
    font-weight: bold;
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    background-color: ${props => props.theme.bodyBackground};
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