import './trendingNew.css';

export default function TrendingNew() {
    var values = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

    var nextIncrement = 0;

  let slidePrev = ()=>{
     nextIncrement += +880;
    let container = document.querySelector('.sliderContainer').style.transform = 'translateX(' + nextIncrement+ 'px)';
    
  }
  let slidenext = () =>{
    nextIncrement += -880;
    console.log("next clicked");
    let container = document.querySelector('.sliderContainer').style.transform = 'translateX(' + nextIncrement+ 'px)';
  }
  return (<>
    <div className='blackShade'></div>
    <div className="trending-new">
      <h1>Trending Now</h1>
      <div className='trendingSlider'>
        <div className='prevbtn' onClick={slidePrev}>◄</div>
        <div className='sliderThing'>
        <div className='sliderContainer'>
        {
           values.map((item, index) => (
                <div className={"dimentions " + item} key={index}></div>
                    ))
        }
        </div>
        </div>
        <div className='nextBtn' onClick={slidenext}>►</div>
      </div>
        
    </div>
    </>
  );
}