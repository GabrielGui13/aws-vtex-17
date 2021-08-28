import json
import boto3
import datetime

def create_client(region="us-east-2"):
    return boto3.client("dynamodb", region)
    
def create_dynamodb_resource(region="us-east-2"):
    resource = boto3.resource('dynamodb', region_name=region)
    return resource

def put_lead(email, document, dynamodb):
    table = dynamodb.Table('Leads')
    response = table.put_item(
       Item={
            'Email': email,
            'Document': document
        }
    )
    
def update_lead(email, tipo_lead, dynamodb):
    table = dynamodb.Table('Leads')
    current_date = str(datetime.date.today())
    response = table.update_item(
        Key={
            'Email': email
            },
        UpdateExpression="SET #doc.#tip = :locTip, #doc.#datup = :locDatup",
        ExpressionAttributeNames={
            '#doc': 'Document',
            '#tip': 'tipo',
            '#datup': 'data_atualizacao'
        },
        ExpressionAttributeValues={
            ':locTip': tipo_lead,
            ':locDatup': current_date
        }
    )
    return response
    
def enviaEmail(email):
    SENDER = "Gupo 17 - AWS <hiringcoders202117@gmail.com>"
    RECIPIENT = "joao.muner@gmail.com"
    AWS_REGION = "us-east-2"
    SUBJECT = "Hiring Coders - Grupo 17"
    
    BODY_TEXT = ("Parabéns, você acaba de se tornar um cliente AWS")
    BODY_HTML = """<html>
    <head></head>
    <body>
      <h1>Hiring Coders - Grupo 17</h1>
      <p>Parabéns, você acaba de se tornar um cliente AWS</p>
    </body>
    </html>
                """            
    CHARSET = "UTF-8"
    
    client = boto3.client('ses',region_name=AWS_REGION)

    response = client.send_email(
        Destination={
            'ToAddresses': [
                RECIPIENT,
            ],
        },
        Message={
            'Body': {
                'Html': {
                    'Charset': CHARSET,
                    'Data': BODY_HTML,
                },
                'Text': {
                    'Charset': CHARSET,
                    'Data': BODY_TEXT,
                },
            },
            'Subject': {
                'Charset': CHARSET,
                'Data': SUBJECT,
            },
        },
        Source=SENDER,
    )
    return response
    
def lambda_handler(event, context):
    client = create_client()
    dynamodb = boto3.resource('dynamodb', endpoint_url="https://dynamodb.us-east-2.amazonaws.com")

    email = event["pathParams"]["ID"]
    tipo_lead = event["body"]["tipo"]
    response = update_lead(email, tipo_lead, dynamodb)
    enviaEmailCliente = enviaEmail(email)

    return {
        'statusCode': response["ResponseMetadata"]["HTTPStatusCode"],
        'body': event
    }