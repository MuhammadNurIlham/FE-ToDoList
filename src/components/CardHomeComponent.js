import React from 'react';
import { FaPlus } from "react-icons/fa";

import FormInputAtom from './atoms/FormInputAtom';
import AddCategoryModal from './modals/AddCategoryModal';
import AddListModal from './modals/AddListModal';

function CardHomeComponent() {

    const styleInput = {
        background: "#E1DEDE",
        borderRadius: "6px",
        border: "none"
    };

    return (
        <div className='container py-5'>
            <div className='row'>

                <div className='col-md-4 py-5 ps-5 page-category'>
                    <p className='titleTask'>All Tasks</p>

                    <p className='listCategory'>Favorite</p>
                    <p className='listCategory'>Work</p>
                    <p className='listCategory'>Study</p>

                    <AddCategoryModal buttonModalCategory="New Category" titleModalCategpry="Add Category" />

                </div>

                <div className='col ps-5'>
                    <p className='titleTasks'>All Tasks</p>
                    <FormInputAtom
                        type="text"
                        name="addTask"
                        placeholder="Add a new task"
                        style={styleInput}
                    />

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <AddListModal buttonAddListModal="Add" titleListModal="Add To Do List" />
                    </div>

                    <div className="form-check py-3">
                        <input className="form-check-input" type="checkbox" value="checked" id="flexCheckDefault" />
                        <label className="form-check-label text-decoration-line-through" for="flexCheckDefault">
                            Continues learning Javascript <span class="badge bg-primary">Work</span>
                        </label>
                    </div>

                    <div className="form-check py-3">
                        <input className="form-check-input" type="checkbox" value="checked" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Continues learning Javascript <span class="badge bg-success">Study</span>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardHomeComponent;