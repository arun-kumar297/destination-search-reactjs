// Write your code here
import './index.css'

const DestinationItem = props => {
  const {cardDetails} = props

  const {name, imgUrl} = cardDetails

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
