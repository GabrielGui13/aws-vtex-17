import json
import boto3

def create_client(region="us-east-2"):
    return boto3.client("dynamodb", region)
    
def create_dynamodb_resource(region="us-east-2"):
    resource = boto3.resource('dynamodb', region_name=region)
    return resource

def delete_lead(email, dynamodb):
    table = dynamodb.Table('Leads')
    response = table.delete_item(
       Key={
            'Email': email
        }
    )

def lambda_handler(event, context):
    client = create_client()
    dynamodb = boto3.resource('dynamodb', endpoint_url="https://dynamodb.us-east-2.amazonaws.com")
    email = event["pathParams"]["ID"]
    response = delete_lead(email, dynamodb)
    
    return {
        'body': event
    }