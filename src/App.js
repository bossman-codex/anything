import Slide from "./dontChange/Slide";
import "./styles.css";

export default function App() {
  
// so 
const myArray = [
  {
    class:"img-container img-container-1",
    image:"https://picsum.photos/seed/picsum/200/300?random=1",
    firstHeading:"hello",
    mainHeading:"help a chicken1 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-2",
    image:"https://picsum.photos/seed/picsum/200/300?random=2",
    firstHeading:"hello",
    mainHeading:"help a horse2 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-3",
    image:"https://picsum.photos/seed/picsum/200/300?random=4",
    firstHeading:"hello",
    mainHeading:"help a cow3 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-4",
    image:"https://picsum.photos/seed/picsum/200/300?random=3",
    firstHeading:"hello",
    mainHeading:"help a fish4 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-5",
    image:"https://picsum.photos/seed/picsum/200/300?random=2",
    firstHeading:"hello",
    mainHeading:"help a chicken5 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-6",
    image:"https://picsum.photos/seed/picsum/200/300?random=2",
    firstHeading:"hello",
    mainHeading:"help a chicken6 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-7",
    image:"https://picsum.photos/seed/picsum/200/300?random=2",
    firstHeading:"hello",
    mainHeading:"help a chicken7 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-8",
    image:"https://picsum.photos/seed/picsum/200/300?random=2",
    firstHeading:"hello",
    mainHeading:"help a chicken8 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-9",
    image:"https://picsum.photos/seed/picsum/200/300?random=2",
    firstHeading:"hello",
    mainHeading:"help a chicken9 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-10",
    image:"https://picsum.photos/seed/picsum/200/300?random=2",
    firstHeading:"hello",
    mainHeading:"help a chicken10 today",
    bottomText:"so be it , amen"
  },
  {
    class:"img-container img-container-11",
    image:"https://picsum.photos/seed/picsum/200/300?random=2",
    firstHeading:"hello",
    mainHeading:"help a chicken11 today",
    bottomText:"so be it , amen"
  },
]

  return (
    <div className="App">
     <Slide items={myArray}/>
    </div>
  );
}
