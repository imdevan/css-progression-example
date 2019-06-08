import React, {useEffect} from 'react';

import Container from './components/Container';
import Title from './components/Title';
import Paragraph from './components/Paragraph';

function App() {
  useEffect(() => console.log('Hello Emotion Styled Components!'), [])

  return (
    <>
      <Container>
        <Title>
          This is styled with Emotion Styled!
        </Title>
        <Paragraph>
          Emotion has always had the ability to use styled-components like styles since it's inception. Both share a very similar api. @emotion/styled is a great way to structure components to keep your code base together, but not tangled. Because there is a more popular library (styled components) people sometimes think emotion "stole" the concept from them, but all open source projects borrow from eachother and that's okay.
        </Paragraph>
      </Container>
    </>
  );
}

export default App;
