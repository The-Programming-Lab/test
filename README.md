
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

`docker build -t gcr.io/the-programming-lab-379219/client1:latest client/client1/`<br>
`docker push gcr.io/the-programming-lab-379219/client1:latest`<br>
<br>

`docker build -t gcr.io/the-programming-lab-379219/client2:latest client/client2/`<br>
`docker push gcr.io/the-programming-lab-379219/client2:latest`<br>
<br>

`docker build -t gcr.io/the-programming-lab-379219/client3:latest client/client3/`<br>
`docker push gcr.io/the-programming-lab-379219/client3:latest`<br>
<br>

# Deploy images to pods and create clustip
In the google gloud console upload these files and run the commands<br>
Upload:<br>
`deploy-api1.yaml`<br>
`deploy-api2.yaml`<br>
`deploy-api3.yaml`<br>


`kubectl apply -f deploy-api1.yaml`<br>
`kubectl apply -f deploy-api2.yaml`<br>
`kubectl apply -f deploy-api3.yaml`<br>
<br>



# Create and edit ingress


## Create
`ingress.yaml`<br>
`kubectl apply -f ingress.yaml`<br>

## Add path
Change `<new-path>` in file to the new path example: `/api2`<br>
Change `<service-name>` in file to the new service name example: `api2-service`<br>

`ingress-add-path.yaml`<br>
`kubectl patch ingress main --type json -p "$(ingress-add-path.json)"`<br>

## Edit path
To get the path index for `/api2` run<br>
`kubectl get ingress main -o=jsonpath='{.spec.rules[0].http.paths[*].path}' | tr -s ' ' '\n' | nl | grep '/api2' | awk '{print $1 - 1}'`<br>

Change `<index-of-existing-path>` in file to index from above example: `0`<br>

Change `<app-service-name>` in file to the new service name example: `api1-service`<br>

`ingress-edit-path.yaml`<br>
`kubectl patch ingress main --type json -p "$(ingress-edit-path.json)"`<br>

## Remove path
Same as above to get the index of the path<br>
Change `<index-of-existing-path>` in file to index from above example: `0`<br>

`ingress-remove-path.yaml`<br>
`kubectl patch ingress main --type json -p "$(ingress-remove-path.json)"`<br>



# DNS Setup
will add soon

# Other Notes
## View docker cmd output
kubectl get pods
kubectl logs <pod>


## Setting up gloucd on github codespace
curl https://sdk.cloud.google.com | bash <br>
~/google-cloud-sdk/bin/gcloud init


## Tools
https://mxtoolbox.com/SuperTool.aspx?action=a%3atheprogramminglab.com&run=toolpage



