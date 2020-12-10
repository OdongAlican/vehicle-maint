import React from 'react'

const AddHistory = ({hideService, removeCreate}) => {

    const submitRescipt = () => {
        console.log('test')
    }

    return(
        <div className={ `create-vehicle-main ${hideService}` }>
          <div className="inner-create-vehicle-div">
            <div className="close-div-icon">
              <i 
                onClick = { removeCreate }
              className="fas fa-times-circle"></i>
            </div>
            <h6>Vehicle Services</h6>
            <form onSubmit={submitRescipt}>
                <input
                  type="text"
                  placeholder="Services Title(eg Front Brake)"
                  className="input-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Mechanic Name"
                  className="input-control"
                />
                <input
                  type="text"
                  placeholder="Services Title"
                  className="input-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Services Time"
                  className="input-control"
                />
                <textarea 
                className="history-text-area"
                placeholder="Type Something"
                cols="30" rows="5"></textarea>
                <button 
                onClick={ removeCreate }
                type="submit" className="btn-control mt-2">
                  Save History
                </button>
              </form>            
            </div>
        </div>
    )
}

export default AddHistory;