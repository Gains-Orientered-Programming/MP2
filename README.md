# Customer Complaints Handling Workflow

## Overview

This project implements a workflow for handling customer complaints using BPMN and Camunda. It allows for the automated routing of customer complaints to the appropriate department based on the content of the complaint message. Departments include HR, Marketing, and Support. The system integrates with an external API written in TypeScript, to receive and process complaint messages.

## Diagram for Customer Complaint Process
![BPM_Diagram](https://github-production-user-asset-6210df.s3.amazonaws.com/78692409/275869494-dcbd069a-e4fe-4de1-8697-530c34e4e6d2.png)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation-for-typescript-environment)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)

## Prerequisites

Before getting started, ensure you have the following prerequisites:

- Camunda BPM Engine (configured and running)
- TypeScript environment set up
- External API for receiving complaint messages

## Installation for TypeScript Environment

1. Clone this repository to your local machine.

```bash
git clone https://github.com/Gains-Orientered-Programming/MP2.git
```

2. Navigate to the project directory.

```bash
cd MP2
```

3. Install project dependencies.

```bash
npm install
```

## Usage

1. Start the TypeScript application.

```bash
npm run dev
```

2. Configure Camunda to handle BPMN processes.

2. Set up the external API endpoint for receiving complaint messages and ensure it provides JSON messages as specified.

## Project Structure
- `src/`: TypeScript source code
- `bpmn/`: BPMN process diagrams.
- `readme.md`: This project documentation.

## Configuration
- You can configure the routing conditions in `complaintHandler.ts` to match your specific departmental requirements.
- Ensure that the Camunda Engine is correctly configured to manage BPMN processes



