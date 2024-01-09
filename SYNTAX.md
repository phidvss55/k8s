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
