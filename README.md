# PQsimulator

PQsimulator is an IoT-based Power Quality Monitoring Simulator designed to simulate and analyze power line parameters. Built with Python, the simulator acts as a prototype environment for understanding voltage, current, frequency, and power quality metrics before real sensor integration.

## Features

- Simulates key electrical parameters using dummy data
- Displays real-time values in the console
- Modular codebase for sensor and UI integration in later phases
- Suitable for engineering education and prototyping

## Architecture Overview

Dummy Data Generator → Core Simulator → Console Output Renderer

Future versions will include a web-based dashboard, real sensor feeds via MQTT/HTTP, and analytics with machine learning.

## Requirements

- Python 3.10 or higher
- rich (for terminal formatting)

Install dependencies:

pip install -r requirements.txt


## Running the Simulator

Run the main script:


This will start printing simulated power line parameters in the terminal.

## Project Structure

PQsimulator/
├── data/              - Dummy data sources  
├── core/              - Simulation engine  
├── utils/             - Helper functions  
├── main.py            - Entry point  
├── requirements.txt   - Python packages  
└── README.md          - Project documentation

## Use Cases

- Educational simulations in power engineering
- Prototype for IoT energy monitoring systems
- Testing and visualization of power quality concepts
- Smart grid R&D

## Roadmap

Phase 1: Dummy data simulation and console output - Completed  
Phase 2: Real-time sensor integration - Upcoming  
Phase 3: Web dashboard with charts and metrics - Upcoming  
Phase 4: AI/ML-powered anomaly detection - Upcoming

## Author

Elly Lesanjore  
BSc. Electrical and Electronic Engineering  
Chair, Coastal Region Samburu University Students Association

## License

This project is licensed under the MIT License.

## Acknowledgements

Thanks to fellow engineers, Samburu peers, OpenAI, and the supportive academic community that shaped this project.

