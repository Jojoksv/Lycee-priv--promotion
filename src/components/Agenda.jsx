
import '../styles/Agenda.css'
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
                    <div className='thirdDiv'>
                        <div className='third1Div'>
                            <a href='' className='theA'><h3 href='' className='firstA'>{list.date} : {list.titre}</h3>
                            <p className='para1'>›</p></a>
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
                {ActualitesList.map((list) =>
                    <div className='thirdDiv'>
                        <div className='third2Div'>
                            <a href=''>
                                <h3 href='' className='the2A'>{list.titre} : {list.date}
                                </h3>
                            </a>
                            <p>{list.detail}</p>
                            <img className='image' src={list.url} alt='' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}export default Agenda