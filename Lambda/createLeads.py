import json
import boto3

def create_client(region="us-east-2"):
    return boto3.client("dynamodb", region)
    
def create_dynamodb_resource(region="us-east-2"):
    resource = boto3.resource('dynamodb', region_name=region)
    return resource

def post_lead(email, document, dynamodb):
    table = dynamodb.Table('Leads')
    response = table.put_item(
       Item={
            'Email': email,
            'Document': document
        }
    )
    return response


def lambda_handler(event, context):
    client = create_client()
    dynamodb = boto3.resource('dynamodb', endpoint_url="https://dynamodb.us-east-2.amazonaws.com")

    email = event["body"]["email"]
    document = event["body"]
    response = post_lead(email, document, dynamodb)

    return {
        'statusCode': response["ResponseMetadata"]["HTTPStatusCode"],
        'body': event
    }
