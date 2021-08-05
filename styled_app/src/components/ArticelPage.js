import styled from 'styled-components';
import {MenuAlt2} from '@styled-icons/heroicons-outline/MenuAlt2';
import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack';
import {ControllerPlay} from '@styled-icons/entypo/ControllerPlay';
import {Message} from '@styled-icons/material-sharp/Message';


const Container = styled.div`
  align-items: center;
  justify-content: center;

`;

const HeadContainer = styled.div`
  align-items: center;
  justify-content: center;
  display:inline;

`;

const MediaContainer = styled.div`
  margin: 10% 0 2% 15%;
  width: 72%;
  height: 170px;
  background: #2699FB 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const Article=styled.article`
align-items: center;
justify-content: center;

`;

const BlueArrowBack=styled(ArrowBack)`
  color: #2699FB ;
  top: 30px;
  left: 40px;
  width: 16px;
  height: 16px;
  padding: 9%;
`;

const BlueMenuAlt2=styled(MenuAlt2)`
  color: #2699FB ;
  top: 37px;
  left: 371px;
  width: 16px;
  height: 14px;
  padding-left: 65%;
`;

const WhiteControllerPlay=styled(ControllerPlay)`
  color: #fff;
  width: 20px;
  height: 25px;
  padding-right: 25%;

`;

const WhiteMessage=styled(Message)`
  width: 22px;
  height: 22px;
  color: #fff;
  margin-left: 22%;
  border-radius: 60px;
  background: #2699FB;
  border: 10px solid #2699FB
  
`;

const Title = styled.h2`
  padding-left: 17%;
  margin:0;
  color: #2699FB;
  font: bold 40px Arial;
  opacity: 1;
`;

const Paragraph = styled.p`
  padding: 0 12% 2% 17%;
  margin-top: 5%;
  color: #CCCCCC;
  font: 14px Arial;
  opacity: 1;
`;

const PlayButton=styled.button`
    margin-top: 7%;
    background: #2699FB;
    font: 17px Arial;
    border-radius: 32px;
    width: 37%;
    height: 40px;
    border: none;
    margin-left: 15%;
    color: white;
    text-align: right;
    padding-right: 10%;
`;

const Footer=styled.footer`
  justify-content: center;
  margin: 10%;
  align-items: center;
  margin-top: 25%;
`;

const LabelQuestion=styled.label`
  text-align: center;
  font: 20px Segoe UI;
  color: #2699FB;
  padding-left: 25%;
  `;

function ArticelPage() {
    return (
        <Container>
            <HeadContainer>
                <BlueArrowBack/>
                <BlueMenuAlt2/>
            </HeadContainer>
            <Article>
              <Title>Title</Title>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</Paragraph>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</Paragraph>
              <MediaContainer/>
                <PlayButton>
                <WhiteControllerPlay/>
                  Play
                </PlayButton>
            </Article>
            <Footer>
              <LabelQuestion>Ask Question</LabelQuestion>
                <WhiteMessage/>
            </Footer>
        </Container>
    );

  
    
  }
  
  export default ArticelPage;
  