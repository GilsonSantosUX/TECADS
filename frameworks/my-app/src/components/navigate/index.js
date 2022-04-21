import styled from 'styled-components';
import './style.css';

import logo from '../../logo.svg';

const Item = styled.a`
    color:${props => props.color || "var(--color-primary-3)" };
`;

function Navigate() {
  return (
    <>
      <nav className="navigate">
        <img src={logo} width="120" height="56" alt="Logo"/>
        <ul>
          <li><a href="#item1">Item 1</a></li>
          <li><a href="#item2">Item 2</a></li>
          <li><a href="#item3">Item 3</a></li>
          <li><a href="#item4">Item 4</a></li>
          <li><Item color='var(--color-feedback-informative-3)'>Item styled</Item></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigate;