export default function LoadingPlaceHolder() {
  function getRandomNumber() {
    const random = (Math.random() * 1.5) + 0.5;
    return Math.round(random * 10) / 10;
  }

  const arr = Array.from({ length: 20 }, (_, i) => i + 1);
  const aspectRatios = Array.from({ length: 20 },getRandomNumber) ;
 

  return (
    <>
      {arr.map((_, index) => (
        <div
          key={index}
          className="masonry-item rounded-lg skeleton"
          style={{aspectRatio:aspectRatios[index]}}
          
        ></div>
      ))}
    </>
  );
}