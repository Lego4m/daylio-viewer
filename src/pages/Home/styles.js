import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1180px;
  padding: 24px 32px;

  margin: 0 auto;

  > header {
    display: flex;
    align-items: center;

    button {
      background: #7159c1;

      margin-left: auto;
      padding: 8px;
      border-radius: 8px;
      border: 0;

      font-size: 14px;
      font-weight: bold;
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  margin-top: 40px;

  display: flex;

  aside.geral {
    width: 300px;

    background: #fff;
    padding: 30px;
    border-radius: 5px;

    div.moods {
      margin-top: 20px;
    }
  }

  section.entries {
    width: 100%;
    margin: 0 5px;

    background: #fff;
    padding: 30px;
    border-radius: 5px;

    ul {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 1045px) {
    section.entries {
      ul {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (max-width: 730px) {
    flex-direction: column;

    aside.geral {
      width: 100%;
    }

    section.entries {
      margin: 5px 0;

      ul {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export const Mood = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;

  border: 2px solid ${(props) => props.color};
  border-radius: 2.5px;

  strong {
    font-size: 18px;
    margin-left: 7px;
  }

  & + li {
    margin-top: 10px;
  }
`;

export const Entrie = styled.li`
  display: flex;

  padding: 10px;
  border: 2px solid ${(props) => props.color};
  border-radius: 2.5px;

  div.infos {
    margin-left: 7px;

    header {
      display: flex;
      flex-direction: column;

      time {
        display: block;
        font-size: 12px;

        opacity: 0.6;
      }

      strong {
        color: ${(props) => props.color};
        text-transform: uppercase;
      }
    }

    span {
      color: #333;

      font-size: 12px;
    }

    p {
      font-size: 14px;
      line-height: 18px;

      margin-top: 5px;
      padding-top: 5px;
      border-top: 1px solid #eee;
    }
  }
`;
