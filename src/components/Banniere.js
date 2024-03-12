
import '../styles/Banniere.css'
import { BanniereList } from '../datas/BanniereList'


function Banniere(){
    return(
        <div className="principal">
            {BanniereList.map((list) =>
                <div className={list.title}>
                    <h1>{list.title.toUpperCase()}</h1>
                    <p>{list.content}</p>
                </div>
            )}
        </div>
    )
}
export default Banniere