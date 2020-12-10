import React from 'react'

const AddReceipt = ({hideCreateVeh, removeCreate}) => {

    const submitRescipt = () => {
        console.log('test')
    }

    return(
        <div className={ `create-vehicle-main ${hideCreateVeh}` }>
          <div className="inner-create-vehicle-div">
            <div className="close-div-icon">
              <i 
                onClick = { removeCreate }
              className="fas fa-times-circle"></i>
            </div>
            <h6>Add Receipt</h6>
            <span>For GoMint</span>
            <form onSubmit={submitRescipt}>
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
                <button 
                onClick={ removeCreate }
                type="submit" className="btn-control mt-1">
                  Add Receipt
                </button>
              </form>            
            </div>
        </div>
    )
}

export default AddReceipt;