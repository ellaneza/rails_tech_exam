import styled from 'styled-components';
import { Container, Row, Accordion, Dropdown, Alert, Card } from 'react-bootstrap';
import logoFacebook from '../assets/logo-facebook.svg';
import logoTwitter from '../assets/logo-twitter.svg';
import logoLinkedIn from '../assets/logo-linkedin.svg';
import BannerImg from '../assets/mask-group-4.png';
import BannerBg from '../assets/banner-bg.png';
import IconChat from '../assets/icon-msg.svg';


const ComponentStyle = styled.div``

const BannerMsg = styled(Alert)`
    text-align: center;
    background-image: url(${BannerImg});
    background-size: 100% 100%;
    color: white;
    background-size: contain;
    background-repeat: no-repeat;
`

const MainContainer = styled(Container)`
    width: auto;
    background-image: url(${BannerBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: auto;
    padding-top: 30px;
`
const SubContainer = styled(Container)`
    width: 60vw;
`
const HomeContainer = styled(Container)`
    background-image: linear-gradient(174deg, #ffffff 35%, #061a36 35%, #061a36 75%, #ffffff 75%, #ffffff 100%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: auto;
    padding-top: 30px;
`
const CommentCardImg = styled(Card.Img)`
    width: 10% !important;
    height: 100%;
    margin: 0 auto;
`
const DetailsCardImg = styled(Card.Img)`
    width: 20% !important;
    height: 100%;
    margin: 0 auto;
`
const CenteredAccordion = styled(Accordion)`
    width: 60%;
    margin: 0 auto;
    text-align: left;
`
const FAQsContainer = styled(Container)`
    background-color: #f2f5f8;
`
const FooterContainer = styled(Container)`
    width: 80vw;
`
const rowSectionSubStyle = {
    padding: '30px 0'
}
const columnCenteredText = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center'
}
const ChatButton = styled.div`
    width: 70px;
    height: 70px;
    background: url(${IconChat}) #5fd2fa;
    background-size: 65% 65%;
    background-repeat: no-repeat;
    background-position: center;
    -moz-border-radius: 35px;
    -webkit-border-radius: 35px;
    border-radius: 35px;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
`
const SocialsLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
const SectionRow = styled(Row)`
    text-align: ${props => {return props.text_align}};
`;
const SocialsLink = styled.div`
    width: 50px;
    height: 50px;
    background: url(${
                        props => {
                            if (props.link === "facebook"){
                                return logoFacebook;
                            }
                            if (props.link === "twitter"){
                                return logoTwitter;
                            }
                            if (props.link === "linkedin"){
                                return logoLinkedIn;
                            }
                        }
                    }) 
        #f2f2ff;
    background-size: 60% 60%;
    background-repeat: no-repeat;
    background-position: center;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
`
const ClearDropdownButton = styled(Dropdown.Toggle)`
    border: none;
    background-color: rgba(1, 2, 3, 0) !important;
    color: grey;
    --bs-btn-hover-color: black;
    --bs-btn-active-color: grey;
`
const Styled = { 
    ComponentStyle,
    BannerMsg,
    MainContainer,
    HomeContainer,
    CommentCardImg,
    CenteredAccordion,
    FAQsContainer,
    SubContainer,
    FooterContainer,
    ChatButton,
    SocialsLinksContainer,
    SocialsLink,
    SectionRow,
    DetailsCardImg,
    ClearDropdownButton,
    rowSectionSubStyle,
    columnCenteredText,
}

export default Styled;