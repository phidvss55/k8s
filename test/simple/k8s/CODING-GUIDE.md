- Start minikube

      minikube start --driver=docker

- Start tunnel for accessing the localhost

      minikube tunnel

- Get all deployments

      kubectl get deployments

- Apply the deployment

      kubectl apply -f simpleapp-deployment.yaml
      kubectl apply -f simpleapp-service.yaml

- Show detail service to get url access

      kubectl get svc
