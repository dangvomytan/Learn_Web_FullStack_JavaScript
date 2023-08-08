import { image } from '../../assets/image'
import './NotFound.Page.css'


const NotFoundPage:React.FC = () => {
  return (
    <div className="notFound_Body">
     <img src={image.NotFound}/>
    </div>
  )
}

export default NotFoundPage