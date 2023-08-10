import * as React from "react";
import { useState } from "react";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import "../styles/mainmenu.css";
import "../styles/buttonStyle.css";
import "../styles/list.css";
import { useNavigate } from "react-router-dom";
import "./chat-window";

export const MainMenu = () => {
  const [userList, setUserList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showList, setShowList] = useState(true);
  const navigate = useNavigate();
  let tempList = userList;

  function onSubmit(data) {

    let name = data["answers"]["kd12edg"]["value"];
    let description = data["answers"]["m35612edg"]["value"];
    let newPerson = { name: name, description: description };

    tempList.push(newPerson);
    setUserList(tempList);
    console.log(userList);
    setShowForm(false);
    setShowButton(true);
    setShowList(true);
  }

  function AddButtonClicked() {
    setShowList(false);
    setShowForm(true);
    setShowButton(false);
  }

  const SubmitButtonClicked = () => {
    console.log("Submit Clicked");
    console.log(userList);
    console.log("Stringified: ", JSON.stringify(userList));
    console.log("Convo starting");
    let params = { list: JSON.stringify(userList) };
    navigate("/chat", { state: params });
  };

  return (
    <div className="screen">
      {showForm && (
        <div className="Form">
          <Form
            formId="1"
            formObj={{
              theme: {
                backgroundColor: "#181818",
                questionsColor: "#f5f5f5",
                answersColor: "#64CCC5",
                buttonsBgColor: "#00ABB3",
              },
              settings: {
                disableProgressBar: true,
              },
              blocks: [
                {
                  name: "short-text",
                  id: "kd12edg",

                  attributes: {
                    classnames: "first-block",
                    required: true,
                    label: "Enter the name of your character",
                  },
                },
                {
                  name: "long-text",
                  id: "m35612edg",

                  attributes: {
                    setMaxCharacters: true,
                    required: true,
                    label: "Type a brief about the character (minimum 50 words)",
                  },
                },
              ],
            }}
            onSubmit={(
              data,
              { goToBlock, setIsSubmitting }
            ) => {
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
        </div>
      )}
      {showList && (
        <div className="list-container">
          {userList.map((item) => (
            <div key={item.id} className="list-item">
              <h2>{"Name: " + item.name}</h2>
              <p></p>
            </div>
          ))}
        </div>
      )}
      {showButton && (
        <div className="button-container">
          <button className="add-button" onClick={AddButtonClicked}>
            Add Person
          </button>
          <button className="submit-button" onClick={SubmitButtonClicked}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
