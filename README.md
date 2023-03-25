
# Auth docker to google cloud
`gcloud init`<br>
Sign into google cloud account<br>
`gcloud auth configure-docker`

# Build and push image to google cloud registry
create and push image to google cloud registry<br>

`docker build -t gcr.io/the-programming-lab-379219/api1:latest api/api1/`<br>
`docker push gcr.io/the-programming-lab-379219/api1:latest`<br>
<br>

`docker build -t gcr.io/the-programming-lab-379219/api2:latest api/api2/`<br>
`docker push gcr.io/the-programming-lab-379219/api2:latest`<br>
<br>

`docker build -t gcr.io/the-programming-lab-379219/api3:latest api/api3/`<br>
`docker push gcr.io/the-programming-lab-379219/api3:latest`<br>
<br>

# Deploy images to pods, create clustip, and link to ingress
In the google gloud console upload these files and run the commands<br>
Upload:<br>
`deploy-api1.yaml`<br>
`deploy-api2.yaml`<br>
`deploy-api3.yaml`<br>
`ingress.yaml`<br>

`kubectl apply -f deploy-api1.yaml`<br>
`kubectl apply -f deploy-api2.yaml`<br>
`kubectl apply -f deploy-api3.yaml`<br>
<br>

`kubectl apply -f ingress.yaml`





# Other Notes
## View docker cmd output
kubectl get pods
kubectl logs <pod>


## Setting up gloucd on github codespace
curl https://sdk.cloud.google.com | bash <br>
~/google-cloud-sdk/bin/gcloud init

