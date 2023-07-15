import React from 'react'

export default function AdminMenu() {
  return (
    <div>
      <div className="input-group ms-sm-4 ms-md-4" style={{marginTop:"100px"}}>
        <div className="width-setting-of-input">
            <input type="text mx-2" className="form-control my-3" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group-append">
          <button className="btn btn-success mx-2 my-3" type="button">Add Item</button>
          <button className="btn btn-warning mx-2 my-3" type="button">Update Item</button>
          <button className="btn btn-danger mx-2 my-3" type="button">Delete Item</button>
        </div>
    </div>

    <h3 className="ms-sm-4 ms-md-4 mt-2">Category</h3>
    <hr/>

    <div className="container">
        <div className="row">
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2">
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" >
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>

            <div className="card col-sm-12 col-lg-4 mx-2 my-2" style={{width:"400px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    ITEM NAME
                                </td>
                                <td>
                                    : MUTTON CURRY WITH RICE
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PRICE
                                </td>
                                <td>
                                    : 150
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CATEGORY
                                </td>
                                <td>
                                    : NON VEG.
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                
            
                    <button className='btn btn-danger me-2'>DELETE</button>
                    <button className='btn btn-primary'><p className= "card-text">UPDATE</p></button>
                    <hr/>
                </div>
            
            
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" style={{width:"400px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    ITEM NAME
                                </td>
                                <td>
                                    : MUTTON CURRY WITH RICE
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PRICE
                                </td>
                                <td>
                                    : 150
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CATEGORY
                                </td>
                                <td>
                                    : NON VEG.
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                
            
                    <button className='btn btn-danger me-2'>DELETE</button>
                    <button className='btn btn-primary'><p className= "card-text">UPDATE</p></button>
                    <hr/>
                </div>
            
            
            </div>
            <div className="card col-sm-12 col-lg-4 mx-2 my-2" style={{width:"400px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    ITEM NAME
                                </td>
                                <td>
                                    : MUTTON CURRY WITH RICE
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PRICE
                                </td>
                                <td>
                                    : 150
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CATEGORY
                                </td>
                                <td>
                                    : NON VEG.
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                
            
                    <button className='btn btn-danger me-2'>DELETE</button>
                    <button className='btn btn-primary'><p className= "card-text">UPDATE</p></button>
                    <hr/>
                </div>
            
            
            </div>
    </div>
    </div>
    </div>
  )
}
