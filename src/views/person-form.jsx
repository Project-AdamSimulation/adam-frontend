import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { useFormAnswers } from "@quillforms/renderer-core";

// registerCoreBlocks();
export const UserForm = ({onSubmitFunction}) => {
    console.log("hello world");
    return (
        <div className="mainmenu">
            <div style={{ width: "100%", height: "100vh" }}>
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
                                label: "Enter the name of your character"
                            }
                            },
                            {
                                name: "long-text",
                                id: "m35612edg",
                                attributes: {
                                required: true,
                                label: "Type a brief about the character"
                                }
                            },
                        ],
                    }}
                    onSubmit={(data, { onSubmitFunction, setIsSubmitting, goToBlock, setSubmissionErr }) => {
                    setTimeout(() => {
                        setIsSubmitting(false)
                        console.log(data);
                        onSubmitFunction();
                    }, 500);
                    }}
                />
            </div>
        </div>
    )
}