import React,{ useState } from 'react';
import Video  from '../../videos/video.mp4';
import * as LandingPageStyled from './LandingPageStyled';
import {Button} from '../Buttons'

const LandingPage = () => {

    const [hover,setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <LandingPageStyled.LandingPageContainer >
            <LandingPageStyled.LandingPageBackground>
                <LandingPageStyled.VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </LandingPageStyled.LandingPageBackground>
            <LandingPageStyled.LandingPageContent>
              <LandingPageStyled.LandingPageH1>عنوان الرسالة الترحيبية</LandingPageStyled.LandingPageH1>  
              <LandingPageStyled.LandingPageParagraph>موضوع الرسالة </LandingPageStyled.LandingPageParagraph>
              <LandingPageStyled.LandingPagePBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary={true.toString()} dark={true.toString()} >
                
                  Get Started {hover ? <LandingPageStyled.ArrowForward /> : <LandingPageStyled.ArrowRight /> }
                </Button>
              </LandingPageStyled.LandingPagePBtnWrapper>
            </LandingPageStyled.LandingPageContent>
        </LandingPageStyled.LandingPageContainer>
    );
};

export default LandingPage;


