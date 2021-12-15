import styled from "styled-components";

const HomeContainer = styled.div`
    height: 50vh;
    display: flex;
    /* border: 10px solid green; */
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10em;
    font-size: 1.05em;
    @media only screen and (max-width: 600px) {
    font-size: 2em;
    position: relative;
    left: 5em;
    font-size: 1.75em;
    /* margin-left: 5em;  */
    /* max-width: 250%; */

  }

`

const HomeText = styled.p`
    font-weight: light;
    text-align: left;
    position: relative;
    left: -8em;
    top: 2em;
    @media only screen and (max-width: 600px) {
 
    left: -3em;
    top: 1em;
  }

`

const HomeText2 = styled.p`
    width: 185%;
  
    text-align: left;
    position: relative;
    left: -5em;
    top: 2em; 
    @media only screen and (max-width: 600px) {
   width: 130%;
   left: -1em;
   top: 1em; 
  } 
`

const BoxWrap = styled.div`
    max-width: 15%;
    height: 75%;
    background: rgb(252,143,189);
    background: radial-gradient(circle, rgba(252,143,189,1) 6%, rgba(252,90,147,1) 30%, rgba(253,172,147,0.9220063025210083) 57%, rgba(252,207,238,1) 71%);
    background-repeat: none;
    background-repeat: repeat space;
    background-repeat: repeat repeat;
    background-repeat: round space;
    background-size: 800px 550px;
    position: relative;
    z-index: -1000;
    @media only screen and (max-width: 600px) {
    
        max-width: 200%;
        height: 100%;
        left: 0;
  } 
`

const WorkContainer = styled.div`

    height: 50vh;

    display: flex;
    justify-content: center;
    background-color: rgb(255, 232, 237);

    @media only screen and (max-width: 600px) {

    width: 180%;
    height: 100%;
    position: relative;
    top: 4em;
}
 
`;

const InfoContainer = styled.div`
    height: 65vh;
    @media only screen and (max-width: 600px) {
    width: 180%;
    font-size: 1.5em;
    position: relative;
    top: 10em;
    }

`;

const InfoText = styled.p`
    font-weight: light;
    text-align: left;
    margin: 5em 0 0 30em;
    line-height: .75em;
    @media only screen and (max-width: 600px) {
    margin: 0 0 0 5em;
    }
`;

const WorkText = styled.p`

    width: 85%;
    font-weight: 300;
    font-size: 2em;
    text-align: left;
    padding: 2em;
    .numbers {
        font-weight:500;
        color: black;
        -webkit-text-fill-color: rgb(255, 232, 237); /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
`

export { HomeContainer, HomeText, HomeText2, BoxWrap, WorkContainer, InfoContainer, InfoText, WorkText };