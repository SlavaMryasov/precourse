import { StyledLay, StyledImg, StyledDiv, StyledBtn, StyledSpan } from "./Layout.styled";
import Rectangle from "./Rectangle.svg";

type Layout = {};
export const Layout = (props: any) => {
  return (
    <div>
      <div>
        <StyledLay height={"350px"} width={"300px"}>
          <StyledImg src={Rectangle} alt="wqqw" />
          <StyledDiv
            height={"19px"}
            width={"70px"}
            top={"200px"}
            left={"20px"}
            fontSize={"16px"}
            fontStyle={'normal'}
            color={"#000"}
            fontWeight={"700"}
            lineHeight={'normal'}
          >
            Headline
          </StyledDiv>
          <StyledDiv
            height={"40px"}
            width={"260px"}
            top={"239px"}
            left={"20px"}
            color={"#ABB3BA"}
            fontSize={"12px"}
            fontStyle={'normal'}
            fontWeight={"500"}
            lineHeight={'20px'}>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
              ornare in venen.
          </StyledDiv>
          <StyledBtn background={'#4E71FE'} top={'298px'} left={'20px'}><StyledSpan color={'white'}>See more</StyledSpan></StyledBtn>
          <StyledBtn top={'298px'} left={'118px'}><StyledSpan color={'#4E71FE'}>Save</StyledSpan></StyledBtn>
        </StyledLay>
      </div>
    </div>
  );
};
