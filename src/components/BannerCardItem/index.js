// Write your code here.
const BannerCardItem = props => {
  const {bannerCardsData} = props
  const {headerText, description, className} = bannerCardsData

  return (
    <div className={`banner-card-container ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show more
        </button>
      </div>
    </div>
  )
}

export default BannerCardItem
