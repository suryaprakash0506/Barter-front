

import React, { useState } from 'react'
import "../css/UploadSettings.css"
import { Link } from 'react-router-dom'

const UploadSettings = () => {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        tags: [],
        tools: [],
        category: []
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // create the data object with the input values
        const data = {
            title: formData.title,
            image: formData.image,
            tags: formData.tags,
            tools: formData.tools,
            category: formData.category
        };
        // make a POST request with the data object as the request body
        fetch('/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <div className="settings_outer_div">
                <div className="setting_body">

                    <div className="setting_mainBody">

                        <div className="settings_left_div">
                            <h3>Project Cover <span>(required)</span></h3>
                            <div className="settings_image_div">
                                <button>Upload Image</button>
                                <p>Minimum size of "808x632px"</p>
                                <p>GIF file will not animate</p>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    placeholder="Image URL"
                                    required
                                />
                            </div>
                        </div>

                        <div className="settings_right_div">
                            <div className="settings_rightInput">
                                <p className="">Project Title</p>
                                <input
                                    className="input"
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Give your project a title"
                                    required
                                />
                            </div>
                            <div className="settings_rightInput">
                                <p className="">Project Tags <span>(up to 10)</span></p>
                                <input
                                    className="input"
                                    type="text"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleInputChange}
                                    placeholder="Add up to 10 keywords to help people discover your project"
                                    maxLength={100}
                                />
                            </div>
                            <div className="settings_rightInput">
                                <p className="">Tools Used</p>
                                <input
                                    className="input"
                                    type="text"
                                    name="tools"
                                    value={formData.tools}
                                    onChange={handleInputChange}
                                    placeholder="What software, hardware, or materials did you use?"
                                    maxLength={100}
                                />
                            </div>
                            <div className="settings_rightCheckbox">
                                <p>How would you categorize this Project? <span>(required)</span></p>
                                <ul>
                                    <li>
                                        <div>
                                            <input
                                                type="checkbox"
                                                onChange={handleInputChange}
                                                name="category"
                                                value={"Graphic design"}
                                            />
                                            <p>Graphic design</p>
                                        </div>
                                        <div>
                                        <input
                                                type="checkbox"
                                                onChange={handleInputChange}
                                                name="category"
                                                value={"Illustration"}
                                            />
                                            <p>Illustration</p>
                                        </div>
                                        <div>
                                        <input
                                                type="checkbox"
                                                onChange={handleInputChange}
                                                name="category"
                                                value={"Photography"}
                                            />
                                            <p>Photography</p>
                                        </div>

                                    </li>
                                    <li>
                                        <div>
                                        <input
                                                type="checkbox"
                                                onChange={handleInputChange}
                                                name="category"
                                                value={"Interaction Design"}
                                            />
                                            <p>Interaction Design</p>
                                        </div>
                                        <div>
                                        <input
                                                type="checkbox"
                                                onChange={handleInputChange}
                                                name="category"
                                                value={"Fashion"}
                                            />
                                            <p>Fashion</p>
                                        </div>
                                        <div>
                                        <input
                                                type="checkbox"
                                                onChange={handleInputChange}
                                                name="category"
                                                value={"Product Design"}
                                            />
                                            <p>Product Design</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                        <input
                                                type="checkbox"
                                                onChange={handleInputChange}
                                                name="category"
                                                value={"Architecture"}
                                            />
                                            <p>Architecture</p>
                                        </div>
                                        <div>
                                        <input
                                                type="checkbox"
                                                onChange={handleInputChange}
                                                name="category"
                                                value={"Advertising"}
                                            />
                                            <p>Advertising</p>
                                        </div>
                                        <div>
                                        <input
                                                type="checkbox"
                                                onChange={handleInputChange}
                                                name="category"
                                                value={"Designs"}
                                            />
                                            <p>Designs</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="settings_rightSelecter">

                                <form action="">
                                    <p>Visibility</p>
                                    <select name="language" id="language">
                                        <option value="javascript">Private</option>
                                        <option value="java" selected>Everyone</option>
                                    </select>

                                </form>

                            </div>
                        </div>
                    </div>

                    <div className="settings_mainButton">
                        <div className="settings_btn1">
                            <Link to="/upload">
                                <button className="setting_btnCancel" type="button" target="_self" role="button">Cancel</button>
                            </Link>
                        </div>
                        <div className="settings_btn2">
                            <Link>
                                <button className="setting_btnDraft" type="button" target="_self" role="button">Save as draft</button>
                            </Link>
                        </div>
                        <div className="settings_btn3">
                            <Link>
                                <button className="setting_btnPublish" type="button" target="_self" onClick={handleFormSubmit} role="button">Publish</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadSettings