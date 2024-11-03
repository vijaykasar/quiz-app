# Quiz App API

## Overview

The Quiz App is a RESTful API that allows users to create and manage quizzes. Users can answer multiple-choice questions and receive feedback on their performance. This application is built using TypeScript and Node.js with Express.

## Features

- Create quizzes with multiple-choice questions.
- Fetch quizzes without revealing correct answers.
- Submit answers and receive immediate feedback.
- Get results and performance summary for quizzes.

## Technologies Used

- Node.js
- Express
- TypeScript
- Supertest (for testing)
- Docker

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Docker (for running the application in a container)

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/vijaykasar/quiz-app.git
    cd quiz-app
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

## Development Setup

1. **Build the Project**

    Compile the TypeScript files:

    ```bash
    npm run build
    ```

2. **Run the Application**

    Start the application in development mode:

    ```bash
    npm run start
    ```

    The server should now be running at `http://localhost:3000`.

## Running with Docker

1. **Build and Run Docker Container**

    ```bash
    docker-compose up --build
    ```
