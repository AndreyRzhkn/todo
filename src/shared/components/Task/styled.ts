import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 30px;
    border: 1px solid blue;
`;

export const Actions = styled.div`
    width: 200px;
    display: flex;
    gap: 10px;
`;

export const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ContentWrapper = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3<{ done?: boolean }>`
    margin-bottom: 0;
    margin-top: 0;
    text-decoration: ${({ done }) => done && "line-through"};
`;
