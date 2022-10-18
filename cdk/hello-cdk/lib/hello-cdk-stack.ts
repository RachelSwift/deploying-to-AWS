import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class HelloCdkStack extends cdk.Stack {
	/* 
		Scope: Parent commonent (often this meaning the stack is the parent)
		Id: logical ID for uniquely identifying the bucket in AWS
		props: values that define the buckey properties
	*/
	constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		new s3.Bucket(this, 'MyFirstCDKBucket', {
			/*
				versioned: tells aws to turn on bucket versioning
				removalPolicy: tells aws to orphan or destroy the bucket when the stack is deleted
					Here the bucket is deleted
				autoDeleteObjects: Delete objects from the bucket before deletion
			*/
			versioned: true,
			removalPolicy: cdk.RemovalPolicy.DESTROY,
			autoDeleteObjects: true
		});
	}
}