import styled from 'styled-components';

interface SquareProps {
    image: string;
}
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: auto;
`;

export const BlackSquare = styled.div<SquareProps>`
    width: 100px;
    height: 100px;
    background-color: green;
    background-image: url(${(props) => props.image});
    border: 0.5px black solid;
    background-size: 100%;
    cursor: ${(props) => (props.image !== '' ? 'pointer' : '')};
`;

export const WhiteSquare = styled.div<SquareProps>`
    width: 100px;
    height: 100px;
    background-size: 100%;
    background-color: white;
    background-image: url(${(props) => props.image});
    border: 0.5px black solid;
    cursor: ${(props) => (props.image !== '' ? 'pointer' : '')};
`;
