import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Modal() {
    const navigation = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            clan: "",
            description: ""
        },
        validate : (values) => {
            let error = {};

            if(values.name == ""){
                error.name = "Please enter the name"
            }

            if(values.image == ""){
                error.image = "Please enter the image"
            }

            if(values.clan == ""){
                error.clan = "Please enter the clan"
            }

            if(values.description == ""){
                error.description = "Please enter the description"
            }

            return error
        },
        onSubmit: async (values) => {
            try {
                await axios.post('https://66ba1cfdfa763ff550fad850.mockapi.io/got',values)
                navigation(-1)
            } catch (error) {
                alert("Something Went Wrong")
            }
        }
    })

    return (
        <div class="modal" style={{ display: 'block' }} >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                        </div>
                        <div class="modal-body">

                            <div className='col-lg-12'>
                                <label htmlFor="">Name</label>
                                <input
                                type="text"
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.name && 'is-invalid'}`} />
                            <span style={{color : 'red'}}>{formik.errors.name}</span>
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">Image</label>
                                <input type="text" 
                                name='image'
                                value={formik.values.image}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.image && 'is-invalid'}`} />
                            <span style={{color : 'red'}}>{formik.errors.image}</span>
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">Clan</label>
                                <input type="text"
                                name='clan'
                                value={formik.values.clan}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.clan && 'is-invalid'}`} />
                           <span style={{color : 'red'}}>{formik.errors.clan}</span>
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">Description</label>
                                <textarea
                                name='description'
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                className={`form-control ${formik.errors.description && 'is-invalid'}`} />
                         <span style={{color : 'red'}}>{formik.errors.description}</span>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <input type="submit" class="btn btn-primary" value={'Save Changes'} />
                            <button type="button" class="btn btn-secondary" onClick={() => navigation(-1)} data-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal