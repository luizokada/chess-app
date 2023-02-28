import styled from 'styled-components';

interface SquareProps {
    image: string;
    background: string;
}
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: auto;
`;

export const Square = styled.div<SquareProps>`
    width: 100px;
    height: 100px;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-image: url(${(props) => props.image});
    border: 0.5px black solid;
    cursor: ${(props) => (props.image !== '' ? 'pointer' : '')};
    background-color: ${(props) => props.background};
`;

export const MovementDot = styled.div`
    width: 30px;
    height: 30px;
    background-color: black;
    opacity: 0.5;
    border-radius: 50%;
`;
