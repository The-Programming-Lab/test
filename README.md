

### build image
cd app4
docker build -t app4 .
### push image to gcr
docker tag app4:latest gcr.io/the-programming-lab-379219/app4
  }, [])
### on gcloud she
kubectl apply -f deploy-app4.yaml
kubectl apply -f service-app4.yaml


### view docker cmd output
kubectl get pods
kubectl logs <pod>


### google cloud sdk init
curl https://sdk.cloud.google.com | bash
~/google-cloud-sdk/bin/gcloud init

