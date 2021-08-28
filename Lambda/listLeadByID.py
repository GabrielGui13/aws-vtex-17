import json
import boto3

def create_client(region="us-east-2"):
    return boto3.client("dynamodb", region)
    
def get_item(dynamodb_resource, table_name, item_dict):
    table = dynamodb_resource.Table(table_name)
    response = table.get_item(Key=item_dict)
    return response["Item"]
    
def lambda_handler(event, context):
    client = create_client()
    dynamodb = boto3.resource('dynamodb', endpoint_url="https://dynamodb.us-east-2.amazonaws.com")
    email = event["pathParams"]["ID"]
    item_key = {"Email": email}

    response = get_item(dynamodb,"Leads", item_key)
    return(response["Document"])