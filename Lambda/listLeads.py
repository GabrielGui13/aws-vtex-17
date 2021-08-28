import json
import boto3

def create_client(region="us-east-2"):
    return boto3.client("dynamodb", region)
    
def create_dynamodb_resource(region="us-east-2"):
    resource = boto3.resource('dynamodb', region_name=region)
    return resource
    
def scan_leads(dynamodb_resource, table_name):
    table = dynamodb_resource.Table(table_name)
    
    response = table.scan(TableName=table_name)

    return(response)

def print_leads(leads):
    for lead in leads:
        scan_leads(query_range, print_leads)
    
def lambda_handler(event, context):
    client = create_client()
    dynamodb = boto3.resource('dynamodb', endpoint_url="https://dynamodb.us-east-2.amazonaws.com")
    y = scan_leads(dynamodb, "Leads")

    leads = []
    for item in y["Items"]:
        leads.append(item["Document"])
    return(leads)