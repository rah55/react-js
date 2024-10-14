
const Loader = () => {
  return (
    <div className="body-items">
      {Array(20)
        .fill("")
        .map((e,index) => 
          <div className="shimmerCard" key={index}>
             
          </div>
         
        )}
    </div>
  );
};
export default Loader;
