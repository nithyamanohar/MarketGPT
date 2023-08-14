# MarketGPT Competitor Research Agent

This project implements a competitor research agent using LangChain, a vector database, React frontend, and a CI/CD pipeline. The aim of this assignment was to conduct competitor research on ChurnZero and develop an interactive system that provides insights into the company's offerings.

## Project Overview

The project involved the following steps:

1. **Data Collection and Preprocessing**: Publicly available resources related to ChurnZero, such as their official website, blog posts, and YouTube videos, were collected. LangChain was employed to preprocess these resources, extracting relevant information and preparing it for analysis.

2. **Vector Database Creation**: The preprocessed data was stored in a vector database. This database enables efficient querying and retrieval of information for analysis and response generation.

3. **GPT-3.5 Language Model**: The GPT-3.5 language model was used for in-depth analysis and response generation. The preprocessed data was inputted into the model to generate insights and informative responses based on the model's knowledge.

4. **React Frontend**: A user-friendly React frontend interface was developed. Users can input questions related to ChurnZero, and the system utilizes the processed data and the GPT-3.5 model to provide informative answers.

5. **CI/CD Pipeline Implementation**: A Continuous Integration/Continuous Deployment (CI/CD) pipeline was established to automate the deployment process and ensure consistent and reliable updates to the project. This pipeline simplifies the deployment process and reduces the chance of errors.

## Getting Started

1. Clone the repository: `git clone <repository_url>`

2. Set up API keys:
   - Obtain API keys from OpenAI and Google Developers Console.
   - Set the API keys as environment variables:
     ```bash
     export OPENAI_API_KEY=<your_openai_api_key>
     export YOUTUBE_API_KEY=<your_youtube_api_key>
     ```

3. Frontend Setup:
   - Navigate to the `frontend` directory: `cd frontend`
   - Install dependencies: `npm install`

4. Backend Setup:
   - Navigate to the `backend` directory: `cd backend`
   - Install dependencies: `pip install -r requirements.txt`

5. Run the Application:
   - Start the frontend: `npm start` in the `frontend` directory
   - Start the backend: `uvicorn main:app --reload` in the `backend` directory

6. Access the Application:
   - Open a web browser and go to `http://localhost:3000` to access the React frontend.

## CI/CD Pipeline

The project incorporates a CI/CD pipeline to streamline the deployment process. The pipeline automates testing, building, and deploying the application. It ensures that updates are thoroughly tested and deployed consistently.

The CI/CD pipeline includes the following stages:

1. **Linting and Testing**: Code quality is checked using linting tools, and automated tests are executed to ensure the correctness of the code.

2. **Building**: The frontend code is built to create optimized and production-ready assets.

Steps to be implemented in the future

3. **Dockerization**: The application is containerized using Docker to ensure consistency and portability.

4. **Deployment**: The Docker image is deployed to a cloud service or a server using a cloud-based container orchestration platform.

## Conclusion

The MarketGPT Competitor Research Agent provides valuable insights into ChurnZero's offerings and capabilities. By utilizing LangChain, the GPT-3.5 language model, and a user-friendly frontend, users can easily gather information and engage with the system. The integrated CI/CD pipeline ensures efficient deployment and maintenance of the application.
