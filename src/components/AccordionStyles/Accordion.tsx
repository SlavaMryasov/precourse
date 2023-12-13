type AccordionPropsType = {
  title: string,
  collapsed: boolean
};

function Accordion(props: AccordionPropsType) {
  console.log("Accordion is rendering");
  if (props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.title}/>
      </div>
    );
  }
  if (!props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody />
      </div>
    );
  }else{
    return <div>че та не то</div>
  }
}

type AccordionTitlePropsType ={
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle is rendering");
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

function AccordionBody() {
  console.log("Accordion is rendering");
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default Accordion;
//
