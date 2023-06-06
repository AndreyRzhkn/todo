import styled from "styled-components";

export const Panel = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    & input {
        width: 200px;
    }

    & .ant-select {
        width: 200px;
    }
`;

export const Title = styled.h3`
    margin-bottom: 0;
    margin-top: 0;
`;
