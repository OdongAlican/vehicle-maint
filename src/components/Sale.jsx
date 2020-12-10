import React from 'react'

const Sale = ({hideSale, removeCreate}) => {

    const submitRescipt = () => {
        console.log('test')
    }

    return(
        <div className={ `create-vehicle-main ${hideSale}` }>
          <div className="inner-create-vehicle-div">
            <div className="close-div-icon">
              <i 
                onClick = { removeCreate }
              className="fas fa-times-circle"></i>
            </div>
            <h6>New Owner</h6>
            <form onSubmit={submitRescipt}>
                <input
                  type="text"
                  placeholder="New Owner Name"
                  className="input-control mb-2"
                />
                <input
                  type="email"
                  placeholder="New Owner Email"
                  className="input-control"
                />
                <input
                  type="number"
                  placeholder="Services Time"
                  className="input-control"
                />
                <button 
                onClick={ removeCreate }
                type="submit" className="btn-control mt-1">
                  Save Owner
                </button>
              </form>            
            </div>
        </div>
    )
}

export default Sale;