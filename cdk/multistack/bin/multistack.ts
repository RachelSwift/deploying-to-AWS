#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MultistackStack } from '../lib/multistack-stack';

/* 
	Each new MultisstackStack, is a new cdk stack that can be deployed
*/

const app = new cdk.App();

new MultistackStack(app, 'MyWestCdkStack', {
	env: {region: 'us-west-1'},
	encryptBucket: false
});
  
new MultistackStack(app, 'MyEastCdkStack', {
	env: {region: 'us-east-1'},
	encryptBucket: true
});
          
app.synth();