import React, {useEffect} from 'react';

import Container from './components/Container';
import Title from './components/Title';
import Paragraph from './components/Paragraph';

function App() {
  useEffect(() => console.log('Hello Emotion Object Styles!'), [])

  return (
    <>
      <Container>
        <Title>
          This is styled with Emotion!
        </Title>
        <Paragraph>
          Emotion's first release was in 2017 and orginally was wrapper around glam to use that css-in-js library with React. It was only that object styles became available. However, they are a great way to start moving over your inline styles to emotion based styles. 
        </Paragraph>
      </Container>
    </>
  );
}

export default App;
