import styled from "styled-components";

export const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 10px;
  }
`;
