# Project Adam

This is a project which simulates a conversation between fictional characters that are freely defined by the user. The user can provide information about the character such as their name and some attributes using a fully **responsive** and **animated** form interface that has been built using **react**.

Here is how it works:
  1. The user inputs the details of the character by clicking on the add button.
  
  <img width="893" alt="Screenshot 2023-08-22 at 3 18 30 PM" src="https://github.com/Project-AdamSimulation/adam-frontend/assets/83650351/e7b205b1-1c49-42f1-807f-39708872e548">
  <img width="893" alt="Screenshot 2023-08-22 at 3 19 02 PM" src="https://github.com/Project-AdamSimulation/adam-frontend/assets/83650351/b7b32207-4e97-490d-a597-9c16a2158599">
  
  2. After adding the required characters, the user can click on the submit button to start the simulation.
The project then connects to a backend server hosted on render using a websocket to send the initial details of the users.
  
  3. The backend server uses OpenAI's **GPT-3 API** to simulate a conversation between the characters by first providing them with a randomly generated topic, while also providing room for the characters to voice their own thoughts and remark on the topics that are currently being talked about in order to ensure an organically developed conversation. 

  4. The resulting conversation is streamed through the websocket to the frontend where it is rendered in real time in a list to show to the end user.

## Some Backstory

I first had the idea for this project when I was thinking about **trains of thought**, and how sometimes one thought can organically lead into more unique, different thoughts which often times turns into daydreaming. I wanted to replicate that using OpenAI's GPT3 API where I fed its own outputs into itself using **Node** and some clever **prompts**.

While the project itself does have limited practical use, I still worked on it as an interesting experiment on the nature of human conversations and thought, I also saw it as a learning opportunity to learn more about **GPT3** and **prompt engineering**.

Here is an example of a conversation between 5 user defined characters.

<img width="1100" alt="Screenshot 2023-08-22 at 3 35 03 PM" src="https://github.com/Project-AdamSimulation/adam-frontend/assets/83650351/8f22b51f-db9a-456f-b9a4-d5bf6735707a">

## Live Demo
Be sure to try this project out by yourself [here](https://project-adamsimulation.github.io/adam-frontend/).
