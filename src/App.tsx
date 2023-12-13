import styled from "styled-components";
import "./App.css";
import Accordion from "./components/AccordionStyles/Accordion";
import Rating from "./components/RatingStyles/Rating";
import { StyledBtn, SuperButton } from "./components/Button.styled";
import { Link } from "./components/Link.styled";
import { Menu } from "./components/Menu.styled";
import { myTheme } from "./styles/Theme.styled";
import {Layout} from './components/layout/Layout'

// function declaration
function App() {
  console.log("App is rendering");
  return (
    <div>
      <Layout>sss</Layout>
      <Menu>
        <ul>
          <li>
            <a href="">Menu Item 1</a>
          </li>
          <li>
            <a href="">Menu Item 2</a>
          </li>
          <li>
            <a href="">Menu Item 3</a>
          </li>
        </ul>
      </Menu>
      <Box>
        <StyledBtn color="black" fontSize="20px" as="a" href={"*"}>
          Link
        </StyledBtn>{" "}
        <StyledBtn color="green" as={Link} href={"/"}>
          LinkComponent
        </StyledBtn>
        <StyledBtn btnType={"primary"} active color={myTheme.colors.primary} fontSize="40px"
        >
          Hello1
        </StyledBtn>
        <StyledBtn btnType={"outlined"} color={myTheme.colors.secondary} fontSize="40px"
        >
          Hello2
        </StyledBtn>
        <StyledBtn fontSize="40px">Hello3</StyledBtn>
        <SuperButton>SuperButton</SuperButton>
      </Box>
      <input type="date" />
      <input checked={true} value={"yo"} type={"password"} />
      <PageTitle title={"This is App component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Rating value={3} />
      <Accordion title={"AccordionTitle"} collapsed={false} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("AppTitle is rendering");
  return <h1>{props.title}</h1>;
}

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }
  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`;

export default App;
