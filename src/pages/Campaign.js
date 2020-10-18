import {
    Typography,
    CircularProgress,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import TextInput from "../components/TextInput";
import ActionButton from "../components/ActionButton";
import axios from "axios";
import ImageSelect from "../components/ImageSelect";

function Campaign() {
    const [desc, changeDesc] = useState("");
    const [image, setImage] = useState(0);
    const [Message, setMessage] = useState("");
    const images = [
        {
            key: 0,
            name: "Chair",
            src: "./assets/chair.jpg"
        },
        {
            key: 1,
            name: "Chair",
            src: "./assets/chair.jpg"
        },
    ]
    const [isLoading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const backend = process.env.REACT_APP_BACKEND_URL;

    const handleDescChange = (event) => {
        changeDesc(event.target.value);
    };

    const handleSubmit = async () => {
        const url = `${backend}/campaign/add`;
        setLoading(true);
        const data = {
            description: desc,
            imageURL: images[image].src
        };
        console.log(url, data);
        if (localStorage.getItem("userType") === "L") {
            try {
                await axios.post(url, data, {
                    headers: {
                        "auth-token": localStorage.getItem("authToken")
                    }
                })
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            setLoading(false);
                        }
                    });
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } else {
            setMessage("You are not authorised as Team Leader")
            setLoading(false);
        }
    };

    useEffect(() => {
        let isLogged = localStorage.getItem("authToken");
        if (isLogged === null) {
            setRedirect(true);
        }
    })

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <div className="page-container">
            <div className="inner-data">
                <Typography variant="h3" color="primary" className="login-head">
                    Market Your Hotel Room
                </Typography>
                <ImageSelect images={images} selected={image} setSelected={setImage} />
                <form className="form">
                    <TextInput
                        id="desc"
                        label="Description"
                        type="text"
                        className="form-input"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={desc}
                        onChange={handleDescChange}
                    />
                </form>
                <br />
                <Typography variant="h5" color="secondary">
                    {Message}
                </Typography>
                <br />
                <div className="login-btn-div">
                    <ActionButton
                        className="login-btn"
                        onClick={handleSubmit}
                        disabled={isLoading ? true : false}
                    >
                        {!isLoading ? (
                            "Submit"
                        ) : (
                                <CircularProgress
                                    color="secondary"
                                    size={20}
                                    thickness={5}
                                />
                            )}
                    </ActionButton>
                </div>
            </div>
        </div>
    );
}

export default Campaign;