import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text_body);
      font-weight: 400;
      padding: 1rem 2 rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2 rem;
      border: 0;
      background: var(--shape);
      color: var(--text_body);
      border-radius: 0.25rem;

      &:first-child{
        color: var(--text_title);
      }

      &.deposit {
        color: var(--gren);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;