type RaitingPropsType = {
  value: number
}

function Rating(props: RaitingPropsType){
    console.log('Raiting rendering')

    if(props.value === 1){
      return(
        <div>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        </div>
      )
    } 
    if(props.value === 2){
      return(
        <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        </div>
      )
    } 
    if(props.value === 3){
      return(
        <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        </div>
      )
    } 
    if(props.value === 4){
      return(
        <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        </div>
      )
    } 
    if(props.value === 5){
      return(
        <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        </div>
      )
    } 
   
      return(
        <div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        </div>
      )
    
  }
  

type StarPropsType = {
  selected: boolean
}

  function Star(props: StarPropsType) {
    console.log('Star is rendering')
    if(props.selected){
      return <span><b>Star </b></span>
    }
    else{
     return <span>Star </span>
    }

  }
  
  export default Rating;