from openai import OpenAI
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_String = ""

client = OpenAI(
    api_key=API_String
)

conversation_history = []

@app.route('/chat', methods=['GET'])
def chat():
    prompt = request.args.get('prompt')
    
    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400
    
    conversation_history.append({"role": "user", "content": prompt})
    chatbot_response = chat_with_gpt()

    return jsonify({'response': chatbot_response})

def chat_with_gpt():

    response = client.chat.completions.create(
        messages=conversation_history,
        model="gpt-4o",
    )
    
    chatbot_response = response.choices[0].message.content.strip()
    
    conversation_history.append({"role": "assistant", "content": chatbot_response})
    
    return chatbot_response

if __name__ == "__main__":
    app.run(debug=True)