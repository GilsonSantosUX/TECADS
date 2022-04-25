import styled from 'styled-components';
import './style.css';

import logo from '../../logo.svg';

const Item = styled.li`
    width:56px;
    height:56px;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    border:1px solid var(--color-neutral-3);
    border-radius:8px;
    color:${props => props.color || "var(--color-principal-light)" };
`;

function Navigate() {
  return (
    <>
      <nav className="navigate">
        <Item>
          <img src={logo} width="120" height="56" alt="Logo"/>
        </Item>
        <ul>
          <Item><a href='#'>0</a></Item>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
        </ul>
      </nav>
    </>
  );
}

export default Navigate;