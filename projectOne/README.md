# 📔 Persistent Full-Stack Guestbook on Kubernetes (Intermediate)

This project demonstrates an **intermediate-level Kubernetes deployment** of a **persistent Guestbook application**.  
It goes beyond basic stateless workloads by implementing **data persistence**, **Ingress-based networking**, and **application health monitoring**.

The application is deployed locally using **Minikube** and showcases best practices for managing **stateful services** in Kubernetes.

---

## 🚀 Key Intermediate Features

### 🔒 Data Persistence
- Integrated **Persistent Volumes (PV)** and **Persistent Volume Claims (PVC)**
- Ensures Redis data survives:
  - Pod restarts
  - Pod deletions
  - Cluster crashes

### 🌐 Advanced Networking (Ingress)
- Configured **NGINX Ingress Controller**
- Routes traffic via a custom domain:  
  **`guestbook.local`**
- Eliminates the need for manual port-forwarding

### ♻️ Self-Healing with Probes
- **Liveness Probes** automatically restart frozen containers
- **Readiness Probes** ensure traffic is sent only to healthy pods

### 🧠 Stateful Management
- Storage lifecycle is decoupled from compute lifecycle
- Redis runs as a **stateful service**

---

## 🛠️ Tech Stack

| Component        | Technology |
|------------------|------------|
| Orchestration    | Kubernetes (Minikube) |
| Ingress          | NGINX Ingress Controller |
| Storage          | Kubernetes PV & PVC |
| Database         | Redis (Stateful) |
| Frontend         | PHP / Python Guestbook App |

---

## 📖 Deployment Guide (macOS)

### 1️⃣ Enable Required Minikube Addons

Minikube requires specific addons for Ingress and Storage provisioning:

```bash
minikube addons enable ingress
minikube addons enable storage-provisioner

2️⃣ Start the Minikube Cluster
Allocate enough resources for the ingress controller and workloads:

bash
Copy code
minikube start --driver=docker --memory 4096 --cpus 2
3️⃣ Deploy Kubernetes Manifests
Apply the manifests in order:

bash
Copy code
kubectl apply -f storage.yaml
kubectl apply -f database.yaml
kubectl apply -f frontend.yaml
kubectl apply -f ingress.yaml
4️⃣ Configure Local DNS (macOS Hosts File)
To access the application via guestbook.local, map the Minikube IP locally.

Get Minikube IP
bash
Copy code
minikube ip
Edit Hosts File
bash
Copy code
sudo nano /etc/hosts
Add the following line at the bottom (replace with your actual IP):

text
Copy code
[IP_ADDRESS_HERE] guestbook.local
Save and exit.

🔍 Verification & Testing
✅ Access the Application (Ingress)
Open your browser and navigate to:

text
Copy code
http://guestbook.local
🔁 Alternative Access (Service Exposure)
If your frontend service is named voting-service, you can also access it directly via Minikube:

bash
Copy code
minikube service voting-service
This will:

Open the service in your default browser or

Print a URL if --url is specified

bash
Copy code
minikube service voting-service --url
📝 Test Data Persistence
Open the Guestbook UI

Add a message

Simulate a Redis Crash
Delete the Redis pod:

bash
Copy code
kubectl delete pod -l app=redis
Confirm Recovery
Wait for the new Redis pod to reach Running

Refresh the browser

✅ Your message should still be present

❤️ Monitor Application Health
Inspect liveness and readiness probes:

bash
Copy code
kubectl describe pod -l app=redis
You should see probe configurations and status under:

Liveness

Readiness

🎯 What This Project Demonstrates
Real-world stateful application design in Kubernetes

Proper storage abstraction using PV/PVC

Production-style Ingress routing

Built-in self-healing mechanisms

Clean separation of concerns between compute, storage, and networking
