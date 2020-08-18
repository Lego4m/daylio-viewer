import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1180px;
  padding: 24px 32px;

  margin: 0 auto;

  header {
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
    background: #fff;
    padding: 30px;
    border-radius: 5px;

    div.moods {
      margin-top: 20px;
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
