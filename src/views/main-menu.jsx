import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import '../styles/buttonStyle.css'

const FormSubmit = () => {
    // State to keep track of the list of users
    const [userList, setUserList] = useState([]);
    let userListCopy = userList;


    return (
        <div>
            <h1>{"Hello World"}</h1>
        </div>
    )
}

export const MainMenu = () => {
    return (
            <div className='UserDisplay'>
                <FormSubmit></FormSubmit>
            </div>
            // {/* <div className="button-container">
            //     <button className="bottom-right-button">Click Me</button>
            // </div> */}
    );
  };
  