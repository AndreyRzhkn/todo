import styled from "styled-components";

export const Container = styled.div`
    padding: 30px 50px;

    @media (max-width: 530px) {
        padding-left: 20px;
    }

    @media (max-width: 450px) {
        padding-left: 0;
    }
`;

export const List = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;
