# AWS CDK
## Getting Started
Install [aws cdk cli tooling](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)   
*Remember to configure the AWS Account and region that should be used to create the stacks*

__Quick Notes__
- The cdk files are help in the cdk's lib folder
- These stacks are executed in github workflows.   

__Useful Commands__
- ```cdk synth``` Creates the CloudFormation tempate for the cdk app
- ```cdk diff``` Provides the changeset between the current deplyment and the changes that are proposed. 
- ```cdk deploy``` Deploys the cdk stack to aws   

*Remember if you have more than one stack in your cdk app you need to pass a stack name to the above commands*


## Tutorials followed 
[**HelloCDKStack**](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)   
Directory: hello-cdk/   
__File:__ hello-cdk-stack.ts
This stack creates a simple S3 bucket. This bucket is version controlled and is deleted when the stack is deleted. 

[**Multistack**](https://docs.aws.amazon.com/cdk/v2/guide/stack_how_to_create_multiple_stacks.html)   
Directory: multistack/ 
__Stack File__ lib/multistack-stack.ts
__Stack Instansiation File__ bin/multistack.ts

The stack creates an encrypted bucket in us-east-1 and an unencrypted bucket in us-west-1
