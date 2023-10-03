const Shimmer=()=>{
    return(
        <div className="shimmer-container">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="shimmer-cards">
          <div className="shimmer-image"></div>
          {[1, 2, 3, 4].map((textIndex) => (
            <div key={textIndex} className={`shimmer-text${textIndex}`}></div>
          ))}
        </div>
      ))}
    </div>
    )
}
export default Shimmer