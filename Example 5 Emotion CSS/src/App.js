import React, {useEffect} from 'react';

import Container from './components/Container';
import Title from './components/Title';
import Paragraph from './components/Paragraph';

function App() {
  useEffect(() => console.log('Hello Emotion CSS Styles!'), [])

  return (
    <>
      <Container>
        <Title>
          This is styled with Emotion inline-css!
        </Title>
        <Paragraph>
          The emotion css operator allows you to generate a class name based on a set of properties. This can be used inside a component, but it can also be used to compose different styles together, and generate styles from functions.
        </Paragraph>
      </Container>
    </>
  );
}

export default App;
