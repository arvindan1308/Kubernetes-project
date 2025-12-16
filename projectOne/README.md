# 📔 Persistent Full-Stack Guestbook on Kubernetes (Intermediate)

This project demonstrates an intermediate-level Kubernetes deployment of a persistent Guestbook application. It moves beyond basic stateless apps by implementing **Data Persistence**, **Advanced Networking via Ingress**, and **Application Health Monitoring**.

## 🚀 Key Intermediate Features
- **Data Persistence**: Integrated **Persistent Volume Claims (PVC)** to ensure Redis data survives pod restarts and cluster crashes.
- **Advanced Networking (Ingress)**: Configured an **NGINX Ingress Controller** to route traffic via a custom domain (`guestbook.local`) instead of manual port-forwarding.
- **Self-Healing (Probes)**: Implemented **Liveness and Readiness Probes** to monitor application health and automate container restarts during freezes.
- **Stateful Management**: Managed storage lifecycles separately from the compute lifecycle.



## 🛠️ Tech Stack
- **Orchestration**: Kubernetes (Minikube)
- **Ingress Controller**: NGINX Ingress
- **Storage**: Kubernetes Persistent Volumes
- **Database**: Redis (Stateful)
- **Frontend**: PHP/Python Guestbook

## 📖 Deployment Guide (macOS)

### 1. Enable Required Addons
Minikube requires specific addons to handle Ingress and Storage on Mac:
```bash
minikube addons enable ingress
minikube addons enable storage-provisioner
2. Start the Cluster
Bash

minikube start --driver=docker --memory 4096 --cpus 2
3. Deploy the Manifests
Apply the configurations in order (Storage -> Database -> Frontend -> Ingress):

Bash

kubectl apply -f .
4. Configure Local DNS
To access the app via guestbook.local, map the Minikube IP in your hosts file:

Get IP: minikube ip

Run: sudo nano /etc/hosts

Add line: [MINIKUBE_IP] guestbook.local

🔍 Verification & Testing Persistence
Access the app: Go to http://guestbook.local in your browser.

Add Data: Write a message in the guestbook.

Test Persistence:

Delete the Redis pod: kubectl delete pod -l app=redis

Wait for K8s to recreate the pod.

Refresh the browser; your data will still be there thanks to the PVC.

Monitor Health: Run kubectl describe pod redis to see the Liveness Probes in action.