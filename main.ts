import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { s3, AwsProvider } from "@cdktf/provider-aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new AwsProvider(this, "aws", {
      region: "eu-west-1"
    });
    new s3.S3Bucket(this, "bucket", {
      bucket: 'lambda-asset-bucket-test123123asdasd4',
    });

  }
}

const app = new App();
new MyStack(app, "test");
app.synth();
