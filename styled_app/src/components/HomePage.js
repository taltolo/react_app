
import styled from 'styled-components';
import {SearchOutline} from '@styled-icons/evaicons-outline/SearchOutline';
import {MenuAlt2} from '@styled-icons/heroicons-outline/MenuAlt2';


const Container = styled.div`
  align-items: center;
  justify-content: center;

`;

const HeadContainer = styled.div`
  align-items: center;
  justify-content: center;
  display:inline;

`;


const BlueSearchOutline = styled(SearchOutline)`
  color: #2699FB ;
  top: 36px;
  left: 53px;
  width: 16px;
  height: 16px;
  padding: 11%;
`;

const BlueMenuAlt2=styled(MenuAlt2)`
  color: #2699FB ;
  top: 37px;
  left: 371px;
  width: 16px;
  height: 14px;
  padding-left: 60%;
`;

const ImageView=styled.div`
  padding: 5%;
  margin-left: 9%;
  margin-bottom: 4%;
  width: 60%;
  height: 350px;
  background: #BCE0FD 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const Card = styled.div`
  padding: 25px 12px 18px;
  width: 100%;
`;

const Image = styled.div`
  margin-left: 10%;
  width: 75%;
  height: 250px;
  background: #2699FB 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const Title = styled.h2`
  padding-left: 10%;
  margin: 2%;
  color: #7F7F7F;
  font: bold 32px Arial;
  opacity: 1;
`;

  const Content = styled.p`
    padding-left: 10%;
    margin: 2%;
    color: #CCCCCC;
    font: 16px Arial;
    opacity: 1;
`;



function HomePage() {
  return (
    <Container>
      <HeadContainer >
        <BlueSearchOutline />
        <BlueMenuAlt2/>
      </HeadContainer>
      <ImageView/>
      <Container>
      {[0, 1, 2, 3].map((key, index) => (
        <Card>
          <Image></Image>
          <Title>Title</Title>
          <Content>Content</Content>
        </Card>
      ))}
      </Container>
    </Container>
  );
}

export default HomePage;
