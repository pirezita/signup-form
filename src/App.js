import { AppStyled as Styled } from './styled.tsx';

function App() {
  return (
    <Styled.Background>
    <Styled.Container>
      <Styled.Header> 
        <Styled.LeftText>
          <span>Learn to code by watching others</span>
          <p> See how experienced developers solve problems in real-time.
        Watching scripted tutorials is great, but understanding how 
        developers think is invaluable.</p>
        </Styled.LeftText>
      </Styled.Header>
      <Styled.MainContent>
        <Styled.PromoBanner> 
          <b>Try it free 7 days </b>then $20/mo. thereafter
        </Styled.PromoBanner>
          <Styled.FormContainer>
            <Styled.TextInput placeholder='First Name' required/>
            <Styled.TextInput placeholder='Last Name' required/>
            <Styled.TextInput placeholder='Email' required type='email'/>
            <Styled.TextInput placeholder='Password' required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" type='password'/>
            A senha precisa ter no mínimo 8 dígitos, sendo no mínimo uma letra e um número.
            <Styled.SubmitBtn type='submit'>
              CLAIM YOUR FREE TRIAL
            </Styled.SubmitBtn>
            <span>By clicking the button, you are agreeing to our <b>Terms and Services</b></span>
          </Styled.FormContainer>
      </Styled.MainContent>
    </Styled.Container>
    <Styled.Attribution>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/pirezita">Aline Pires de Lima</a>.
    </Styled.Attribution>
    </Styled.Background>
  );
}

export default App;
