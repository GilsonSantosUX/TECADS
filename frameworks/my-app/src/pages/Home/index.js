import { useEffect, useState } from "react";
import styled from 'styled-components';
import './style.css';

const Heading = styled.h1`
    ${props => props.apply}
    font-family: var(--font-primary);
    line-height:var(--font-baseline-heading-x1);
    font-size:var(--font-heading-x1);
    color:${props => props.color || 'var(--color-neutral-0)'};
    font-weight:bold;
    max-width:65%;
`;


function Home(){
    const [textContent, setTextContent] = useState(null);

    useEffect(() => {
        setTextContent("Gilson Santos");
    });

    return (
        <>
        <Heading color="var(--color-primary-3)" apply="@apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">👋 Oi {textContent}, Bem-vindo(a)s a plataforma de Streaming</Heading>
        </>
    );
}

// class Home extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {textContent: 'Gilson Santos'};
//     }

//     handleChange(e) {
//         this.setState({temperature: e.target.value});
//     }

//     render(){
//         const textContent = this.state.textContent;
//         return (
//             <>
//             <input type="text" value={textContent} onChange={this.handleChange}/>
//             <Heading>👋 Oi {textContent}, Bem-vindo(a)s a plataforma de Streaming</Heading>
//             </>
//         );
//     }
// }

export default Home;