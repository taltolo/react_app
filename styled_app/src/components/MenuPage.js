import styled from 'styled-components';
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline';
import {ViewQuilt} from '@styled-icons/material-rounded/ViewQuilt';
import {ContactPage} from '@styled-icons/material/ContactPage';
import {PlayList2} from '@styled-icons/remix-fill/PlayList2';
import {DocumentFooter} from '@styled-icons/fluentui-system-filled/DocumentFooter';

const Container = styled.div`
  align-items: left;
  justify-content: left;
  background:#2699FB;
  width: 428px;
  height: 926px;
`;

const NavMenu=styled.div`
    margin: 5%;
    padding-top: 10%;
    align-items: left;
`;

const ListMenu=styled.ul`
    padding:0;
    list-style: none;
`;

const ListItem=styled.li`
    margin: 4%;
`;

const Links=styled.a`
    text-align: left;
    font: bold 19px Arial;
    Color: #fff;
    text-decoration:none;
    margin: 5%;
`;

const WhiteCloseOutline=styled(CloseOutline)`
    color: #fff;
    padding-left: 75%;
    padding-top: 5%;
    width: 25px;
    height:25px;
`;

const WhiteViewQuilt=styled(ViewQuilt)`
    color: #fff;
    width: 25px;
    height: 25px;
    padding-bottom: 2%
`;

const WhiteContactPage=styled(ContactPage)`
    color: #fff;
    width: 25px;
    height: 25px;
    padding-bottom: 2%
`;

const WhitePlayList2=styled(PlayList2)`
    color: #fff;
    width: 25px;
    height: 25px;
    padding-bottom: 2%
`;

const WhiteDocumentFooter=styled(DocumentFooter)`
    color: #fff;
    width: 25px;
    height: 25px;
    padding-bottom: 2%
`;

function MenuPage () {
    return(   
        <Container>
                <WhiteCloseOutline/>
            <NavMenu>
              <ListMenu>
                  <ListItem>
                      <WhiteViewQuilt/>
                      <Links href="#">Services</Links>
                  </ListItem>
                  <ListItem>
                      <WhiteContactPage/>
                      <Links href="#">Contact</Links>
                  </ListItem>
                  <ListItem>
                      <WhitePlayList2/>
                      <Links href="#">Playlist</Links>
                  </ListItem>
                  <ListItem>
                    <WhiteDocumentFooter/>
                    <Links href="#">Footer</Links>
                  </ListItem>
              </ListMenu>  
            </NavMenu>
        </Container>
    );
}

export default MenuPage;