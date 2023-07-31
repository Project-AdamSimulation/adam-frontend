import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
// import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import '../styles/buttonStyle.css'
import '../styles/list.css'
// import { setIsFieldValid } from '@quillforms/renderer-core/build-types/store/actions';
// import { UserForm } from './person-form';
// import { setIsSubmitting } from '@quillforms/renderer-core/build-types/store/actions';
// import { resetAnswers, setFieldAnswer } from '@quillforms/renderer-core/build-types/store/actions';
// import { resetAnswers } from '@quillforms/renderer-core/build-types/store/actions';
// import { completeForm } from '@quillforms/renderer-core/build-types/store/actions';
// import { goToBlock } from '@quillforms/renderer-core/build-types/store/actions';


export const MainMenu = () => {

    const [userList, setUserList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [showList, setShowList] = useState(true)
    let tempList = userList;
    
    function onSubmit(data) {
        console.log("HAHAHAHAHAHAHAHAH");
        console.log(data['answers']);
        let name = data['answers']['kd12edg']['value'];
        let description = data['answers']['m35612edg']['value'];
        let newPerson = {name : name, description : description, displayDescription : ""};
        if (description.length < 20) {
            newPerson.displayDescription = description;
        }
        else {
            newPerson.displayDescription = description.substring(0, 20) + "..."
        }
        tempList.push(newPerson);
        setUserList(tempList);
        console.log(userList);
        setShowForm(false);
        setShowButton(true);
        setShowList(true);
        // tempList.push()
    }

    function addButtonClicked() {
        setShowList(false);
        setShowForm(true);
        setShowButton(false)
    }


    return (
            <div className='UserDisplay'>
                {showList && <div className="list-container">
                    {userList.map((item) => (
                        <div key={item.id} className="list-item">
                            <h2>{"Name: " + item.name}</h2>
                            <p>{"Description: " + item.displayDescription}</p>
                            <p></p>
                        </div>
                    ))}
                </div>}
                {showForm && <div className='Form' style={{ width: "100%", height: "100vh" }}>
                    <Form
                        formId="1"
                        formObj={{
                            settings: {
                                disableProgressBar: true
                            },
                            blocks: [
                                {
                                    name: "short-text",
                                    id: "kd12edg",
                                
                                    attributes: {
                                        classnames: "first-block",
                                        required: true,
                                        label: "Enter the name of your character",
                                    }
                                    
                                },
                                {
                                    name: "long-text",
                                    id: "m35612edg",

                                    attributes: {
                                        setMaxCharacters: true,
                                        required: true,
                                        label: "Type a brief about the character"
                                    }
                                },
                            ],
                        }}
                        onSubmit={(data, {completeForm, goToBlock, setIsSubmitting, setIsReviewing}) => {
                            setTimeout(() => {
                                console.log(data);
                                // completeForm();
                                // completeForm();
                                goToBlock("kd12edg");
                                setIsSubmitting(false);
                                // setIsReviewing(true);
                                // resetAnswers();
                                onSubmit(data);
                            }, 500);
                        }}
                        // beforeGoingNext={
                        //     (
                        //         {setIsFieldValid, goNext, answers, currentBlockId, }
                        //     ) => {
                        //         console.log("----");
                        //         console.log(answers);
                        //         console.log("====");
                        //         answers = NaN;
                        //         // currentBlockId
                        //         goNext();
                        //     }
                        // }
                    />
                </div>}
                {showButton && <div className="button-container">
                    <button className="bottom-right-button" onClick={addButtonClicked}>Click Me</button>
                </div>}
            </div>
    );
  };
  