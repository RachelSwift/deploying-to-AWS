# CloudFormation
Cloud formation is a way for developers to create infrastructure in AWS. Templates can be used to provision AWS resorces both in the AWS console and through the aws-cli.   

*CloudFormation has templates (that define the resources needed) and stacks (the running instance of the required resources)*

## Getting Started
For use with the aws cli, install [aws cdk cli tooling](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)   
*Remember to configure the AWS Account and region that should be used to create the stacks*


## Templates
Templates can be written in JSON or YML. Below is the breakdown of a YML template.   
```
AWSTemplateFormatVersion: "version date" #optional

Description:
  String
  # Describes the template purpose - must always follow AWSTemplateVersion

Metadata:
  template metadata
  # Objects providing additional template info e.g
  # Instances:
  #  Description: "Information about the instances"

Parameters:
  set of parameters #values passed to template at runtime

Rules:
  set of rules # Used to validate params (or a set of params). Occurs stack creation/update

Mappings:
  set of mappings # Object specifying conditional parameter values (lookup table)

Conditions:
  set of conditions # Conditions that control the creation of resources e.g creating resorces for dev or prod

Transform:
  set of transforms # Used in serves applications specifying AWS SAM

Resources:
  set of resources # Specifies the resorces to creart

Outputs:
  set of outputs # Values that are returned when you view the  stack properties. e.g listing resorce names

```

Resorces have their own templates and parameters

## Workflow Notes
__jobs__: A sequence of actions carried out by github actions   
__needs__: Species if a job should only run if some other job is a sucess
__no-fail-on-empty-changeset__:Stops an error being thrown if no changes are made to the CloudFormation stack
