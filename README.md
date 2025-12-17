# 🏗️ Kubernetes Demo Projects

This repository contains two **intermediate-to-advanced Kubernetes projects**, each showcasing different aspects of cloud-native application deployment:

---

## 📂 Projects Overview

### 1️⃣ Global-Retail-Core
**Folder:** `global-retail-core`  

A full-stack **enterprise microservices application** deployed on Kubernetes with:

- Python Product API & Node.js Order Service
- MongoDB with Persistent Volume Claims (PVC)
- Path-based routing using NGINX Ingress
- Cluster monitoring with Prometheus & Grafana
- Local development optimized for Minikube  

> See the detailed README inside [`global-retail-core/README.md`](global-retail-core/README.md)

---

### 2️⃣ Persistent Voting App
**Folder:** `persistent-voting-app`  

An **intermediate-level voting application** demonstrating:

- Stateful services using Redis with PVC
- Application persistence across pod restarts and deletions
- Ingress-based networking with a custom local domain
- Liveness and readiness probes for self-healing
- Local deployment using Minikube  

> See the detailed README inside [`persistent-voting-app/README.md`](persistent-voting-app/README.md)

---

## 📌 Repository Structure (Summary)

.
├── global-retail-core/ # Enterprise microservices project
├── persistent-voting-app/ # Stateful voting application
└── README.md # This summary file

---

## 🚀 Getting Started

Each project has its own **README with setup instructions**.  
Clone this repository and follow the instructions in the respective folders to deploy the applications locally on Minikube.
