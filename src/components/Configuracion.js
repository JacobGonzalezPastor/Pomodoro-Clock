import React, { useContext } from 'react';
import ConfigContext from './ConfigContext';
import ReactSlider from 'react-slider';
import '../style/Silder.css';
import '../style/Config.css'
const Configuracion = () => {
    const ConfigInfo = useContext(ConfigContext)
  return (
    <div className="accordion" id="accordionExample">
    <div className="accordion-item container-settings">
        <h2 class="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i className="bi bi-gear-fill me-2" />
                Configuración
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <label>Work: {ConfigInfo.workMin}:00</label>
                <ReactSlider
                  className={'slider'}
                  thumbClassName={'thumb'}
                  trackClassName={'track'}
                  value={ConfigInfo.workMin}
                  min={1}
                  max={120}
                  onChange={newValue => ConfigInfo.setWorkMin(newValue)}
                  />
                <br />
                <label>Break: {ConfigInfo.breakMin}:00</label>
                <ReactSlider
                  className={'slider blue'}
                  thumbClassName={'thumb'}
                  trackClassName={'track'}
                  value={ConfigInfo.breakMin}
                  min={1}
                  max={120}
                  onChange={newValue => ConfigInfo.setBreakMin(newValue)}
                  />
            </div>
        </div>
    </div>
  </div>
  )
}

export default Configuracion