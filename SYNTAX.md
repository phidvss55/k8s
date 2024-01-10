### Build

```
docker image build -t phidinh/simple-app .
```

### Push

```
docker push phidinh/simple-app
```

---

### Put debug vscode

1. Exec command to enable debugger in vscode

```
kubectl exec -it <pod_name> -- /bin/sh -c "kill -USR1 1"
```

Test check logs

```
kubectl logs <pod_name> -f
```

Forward pods

```
kubectl port-forward <pod_name> 9229:9229
```

find Node.js process PID

```
k exec -it jokes-deployement-6dd5f65d99-cfqmf -- /bin/sh -c "ps aux"
```

### Example

kubectl exec -it jokes-client-deployement-56bbfb84d6-z5qx4 -- /bin/sh -c "kill -USR1 1"
kubectl logs jokes-client-deployement-56bbfb84d6-z5qx4 -f
kubectl port-forward jokes-client-deployement-56bbfb84d6-z5qx4 9229:9229
kubectl port-forward jokes-client-deployement-56bbfb84d6-z5qx4 5000:5000

### pull image

kubectl set image deployment simple simple-container=phidinh/simple-app:latest
kubectl rollout status deploy simple
