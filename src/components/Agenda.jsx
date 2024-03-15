
import '../styles/Agenda.css'
import { Link } from 'react-router-dom'
import { AgendaList } from '../datas/AgendaList'
import { ActualitesList } from '../datas/ActualiteList'


function Agenda(){
    return(
        <div className='mainDiv'>
                <div className='secondDiv'>
                    <div className='head'>
                        <div className='ligne'></div>
                        <span>AGENDA</span>
                        <div className='ligne'></div>
                    </div>
                {AgendaList.map((list) =>
                    <div className='thirdDiv' key={list.id}>
                        <div className='third1Div'>
                            <Link to='#' className='theA'>
                                <h3 href='' className='firstA'>{list.date} : {list.titre}</h3>
                                <p className='para1'>›</p>
                            </Link>
                        </div>
                        {list.detail ?
                        <p className='para2'>{list.detail}<br/>{list.horaire}</p> : null
                        }
                    </div>
                )}
            </div>


            <div className='secondDiv'>
                    <div className='head'>
                        <div className='ligne'></div>
                        <span>ACTUALITES</span>
                        <div className='ligne'></div>
                    </div>
                {ActualitesList.map((item) =>
                    <div className='thirdDiv' key={item.id}>
                        <div className='third2Div'>
                            <Link to='#'>
                                <h3 href='' className='the2A'>{item.titre} : {item.date}
                                </h3>
                            </Link>
                            <p>{item.detail}</p>
                            <img className='image' src={item.url} alt='' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}export default Agenda