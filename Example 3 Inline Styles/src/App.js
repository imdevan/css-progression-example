import React, {useEffect} from 'react';
import './App.css';
import Container from './components/Container';
import Title from './components/Title';
import Paragraph from './components/Paragraph';

function App() {
  useEffect(() => console.log('Hello Inline Styles!'), [])

  return (
    <>
      <Container>
        <Title>
          This is styled with Inline-styles
        </Title>
        <Paragraph>
          React was invited in 2012 by Facebook (specifically, X), and has come a long way since it's inception. Even though styling React apps with inline styles alone is possible. Create-react-app; the community tool ships with a css as the primary example of how to syle the apps. And many people still prefer to use Scss over inline styles. 
        </Paragraph>
      </Container>
    </>
  );
}

export default App;
