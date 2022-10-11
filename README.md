# deploying-to-AWS
This repo follows a series of different tutorials for producing AWS services in IaC. In some cases i aim to build upon the default configuration.

---

   
## AWS CDK
### Getting Started
Install [aws cdk cli tooling](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)   
*Remember to configure the AWS Account and region that should be used to create the stacks*

### Tutorials followed  
**HelloCDKStack** [tutorial](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)   
./cdk/hello-cdk   
This stack creates a simple S3 bucket. This bucket is version controlled and is deleted when the stack is deleted. 
### Creating Multiple Stacks inside the same app

