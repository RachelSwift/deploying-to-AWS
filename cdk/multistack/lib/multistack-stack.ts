import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface MultiStackProps extends cdk.StackProps {
  encryptBucket?: boolean;
}

export class MultistackStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: MultiStackProps) {
		super(scope, id, props);

		// The code that defines your stack goes here
	}
}
