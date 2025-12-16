This usually happens because **only part of your README was pasted or saved correctly**, or the code blocks weren’t preserved. Here’s how to **properly add *all* commands** so they show up in the README every time.

---

## ✅ Correct Way to Add ALL Commands to `README.md`

### 🔹 Option 1: Copy–Paste (Most Common Fix)

1. Open your project folder

2. Open (or create) `README.md` using a code editor:

   ```bash
   code README.md
   ```

   *(or use VS Code, Nano, Vim, etc.)*

3. **Delete everything currently in the file**

4. Paste **everything inside the triple backticks** below

5. Save the file

---

## ✅ FULL README WITH ALL COMMANDS INCLUDED

> Make sure you copy **everything**, including the ```bash blocks

````markdown
# 🗳️ High-Availability Microservices on Kubernetes

This project demonstrates a production-ready deployment of a multi-tier voting application using Kubernetes (Minikube). It showcases core Kubernetes concepts including automated scaling, self-healing, and secure configuration management.

---

## 🚀 Features & Architecture

### Microservices Architecture
- Frontend: Python / Flask (Example Voting App)
- Backend: Redis

### Self-Healing
- 2 replicas per deployment for high availability

### Security
- Sensitive data managed using Kubernetes Secrets

### Config Management
- Application configuration stored in ConfigMaps

### Service Discovery
- Internal communication via ClusterIP Services

---

## 🛠️ Tech Stack

- Kubernetes (Minikube)
- Docker
- Redis
- Python / Flask

---

## 📖 How to Run

### 1️⃣ Start the Cluster
```bash
minikube start --driver=docker --memory 4096 --cpus 2
````

---

### 2️⃣ Deploy the Infrastructure

```bash
kubectl apply -f .
```

---

### 3️⃣ Access the Application

```bash
minikube service voting-service
```

> Keep the terminal open while using the application.

---

## 🔍 Verification & Troubleshooting

### Check Pod Status

```bash
kubectl get pods
```

### Verify Service Mapping

```bash
kubectl get svc -o wide
```

### Verify Secrets and ConfigMaps

```bash
kubectl get secret
kubectl get configmap
```

### Check Application Logs

```bash
kubectl logs -l role=app
```
