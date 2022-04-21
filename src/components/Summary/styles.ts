import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
     gap: 2rem;
    margin-top: -10rem;
    
    div {
            background: var(--shape);
            border-radius: 0.25rem;
            padding: 1.5rem 2rem;
            color: var(--text-title); 
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong {
        display: block;
        font-size: 2rem;
        margin-top: 1rem;
        line-height: 3rem;
        font-weight: 500;
    }

    .hightlight-background {
        background: var(--green);
    }

    `

 