.# 🛒 Global-Retail-Core
Enterprise Kubernetes Microservices Stack

Global-Retail-Core is a cloud-native microservices application deployed on Kubernetes.  
It consists of a Python Product API, a Node.js Order Service, and a MongoDB backend, all orchestrated with Kubernetes and exposed via an NGINX Ingress controller.

---

## 📁 Repository Structure


├── k8s-configuration/
│   ├── namespace.yaml          # Logic isolation (production)
│   ├── secret.yaml             # Encrypted DB credentials
│   ├── configmap.yaml          # Application environment variables
│   ├── database-deployment.yaml # MongoDB with PVC and ClusterIP
│   ├── app-deployment.yaml      # Microservices (ReplicaSets)
│   └── ingress.yaml            # Path-based routing rules
├── services/
│   ├── product-api/            # Python Flask source & Dockerfile
│   └── order-service/          # Node.js source & Dockerfile
└── README.md


---

## 🌟 Project Highlights

- Path-based routing using NGINX Ingress
- MongoDB persistence via Persistent Volume Claims (PVC)
- Prometheus and Grafana for cluster monitoring
- Local production-like setup using Minikube
- Docker image sideloading (no external registry)

---

## 🏗️ Technical Stack

| Component | Technology |
|---------|------------|
| Orchestration | Kubernetes (Minikube) |
| Backend | Python (Flask), Node.js (Express) |
| Database | MongoDB |
| Ingress | NGINX |
| Monitoring | Prometheus, Grafana |

---

## 🚀 Setup & Deployment

### 1️⃣ Start Minikube

```bash
minikube start --driver=docker --memory 4096
minikube addons enable ingress
minikube addons enable metrics-server

2️⃣ Build & Load Images

docker build -t product-api:v1 ./services/product-api
docker build -t order-service:v1 ./services/order-service

minikube image load product-api:v1
minikube image load order-service:v1

3️⃣ Deploy Kubernetes Resources

kubectl apply -f k8s-configuration/namespace.yaml 
kubectl apply -f k8s-configuration/secret.yaml 
kubectl apply -f k8s-configuration/configmap.yaml 
kubectl apply -f k8s-configuration/database-deployment.yaml 
kubectl apply -f k8s-configuration/app-deployment.yaml 
kubectl apply -f k8s-configuration/ingress.yaml
🌐 Local Access
Start the tunnel:

minikube tunnel

Update /etc/hosts:
127.0.0.1 retail.local

📊 Monitoring
Prometheus and Grafana are deployed using Helm.
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm install monitoring-stack prometheus-community/kube-prometheus-stack \
  -n monitoring --create-namespace

Access Grafana:
kubectl port-forward deployment/monitoring-stack-grafana 3000:3000 -n monitoring

Credentials
User: admin
Password: prom-operator

🔍 Validation
All application and system pods are running
MongoDB is using a persistent volume
Services are accessible through the Ingress controller
Prometheus is scraping cluster metrics

🛠️ Useful Commands
kubectl logs -l app=order-service -n production
kubectl rollout restart deployment <name> -n production
kubectl get ingress -n production
minikube image ls

🚀 Deploying with Argo CD (GitOps)
Install Argo CD on Kubernetes (Minikube)
Create namespace:
kubectl create namespace argocd

Install Argo CD:
kubectl apply -n argocd \
  -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

Verify pods:
kubectl get pods -n argocd
Wait until all are Running.

✅ 2️⃣ Access Argo CD UI
Port-forward the ArgoCD server:
kubectl port-forward svc/argocd-server -n argocd 8080:443
Open browser:
http://localhost:8080

✅ 3️⃣ Login to Argo CD
Get default admin password:
kubectl get secret argocd-initial-admin-secret -n argocd \
  -o jsonpath="{.data.password}" | base64 -d
Login:
* Username → admin
* Password → (value from above)

✅ 4️⃣ Create Application in Argo CD (UI)
1️⃣ Click NEW APP 2️⃣ Fill the fields:
Application Name
global-retail-core
Project
default
Repository URL
https://github.com/<your-username>/Kubernetes-project.git
Revision
main
Path
global-retail-core/k8s-configuration
Cluster
https://kubernetes.default.svc
Namespace
production
Click Create → then click SYNC once to deploy.

♻️ 5️⃣ Enable Auto Sync (Continuous Deployment)
Open the application in Argo CD → Go to App Details → Edit → Sync Policy
Enable:
✔ Auto-Sync
✔ Self-Heal
✔ Prune
Save.

🎯 Result
Argo CD will now: ✔ Continuously monitor this Git repo ✔ Detect Kubernetes manifest changes ✔ Automatically deploy updates ✔ Heal drift if anything changes manually ✔ Remove deleted resources
This makes the cluster always match Git state — true GitOps delivery.

🧪 Useful Commands
Check app:
argocd app list
Force sync:
argocd app sync global-retail-core
Refresh:
argocd app refresh global-retail-core