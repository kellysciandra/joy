import { HomeContainer, HomeText, HomeText2, BoxWrap, WorkContainer, InfoContainer, InfoText, WorkText } from "../styles/Global.styles";


const Home = () => {
    return <>
 
        <HomeContainer>
            <BoxWrap> 
            <HomeText>joy younan</HomeText>
            <HomeText2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                is a new york based <span style={{ textDecoration: "underline"}}> lighting designer </span>
                and urban designer. Her work focuses on using architecture 
                to channel natural and artificial light, transforming <span style={{ textDecoration: "underline"}}>spaces</span> and enhancing people’s <span style={{ textDecoration: "underline"}}> experience</span>.</HomeText2>
                  </BoxWrap>
        </HomeContainer>

        <WorkContainer id="work">
            <WorkText>
                <span className="numbers">01.</span>
                Project Name Here
                <span className="numbers">02.</span>
                Studio spec
                <span className="numbers">03.</span>
                Apartment NYC
                <span className="numbers">04.</span>
                Atelier NYC
                <span className="numbers">05.</span>
                Project Name Here
                <span className="numbers">06.</span>
                Project Name Here
                <span className="numbers">07.</span>
                Studio spec
                <span className="numbers">08.</span>
                Apartment NYC
                <span className="numbers">09.</span>
                Atelier NYC
                <span className="numbers">10.</span>
                Project Name Here
                <span className="numbers">11.</span>
                Project Name Here
                <span className="numbers">12.</span>
                Project Name Here
                <span className="numbers">13.</span>

            </WorkText>
        </WorkContainer>
        <WorkContainer style={{display: "none"}}></WorkContainer>
        <InfoContainer>
            <InfoText id="contact">
                Email 
                <br/><br/>
                <a style={{textDecoration: "underline"}} href="mailto:joyyounan@gmail.com">joyyounan@gmail.com</a>
                <br/><br/>
                <br/><br/>
                Instagram
                <br/><br/>
                <a style={{textDecoration: "underline"}} href="https://www.instagram.com/jooouy/?hl=en">joyyounan</a>
                <br/><br/>
                <br/><br/>
                LinkedIn
                <br/><br/>
                <a style={{textDecoration: "underline"}} href="https://www.linkedin.com/in/joy-younan-16b5b28b/">joyyounan</a>
                </InfoText>
            
        </InfoContainer>
       
    </>
};

export default Home;